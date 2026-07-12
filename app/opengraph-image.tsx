import { ImageResponse } from "next/og";

// Genereert een echte PNG (1200×630) voor social sharing, werkt in Facebook,
// LinkedIn, WhatsApp en X, in tegenstelling tot een SVG.
export const runtime = "edge";
export const alt =
  "Rise & Connect · Generaties op de werkvloer & Generatie Alpha in de praktijk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4F1E9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Merk */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 4 }}>
            {[
              { h: 22, c: "#6E7F8C" },
              { h: 30, c: "#5E8A78" },
              { h: 38, c: "#C6A15E" },
              { h: 46, c: "#C07350" },
              { h: 54, c: "#7E6E9E" },
            ].map((b) => (
              <div
                key={b.h}
                style={{
                  width: 8,
                  height: b.h,
                  borderRadius: 3,
                  backgroundColor: b.c,
                }}
              />
            ))}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: "#1E2420",
              letterSpacing: -0.5,
            }}
          >
            Rise &amp; Connect
          </div>
        </div>

        {/* Titel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 66,
            fontWeight: 600,
            lineHeight: 1.02,
            color: "#1E2420",
            letterSpacing: -2.5,
            maxWidth: 940,
          }}
        >
          <span>Generaties op de werkvloer,</span>
          <span>van babyboomer tot Alpha</span>
        </div>

        {/* Spectrum + onderregel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", height: 10, borderRadius: 5, overflow: "hidden" }}>
            {["#6E7F8C", "#5E8A78", "#C6A15E", "#C07350", "#7E6E9E"].map((c) => (
              <div key={c} style={{ flex: 1, backgroundColor: c }} />
            ))}
          </div>
          <div
            style={{
              fontSize: 21,
              color: "#6E7368",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Kinderopvang · Onderwijs · Zorg · Teams
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
