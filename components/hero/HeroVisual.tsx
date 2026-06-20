"use client";

import { useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";
import gsap from "gsap";

type HeroVisualProps = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

// Fades and rises the hero illustration in on mount. Not scroll-triggered —
// this is a one-time entrance, distinct from the scroll-driven signature reveal elsewhere in the LP.
export function HeroVisual({ className, style, children }: HeroVisualProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        allowMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { reduceMotion } = context.conditions as {
          reduceMotion: boolean;
          allowMotion: boolean;
        };

        if (reduceMotion) {
          gsap.set(el, { opacity: 1, y: 0 });
          return;
        }

        gsap.set(el, { opacity: 0, y: 24 });
        gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: "sine.out" });
      },
    );

    return () => media.revert();
  }, []);

  return (
    <div ref={rootRef} className={className} style={{ opacity: 0, ...style }}>
      {children}
    </div>
  );
}
