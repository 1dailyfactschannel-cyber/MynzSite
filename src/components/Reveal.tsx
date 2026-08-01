"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Задержка перед появлением, мс */
  delay?: number;
  /** Смещение снизу перед появлением, px */
  y?: number;
};

/**
 * Плавное появление блока при попадании в вьюпорт (IntersectionObserver).
 * Однократно: после показа наблюдение прекращается.
 * При prefers-reduced-motion показывает сразу без анимации.
 */
export default function Reveal({ children, className = "", delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms`, ["--reveal-y" as string]: `${y}px` }}
    >
      {children}
    </div>
  );
}
