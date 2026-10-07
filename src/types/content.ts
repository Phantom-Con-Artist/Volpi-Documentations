import type { LoopClip, ThemedImage } from './media';

export interface NavLink {
  label: string;
  href: string;
}

export interface Principle {
  title: string;
  text: string;
  image: ThemedImage;
}

export interface LoopStep {
  id: string;
  kicker: string;
  title: string;
  text: string;
  clip: LoopClip;
}

export interface FormatRow {
  label: string;
  items: string[];
}

/** One line on Mochi's ID card. */
export interface IdField {
  label: string;
  value: string;
}

export interface Fact {
  title: string;
  text: string;
}

export interface DocFeature {
  title: string;
  text: string;
}

export interface DocSection {
  id: string;
  title: string;
  intro: string;
  image?: ThemedImage;
  features: DocFeature[];
}

export interface Shortcut {
  keys: string[];
  action: string;
}

export interface PolicySection {
  id: string;
  title: string;
  paragraphs: string[];
  list?: string[];
}

export interface PricePlan {
  tag: string;
  name: string;
  price: string;
  points: string[];
  current?: boolean;
}

export interface Pain {
  text: string;
  /** Shown as a file name, in the monospace face. */
  file?: boolean;
}

/** One chapter of the features page. The full facts live in the docs section with the same `docId`. */
export interface FeatureChapter {
  id: string;
  docId: string;
  kicker: string;
  title: string;
  joke: string;
  /** Two or three short "what you get" lines. The details are in the docs. */
  highlights: string[];
  /** An honest caveat, said with a straight face. */
  note?: string;
  images: ThemedImage[];
  /** Recordings shown after the screenshots. */
  clips?: LoopClip[];
}

/** One phase of the roadmap. */
export interface RoadmapPhase {
  id: string;
  /** Shown in the phase marker, e.g. "1" or "1.5". */
  number: string;
  status: string;
  title: string;
  text: string;
  items: Fact[];
  mochi?: string;
  /** The phase Volpi is in today. */
  current?: boolean;
}

/** One step of the bug-report guide. */
export interface ReportStep {
  title: string;
  text: string;
  /** Short checklist under the text. */
  points?: string[];
  links?: NavLink[];
}

/** A reference table on the docs page: a term (or a bit of syntax) and what it means. */
export interface RefTable {
  id: string;
  title: string;
  intro: string;
  /** Column headings for the term and its meaning. */
  columns: [string, string];
  rows: { term: string; text: string }[];
  /** Show terms as code, for syntax and file names. */
  code?: boolean;
  note?: string;
}
