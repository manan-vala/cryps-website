"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";

/**
 * StickyLetterReveal
 *
 * Flow:
 * - Section is tall (gives room to scroll).
 * - The inner block is `position: sticky; top: 50vh;` so it pins to center during the sticky window.
 * - We drive all animations off of scrollYProgress for the section (0 -> 1 across entering->leaving).
 *
 * Tweak points:
 * - SECTION_HEIGHT: how tall the scroll area is (gives room for entrance -> sticky word reveal -> exit)
 * - ENTER_END: when the entrance finishes and the sticky/reveal begins
 * - EXIT_START: when reveal ends and unstick+exit begins
 */

const SECTION_HEIGHT = "250vh"; // enough room for entrance -> reveal -> exit
const ENTER_END = 0.18; // normalized progress when entrance finishes and sticky/reveal begins
const EXIT_START = 0.82; // normalized progress when reveal ends and exit begins

type LetterProps = {
  char: string;
  index: number;
  total: number;
  revealStart: number;
  revealEnd: number;
  progress: any;
};

const Letter = ({
  char,
  index,
  total,
  revealStart,
  revealEnd,
  progress,
}: LetterProps) => {
  const isSpace = char === " ";

  // Per-letter stagger window: each char's reveal start is offset inside the reveal window.
  // revealStart/revealEnd are the global reveal window (where sticky is active).
  // We split that window into `total` slots and stagger each letter by one slot.
  const slot = (revealEnd - revealStart) / Math.max(total, 1);
  const myStart = revealStart + index * slot;
  const myEnd = Math.min(myStart + slot * 0.9, revealEnd);

  // color: grey -> white for each letter in its window
  const color = useTransform(
    progress,
    [myStart, myEnd],
    ["#9ca3af", "#ffffff"]
  );

  // slight vertical pop and opacity per letter for nicer feel
  const y = useTransform(
    progress,
    [myStart - slot * 0.15, myStart, myEnd],
    [8, 4, 0]
  );
  const scale = useTransform(progress, [myStart, myEnd], [0.98, 1]);
  const opacity = useTransform(
    progress,
    [myStart - slot * 0.15, myStart + slot * 0.2],
    [0, 1]
  );

  return (
    <motion.span
      aria-hidden={isSpace}
      style={{ color, y, scale, opacity, display: "inline-block" }}
      // ensure spaces keep layout
      className={isSpace ? "inline-block w-3" : "inline-block"}
    >
      {isSpace ? "\u00A0" : char}
    </motion.span>
  );
};

const StickyLetterReveal = ({
  text = "This paragraph appears from below, sticks while letters turn white, and then exits.",
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // progress runs from 0 -> 1 while the section travels through the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // this offset usually maps the section entering -> leaving viewport to 0 -> 1
    // ("start end", "end start") is a common pattern but framer handles defaults; leaving blank also works
    // offset: ["start end", "end start"],
  });

  // container entrance: before ENTER_END we lift/opacity in; then keep stuck at center
  const entranceY = useTransform(
    scrollYProgress,
    [0, ENTER_END],
    ["60px", "0px"]
  );
  const entranceOpacity = useTransform(
    scrollYProgress,
    [0, ENTER_END * 0.6, ENTER_END],
    [0, 0.6, 1]
  );

  // while sticky/until EXIT_START we keep Y=0 (sticky effect handled by CSS sticky)
  // after EXIT_START we animate a small upward movement to accentuate exit (optional)
  const exitY = useTransform(
    scrollYProgress,
    [EXIT_START, 1],
    ["0px", "-140vh"]
  );

  // combine entrance + exit by mapping full progress: 0 -> ENTER_END -> EXIT_START -> 1
  // values: 60px -> 0px -> 0px -> -140vh
  const combinedY = useTransform(
    scrollYProgress,
    [0, ENTER_END, EXIT_START, 1],
    ["60px", "0px", "0px", "-140vh"]
  );

  // overall opacity combining entrance fade with main visibility
  const combinedOpacity = useTransform(
    scrollYProgress,
    [0, ENTER_END * 0.6, ENTER_END],
    [0, 0.6, 1]
  );

  // reveal window for per-letter mapping (where letters transition from grey->white)
  const revealWindowStart = ENTER_END; // begin reveal when entrance ends / sticky begins
  const revealWindowEnd = EXIT_START; // end reveal when exit starts

  // Prepare characters
  const characters = Array.from(text);

  return (
    <ReactLenis root>
      <section
        ref={sectionRef}
        className="relative w-full flex items-start justify-center bg-black text-center"
        style={{ minHeight: SECTION_HEIGHT }}
      >
        {/* Sticky container - pins to viewport center while in the sticky region */}
        <motion.div
          className="sticky top-1/2 -translate-y-1/2 w-full flex justify-center"
          style={{
            // we apply the combined transform + opacity. Because the element is sticky,
            // it will visually remain in the center while the reveal window is active.
            y: combinedY,
            opacity: combinedOpacity,
            pointerEvents: "none", // not interactive; remove if you need clickable text
          }}
        >
          <p className="m-0 max-w-3xl text-2xl font-medium leading-relaxed px-6 text-left">
            {characters.map((ch, idx) => (
              <Letter
                key={idx}
                char={ch}
                index={idx}
                total={characters.length}
                revealStart={revealWindowStart}
                revealEnd={revealWindowEnd}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </motion.div>
      </section>
    </ReactLenis>
  );
};

export default StickyLetterReveal;
