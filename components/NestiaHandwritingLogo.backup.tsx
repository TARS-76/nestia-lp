"use client";

import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

type LogoPathMap = {
  n: string;
  e: string;
  s: string;
  t: string;
  i: string;
  a: string;
  period: string;
  maskN1: string;
  maskN2: string;
};

type NestiaHandwritingLogoProps = {
  className?: string;
  title?: string;
  viewBox?: string;
  maskStrokeWidth?: number;
  paths?: Partial<LogoPathMap>;
};

// Use the exact viewBox from nestia-logo-ready.svg.
const LOGO_VIEW_BOX = "0 0 720 160";
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const DEFAULT_PATHS: LogoPathMap = {
  // Paste d from nestia-logo-ready.svg: <path id="letter-n" d="..." />
  n: "",

  // Paste d from nestia-logo-ready.svg: <path id="letter-e" d="..." />
  e: "",

  // Paste d from nestia-logo-ready.svg: <path id="letter-s" d="..." />
  s: "",

  // Paste d from nestia-logo-ready.svg: <path id="letter-t" d="..." />
  t: "",

  // Paste d from nestia-logo-ready.svg: <path id="letter-i" d="..." />
  i: "",

  // Paste d from nestia-logo-ready.svg: <path id="letter-a" d="..." />
  a: "",

  // Paste d from nestia-logo-ready.svg: <path id="period" d="..." />
  period: "",

  // Paste d from mask-n-1.svg: the first writing stroke for "n".
  maskN1: "",

  // Paste d from mask-n-2.svg: the second writing stroke for "n".
  maskN2: "",
};

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return reducedMotion;
}

function getMaskBoundsFromViewBox(viewBox: string) {
  const values = viewBox
    .trim()
    .split(/\s+/)
    .map((value) => Number(value));

  if (values.length === 4 && values.every((value) => Number.isFinite(value))) {
    const [x, y, width, height] = values as [number, number, number, number];

    return { x, y, width, height };
  }

  return { x: 0, y: 0, width: 720, height: 160 };
}

function prepareStrokePath(path: SVGPathElement) {
  const length = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  });

  return length;
}

function showCompleteStrokePath(path: SVGPathElement) {
  const length = path.getTotalLength();

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: 0,
  });
}

export function NestiaHandwritingLogo({
  className,
  title = "nestia.",
  viewBox = LOGO_VIEW_BOX,
  maskStrokeWidth = 28,
  paths,
}: NestiaHandwritingLogoProps) {
  const generatedId = useId();
  const maskId = `nestia-n-mask-${generatedId.replace(/:/g, "")}`;
  const reducedMotion = usePrefersReducedMotion();
  const maskN1Ref = useRef<SVGPathElement>(null);
  const maskN2Ref = useRef<SVGPathElement>(null);
  const restRef = useRef<SVGGElement>(null);

  const logoPaths = useMemo(
    () => ({
      ...DEFAULT_PATHS,
      ...paths,
    }),
    [paths],
  );
  const maskBounds = useMemo(() => getMaskBoundsFromViewBox(viewBox), [viewBox]);

  useIsomorphicLayoutEffect(() => {
    const maskN1 = maskN1Ref.current;
    const maskN2 = maskN2Ref.current;
    const rest = restRef.current;

    if (!maskN1 || !maskN2 || !rest) {
      return;
    }

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        showCompleteStrokePath(maskN1);
        showCompleteStrokePath(maskN2);
        gsap.set(rest, { autoAlpha: 1, x: 0, clipPath: "inset(0% 0% 0% 0%)" });
        return;
      }

      prepareStrokePath(maskN1);
      prepareStrokePath(maskN2);
      gsap.set(rest, {
        autoAlpha: 0,
        x: -8,
        clipPath: "inset(0% 100% 0% 0%)",
      });

      gsap
        .timeline({
          defaults: {
            ease: "power2.inOut",
          },
        })
        .to(maskN1, {
          strokeDashoffset: 0,
          duration: 0.95,
        })
        .to(
          maskN2,
          {
            strokeDashoffset: 0,
            duration: 0.8,
          },
          "-=0.12",
        )
        .to(
          rest,
          {
            autoAlpha: 1,
            x: 0,
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.72,
            ease: "power2.out",
          },
          "-=0.08",
        );
    });

    return () => ctx.revert();
  }, [reducedMotion, logoPaths.maskN1, logoPaths.maskN2]);

  return (
    <svg
      className={className}
      viewBox={viewBox}
      role="img"
      aria-labelledby={`${maskId}-title`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id={`${maskId}-title`}>{title}</title>

      <defs>
        <mask
          id={maskId}
          maskUnits="userSpaceOnUse"
          x={maskBounds.x}
          y={maskBounds.y}
          width={maskBounds.width}
          height={maskBounds.height}
        >
          <path
            ref={maskN1Ref}
            id="mask-n-1"
            d={logoPaths.maskN1}
            fill="none"
            pathLength={1}
            stroke="white"
            strokeDasharray={1}
            strokeDashoffset={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={maskStrokeWidth}
          />
          <path
            ref={maskN2Ref}
            id="mask-n-2"
            d={logoPaths.maskN2}
            fill="none"
            pathLength={1}
            stroke="white"
            strokeDasharray={1}
            strokeDashoffset={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={maskStrokeWidth}
          />
        </mask>
      </defs>

      <path
        id="letter-n"
        d={logoPaths.n}
        fill="currentColor"
        mask={`url(#${maskId})`}
      />

      <g ref={restRef} fill="currentColor" style={{ opacity: 0 }}>
        <path id="letter-e" d={logoPaths.e} />
        <path id="letter-s" d={logoPaths.s} />
        <path id="letter-t" d={logoPaths.t} />
        <path id="letter-i" d={logoPaths.i} />
        <path id="letter-a" d={logoPaths.a} />
        <path id="period" d={logoPaths.period} />
      </g>
    </svg>
  );
}

export default NestiaHandwritingLogo;
