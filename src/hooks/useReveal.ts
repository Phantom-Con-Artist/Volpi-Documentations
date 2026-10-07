import { useEffect } from 'react';

/** Adds .is-in to every .rise element once it scrolls into view. Run once per page.
 *  Also watches for elements mounted later (the home page's read/watch switch swaps whole sections). */
export function useReveal(): void {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    const watch = (root: ParentNode) => root.querySelectorAll('.rise:not(.is-in)').forEach((el) => observer.observe(el));
    watch(document);

    const added = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches('.rise:not(.is-in)')) observer.observe(node);
          watch(node);
        });
      }
    });
    added.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); added.disconnect(); };
  }, []);
}
