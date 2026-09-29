// Source: ADA Professional Practice Committee. 5. Facilitating Positive Health Behaviors and Well-being
// to Improve Health Outcomes: Standards of Care in Diabetes—2026. Diabetes Care 2026;49(Suppl.1):S89–S131.
// Recommendations are paraphrased, not verbatim. Grades: A–E as printed in the source. Verify against the original.
export type Domain = "dsmes" | "mnt" | "activity" | "tobacco" | "psychosocial" | "sleep";
export type Rec = { id: string; domain: Domain; text: string; grade: string; when?: string[] };

export const DOMAINS: { key: Domain; label: string; blurb: string }[] = [
  { key: "dsmes", label: "Education (DSMES)", blurb: "Self-management education and support" },
  { key: "mnt", label: "Nutrition (MNT)", blurb: "Medical nutrition therapy, weight, alcohol, fasting" },
  { key: "activity", label: "Physical activity", blurb: "Activity, sedentary time, strength and balance" },
  { key: "sleep", label: "Sleep", blurb: "Sleep health and sleep disorders" },
  { key: "tobacco", label: "Tobacco, vaping, cannabis", blurb: "Ask, advise, treat" },
  { key: "psychosocial", label: "Psychosocial care", blurb: "Distress, mood, anxiety, eating, cognition" }
];

export const FLAGS: { key: string; label: string }[] = [
  { key: "insulin", label: "Uses insulin (or secretagogue)" },
  { key: "sglt2", label: "Takes an SGLT2 inhibitor" },
  { key: "overweight", label: "Overweight or obesity" },
  { key: "obesityRx", label: "On obesity drugs / had metabolic surgery" },
  { key: "fasting", label: "Plans religious fasting" },
  { key: "tobacco", label: "Uses tobacco or vape products" },
  { key: "dkarisk", label: "Type 1 or otherwise at risk of DKA" },
  { key: "hypo", label: "High risk of / frequent hypoglycemia" },
  { key: "smi", label: "Serious mental illness" },
  { key: "antipsych", label: "Takes a second-generation antipsychotic" }
];

