import { useEffect } from "react";

/**
 * Haze.jsx
 * Single-file React component (works in Vite) that injects required CSS at runtime.
 * It renders a horizontal bright band in the middle and blurs/fades out naturally at the edges.
 * Props:
 *  - height (number)        : total component height in px (default 150)
 *  - bandHeight (number)    : thickness of the bright middle band in px (default 40)
 *  - color (string)         : RGB color as "R,G,B" (default "255,100,40")
 *
 * Usage:
 *  import Haze from './Haze.jsx'
 *  <Haze height={180} bandHeight={50} color="255,120,60" />
 */

const INJECTED_STYLE_ID = "haze-component-styles";

const css = `
.haze-container {
  --haze-height: 150px;
  --band-height: 40px;
  --haze-color: 255,100,40; /* "R,G,B" components */

  width: 100%;
  height: var(--haze-height);
  background: #000; /* keep background dark so haze pops */
  position: relative;
  overflow: hidden;
}

.haze {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

/* bright, thick horizontal band in the middle (blurred for softness) */
.haze::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: var(--band-height);
  background: linear-gradient(
    90deg,
    rgba(var(--haze-color), 1) 0%,
    rgba(var(--haze-color), 1) 50%,
    rgba(var(--haze-color), 1) 100%
  );
  filter: blur(22px); /* large blur to make the band soft */
  opacity: 1;
  transform-origin: center;
}

/* blended fades that make the haze taper vertically and soften horizontally */
.haze::after {
  content: "";
  position: absolute;
  inset: 0;

  /*
    - first two gradients create vertical taper (up + down)
    - last two gradients add a soft horizontal falloff (left + right)
  */
  background:
    linear-gradient(
      to top,
      rgba(var(--haze-color), 0.85) 0%,
      rgba(var(--haze-color), 0.45) 25%,
      rgba(var(--haze-color), 0.12) 55%,
      rgba(0,0,0,0) 100%
    ),
    linear-gradient(
      to bottom,
      rgba(var(--haze-color), 0.85) 0%,
      rgba(var(--haze-color), 0.45) 25%,
      rgba(var(--haze-color), 0.12) 55%,
      rgba(0,0,0,0) 100%
    ),
    linear-gradient(
      to left,
      rgba(0,0,0,0) 0%,
      rgba(var(--haze-color), 0.18) 30%,
      rgba(var(--haze-color), 0.06) 60%,
      rgba(0,0,0,0) 100%
    ),
    linear-gradient(
      to right,
      rgba(0,0,0,0) 0%,
      rgba(var(--haze-color), 0.18) 30%,
      rgba(var(--haze-color), 0.06) 60%,
      rgba(0,0,0,0) 100%
    );

  background-repeat: no-repeat;
  background-blend-mode: screen;

  /* extra softening so the fades feel natural */
  filter: blur(6px);
  opacity: 0.95;

  /* mask to ensure the very top/bottom edges fade to transparent
     (works in modern browsers; keeps edges natural) */
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%);
}

/* small accessibility: reduce motion if the user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  .haze::before { filter: blur(18px); }
  .haze::after { filter: blur(4px); }
}
`;

export default function Haze({
  height = 150,
  bandHeight = 40,
  color = "255,100,40",
}) {
  useEffect(() => {
    // Inject styles once
    if (!document.getElementById(INJECTED_STYLE_ID)) {
      const style = document.createElement("style");
      style.id = INJECTED_STYLE_ID;
      style.innerHTML = css;
      document.head.appendChild(style);
    }

    // update CSS variables on the container root (in case multiple instances have different props)
    return () => {
      // no cleanup necessary for the global style tag; variables are set per-instance below
    };
  }, []);

  // the component sets CSS custom properties on the container to control color/size per-instance
  const containerStyle = {
    "--haze-height": `${height}px`,
    "--band-height": `${bandHeight}px`,
    "--haze-color": color,
  };

  return (
    <div
      className="haze-container"
      style={containerStyle as React.CSSProperties}
    >
      <div className="haze" />
    </div>
  );
}
