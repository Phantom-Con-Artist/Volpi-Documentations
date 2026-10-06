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

/** One chapter of the features page. Its facts come from the docs section with the same `docId`. */
export interface FeatureChapter {
  id: string;
  docId: string;
  kicker: string;
  title: string;
  joke: string;
  /** An honest caveat, said with a straight face. */
  note?: string;
  images: ThemedImage[];
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
  mochi: string;
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
