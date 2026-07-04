// Site config + project data for grayforrester.com.

export const SITE = {
  name: "Gray Forrester",
  domain: "https://grayforrester.com",
  // Porkbun forwards hello@ to the real inbox.
  email: "hello@grayforrester.com",
  // Fill in real profile URLs.
  github: "",
  linkedin: "",
  tickerText:
    "GRAY FORRESTER — PORTFOLIO OF IDEAS, PROJECTS & OTHER EVIDENCE — EST. 2026",
  footerLeft: "© 2026 GRAY FORRESTER",
};

export type Project = {
  id: string;
  index: string;
  title: string;
  meta: string;
  year: string;
  pattern: "grid" | "lines" | "rings" | "dots" | "solid";
  section: "school" | "play";
  origin: "SCHOOL" | "PERSONAL";
  facts: string[];
  body: string[];
  /** Live deployment — play projects link out. */
  url?: string;
  /** Optional real screenshot, e.g. "/shots/q-learner.png" in /public. */
  src?: string;
  /** Optional public source link. */
  source?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "q-learner",
    index: "01",
    title: "Q-Learner",
    meta: "REINFORCEMENT LEARNING · PYTHON",
    year: "2025",
    pattern: "grid",
    section: "school",
    origin: "SCHOOL",
    facts: ["PYTHON + NUMPY", "ε-GREEDY POLICY", "REWARD SHAPING", "VALUE HEATMAP"],
    body: [
      "A tabular Q-learning agent dropped into a 2D gridworld with nothing but a reward signal and an ε-greedy disposition. It wanders, it bumps into walls, and — after enough episodes — it stops embarrassing itself.",
      "The interesting part was reward shaping: small tweaks to the signal changed the personality of the policy more than any hyperparameter. Convergence plots and a value heatmap document the journey from random walk to competence.",
    ],
  },
  {
    id: "pid-control",
    index: "02",
    title: "PID Control",
    meta: "SIMULATED ROBOTICS · CONTROL LOOPS",
    year: "2025",
    pattern: "lines",
    section: "school",
    origin: "SCHOOL",
    facts: ["SIMULATED ROBOTICS", "KP · KI · KD", "STEP RESPONSE", "TELEMETRY PLOTS"],
    body: [
      "A simulated robotics control loop chasing one stubborn setpoint. Proportional gets you close, integral remembers the error you'd rather forget, and derivative keeps the whole thing from oscillating into the wall.",
      "Tuning Kp, Ki and Kd by hand builds a respect for controls engineers that no lecture can. Telemetry shows overshoot before and after — the 'after' is the whole point.",
    ],
  },
  {
    id: "hiring-app",
    index: "03",
    title: "Hiring App",
    meta: "ANDROID · KOTLIN",
    year: "2024",
    pattern: "solid",
    section: "school",
    origin: "SCHOOL",
    facts: ["ANDROID STUDIO", "KOTLIN", "LISTS + STATE", "REAL UX DECISIONS"],
    body: [
      "An Android app for browsing roles and tracking applications, built in Kotlin with Android Studio. Listings, saved positions, application state — interviews as data.",
      "Most of the work was unglamorous and therefore educational: navigation state, list performance, and making a form feel like less of a form.",
    ],
  },
  {
    id: "crate-digger",
    index: "04",
    title: "Crate Digger",
    meta: "CD CATALOGING · BARCODE SCANNER",
    year: "2026",
    pattern: "rings",
    section: "play",
    origin: "PERSONAL",
    url: "https://www.cratedigging.io",
    facts: [
      "NEXT.JS + TURSO",
      "BARCODE SCANNING",
      "CRATE-BROWSING UI",
      "LIVE — CRATEDIGGING.IO",
    ],
    body: [
      "A web app for cataloging a physical CD collection — point the camera at a barcode and the disc files itself. Metadata, cover art, and a shelf that finally admits what it contains.",
      "The browsing UI is the fun part: a digital crate you riffle through with the keyboard, A→Z jumps included. Built after hours with Claude Code; live at cratedigging.io.",
    ],
  },
  {
    id: "wabbit-hole",
    index: "05",
    title: "Wabbit Hole",
    meta: "WIKIPEDIA EXPLORER · STACKED CARDS",
    year: "2026",
    pattern: "dots",
    section: "play",
    origin: "PERSONAL",
    url: "https://wabbithole.io",
    facts: [
      "WIKIPEDIA REST API",
      "STACKED-CARD UI",
      "CLIENT-SIDE ONLY",
      "LIVE — WABBITHOLE.IO",
    ],
    body: [
      "A Wikipedia reader that makes the rabbit hole the interface — articles render as stacked cards, and every link you follow deals a new card onto the pile. The stack is your browsing history, laid out where you can see it.",
      "Client-side only: TypeScript, the Wikipedia REST API, and restraint. A trivia mode generated from the path you took is next. Live at wabbithole.io.",
    ],
  },
];

export const SCHOOL_PROJECTS = PROJECTS.filter((p) => p.section === "school");
export const PLAY_PROJECTS = PROJECTS.filter((p) => p.section === "play");

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function nextProject(id: string): Project {
  const i = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  return PROJECTS[(i + 1) % PROJECTS.length];
}
