import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "nodejs";
export const alt = site.ogImageAlt;
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
          padding: 80,
          background: "linear-gradient(135deg, #0F4531 0%, #158354 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: "#1FA968" }} />
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
            {site.tagline}
          </div>
          <div style={{ fontSize: 30, color: "#D3F5E1", maxWidth: 900 }}>
            B2B sales lead generation from real company signals.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
