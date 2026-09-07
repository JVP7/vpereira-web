"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./Universe.module.css";

const FRAME_WIDTH = 640;
const FRAME_HEIGHT = 360;
const FRAME_COUNT = 24;
const FRAME_MS = 40;
const COLUMNS = 6;
const PADDING_X = 32;
const PADDING_Y = 22;
const EFFECT_MS = 2800;

type Dot = { x: number; y: number; dx: number; dy: number; radius: number; phase: number };

export default function Universe() {
  const verseId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const triggerRef = useRef<() => void>(() => {});
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const button = buttonRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!button || !canvas || !ctx) return;
    const frozen = document.createElement("canvas");
    frozen.width = FRAME_WIDTH;
    frozen.height = FRAME_HEIGHT;
    const source = frozen.getContext("2d", { willReadFrequently: true });
    if (!source) return;

    const frames = new window.Image();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReduced = motion.matches;
    let disposed = false;
    let loaded = false;
    let visible = true;
    let raf: number | null = null;
    let width = 0;
    let height = 0;
    let frame = 0;
    let frameAt = 0;
    let effectAt: number | null = null;
    let dots: Dot[] = [];
    let currentPhase = "idle";

    function changePhase(next: string) {
      if (next !== currentPhase) {
        currentPhase = next;
        setPhase(next);
      }
    }

    function drawFrame() {
      ctx!.clearRect(0, 0, width + PADDING_X * 2, height + PADDING_Y * 2);
      ctx!.drawImage(frames, (frame % COLUMNS) * FRAME_WIDTH, Math.floor(frame / COLUMNS) * FRAME_HEIGHT,
        FRAME_WIDTH, FRAME_HEIGHT, PADDING_X, PADDING_Y, width, height);
    }

    function resize() {
      const rect = button!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round((width + PADDING_X * 2) * dpr);
      canvas!.height = Math.round((height + PADDING_Y * 2) * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Return cleanly to the original shape if the viewport changes mid-effect.
      effectAt = null;
      dots = [];
      changePhase("idle");
      if (loaded && width) drawFrame();
    }

    function collectDots() {
      source!.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
      source!.drawImage(frames, (frame % COLUMNS) * FRAME_WIDTH, Math.floor(frame / COLUMNS) * FRAME_HEIGHT,
        FRAME_WIDTH, FRAME_HEIGHT, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
      const pixels = source!.getImageData(0, 0, FRAME_WIDTH, FRAME_HEIGHT).data;
      const result: Dot[] = [];
      const scale = width / FRAME_WIDTH;
      // Sample brightness into bounded circles, never move source-image fragments.
      // This prevents connected arcs in dense GIF frames from surviving the breakup.
      const cell = 4;
      for (let sy = 0; sy < FRAME_HEIGHT; sy += cell) {
        for (let sx = 0; sx < FRAME_WIDTH; sx += cell) {
          let energy = 0, weightedX = 0, weightedY = 0;
          for (let y = sy; y < Math.min(sy + cell, FRAME_HEIGHT); y++) {
            for (let x = sx; x < Math.min(sx + cell, FRAME_WIDTH); x++) {
              const brightness = pixels[(y * FRAME_WIDTH + x) * 4] / 255;
              if (brightness < .1) continue;
              energy += brightness;
              weightedX += (x + .5) * brightness;
              weightedY += (y + .5) * brightness;
            }
          }
          if (energy < .2) continue;
          result.push({
            x: PADDING_X + weightedX / energy * scale,
            y: PADDING_Y + weightedY / energy * scale,
            radius: Math.min(.75, Math.max(.2, Math.sqrt(energy / Math.PI) * scale)),
            dx: 0, dy: 0, phase: Math.random() * Math.PI * 2,
          });
        }
      }
      // Even spacing avoids random clumps; shuffle destinations for organic motion.
      const rotation = Math.random() * Math.PI * 2;
      const destinations = result.map((_, index) => {
        const angle = rotation + index * Math.PI * (3 - Math.sqrt(5));
        const radius = Math.sqrt((index + .5) / result.length);
        return {
          x: PADDING_X + width / 2 + Math.cos(angle) * radius * (width / 2 + PADDING_X - 8),
          y: PADDING_Y + height / 2 + Math.sin(angle) * radius * (height / 2 + PADDING_Y - 8),
        };
      });
      for (let i = destinations.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [destinations[i], destinations[j]] = [destinations[j], destinations[i]];
      }
      result.forEach((dot, index) => {
        dot.dx = destinations[index].x - dot.x;
        dot.dy = destinations[index].y - dot.y;
      });
      return result;
    }

    function tick(now: number) {
      raf = null;
      if (!loaded || !visible || document.hidden || prefersReduced || disposed) return;
      if (effectAt !== null) {
        const elapsed = now - effectAt;
        if (elapsed >= EFFECT_MS) {
          effectAt = null;
          dots = [];
          changePhase("idle");
          frameAt = now;
          drawFrame();
        } else {
          let spread: number;
          if (elapsed < 850) {
            changePhase("scattering");
            spread = 1 - Math.pow(1 - elapsed / 850, 3);
          } else if (elapsed < 1200) {
            changePhase("floating");
            spread = 1;
          } else {
            changePhase("reforming");
            const progress = (elapsed - 1200) / (EFFECT_MS - 1200);
            spread = 1 - (progress * progress * (3 - 2 * progress));
          }
          ctx!.clearRect(0, 0, width + PADDING_X * 2, height + PADDING_Y * 2);
          ctx!.globalAlpha = 1 - spread * .13;
          ctx!.fillStyle = "#ffffff";
          ctx!.beginPath();
          for (const dot of dots) {
            const drift = Math.sin(elapsed / 350 + dot.phase) * .6 * spread;
            const x = dot.x + dot.dx * spread + drift;
            const y = dot.y + dot.dy * spread - drift;
            ctx!.moveTo(x + dot.radius, y);
            ctx!.arc(x, y, dot.radius, 0, Math.PI * 2);
          }
          ctx!.fill();
          ctx!.globalAlpha = 1;
          // Blend the exact source frame at the seams for a smooth handoff.
          if (spread < .12) {
            ctx!.globalAlpha = 1 - spread / .12;
            ctx!.drawImage(frozen, PADDING_X, PADDING_Y, width, height);
            ctx!.globalAlpha = 1;
          }
        }
      } else if (now - frameAt >= FRAME_MS) {
        const steps = Math.floor((now - frameAt) / FRAME_MS);
        frame = (frame + steps) % FRAME_COUNT;
        frameAt += steps * FRAME_MS;
        drawFrame();
      }
      raf = requestAnimationFrame(tick);
    }

    function sync() {
      if (raf !== null) cancelAnimationFrame(raf);
      raf = null;
      effectAt = null;
      dots = [];
      changePhase("idle");
      setReduced(prefersReduced);
      frameAt = performance.now();
      if (loaded) {
        if (prefersReduced) frame = 0;
        drawFrame();
        if (!prefersReduced && visible && !document.hidden) raf = requestAnimationFrame(tick);
      }
    }

    triggerRef.current = () => {
      if (!loaded || prefersReduced || effectAt !== null || !visible || document.hidden) return;
      dots = collectDots();
      if (!dots.length) return;
      effectAt = performance.now();
      changePhase("scattering");
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(button);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersection.observe(button);
    const onVisibility = () => sync();
    const onMotionChange = (event: MediaQueryListEvent) => {
      prefersReduced = event.matches;
      sync();
    };
    motion.addEventListener("change", onMotionChange);
    document.addEventListener("visibilitychange", onVisibility);
    frames.onload = () => {
      if (disposed) return;
      loaded = true;
      resize();
      setReady(true);
      sync();
    };
    frames.src = "/universe-frames.webp";
    sync();
    return () => {
      disposed = true;
      if (raf !== null) cancelAnimationFrame(raf);
      observer.disconnect();
      intersection.disconnect();
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibility);
      frames.onload = null;
      triggerRef.current = () => {};
    };
  }, []);

  return (
    <div className="universe">
      <button
        ref={buttonRef}
        type="button"
        className={styles.control}
        data-phase={phase}
        disabled={!ready || reduced}
        aria-label={reduced ? "Universe illustration" : "Scatter and reassemble the universe"}
        aria-describedby={verseId}
        onPointerEnter={event => { if (event.pointerType === "mouse") triggerRef.current(); }}
        onClick={() => triggerRef.current()}
      >
        <Image src="/universe-still.png" alt="" width={960} height={540} priority className={`${styles.fallback} ${ready ? styles.hidden : ""}`} />
        <canvas ref={canvasRef} className={`${styles.canvas} ${ready ? "" : styles.hidden}`} aria-hidden="true" />
        <span id={verseId} className={styles.verse}>1 John 2:13</span>
      </button>
    </div>
  );
}
