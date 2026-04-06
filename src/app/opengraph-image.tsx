import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kartentricks lernen – karten-tricks.de";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FAFAFA",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative background matching the hero blob */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 800,
              height: 800,
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(255, 0, 125, 0.1) 0%, rgba(255, 77, 166, 0.05) 50%, rgba(250, 250, 250, 0) 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 80px",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: "#1E293B",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 0 40px 0",
            }}
          >
            <span>Erlerne</span>
            <span style={{ color: "#FF007D" }}>Kartenmagie.</span>
          </h1>

          <p
            style={{
              fontSize: 36,
              color: "#64748B",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: 900,
              letterSpacing: "-0.01em",
            }}
          >
            Klare Anleitungen, echtes Handwerk und keine Geheimniskrämerei – kostenlos, auf Deutsch, Schritt für Schritt.
          </p>
        </div>

        {/* Brand Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 800,
            color: "#CBD5E1",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          KARTEN-TRICKS.DE
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
