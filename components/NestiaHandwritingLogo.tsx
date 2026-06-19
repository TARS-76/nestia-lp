"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";

const TRACE_SRC = "/svg/nestia-trace.svg";
const FINAL_SRC = "/svg/nestia-final.svg";

const FINAL_VIEWBOX_WIDTH = 1254;
const FINAL_VIEWBOX_HEIGHT = 331;
const TRACE_VIEWBOX_WIDTH = 1216;
const TRACE_VIEWBOX_HEIGHT = 322;
const TRACE_TO_FINAL_SCALE_X = FINAL_VIEWBOX_WIDTH / TRACE_VIEWBOX_WIDTH;
const TRACE_TO_FINAL_SCALE_Y = FINAL_VIEWBOX_HEIGHT / TRACE_VIEWBOX_HEIGHT;

const STROKE_ORDER = [
  "trace-n",
  "trace-e",
  "trace-s",
  "trace-t",
  "trace-i-stem",
  "trace-a-1",
  "trace-a-2",
] as const;

const MASKED_FINAL_IDS = [
  "final-n",
  "final-e",
  "final-s",
  "final-t",
  "final-i",
  "final-a",
] as const;

const POP_ORDER = ["trace-i-dot", "trace-period"] as const;

type TraceStrokeId = (typeof STROKE_ORDER)[number];
type MaskedFinalId = (typeof MASKED_FINAL_IDS)[number];

const FINAL_TO_TRACE: Record<MaskedFinalId, readonly TraceStrokeId[]> = {
  "final-n": ["trace-n"],
  "final-e": ["trace-e"],
  "final-s": ["trace-s"],
  "final-t": ["trace-t"],
  "final-i": ["trace-i-stem"],
  "final-a": ["trace-a-1", "trace-a-2"],
};

const MASK_STROKE_WIDTH: Record<TraceStrokeId, number> = {
  "trace-n": 56,
  "trace-e": 48,
  "trace-s": 50,
  "trace-t": 46,
  "trace-i-stem": 38,
  "trace-a-1": 52,
  "trace-a-2": 52,
};

const STROKE_TIMING: Record<TraceStrokeId, { duration: number; at: number }> = {
  "trace-n": { duration: 0.86, at: 0 },
  "trace-e": { duration: 0.78, at: 0.38 },
  "trace-s": { duration: 0.78, at: 0.78 },
  "trace-t": { duration: 0.78, at: 1.16 },
  "trace-i-stem": { duration: 0.5, at: 1.58 },
  "trace-a-1": { duration: 0.84, at: 1.88 },
  "trace-a-2": { duration: 0.72, at: 2.28 },
};

type NestiaHandwritingLogoProps = {
  className?: string;
  style?: CSSProperties;
  logoColor?: string;
  autoPlay?: boolean;
  ariaLabel?: string;
};

function setSvgPresentation(svg: SVGSVGElement, titleId: string) {
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-labelledby", titleId);
  svg.style.display = "block";
  svg.style.width = "100%";
  svg.style.height = "100%";

  const title = svg.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "title");
  title.setAttribute("id", titleId);
  title.textContent = "nestia.";
  svg.prepend(title);
}

function normalizeLogoColor(svg: SVGSVGElement) {
  svg.querySelectorAll<SVGElement>("[fill]").forEach((element) => {
    const fill = element.getAttribute("fill");
    if (
      fill === "white" ||
      fill === "#fff" ||
      fill === "#ffffff" ||
      fill === "black" ||
      fill === "#000" ||
      fill === "#050505"
    ) {
      element.setAttribute("fill", "currentColor");
    }
  });

  svg.querySelectorAll<SVGElement>("[stroke]").forEach((element) => {
    const stroke = element.getAttribute("stroke");
    if (
      stroke === "white" ||
      stroke === "#fff" ||
      stroke === "#ffffff" ||
      stroke === "black" ||
      stroke === "#000" ||
      stroke === "#050505"
    ) {
      element.setAttribute("stroke", "currentColor");
    }
  });
}

function ensureFinalIds(svg: SVGSVGElement) {
  const pathFallbackIds = [
    "final-period",
    "final-a",
    "final-i",
    "final-t",
    "final-s",
    "final-e",
    "final-n",
  ];
  const paths = Array.from(svg.querySelectorAll("path"));

  paths.forEach((path, index) => {
    if (!path.id && pathFallbackIds[index]) {
      path.id = pathFallbackIds[index];
    }
  });
}

