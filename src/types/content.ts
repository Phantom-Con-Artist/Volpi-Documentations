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
