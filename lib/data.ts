// Site config + seed project data for grayforrester.com.
// Years, stacks and links are PLACEHOLDERS — confirm before shipping widely.

export const SITE = {
  name: "Gray Forrester",
  domain: "https://grayforrester.com",
  // Placeholder inbox — needs forwarding set up on the domain, or point at the real inbox.
  email: "hello@grayforrester.com",
  // Fill in real profile URLs.
  github: "",
  linkedin: "",
  tickerText:
    "GRAY FORRESTER — PORTFOLIO OF IDEAS, PROJECTS & OTHER EVIDENCE — EST. 2026",
  footerLeft: "© 2026 GRAY FORRESTER",
};

export type Category = {
  key: string;
  label: string;
};

export const CATS: Category[] = [
  { key: "all", label: "All" },
  { key: "rl", label: "RL" },
  { key: "robotics", label: "Robotics" },
  { key: "mobile", label: "Mobile" },
  { key: "music", label: "Music" },
  { key: "web", label: "Web" },
];

export type Project = {
  id: string;
  index: string;
  title: string;
  meta: string;
  year: string;
  pattern: "grid" | "lines" | "rings" | "dots" | "solid";
  cat: string;
  origin: "SCHOOL" | "PERSONAL";
  facts: string[];
  body: string[];
  /** Optional real screenshot, e.g. "/shots/q-learner.png" in /public. */
  src?: string;
  /** Optional source link for PERSONAL projects. */
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
    cat: "rl",
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
    cat: "robotics",
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
    cat: "mobile",
    origin: "SCHOOL",
    facts: ["ANDROID STUDIO", "KOTLIN", "LISTS + STATE", "REAL UX DECISIONS"],
    body: [
      "An Android app for browsing roles and tracking applications, built in Kotlin with Android Studio. Listings, saved positions, application state — interviews as data.",
      "Most of the work was unglamorous and therefore educational: navigation state, list performance, and making a form feel like less of a form.",
    ],
  },
  {
    id: "cd-cataloger",
    index: "04",
    title: "CD Cataloger",
    meta: "MUSIC EXPLORER · METADATA",
    year: "2026",
    pattern: "rings",
    cat: "music",
    origin: "PERSONAL",
    facts: ["METADATA + SEARCH", "SQLITE", "SHELF LOGIC", "CLAUDE CODE"],
    body: [
      "A cataloger and explorer for a physical CD collection. Rip the metadata, index the shelf, then wander the collection by year, label, or mood instead of alphabetical guilt.",
      "Built after hours with Claude Code. The schema outlived three redesigns; the search bar is the real MVP.",
    ],
  },
  {
    id: "rabbit-hole",
    index: "05",
    title: "Rabbit Hole",
    meta: "WIKIPEDIA API · TRIVIA",
    year: "2026",
    pattern: "dots",
    cat: "web",
    origin: "PERSONAL",
    facts: ["WIKIPEDIA API", "GRAPH HOPS", "TRIVIA MODE", "ONE MORE CLICK"],
    body: [
      "A Wikipedia toy that turns aimless clicking into a game — follow links hop by hop, then answer trivia generated from the path you took.",
      "The graph is the fun part: watching how fast any topic collapses toward philosophy, wars, or 19th-century chemists. Built with the Wikipedia API and restraint.",
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function nextProject(id: string): Project {
  const i = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  return PROJECTS[(i + 1) % PROJECTS.length];
}