export const RECS: Rec[] = [
  { id: "5.1", domain: "dsmes", grade: "A", text: "Advise everyone with diabetes to take part in DSMES suited to their development and culture." },
  { id: "5.2", domain: "dsmes", grade: "E", text: "Provide DSMES at diagnosis, yearly and/or when goals are unmet, when complications develop, and at life or care transitions." },
  { id: "5.3", domain: "dsmes", grade: "C", text: "Assess clinical outcomes, health status and well-being as DSMES goals, on an individualized timeframe." },
  { id: "5.4", domain: "dsmes", grade: "A", text: "Use behavioral strategies (motivational interviewing, goal setting, problem-solving) to support engagement." },
  { id: "5.5", domain: "dsmes", grade: "A", text: "Offer culturally and socially appropriate DSMES, group or individual, and tell the care team about participation." },
  { id: "5.6", domain: "dsmes", grade: "B", text: "Offer DSMES by telehealth or digital tools to match preferences and reduce access barriers." },
  { id: "5.7", domain: "dsmes", grade: "B", text: "DSMES improves outcomes and lowers costs; payor reimbursement is recommended." },
  { id: "5.8", domain: "dsmes", grade: "E", text: "Identify and address DSMES barriers at payor, system, clinic, professional and individual levels." },
  { id: "5.9", domain: "dsmes", grade: "C", text: "Assess social determinants of health to shape DSMES delivery and promote equity." },
  { id: "5.10", domain: "mnt", grade: "A", text: "Refer for individualized MNT with a registered dietitian nutritionist, ideally one experienced in diabetes." },
  { id: "5.11", domain: "mnt", grade: "A/B/E", text: "MNT saves costs and improves cardiometabolic outcomes; insurance should reimburse it." },
  { id: "5.12", domain: "mnt", grade: "A", when: ["overweight"], text: "Give an overweight/obesity plan built on nutrition, activity and behavioral health, aiming for at least 5–7% weight loss." },
  { id: "5.13", domain: "mnt", grade: "B", text: "Recommend individualized meal plans balancing nutrient quality, total calories and metabolic goals." },
  { id: "5.14", domain: "mnt", grade: "B", text: "Emphasize non-starchy vegetables, whole fruit, legumes, lean protein, whole grains, nuts/seeds, low-fat dairy; minimize red meat, sugary drinks, sweets, refined grains and ultraprocessed foods." },
  { id: "5.15", domain: "mnt", grade: "B", text: "Consider reducing carbohydrate for some adults to improve glycemia, chiefly by limiting processed foods." },
  { id: "5.16", domain: "mnt", grade: "C", text: "Ask about supplements; micronutrients, herbs and spices are not recommended for glycemic benefit." },
  { id: "5.17", domain: "mnt", grade: "B", text: "Counsel against β-carotene supplements (harm for some, no benefit)." },
  { id: "5.18", domain: "mnt", grade: "B", text: "Advise drinkers not to exceed recommended daily limits; advise abstainers not to start." },
  { id: "5.19", domain: "mnt", grade: "B", when: ["insulin"], text: "Teach signs and self-management of delayed hypoglycemia and to check glucose after alcohol." },
  { id: "5.20", domain: "mnt", grade: "B", text: "Limit sodium to under 2,300 mg/day as clinically appropriate, mainly by limiting processed foods." },
  { id: "5.21", domain: "mnt", grade: "A", text: "Encourage water over other beverages." },
  { id: "5.22", domain: "mnt", grade: "B", text: "Nonnutritive sweeteners may replace sugar in moderation and short term to cut calories and carbohydrate." },
  { id: "5.23", domain: "mnt", grade: "E", when: ["overweight"], text: "During intentional weight loss, monitor intake, watching for protein insufficiency and micronutrient deficiency." },
  { id: "5.24", domain: "mnt", grade: "B", text: "Favor minimally processed, high-fiber carbohydrate (at least 14 g fiber per 1,000 kcal)." },
  { id: "5.25", domain: "mnt", grade: "B", text: "Replace sugar-sweetened drinks (including juice) with water or low/no-calorie drinks; minimize added sugar." },
  { id: "5.26", domain: "mnt", grade: "E", when: ["sglt2"], text: "Educate on ketoacidosis risks and signs, provide ketone measurement tools (serum β-hydroxybutyrate), and discourage ketogenic eating." },
  { id: "5.27", domain: "mnt", grade: "A/B", when: ["insulin"], text: "Teach the glycemic impact of carbohydrate, fat and protein, tailored to insulin plan, to optimize mealtime dosing." },
  { id: "5.28", domain: "mnt", grade: "B", when: ["insulin"], text: "For fixed insulin doses, counsel consistent carbohydrate timing and amount, allowing for insulin action time." },
  { id: "5.29", domain: "mnt", grade: "B", text: "Add more plant-based protein (nuts, seeds, legumes) within a varied eating pattern." },
  { id: "5.30", domain: "mnt", grade: "A/B", text: "Consider a Mediterranean-style pattern (fatty fish, nuts, seeds) to reduce CVD risk and improve glucose metabolism." },
  { id: "5.31", domain: "mnt", grade: "B", text: "Limit foods high in saturated fat to reduce cardiovascular risk." },
  { id: "5.32", domain: "mnt", grade: "B", when: ["fasting"], text: "Use the IDF–DAR pre-fasting risk assessment to score fasting safety; give fasting-focused education." },
  { id: "5.33", domain: "mnt", grade: "B", when: ["fasting"], text: "Review and optimize regimen, dose and timing well before fasting to limit hypoglycemia, dehydration, hyperglycemia and ketoacidosis." },
  { id: "5.34", domain: "activity", grade: "B/C", text: "Assess baseline activity and sedentary time; encourage gradual increases toward guidelines; interrupt prolonged sitting at least every 30 min." },
  { id: "5.35", domain: "activity", grade: "C/B", when: ["child"], text: "Children/adolescents: 60+ min/day moderate–vigorous aerobic activity, muscle and bone strengthening 3+ days/week, limit sedentary and recreational screen time." },
  { id: "5.36", domain: "activity", grade: "C/B", when: ["adult"], text: "Adults: 150+ min/week moderate–vigorous aerobic activity over at least 3 days, no more than 2 consecutive inactive days (75 min/week of vigorous/interval work may suffice for fitter people)." },
  { id: "5.37", domain: "activity", grade: "C/B", when: ["adult"], text: "Adults: resistance exercise 2–3 sessions/week on nonconsecutive days." },
  { id: "5.38", domain: "activity", grade: "C", when: ["older"], text: "Older adults: flexibility and balance training 2–3 times/week." },
  { id: "5.39", domain: "activity", grade: "C", when: ["obesityRx"], text: "With obesity drugs or metabolic surgery, stress activity (especially muscle strengthening) to preserve lean mass." },
  { id: "5.40", domain: "tobacco", grade: "A", text: "Ask routinely about tobacco and vaping; advise complete avoidance; for users, provide or refer for counseling plus pharmacotherapy." },
  { id: "5.41", domain: "tobacco", grade: "E", when: ["dkarisk"], text: "Advise against recreational cannabis in any form." },
  { id: "5.42", domain: "psychosocial", grade: "A", text: "Provide psychosocial care to everyone as routine care: collaborative, person-centered, culturally informed." },
  { id: "5.43", domain: "psychosocial", grade: "C", text: "Screen with validated, age-appropriate tools at least annually and when health, treatment or life circumstances change." },
  { id: "5.44", domain: "psychosocial", grade: "B", text: "Refer to behavioral health professionals (ideally diabetes-experienced) as indicated." },
  { id: "5.45", domain: "psychosocial", grade: "—", text: "Screen for diabetes distress at least yearly (people, caregivers, family); repeat when goals are unmet, at transitions, or with complications." },
  { id: "5.46", domain: "psychosocial", grade: "B", text: "Screen for anxiety at least yearly; refer if it interferes with self-management or quality of life." },
  { id: "5.47", domain: "psychosocial", grade: "E/A", when: ["hypo"], text: "Screen for fear of hypoglycemia at least yearly; refer for evidence-based intervention." },
  { id: "5.48", domain: "psychosocial", grade: "B/A", text: "Screen for depressive symptoms at least yearly (more often with prior depression); refer for evidence-based treatment." },
  { id: "5.49", domain: "psychosocial", grade: "B", text: "Rescreen for depression when complications are diagnosed or medical status changes significantly." },
  { id: "5.50", domain: "psychosocial", grade: "B", text: "Screen for disordered or disrupted eating with validated tools; review treatment effects on hunger and intake." },
  { id: "5.51", domain: "psychosocial", grade: "B", text: "Reevaluate the treatment plan when disordered or disrupted eating appears, ideally with a qualified professional." },
  { id: "5.52", domain: "psychosocial", grade: "B", when: ["smi"], text: "With serious mental illness, increase monitoring of and help with self-management." },
  { id: "5.53", domain: "psychosocial", grade: "C", when: ["antipsych"], text: "Monitor weight, glycemia and lipids on second-generation antipsychotics; adjust the plan as needed." },
  { id: "5.54", domain: "psychosocial", grade: "B", text: "Monitor cognitive capacity across the life span, especially with cognitive disability, severe hypoglycemia, very young children and older adults." },
  { id: "5.55", domain: "psychosocial", grade: "E", text: "Consider formal assessment if cognitive capacity changes or seems inadequate for decisions and self-management." },
  { id: "5.56", domain: "sleep", grade: "B", text: "Screen sleep health, including sleep disorders and diabetes-related disruption; refer to sleep medicine or behavioral health as indicated." },
  { id: "5.57", domain: "sleep", grade: "A", text: "Counsel on sleep-promoting routines: regular bed/rise times, dark cool quiet room, pre-sleep routine, devices silenced (except diabetes devices), daytime exercise." }
];

