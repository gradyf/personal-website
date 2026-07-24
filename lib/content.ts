// Content loader for grayforrester.com — reads content/ (JSON + markdown/
// frontmatter) synchronously via fs + gray-matter at module scope.
//
// SERVER-ONLY. This module touches the filesystem at import time and must
// never be imported from a "use client" component.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
const PROJECTS_DIR = path.join(CONTENT_DIR, "projects");

function readJSON<T>(file: string): T {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
  return JSON.parse(raw) as T;
}

// ---------------------------------------------------------------------------
// site.json
// ---------------------------------------------------------------------------

type SiteJSON = {
  name: string;
  domain: string;
  email: string;
  github: string;
  linkedin: string;
  ticker: string;
  footerLeft: string;
  home: {
    heroTitle: string;
    heroAccent: string;
    heroLede: string;
    heroNotes: string[];
    work: { stripRight: string; body: string[]; micro: string };
    school: { stripRight: string; lede: string };
    play: { stripRight: string; lede: string };
    blogNote: string;
  };
  contact: { heroTitle: string; heroAccent: string; heroLede: string };
};

const siteJson = readJSON<SiteJSON>("site.json");

export const SITE = {
  name: siteJson.name,
  domain: siteJson.domain,
  email: siteJson.email,
  github: siteJson.github,
  linkedin: siteJson.linkedin,
  tickerText: siteJson.ticker,
  footerLeft: siteJson.footerLeft,
  home: siteJson.home,
  contact: siteJson.contact,
};

// ---------------------------------------------------------------------------
// about.json
// ---------------------------------------------------------------------------

export type AboutContent = {
  heroTitle: string;
  heroAccent: string;
  heroLede: string;
  notes: string[];
  paragraphs: string[];
  contactStripRight: string;
  asideNote: string;
};

export const ABOUT = readJSON<AboutContent>("about.json");

// ---------------------------------------------------------------------------
// cv.json
// ---------------------------------------------------------------------------

export type CVRow = {
  span: string;
  title: string;
  sub?: string;
  right?: string;
  bullets?: string[];
};

export type CVContent = {
  lede: string;
  education: CVRow[];
  experience: CVRow[];
  skills: string[];
  certifications?: string[];
  footnote: string;
};

export const CV = readJSON<CVContent>("cv.json");

// ---------------------------------------------------------------------------
// projects/*.md
// ---------------------------------------------------------------------------

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

function loadProjects(): Project[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));
  const projects = files.map((file): Project => {
    const id = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const body = content
      .trim()
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);
    return {
      id,
      index: String(data.index),
      title: data.title,
      meta: data.meta,
      year: String(data.year),
      pattern: data.pattern,
      section: data.section,
      origin: data.origin,
      facts: data.facts ?? [],
      body,
      url: data.url,
      src: data.src,
      source: data.source,
    };
  });
  return projects.sort((a, b) => a.index.localeCompare(b.index));
}

export const PROJECTS: Project[] = loadProjects();

export const SCHOOL_PROJECTS = PROJECTS.filter((p) => p.section === "school");
export const PLAY_PROJECTS = PROJECTS.filter((p) => p.section === "play");

export function getProject(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}

export function nextProject(id: string): Project {
  const i = Math.max(0, PROJECTS.findIndex((p) => p.id === id));
  return PROJECTS[(i + 1) % PROJECTS.length];
}
