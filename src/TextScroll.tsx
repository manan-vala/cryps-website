import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactElement } from "react";

function TextScroll() {
  const ref = useRef<HTMLDivElement>(null);

  const text =
    "Cryps is revolutionizing the fusion of cryptocurrency and artificial intelligence ushering in a new era of crypto data indexing.";
  const words = text.split(" ");

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-[var(--main-bg-cl)] flex justify-center"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center w-3/5 max-md:w-9/10">
        <h1 className="text-6xl max-md:text-5xl font-semibold tracking-tight flex flex-wrap justify-center">
          {words.map((word, i) => {
            // Each word reveals in sequence based on index
            const start = i / words.length;
            const end = (i + 1) / words.length;

            // map scroll progress for each word
            const color = useTransform(
              scrollYProgress,
              [start, end],
              ["#6b7280", "#ffffff"] // grey → white
            );

            // Array to hold the word + (optional) image
            const elements: ReactElement[] = [];

            // Render the word itself
            elements.push(
              <motion.span
                key={`word-${i}`}
                style={{ color }}
                className="mx-2 max-md:mx-1"
              >
                {word}
              </motion.span>
            );

            // Insert the image immediately after "intelligence"
            if (word.toLowerCase().replace(/[^\w]/g, "") === "intelligence") {
              elements.push(
                <span className="h-14 max-md:h-10 w-auto">
                  <img
                    key={`img-${i}`}
                    src="https://framerusercontent.com/images/v49qxjuG72ZsYSTKreDGVOPRs.png"
                    alt="AI"
                    className="mx-2 h-full inline-block"
                  />
                </span>
              );
            }

            return elements;
          })}
        </h1>
      </div>
    </section>
  );
}

export default TextScroll;
