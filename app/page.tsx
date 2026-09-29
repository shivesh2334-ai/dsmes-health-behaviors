"use client";
import { useEffect, useMemo, useState } from "react";
import { RECS, DOMAINS, FLAGS, TRIGGERS, STEPS, CRITICAL, type Rec } from "@/lib/data";

type Age = "child" | "adult" | "older";
type State = { age: Age; flags: Record<string, boolean>; done: Record<string, boolean>; trig: Record<number, boolean>; name: string };
const INIT: State = { age: "adult", flags: {}, done: {}, trig: {}, name: "" };
const KEY = "dsmes-plan-v1";
const TABS = ["Workflow", "Care plan", "Summary", "Recommendations"] as const;

export default function Page() {
  const [s, setS] = useState<State>(INIT);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Workflow");
  const [q, setQ] = useState("");
  useEffect(() => { try { const v = localStorage.getItem(KEY); if (v) setS({ ...INIT, ...JSON.parse(v) }); } catch {} }, []);
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }, [s]);

  const active = useMemo(() => {
    const a = new Set<string>([s.age]);
    if (s.age !== "child") a.add("adult");
    FLAGS.forEach((f) => s.flags[f.key] && a.add(f.key));
    return a;
  }, [s.age, s.flags]);
  const applicable = (r: Rec) => !r.when || r.when.some((w) => active.has(w));
  const plan = RECS.filter(applicable);
  const open = plan.filter((r) => !s.done[r.id]);
  const referral = TRIGGERS.some((_, i) => s.trig[i]);
  const reset = () => { if (confirm("Clear this plan?")) setS(INIT); };

  return (
    <main className="mx-auto max-w-4xl px-4 pb-16">
      <header className="py-8 border-b border-line">
        <h1 className="font-serif text-3xl sm:text-4xl leading-tight">Health Behaviors Care Planner</h1>
        <p className="mt-2 text-sm max-w-prose">Built on ADA Standards of Care in Diabetes—2026, Section 5: facilitating positive health behaviors and well-being. Recommendation numbers and grades refer to that document. Clinical decision support only; it does not replace clinical judgment.</p>
      </header>
      <nav className="no-print flex gap-1 overflow-x-auto py-3" aria-label="Sections">
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} aria-current={tab === t} className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${tab === t ? "bg-teal text-white" : "bg-white border border-line"}`}>{t}</button>
        ))}
      </nav>

      {tab === "Workflow" && (
        <section className="space-y-6">
          <ol className="space-y-3">
            {STEPS.map((st, i) => (
              <li key={st.t} className="flex gap-4 bg-white border border-line rounded-lg p-4">
                <span className="font-serif text-2xl text-teal w-7 shrink-0">{i + 1}</span>
                <div><h3 className="font-semibold">{st.t}</h3><p className="text-sm mt-1">{st.d}</p></div>
              </li>
            ))}
          </ol>
          <div className="bg-teal-soft rounded-lg p-4">
            <h2 className="font-serif text-xl">Four critical times to offer DSMES (5.2)</h2>
            <ul className="mt-2 list-disc pl-5 text-sm space-y-1">{CRITICAL.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
          <button onClick={() => setTab("Care plan")} className="bg-teal text-white px-5 py-2 rounded-md">Start a care plan</button>
        </section>
      )}

      {tab === "Care plan" && (
        <section className="space-y-6">
          <div className="bg-white border border-line rounded-lg p-4 space-y-4">
            <label className="block text-sm">Person (optional label)
              <input value={s.name} onChange={(e) => setS({ ...s, name: e.target.value })} className="mt-1 w-full border border-line rounded-md px-3 py-2" placeholder="Initials or ID — avoid full identifiers" />
            </label>
            <fieldset><legend className="text-sm font-semibold">Age group</legend>
              <div className="flex gap-4 mt-1 text-sm">{(["child", "adult", "older"] as Age[]).map((a) => (
                <label key={a} className="flex items-center gap-1"><input type="radio" name="age" checked={s.age === a} onChange={() => setS({ ...s, age: a })} />{a === "child" ? "Child / adolescent" : a === "adult" ? "Adult" : "Older adult"}</label>
              ))}</div>
            </fieldset>
            <fieldset><legend className="text-sm font-semibold">Situation (adds relevant recommendations)</legend>
              <div className="grid sm:grid-cols-2 gap-1 mt-1 text-sm">{FLAGS.map((f) => (
                <label key={f.key} className="flex items-center gap-2"><input type="checkbox" checked={!!s.flags[f.key]} onChange={(e) => setS({ ...s, flags: { ...s.flags, [f.key]: e.target.checked } })} />{f.label}</label>
              ))}</div>
            </fieldset>
          </div>
          {DOMAINS.map((d) => {
            const items = plan.filter((r) => r.domain === d.key);
            return (
              <div key={d.key}>
                <h2 className="font-serif text-xl">{d.label}</h2><p className="text-xs mb-2">{d.blurb}</p>
                <ul className="space-y-2">{items.map((r) => (
                  <li key={r.id} className="bg-white border border-line rounded-lg p-3">
                    <label className="flex gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1" checked={!!s.done[r.id]} onChange={(e) => setS({ ...s, done: { ...s.done, [r.id]: e.target.checked } })} />
                      <span className="text-sm"><b>{r.id}</b> <span className="text-xs text-teal">Grade {r.grade}</span><br />{r.text}</span>
                    </label>
                  </li>
                ))}</ul>
              </div>
            );
          })}
        </section>
      )}

      {tab === "Summary" && (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">Plan summary{s.name && ` — ${s.name}`}</h2>
          <div className="grid sm:grid-cols-3 gap-3">{DOMAINS.map((d) => {
            const all = plan.filter((r) => r.domain === d.key), n = all.filter((r) => s.done[r.id]).length;
            return (<div key={d.key} className="bg-white border border-line rounded-lg p-3">
              <div className="text-sm font-semibold">{d.label}</div>
              <div className="h-2 bg-teal-soft rounded mt-2"><div className="h-2 bg-teal rounded" style={{ width: `${all.length ? (n / all.length) * 100 : 0}%` }} /></div>
              <div className="text-xs mt-1">{n} of {all.length} addressed</div></div>);
          })}</div>
          <div className={`rounded-lg p-4 ${referral ? "bg-amber-soft border border-amber" : "bg-white border border-line"}`}>
            <h3 className="font-semibold">Behavioral health referral triggers (Table 5.5)</h3>
            <ul className="mt-2 space-y-1 text-sm">{TRIGGERS.map((t, i) => (
              <li key={i}><label className="flex gap-2"><input type="checkbox" checked={!!s.trig[i]} onChange={(e) => setS({ ...s, trig: { ...s.trig, [i]: e.target.checked } })} />{t}</label></li>
            ))}</ul>
            {referral && <p className="mt-3 text-sm font-semibold">Refer to a qualified behavioral health professional, ideally one experienced in diabetes (5.44).</p>}
          </div>
          <div>
            <h3 className="font-semibold mb-2">Still open ({open.length})</h3>
            <ul className="text-sm space-y-1 list-disc pl-5">{open.map((r) => <li key={r.id}><b>{r.id}</b> {r.text}</li>)}</ul>
          </div>
          <div className="no-print flex gap-3">
            <button onClick={() => window.print()} className="bg-teal text-white px-5 py-2 rounded-md">Print summary</button>
            <button onClick={reset} className="border border-line bg-white px-5 py-2 rounded-md">Clear plan</button>
          </div>
        </section>
      )}

      {tab === "Recommendations" && (
        <section className="space-y-3">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search recommendations" aria-label="Search" className="w-full border border-line rounded-md px-3 py-2" />
          <ul className="space-y-2">{RECS.filter((r) => (r.id + r.text + r.domain).toLowerCase().includes(q.toLowerCase())).map((r) => (
            <li key={r.id} className="bg-white border border-line rounded-lg p-3 text-sm"><b>{r.id}</b> <span className="text-xs text-teal">Grade {r.grade}</span> · {DOMAINS.find((d) => d.key === r.domain)?.label}<br />{r.text}</li>
          ))}</ul>
        </section>
      )}

      <footer className="mt-12 pt-4 border-t border-line text-xs">
        Source: American Diabetes Association Professional Practice Committee for Diabetes. Diabetes Care 2026;49(Suppl. 1):S89–S131, doi:10.2337/dc26-S005. Recommendations are paraphrased; consult the original. Data stays in this browser only.
      </footer>
    </main>
  );
}
