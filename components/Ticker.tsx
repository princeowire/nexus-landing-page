"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const SW = { fill: "none", stroke: "currentColor", strokeWidth: 6, strokeLinecap: "round" as const };
const ICONS: Record<string, React.ReactNode> = {
  play: <svg className="ic g2" viewBox="0 0 100 100"><rect x="4" y="4" width="92" height="92" fill="currentColor" /><path d="M38 28v44l36-22z" fill="var(--dk)" /></svg>,
  sw: <svg className="ic w2 g1" viewBox="0 0 240 60" style={{ width: "calc(var(--s)*1.4)", height: "auto" }}><path className="sw" d="M2 40C60-10 120 80 238 20" {...SW} /></svg>,
  sp: <svg className="ic g2" viewBox="0 0 100 100"><path className="spin" d="M50 0C54 36 64 46 100 50 64 54 54 64 50 100 46 64 36 54 0 50 36 46 46 36 50 0Z" fill="currentColor" /></svg>,
  st: <svg className="ic g2" viewBox="0 0 100 100"><circle cx="50" cy="58" r="36" fill="none" stroke="currentColor" strokeWidth="6" /><path d="M40 8h20M50 22v6" stroke="currentColor" strokeWidth="6" /><g className="spin" style={{ transformOrigin: "50px 58px", transformBox: "view-box" }}><path d="M50 58V34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></g></svg>,
  wv: <svg className="ic w2 g2" viewBox="0 0 150 40" style={{ width: "calc(var(--s)*1.1)", height: "auto" }}><path className="sw" d="M0 20q18-26 37.5 0t37.5 0 37.5 0 37.5 0" {...SW} /></svg>,
  rg: <svg className="ic w2 g2" viewBox="0 0 88 60" style={{ width: "calc(var(--s)*.9)", height: "auto" }}><circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="6" /><circle cx="58" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="6" /></svg>,
};
type Item = string | [string, string, string?];
const SEQ: Item[] = [["Open", "g0"], ["Nexus,", "g1", "o"], "play", ["add", "g2"], ["one", "g1"], ["task,", "g1", "o"], "sw", ["start", "g1"], ["a", "g1"], ["focus session,", "g1", "r"], "sp", ["and", "g2"], ["see", "g1"], ["how", "g1"], ["long", "g1"], ["real work", "g1", "r"], ["actually", "g1"], ["takes.", "g1"], "st", ["No signup.", "g2", "o"], "wv", ["Web", "g1"], ["and", "g1"], ["mobile.", "g1"], "rg", ["Done.", "g1", "r"]];
export default function Ticker() {
  const root = useRef<HTMLElement>(null), trk = useRef<HTMLDivElement>(null), pin = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const k = trk.current!, sk = gsap.quickTo(k.querySelectorAll(".wd"), "skewX", { duration: 0.35, ease: "power3" });
    const dist = () => Math.max(0, k.scrollWidth - innerWidth);
    let tm: ReturnType<typeof setTimeout>;
    gsap.to(k, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: pin.current, start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true,
      onUpdate: (self) => { sk(gsap.utils.clamp(-10, 10, self.getVelocity() / -150)); clearTimeout(tm); tm = setTimeout(() => sk(0), 120); } } });
  }, { scope: root });
  return (
    <section ref={root} className="tape overflow-hidden border-y-[1.5px] border-ln bg-dk text-dkfg" aria-label="Brand statement">
      <p className="sr-only">Open Nexus, add one task, start a focus session, and see how long real work actually takes. No signup. Web and mobile. Done.</p>
      <div ref={pin} className="pin relative flex h-screen min-h-[520px] items-center">
        <div className="mono absolute left-6 top-6 !text-dkfg opacity-70">Keep scrolling →</div>
        <div ref={trk} aria-hidden className="flex items-center whitespace-nowrap px-[8vw] will-change-transform">
          {SEQ.map((x, i) => typeof x === "string" ? <span key={i} className="contents">{ICONS[x]}</span> :
            <span key={i} className={`wd ${x[1]} ${x[2] ?? ""}`} style={x[0] === "Done." ? { paddingRight: "12vw" } : undefined}>{x[0]}</span>)}
        </div>
      </div>
    </section>
  );
}
