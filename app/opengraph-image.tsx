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
          backgroundColor: "#FBFBFA",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Merk */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              backgroundColor: "#234C38",
            }}
          />
          <div
            style={{
              display: "flex",
              gap: 10,
              fontSize: 30,
              fontWeight: 600,
              color: "#15150F",
              letterSpacing: -0.5,
            }}
          >
            <span>Rise</span>
            <span style={{ color: "#234C38" }}>&amp;</span>
            <span>Connect</span>
          </div>
        </div>

        {/* Titel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.06,
            color: "#15150F",
            letterSpacing: -2,
            maxWidth: 920,
          }}
        >
          <span>Generaties op de werkvloer</span>
          <span style={{ color: "#234C38" }}>& Generatie Alpha</span>
          <span>in de praktijk</span>
        </div>

        {/* Onderregel */}
        <div
          style={{
            fontSize: 22,
            color: "#707066",
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          Kinderopvang · Onderwijs · Zorg · Teams
        </div>
      </div>
    ),
    { ...size },
  );
}
