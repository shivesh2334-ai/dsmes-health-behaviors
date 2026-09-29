# Health Behaviors Care Planner

Person-centered planning tool built on **ADA Standards of Care in Diabetes—2026, Section 5** (Diabetes Care 2026;49(Suppl.1):S89–S131).
Covers DSMES, MNT, physical activity, sleep, tobacco/vaping cessation, health behavior counseling and psychosocial care.

- **Workflow:** evaluation → shared decisions → resources → six domains → screen/refer → shared monitoring
- **Care plan:** age group + situation flags select the applicable recommendations (5.1–5.57) with a checklist
- **Summary:** progress per domain, Table 5.5 referral triggers, open items, print
- **Recommendations:** searchable, paraphrased, with evidence grades

## Deploy
1. Push to GitHub. 2. Import in Vercel (framework auto-detected; region `bom1` set in `vercel.json`). 3. Deploy.

Local: `npm install && npm run dev`.

## Notes
- Recommendations are paraphrased; grades should be verified against the source. The ADA license restricts reproduction, so keep the citation footer.
- Data persists in browser localStorage only; no patient data is sent anywhere. Use initials/IDs, not full identifiers.
- Not implemented: full IDF–DAR fasting risk scoring (Table 5.3), medication adjustment table (5.4), validated screening questionnaires.
