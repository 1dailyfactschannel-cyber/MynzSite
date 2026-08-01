"use client";

import { useCallback, useRef, type ReactNode } from "react";

type MouseParallaxProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Параллакс слоёв за курсором: дети с атрибутом data-depth="N"
 * сдвигаются на N пикселей относительно центра блока.
 * Обновления через requestAnimationFrame, без библиотек.
 * Отключается при prefers-reduced-motion.
 */
export default function MouseParallax({ children, className = "" }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const reduced = () =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const apply = useCallback((px: number, py: number) => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>("[data-depth]").forEach((layer) => {
      const depth = parseFloat(layer.dataset.depth ?? "0");
      layer.style.transform = `translate3d(${(-px * depth).toFixed(1)}px, ${(-py * depth).toFixed(1)}px, 0)`;
    });
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced()) return;
      const { clientX, clientY } = e;
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        apply(clientX / r.width - 0.5, clientY / r.height - 0.5);
      });
    },
    [apply],
  );

  const onLeave = useCallback(() => {
    cancelAnimationFrame(frame.current);
    apply(0, 0);
  }, [apply]);

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className={className}>
      {children}
    </div>
  );
}
