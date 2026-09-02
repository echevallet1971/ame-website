'use client';

import { useEffect } from 'react';

type LayoutShiftAttribution = {
  currentRect?: DOMRectReadOnly;
  previousRect?: DOMRectReadOnly;
  selector?: string;
};

type ClsPayload = {
  metric: 'CLS';
  value: number;
  largestShiftValue: number;
  largestShiftTimeMs: number;
  route: string;
  href: string;
  referrer: string;
  viewport: { width: number; height: number };
  userAgent: string;
  navigationType?: string;
  sources: LayoutShiftAttribution[];
  timestamp: string;
};

function toSelector(node: Node | null): string | undefined {
  if (!node || node.nodeType !== Node.ELEMENT_NODE) return undefined;
  const element = node as Element;
  const parts: string[] = [];
  let current: Element | null = element;

  while (current && parts.length < 4) {
    const id = current.getAttribute('id');
    if (id) {
      parts.unshift(`#${id}`);
      break;
    }

    let selector = current.tagName.toLowerCase();
    const className = current.getAttribute('class');
    if (className) {
      const firstClass = className.split(/\s+/).filter(Boolean)[0];
      if (firstClass) selector += `.${firstClass}`;
    }

    parts.unshift(selector);
    current = current.parentElement;
  }

  return parts.length ? parts.join('>') : undefined;
}

function postPayload(payload: ClsPayload) {
  const body = JSON.stringify(payload);
  const url = '/api/web-vitals';

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body);
    return;
  }

  void fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    keepalive: true,
  });
}

export default function ClsProbe() {
  useEffect(() => {
    let clsValue = 0;
    let largestShiftValue = 0;
    let largestShiftTimeMs = 0;
    let largestShiftSources: LayoutShiftAttribution[] = [];

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as Array<PerformanceEntry & {
        value?: number;
        hadRecentInput?: boolean;
        sources?: Array<{
          node?: Node;
          currentRect?: DOMRectReadOnly;
          previousRect?: DOMRectReadOnly;
        }>;
      }>) {
        if (entry.entryType !== 'layout-shift') continue;
        if (entry.hadRecentInput) continue;

        const shiftValue = entry.value ?? 0;
        clsValue += shiftValue;

        if (shiftValue > largestShiftValue) {
          largestShiftValue = shiftValue;
          largestShiftTimeMs = entry.startTime ?? 0;
          largestShiftSources = (entry.sources ?? []).slice(0, 3).map((source) => ({
            currentRect: source.currentRect,
            previousRect: source.previousRect,
            selector: toSelector(source.node ?? null),
          }));
        }
      }
    });

    observer.observe({ type: 'layout-shift', buffered: true });

    const flush = () => {
      if (clsValue <= 0) return;

      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
      const payload: ClsPayload = {
        metric: 'CLS',
        value: Number(clsValue.toFixed(5)),
        largestShiftValue: Number(largestShiftValue.toFixed(5)),
        largestShiftTimeMs: Number(largestShiftTimeMs.toFixed(1)),
        route: window.location.pathname,
        href: window.location.href,
        referrer: document.referrer,
        viewport: { width: window.innerWidth, height: window.innerHeight },
        userAgent: navigator.userAgent,
        navigationType: navEntry?.type,
        sources: largestShiftSources,
        timestamp: new Date().toISOString(),
      };

      postPayload(payload);
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') flush();
    };

    window.addEventListener('pagehide', flush);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('pagehide', flush);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      flush();
    };
  }, []);

  return null;
}
