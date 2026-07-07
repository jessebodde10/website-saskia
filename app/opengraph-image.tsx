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
          backgroundColor: "#FBFBF9",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Merk */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#E1E7DC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 26,
                height: 26,
                borderRadius: 999,
                backgroundColor: "#4A5B44",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: 10,
              fontSize: 30,
              color: "#23261F",
              letterSpacing: -0.5,
            }}
          >
            <span>Rise</span>
            <span style={{ color: "#8A4F30" }}>&amp;</span>
            <span>Connect</span>
          </div>
        </div>

        {/* Titel */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            lineHeight: 1.1,
            color: "#23261F",
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          <span>Generaties op de werkvloer</span>
          <span style={{ color: "#4A5B44" }}>& Generatie Alpha</span>
          <span>in de praktijk</span>
        </div>

        {/* Onderregel */}
        <div
          style={{
            fontSize: 24,
            color: "#6A6F62",
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
