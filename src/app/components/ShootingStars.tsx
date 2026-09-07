"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import styles from "./ShootingStars.module.css";

type Sky = {
  width: number;
  height: number;
  laneLeft: number;
  fieldBottom: number;
  mobile: boolean;
  copy: { x: number; y: number; width: number; height: number };
};
type Meteor = {
  id: number;
  route: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  angle: number;
  length: number;
  duration: number;
  delay: number;
};
const random = (min: number, max: number) => min + Math.random() * (max - min);

export default function ShootingStars() {
  const layer = useRef<SVGSVGElement>(null);
  const [sky, setSky] = useState<Sky | null>(null);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    const home = layer.current?.parentElement;
    const hero = home?.querySelector<HTMLElement>(".intro");
    const copy = home?.querySelector<HTMLElement>(".intro-copy");
    const universe = home?.querySelector<HTMLElement>(".universe");
    if (!home || !hero || !copy || !universe) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dimensions: Sky;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let visible = true;
    let sequence = 0;
    let routes: number[] = [];
    let lastRoute = -1;

    function measure() {
      const origin = home!.getBoundingClientRect();
      const heroRect = hero!.getBoundingClientRect();
      const text = copy!.getBoundingClientRect();
      const planet = universe!.getBoundingClientRect();
      const mobile = origin.width <= 620;
      dimensions = {
        width: origin.width,
        height: heroRect.height,
        mobile,
        laneLeft: mobile ? 14 : Math.max(text.right - origin.left + 28, origin.width * .56),
        fieldBottom: mobile ? planet.bottom - origin.top + 10 : heroRect.height - 24,
        copy: { x: text.left - origin.left - 16, y: text.top - origin.top - 14, width: text.width + 32, height: text.height + 28 },
      };
      setSky(dimensions);
    }

    function nextRoute() {
      if (!routes.length) {
        routes = [0, 1, 2, 3, 4, 5];
        for (let i = routes.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [routes[i], routes[j]] = [routes[j], routes[i]];
        }
        if (routes[0] === lastRoute) [routes[0], routes[1]] = [routes[1], routes[0]];
      }
      lastRoute = routes.shift()!;
      return lastRoute;
    }

    function meteor(delay = 0): Meteor {
      const { width, laneLeft, fieldBottom, mobile } = dimensions;
      const route = nextRoute();
      const left = laneLeft;
      const right = width - 14;
      const top = mobile ? 10 : 42;
      const bottom = Math.max(top + 70, fieldBottom);
      let x: number, y: number, endX: number, endY: number;
      if (route < 2) {
        // Long crossings in the open space below the navigation.
        x = route === 0 ? random(width * .02, width * .25) : random(width * .8, width * .98);
        endX = route === 0 ? random(width * .75, width * .98) : random(width * .02, width * .3);
        y = random(5, 15);
        endY = mobile ? random(45, 85) : random(32, 50);
      } else {
        // Four diagonals through the sky around the universe.
        const fromLeft = route === 2 || route === 4;
        const downward = route === 2 || route === 3;
        x = fromLeft ? random(left, left + (right - left) * .2) : random(right - (right - left) * .2, right);
        endX = fromLeft ? random(right - (right - left) * .2, right) : random(left, left + (right - left) * .2);
        y = downward ? random(top, top + 25) : random(bottom - 35, bottom);
        endY = downward ? random(bottom - 35, bottom) : random(top, top + 25);
      }
      return {
        id: sequence++, route, x, y, dx: endX - x, dy: endY - y,
        angle: Math.atan2(endY - y, endX - x) * 180 / Math.PI,
        length: mobile ? random(38, 72) : random(65, 135),
        duration: random(1450, 2250), delay,
      };
    }

    function spawn() {
      if (motion.matches || document.hidden || !visible) return;
      const batch = [meteor()];
      if (Math.random() < .3) batch.push(meteor(random(250, 550)));
      setMeteors(previous => [...previous, ...batch].slice(-6));
      timer = setTimeout(spawn, random(1800, 2800));
    }

    function sync() {
      clearTimeout(timer);
      setMeteors([]);
      if (!motion.matches && !document.hidden && visible) timer = setTimeout(spawn, 350);
    }

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(hero);
    resize.observe(copy);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    intersection.observe(hero);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      clearTimeout(timer);
      resize.disconnect();
      intersection.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return (
    <svg ref={layer} className={styles.sky} height={sky?.height ?? 0} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-tail`}>
          <stop offset="0" stopColor="currentColor" stopOpacity="0" />
          <stop offset="1" stopColor="currentColor" stopOpacity=".8" />
        </linearGradient>
        <mask id={`${id}-copy`} maskUnits="userSpaceOnUse" x="0" y="0" width={sky?.width ?? 0} height={sky?.height ?? 0}>
          <rect width="100%" height="100%" fill="white" />
          {sky && <rect {...sky.copy} fill="black" />}
        </mask>
      </defs>
      <g mask={`url(#${id}-copy)`}>
        {meteors.map(star => (
          <g key={star.id} transform={`translate(${star.x} ${star.y})`}>
            <g
              className={styles.flight}
              data-route={star.route}
              style={{ "--dx": `${star.dx}px`, "--dy": `${star.dy}px`, animationDuration: `${star.duration}ms`, animationDelay: `${star.delay}ms` } as CSSProperties}
              onAnimationEnd={() => setMeteors(previous => previous.filter(item => item.id !== star.id))}
            >
              <g transform={`rotate(${star.angle})`}>
                <rect x={-star.length} y="-.65" width={star.length} height="1.3" fill={`url(#${id}-tail)`} />
                <circle r="1.5" fill="currentColor" />
                <circle r="3.5" fill="currentColor" opacity=".1" />
              </g>
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
