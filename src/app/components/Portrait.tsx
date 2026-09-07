"use client";
import Image from "next/image";
import { useState } from "react";
import PixelKnight from "./PixelKnight";
import MicroMark from "./MicroMark";
import styles from "./Portrait.module.css";
export default function Portrait() {
  const [swapped, setSwapped] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showAlternate = swapped || hovered;
  return <figure className="portrait">
    <div className="portrait-perch">
      <div className="micro-label"><MicroMark /><span>JVP / {showAlternate ? "02" : "01"}</span></div>
      <PixelKnight />
    </div>
    <button type="button" className={`portrait-button ${showAlternate ? "is-swapped" : ""}`} onPointerEnter={event => { if (event.pointerType !== "touch" && window.matchMedia("(hover: hover)").matches) setHovered(true); }} onPointerLeave={() => setHovered(false)} onPointerCancel={() => setHovered(false)} onClick={() => setSwapped(value => !value)} aria-label="Toggle alternate portrait of John" aria-pressed={swapped}>
    <Image src="/profile-main.jpg" alt="John V. Pereira in a suit outdoors" width={320} height={360} priority sizes="(max-width: 620px) 215px, 240px" className="portrait-primary" />
    <Image src="/profile-parrots.jpeg" alt="John V. Pereira with two parrots on his shoulders at the beach" width={320} height={360} priority sizes="(max-width: 620px) 215px, 240px" className="portrait-alternate" />
  </button><figcaption className={styles.caption}>
    <span className="hand-note">hover</span>
    <svg className={styles.arrow} viewBox="0 0 58 48" fill="none" aria-hidden="true">
      <path d="M4 36C16 41 34 39 42 28C47 21 47 12 44 5M35 14L44 4L53 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </figcaption></figure>;
}
