"use client";

import NestiaHandwritingLogo from "./NestiaHandwritingLogo";

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
      <div style={{ width: "min(900px, 92vw)" }}>
        <NestiaHandwritingLogo
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
