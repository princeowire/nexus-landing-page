"use client";
import { useEffect, useRef } from "react";
export default function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = r.current!;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || el.getBoundingClientRect().top < innerHeight) return;
    el.classList.add("rv");
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("in"); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return <div ref={r} className={className} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}
