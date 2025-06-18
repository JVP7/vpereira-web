"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "john";
const PHRASE = `hi, ${NAME} here.`;

export default function HeroHeading() {
  const [visible, setVisible] = useState("");
  const [index, setIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    if (index <= PHRASE.length) {
      const id = setTimeout(() => {
        setVisible(PHRASE.slice(0, index));
        setIndex(index + 1);
      }, 90); // Typing speed (ms)
      return () => clearTimeout(id);
    }
  }, [index]);

  const cursorVariant = {
    blink: {
      opacity: [0, 1],
      transition: {
        repeat: Infinity,
        duration: 0.8,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <h1 className="text-6xl md:text-7xl font-extrabold mb-3">
      <span>
        {visible.split("").map((char, i) => {
          const isInName =
            i >= PHRASE.indexOf(NAME) && i < PHRASE.indexOf(NAME) + NAME.length;
          return (
            <span key={i} className={isInName ? "text-primary" : undefined}>
              {char}
            </span>
          );
        })}
      </span>
      <motion.span
        className="text-primary"
        variants={cursorVariant}
        animate="blink"
      >
        |
      </motion.span>
    </h1>
  );
}
