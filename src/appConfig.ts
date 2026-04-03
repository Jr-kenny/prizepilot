export const appConfig = {
  "slug": "prizepilot",
  "name": "PrizePilot",
  "oneLiner": "Judge hackathon submissions with a consensus-backed scorecard.",
  "pitch": "Paste the submission summary and the hackathon rubric. The contract produces an onchain score, verdict, and why the project should advance or stall.",
  "mode": "comparative",
  "primaryLabel": "Submission summary",
  "secondaryLabel": "Rubric or category rules",
  "primaryPlaceholder": "Product: AI copilot for warehouse safety\nBuild: browser app plus GenLayer contract\nTraction: 2 pilot customers\nDemo flow: ...",
  "secondaryPlaceholder": "Judge on novelty, clarity, execution, user pull, and why GenLayer is necessary.",
  "task": "Judge the submission against the rubric and decide whether it should move forward, require review, or be rejected.",
  "principle": "The verdict must match exactly. Scores can differ by at most 10 points. Reasons may be paraphrased but must point to the same core strengths and weaknesses.",
  "judgingPoints": [
    "Directly maps to hackathon judging criteria.",
    "Comparative equivalence fits rich scoring and explanation output.",
    "Strong story: transparent AI judging onchain."
  ],
  "theme": {
    "accent": "#0f766e",
    "accentSoft": "#d9f6f3",
    "surface": "#effcfb",
    "ink": "#0e1b18"
  },
  "modeLabel": "Comparative equivalence"
} as const;
