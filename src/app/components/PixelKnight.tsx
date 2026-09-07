"use client";

import { useState } from "react";

// Original 24 × 28 sprite, based on the site's left-facing chess knight.
// H = highlight, S = silver, D = shaded mane, O = outline, E = eye.
const pixels = [
  "..........OO..OO........",
  "..........OHO.OHO.......",
  "..........OHOOHHO.......",
  ".........OOSHHSSOO......",
  "........OOSHHHSSSDO.....",
  ".......OOSHHHSSSSDDO....",
  "......OOSHHHSSSSSDDO....",
  ".....OOSHHHSSSSSSDDDO...",
  "....OOSHHESSHHSSSDDDO...",
  "...OOSHHHEOSHHSSSDDDO...",
  "..OOSHHSSSSSHHSSSDDDO...",
  ".OOSHHSSSSSSHHSSSDDDO...",
  ".OSHHSSSSSSHHSSSSDDDO...",
  ".OSSDSSSOOHHSSSSSDDDO...",
  "..OSSSOO.OHHSSSSSDDDO...",
  "...OOO...OHHSSSSSDDDO...",
  ".........OHSSSSSSDDDO...",
  "........OHHSSSSSSDDO....",
  ".......OHHSSSSSSDDDO....",
  "......OHHSSSSSSSDDO.....",
  ".....OHHSSSSSSSDDDO.....",
  ".....OOOOOOOOOOOOOO.....",
  "....OHHHHHHHHHHHSSDO....",
  "....OSSSSSSSSSSSDDDO....",
  ".....OOOOOOOOOOOOOO.....",
  "...OHHHHHHHHHHHHHSSDO...",
  "...OSSSSSSSSSSSSDDDDO...",
  "...OOOOOOOOOOOOOOOOOO...",
];
const colors: Record<string, string> = {
  H: "var(--sprite-highlight)",
  S: "var(--sprite-silver)",
  D: "var(--sprite-shadow)",
  O: "var(--sprite-outline)",
  E: "var(--sprite-eye)",
};

export default function PixelKnight() {
  const [reacting, setReacting] = useState(false);
  // React only on deliberate interaction; never run an idle animation.
  const nudge = () => setReacting(true);
  return (
    <button
      type="button"
      className={`pixel-knight-button${reacting ? " is-reacting" : ""}`}
      aria-label="Give the knight a nudge"
      title="Give the knight a nudge"
      onPointerEnter={nudge}
      onPointerLeave={() => setReacting(false)}
      onClick={nudge}
      onBlur={() => setReacting(false)}
    >
      <svg
        className="pixel-knight-sprite"
        viewBox="0 0 24 28"
        width="60"
        height="70"
        shapeRendering="crispEdges"
        aria-hidden="true"
        onAnimationEnd={() => setReacting(false)}
      >
        {pixels.flatMap((row, y) => [...row].flatMap((pixel, x) =>
          colors[pixel] ? [<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[pixel]} className={pixel === "E" ? "pixel-knight-eye" : undefined} />] : []
        ))}
      </svg>
    </button>
  );
}
