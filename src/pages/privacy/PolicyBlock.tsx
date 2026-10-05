import type { ReactNode } from 'react';
import type { PolicySection } from '@/types/content';

export function PolicyBlock({ section, children }: { section: PolicySection; children?: ReactNode }) {
  return (
    <section id={section.id} data-mochi={section.id === 'network' ? 'privacy-network' : undefined} className="rise border-t border-tone-soft py-12">
      <h2 className="text-[clamp(1.5rem,2.8vw,2rem)] leading-tight">{section.title}</h2>
      <div className="prose-volpi mt-4 max-w-[40em] text-ink-2">
        {section.paragraphs.map((p) => <p key={p}>{p}</p>)}
      </div>
      {section.list && (
        <ul className="mt-4 max-w-[40em] list-disc pl-5 text-ink-2 marker:text-seal">
          {section.list.map((item) => <li key={item} className="py-1">{item}</li>)}
        </ul>
      )}
      {children}
    </section>
  );
}