function splitFinalIDot(svg: SVGSVGElement) {
  const finalI = svg.querySelector<SVGPathElement>("#final-i");
  const pathData = finalI?.getAttribute("d");
  if (!finalI || !pathData || svg.querySelector("#final-i-dot")) return;

  const dotStart = pathData.indexOf("M872.695");
  if (dotStart === -1) return;

  const stemPathData = pathData.slice(0, dotStart).trim();
  const dotPathData = pathData.slice(dotStart).trim();
  if (!stemPathData || !dotPathData) return;

  const dotPath = finalI.cloneNode(false) as SVGPathElement;
  finalI.setAttribute("d", stemPathData);
  dotPath.setAttribute("id", "final-i-dot");
  dotPath.setAttribute("d", dotPathData);
  dotPath.setAttribute("data-final-pop", "trace-i-dot");
  dotPath.setAttribute("opacity", "0");
  finalI.after(dotPath);
}

function prepareFinalPopTargets(svg: SVGSVGElement) {
  splitFinalIDot(svg);

  const period = svg.querySelector<SVGPathElement>("#final-period");
  period?.setAttribute("data-final-pop", "trace-period");
  period?.setAttribute("opacity", "0");
}

function ensureTraceIds(svg: SVGSVGElement) {
  const pathFallbackIds = [
    "trace-a-2",
    "trace-a-1",
    "trace-i-stem",
    "trace-t",
    "trace-s",
    "trace-e",
    "trace-n",
  ];
  const paths = Array.from(svg.querySelectorAll("path"));

  paths.forEach((path, index) => {
    if (!path.id && pathFallbackIds[index]) {
      path.id = pathFallbackIds[index];
    }
  });

  const dot = svg.querySelector("circle");
  if (dot && !dot.id) dot.id = "trace-i-dot";

  const period = svg.querySelector("ellipse");
  if (period && !period.id) period.id = "trace-period";
}

function createSvgElement<K extends keyof SVGElementTagNameMap>(
  doc: Document,
  tagName: K,
) {
  return doc.createElementNS("http://www.w3.org/2000/svg", tagName);
}

function getOrCreateDefs(svg: SVGSVGElement) {
  const existingDefs = svg.querySelector("defs");
  if (existingDefs) return existingDefs;

  const defs = createSvgElement(svg.ownerDocument, "defs");
  const firstNonTitleChild = Array.from(svg.children).find((child) => child.tagName.toLowerCase() !== "title");
  svg.insertBefore(defs, firstNonTitleChild ?? null);
  return defs;
}

function cloneMaskPath(
  finalDoc: Document,
  source: SVGPathElement,
  traceId: TraceStrokeId,
) {
  const path = finalDoc.importNode(source, true) as SVGPathElement;
  path.removeAttribute("id");
  path.setAttribute("data-mask-trace", traceId);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "white");
  path.setAttribute("stroke-width", String(MASK_STROKE_WIDTH[traceId]));
  path.setAttribute("stroke-linecap", "round");
  path.setAttribute("stroke-linejoin", "round");
  path.setAttribute("pathLength", "1");
  path.setAttribute("stroke-dasharray", "1");
  path.setAttribute("stroke-dashoffset", "1");
  path.setAttribute("transform", `scale(${TRACE_TO_FINAL_SCALE_X} ${TRACE_TO_FINAL_SCALE_Y})`);
  return path;
}

function createMaskBackdrop(finalDoc: Document) {
  const rect = createSvgElement(finalDoc, "rect");
  rect.setAttribute("x", "0");
  rect.setAttribute("y", "0");
  rect.setAttribute("width", String(FINAL_VIEWBOX_WIDTH));
  rect.setAttribute("height", String(FINAL_VIEWBOX_HEIGHT));
  rect.setAttribute("fill", "black");
  return rect;
}

function buildMaskedLogoMarkup(finalMarkup: string, traceMarkup: string, titleId: string) {
  const parser = new DOMParser();
  const finalDoc = parser.parseFromString(finalMarkup, "image/svg+xml");
  const traceDoc = parser.parseFromString(traceMarkup, "image/svg+xml");
  const finalSvg = finalDoc.querySelector("svg");
  const traceSvg = traceDoc.querySelector("svg");

  if (!finalSvg || !traceSvg) return "";

  setSvgPresentation(finalSvg, titleId);
  normalizeLogoColor(finalSvg);
  ensureFinalIds(finalSvg);
  prepareFinalPopTargets(finalSvg);
  ensureTraceIds(traceSvg);

  const defs = getOrCreateDefs(finalSvg);

  MASKED_FINAL_IDS.forEach((finalId) => {
    const finalPath = finalSvg.querySelector<SVGPathElement>(`#${finalId}`);
    if (!finalPath) return;

    const maskId = `${titleId}-${finalId}-mask`;
    const mask = createSvgElement(finalDoc, "mask");
    mask.setAttribute("id", maskId);
    mask.setAttribute("maskUnits", "userSpaceOnUse");
    mask.setAttribute("maskContentUnits", "userSpaceOnUse");
    mask.setAttribute("mask-type", "luminance");
    mask.setAttribute("style", "mask-type: luminance;");
    mask.setAttribute("x", "0");
    mask.setAttribute("y", "0");
    mask.setAttribute("width", String(FINAL_VIEWBOX_WIDTH));
    mask.setAttribute("height", String(FINAL_VIEWBOX_HEIGHT));
    mask.append(createMaskBackdrop(finalDoc));

    FINAL_TO_TRACE[finalId].forEach((traceId) => {
      const tracePath = traceSvg.querySelector<SVGPathElement>(`#${traceId}`);
      if (tracePath) {
        mask.append(cloneMaskPath(finalDoc, tracePath, traceId));
      }
    });

    defs.append(mask);
    finalPath.setAttribute("mask", `url(#${maskId})`);
  });

  return finalSvg.outerHTML;
}