// Table 5.5 — situations warranting behavioral health referral (paraphrased)
export const TRIGGERS = [
  "Positive validated screen: depression, diabetes distress, anxiety, fear of hypoglycemia, suicidality or cognitive impairment",
  "Symptoms or suspicion of disordered, disrupted eating or an eating disorder",
  "Deliberately skipping or underdosing insulin or other medication to lose weight",
  "Suspected serious mental illness",
  "Child/adolescent/family difficulties: self-care struggles, repeated DKA admissions, missed developmental milestones, significant distress",
  "Low or declining engagement or ability to do self-management"
];

export const STEPS = [
  { t: "Comprehensive evaluation", d: "Start from the Section 4 medical evaluation and comorbidity assessment." },
  { t: "Shared decision-making", d: "Choose the plan together; agree behavioral goals using motivational interviewing and goal setting (5.4)." },
  { t: "Connect resources", d: "Medical, behavioral, psychosocial, educational and technology support, adjusted for social determinants of health (5.9)." },
  { t: "Deliver the six domains", d: "DSMES, MNT, activity, sleep, tobacco/vape support, psychosocial care." },
  { t: "Screen and refer", d: "Psychosocial screening at least yearly; refer per Table 5.5." },
  { t: "Shared monitoring", d: "Review outcomes and behaviors together, especially during changes in health and well-being." }
];

export const CRITICAL = ["At diagnosis", "Yearly and/or when treatment goals are not met", "When complicating factors develop (medical, functional, psychosocial)", "When life or care transitions occur"];
