"use client";

import HeroButterfly from "./HeroButterfly";
import NestiaWordmark from "./NestiaWordmark";

export default function NestiaHandwritingLogoExample() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#1e1e1e",
        padding: "32px",
      }}
    >
      <div
        style={{
          width: "min(900px, 92vw)",
          position: "relative",
          isolation: "isolate",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-118px",
            right: "clamp(18px, 7vw, 84px)",
            width: "min(220px, 28vw)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        >
          <HeroButterfly width={220} />
        </div>
        <NestiaWordmark
          logoColor="#f7f3ed"
          aria-describedby="nestia-logo-description"
        />
        <p id="nestia-logo-description" hidden>
          nestia. handwritten logo animation
        </p>
      </div>
    </main>
  );
}