export default function NestiaHandwritingLogo({
  className,
  style,
  logoColor = "var(--plum)",
  autoPlay = true,
  ariaLabel = "nestia.",
}: NestiaHandwritingLogoProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleId = useId().replace(/:/g, "");
  const [logoMarkup, setLogoMarkup] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadSvgs() {
      const [traceResponse, finalResponse] = await Promise.all([
        fetch(TRACE_SRC),
        fetch(FINAL_SRC),
      ]);

      if (!traceResponse.ok || !finalResponse.ok) {
        throw new Error("Failed to load nestia logo SVGs");
      }

      const [trace, finalLogo] = await Promise.all([
        traceResponse.text(),
        finalResponse.text(),
      ]);

      if (!mounted) return;
      setLogoMarkup(buildMaskedLogoMarkup(finalLogo, trace, `${titleId}-logo`));
    }

    loadSvgs().catch(() => {
      if (mounted) setLogoMarkup(null);
    });

    return () => {
      mounted = false;
    };
  }, [titleId]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !logoMarkup) return;

    const maskStrokes = STROKE_ORDER.flatMap((id) =>
      Array.from(root.querySelectorAll<SVGPathElement>(`[data-mask-trace="${id}"]`)),
    );
    const popTargets = POP_ORDER.flatMap((id) =>
      Array.from(root.querySelectorAll<SVGGraphicsElement>(`[data-final-pop="${id}"]`)),
    );

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: reduce)", () => {
        maskStrokes.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
        });
        gsap.set(popTargets, { opacity: 1, scale: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        maskStrokes.forEach((path) => {
          const length = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: autoPlay ? length : 0,
          });
        });

        gsap.set(popTargets, {
          opacity: autoPlay ? 0 : 1,
          scale: autoPlay ? 0 : 1,
          transformBox: "fill-box",
          transformOrigin: "50% 50%",
        });

        if (!autoPlay) return;

        const tl = gsap.timeline({ defaults: { ease: "sine.inOut" } });

        STROKE_ORDER.forEach((id) => {
          const paths = Array.from(root.querySelectorAll<SVGPathElement>(`[data-mask-trace="${id}"]`));
          const timing = STROKE_TIMING[id];

          paths.forEach((path, pathIndex) => {
            tl.to(
              path,
              {
                strokeDashoffset: 0,
                duration: timing.duration,
              },
              pathIndex === 0 ? timing.at : "<",
            );
          });

          if (id === "trace-i-stem") {
            const dot = root.querySelector<SVGGraphicsElement>('[data-final-pop="trace-i-dot"]');
            if (dot) {
              tl.to(
                dot,
                { opacity: 1, scale: 1, duration: 0.34, ease: "back.out(1.8)" },
                timing.at + timing.duration - 0.1,
              );
            }
          }
        });

        const period = root.querySelector<SVGGraphicsElement>('[data-final-pop="trace-period"]');
        if (period) {
          tl.to(
            period,
            { opacity: 1, scale: 1, duration: 0.34, ease: "back.out(1.8)" },
            2.74,
          );
        }
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [autoPlay, logoMarkup]);

  const mergedClassName = ["nestia-handwriting-logo", className].filter(Boolean).join(" ");

  return (
    <div
      ref={rootRef}
      className={mergedClassName}
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        aspectRatio: "1254 / 331",
        color: logoColor,
        lineHeight: 0,
        ...style,
      }}
      aria-label={ariaLabel}
    >
      {logoMarkup ? (
        <div dangerouslySetInnerHTML={{ __html: logoMarkup }} />
      ) : (
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-display)",
            fontSize: "inherit",
            lineHeight: 1,
          }}
        >
          nestia.
        </span>
      )}
    </div>
  );
}
