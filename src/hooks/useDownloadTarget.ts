import { useState } from 'react';

export type DownloadTarget = 'windows' | 'mac' | 'linux' | null;

type NavigatorWithData = Navigator & { userAgentData?: { platform?: string } };

/** Which installer family suits this visitor. Null on phones and anything we cannot tell. */
export function detectTarget(): DownloadTarget {
  if (typeof navigator === 'undefined') return null;
  const nav = navigator as NavigatorWithData;
  const text = `${nav.userAgentData?.platform ?? ''} ${nav.userAgent}`;
  if (/android|iphone|ipad|ipod|cros/i.test(text)) return null;
  if (/win/i.test(text)) return 'windows';
  if (/mac/i.test(text)) return 'mac';
  if (/linux|x11/i.test(text)) return 'linux';
  return null;
}

/** Read once: the page is client-rendered, so there is no server markup to disagree with. */
export function useDownloadTarget(): DownloadTarget {
  return useState(detectTarget)[0];
}
