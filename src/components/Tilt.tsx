"use client";

import { useCallback, useRef, type ReactNode } from "react";

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Максимальный угол наклона в градусах */
  max?: number;
  scale?: number;
  /** Блик, следующий за курсором */
  glare?: boolean;
};

/**
 * Лёгкий 3D-tilt за курсором: perspective + rotateX/rotateY,
 * обновления через requestAnimationFrame, без библиотек.
 * Отключается при prefers-reduced-motion.
 */
export default function Tilt({ children, className = "", max = 8, scale = 1.01, glare = false }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reduced = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el || reduced()) return;
      const { clientX, clientY } = e;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const px = (clientX - r.left) / r.width - 0.5;
        const py = (clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(${scale})`;
        if (glare) {
          el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
          el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
        }
      });
    },
    [max, scale, glare],
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    cancelAnimationFrame(frame.current);
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${glare ? "tilt-glare " : ""}${className}`}
      style={{
        transform: "perspective(900px)",
        transformStyle: "preserve-3d",
        transition: "transform 0.15s ease-out",
        willChange: "transform",
      }}
    >
      {children}
      {glare && <div className="tilt-glare-spot" aria-hidden />}
    </div>
  );
}
