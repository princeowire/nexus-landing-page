"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Fx() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = gsap.to(".fl", { yPercent: 25, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
    if (!matchMedia("(pointer: fine)").matches) return () => { t.scrollTrigger?.kill(); t.kill(); };
    const g = document.createElement("div"); g.id = "cg"; document.body.appendChild(g);
    const gx = gsap.quickTo(g, "x", { duration: 0.6, ease: "power3" }), gy = gsap.quickTo(g, "y", { duration: 0.6, ease: "power3" });
    const fx = gsap.quickTo(".fl", "x", { duration: 1, ease: "power2" }), fy = gsap.quickTo(".fl", "y", { duration: 1, ease: "power2" });
    const mv = (e: PointerEvent) => { gx(e.clientX - 130); gy(e.clientY - 130); fx((e.clientX / innerWidth - 0.5) * -30); fy((e.clientY / innerHeight - 0.5) * -20); };
    addEventListener("pointermove", mv);
    return () => { removeEventListener("pointermove", mv); g.remove(); t.scrollTrigger?.kill(); t.kill(); };
  }, []);
  return null;
}
