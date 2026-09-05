import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "We Raise Hope — U.S. 501(c)(3) supporting rural Nepal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(145deg, #602718 0%, #95A184 45%, #B1D1C8 72%, #CF4209 100%)",
          padding: "64px",
          color: "white",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#FF9912",
          }}
        >
          We Raise Hope Inc. · EIN 99-2747198
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.05, maxWidth: 920 }}>
            Give a child in rural Nepal the chance to learn, heal, and thrive.
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.9)", maxWidth: 820 }}>
            U.S. 501(c)(3) · 95% to programs · Healthcare, education, water & opportunity
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
