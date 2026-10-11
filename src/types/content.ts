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
  /** A small in-between step, drawn as a smaller card. */
  compact?: boolean;
  link?: { label: string; href: string };
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

/** One version in the docs' release notes. Copied from the app's in-app update log. */
export type ChangeKind = 'latest' | 'feature' | 'issue';
export interface Release {
  version: string;
  channel: string;
  /** ISO date, e.g. 2026-10-09. */
  date: string;
  summary: string;
  changes: Record<ChangeKind, { title: string; text: string }[]>;
}

/** One part of an article: a heading, then any of paragraphs, a list, numbered steps, a table and a note. */
export interface ArticleBlock {
  id?: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  /** Numbered steps, in order. */
  steps?: string[];
  table?: { columns: string[]; rows: string[][] };
  note?: string;
  links?: NavLink[];
}

/** A written page: a guide, a file format or a comparison. */
export interface Article {
  /** The last part of the page's address. It must have a route in routes.ts. */
  slug: string;
  title: string;
  lede: string;
  blocks: ArticleBlock[];
  /** Other pages on this site worth reading next. */
  related?: NavLink[];
  /** The other tool's own pages that a comparison's statements about it come from. */
  sources?: NavLink[];
}

/** A set of articles with a front page that lists them. */
export interface ArticleSection {
  /** The first part of the address: /guides/, /formats/ or /vs/. */
  id: string;
  kicker: string;
  title: string;
  lede: string;
  /** Shown above an article's links back to the set. */
  back: string;
  /** A line under every article of the set, such as the date its facts were checked. */
  footnote?: string;
  articles: Article[];
}

export interface FaqGroup { title: string; items: { q: string; a: string; link?: NavLink }[] }
