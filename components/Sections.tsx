import AppLink from "./AppLink";
import HeroTimer from "./HeroTimer";
import Reveal from "./Reveal";
import { FAQ, STEPS } from "@/lib/content";

const Logo = () => <a href="#top" className="flex items-center gap-2 font-display text-[1.4rem] font-extrabold no-underline"><i className="logo-i inline-block size-3.5 bg-acc" />Nexus</a>;

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b-[1.5px] border-ln bg-bg">
      <div className="w flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Primary" className="flex items-center gap-6">
          {[["#features", "Features"], ["#how", "How it works"], ["#faq", "FAQ"]].map(([h, t]) => <a key={h} href={h} className="hidden text-[15px] hover:underline md:inline">{t}</a>)}
          <AppLink className="btn btn-sm" />
        </nav>
      </div>
    </header>
  );
}

const Pips = ({ p, x = 0, e = 0 }: { p: number; x?: number; e?: number }) => (
  <span className="flex items-center gap-1">
    {Array.from({ length: p }).map((_, i) => <s key={i} className="inline-block size-3.5 border-[1.5px] border-current bg-current no-underline" />)}
    {Array.from({ length: x }).map((_, i) => <s key={i} className="pip-x inline-block size-3.5 border-[1.5px] border-acc bg-acc no-underline" />)}
    {Array.from({ length: e }).map((_, i) => <s key={i} className="inline-block size-3.5 border-[1.5px] border-current no-underline" />)}
  </span>
);

export function Hero() {
  return (
    <section className="hero relative overflow-hidden pb-14 pt-10 md:pb-[72px] md:pt-16">
      <div className="fl pointer-events-none absolute inset-0" aria-hidden><i className="a" /><i className="b" /><i className="c" /><b className="d">+</b></div>
      <div className="w relative z-[1] grid items-center gap-9 md:grid-cols-[1.05fr_.95fr] md:gap-14">
        <div>
          <h1 className="up text-[clamp(2.4rem,6vw,4.4rem)] font-extrabold">Add a task. Start a session. <span className="hl">Skip the setup.</span></h1>
          <p className="up mb-[30px] mt-[22px] max-w-[34ch] text-[1.2rem] text-mut [animation-delay:.12s]">Nexus is a focus to-do list that needs no signup, shows how long your tasks really take, and keeps your session in step across web and mobile.</p>
          <div className="up flex flex-wrap gap-3.5 [animation-delay:.24s]"><AppLink /><a href="#how" className="btn btn-ghost">See how it works</a></div>
          <p className="up mt-[18px] text-sm text-mut [animation-delay:.36s]">No account required to start. Link one later only if you want sync.</p>
        </div>
        <div role="img" aria-label="Example Nexus screen: a task list with planned and used sessions, and a running timer" className="border-[1.5px] border-ln bg-surf shadow-[8px_8px_0_var(--ln)]">
          <div className="mono flex justify-between border-b-[1.5px] border-ln px-3.5 py-2.5"><span>Today</span><span>Example data</span></div>
          <div className="p-[18px]">
            <div className="-mx-3 mb-1 grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 bg-dk p-3 text-dkfg"><b className="font-semibold">Write project spec</b><Pips p={1} x={2} /><span className="mono !text-dkfg opacity-70">Planned 1 · Used 3</span></div>
            <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 border-b border-ln py-3"><b className="font-semibold">Reply to client</b><Pips p={1} /><span className="mono">Planned 1 · Used 1</span></div>
            <div className="grid grid-cols-[1fr_auto] gap-x-3 gap-y-1 py-3"><b className="font-semibold">Fix login bug</b><Pips p={0} e={2} /><span className="mono">Planned 2 · Not started</span></div>
            <div className="mt-3 flex items-center justify-between border-[1.5px] border-ln px-3.5 py-3"><div><div className="mono">Focus session</div><HeroTimer /></div><span className="mono">Break next</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Strip() {
  const t = "No signup ✚ Add a task ✚ Start a session ✚ See what it really took ✚ Web and mobile ✚ ";
  return (
    <>
      <div className="mono overflow-hidden border-t-[1.5px] border-ln bg-dk !text-dkfg" aria-hidden><div className="mq inline-block whitespace-nowrap py-3 !text-dkfg">{t.repeat(8)}&nbsp;</div></div>
      <div className="border-y-[1.5px] border-ln bg-surf"><div className="w grid md:grid-cols-3">
        {[["No signup wall", "Open it and start"], ["Actual time, not guesses", "Per task, per session"], ["One state everywhere", "Web and mobile"]].map(([a, b], i) => (
          <Reveal key={a} delay={i * 0.1} className="px-6 py-[22px] md:[&:not(:first-child)]:border-l-[1.5px] border-ln max-md:[&:not(:first-child)]:border-t-[1.5px]"><b className="block font-semibold">{a}</b><span className="mono">{b}</span></Reveal>
        ))}
      </div></div>
    </>
  );
}

const Row = ({ k, title, text, rev, children }: { k: string; title: string; text: string; rev?: boolean; children: React.ReactNode }) => (
  <Reveal className="mt-12 grid items-center gap-9 first-of-type:mt-12 md:mt-[72px] md:grid-cols-2 md:gap-14">
    <div className={rev ? "md:order-2" : ""}><div className="mb-2.5 font-display font-extrabold text-acc">{k}</div><h3 className="text-[1.9rem] font-semibold">{title}</h3><p className="mt-3.5 max-w-[44ch] text-mut">{text}</p></div>
    {children}
  </Reveal>
);

export function Features() {
  const bar = (p: number, a: number) => <div><div className="gb" style={{ width: `${p}%` }} /><div className="gb a mt-1" style={{ width: `${a}%` }} /></div>;
  return (
    <section id="features" className="ring-f sq-f relative overflow-hidden py-[60px] md:py-[88px]"><div className="w relative z-[1]">
      <h2 className="max-w-[16ch] text-[clamp(1.9rem,4vw,3rem)] font-extrabold">Built for the moment you decide to work</h2>
      <Row k="A" title="You land on a list, not a dashboard" text="Most focus apps ask you to create an account, pick settings and tour a dashboard before you work. Nexus opens straight to your task list with a start button. Add a task, press start.">
        <div className="card"><div className="mono">Time to first session</div>
          {[["Open", "1"], ["Add task", "2"], ["Start", "3"]].map(([a, n], i) => <div key={a} className="my-3 grid grid-cols-[90px_1fr] items-center gap-2.5"><span>{a}</span><span className={`mono ${i === 2 ? "!text-acc" : ""}`}>{n}</span></div>)}
          <div className="mono mt-2.5">Three actions. No sign-up step.</div></div>
      </Row>
      <Row rev k="B" title="See why your plans keep running over" text="Nexus records how long each task actually takes and how many sessions it needed. Set against your own estimate, the gap shows where you consistently underestimate, so the next plan is based on evidence.">
        <div className="card"><div className="mono">Planned vs actual sessions · example</div>
          {[["Spec", 30, 90], ["Bug fix", 40, 60]].map(([n, p, a]) => <div key={n} className="my-3 grid grid-cols-[90px_1fr] items-center gap-2.5"><span>{n}</span>{bar(p as number, a as number)}</div>)}
          <div className="mono mt-2.5">Black: planned · Red: actual</div></div>
      </Row>
      <Row k="C" title="Pick up on the other device where you left off" text="Your task, running session, break state and history behave the same on web and mobile. If your connection drops, Nexus recovers when it returns. Accounts are optional and only needed to link devices.">
        <div className="card"><table className="w-full border-collapse text-[15px]"><thead><tr>{["Carries across", "Web", "Mobile"].map((h) => <th key={h} className="mono border-b border-ln px-1.5 py-2.5 text-left">{h}</th>)}</tr></thead>
          <tbody>{["Tasks", "Active session", "Break state", "History"].map((r) => <tr key={r}><td className="border-b border-ln px-1.5 py-2.5 font-medium">{r}</td><td className="border-b border-ln px-1.5 py-2.5 font-bold text-acc">✓</td><td className="border-b border-ln px-1.5 py-2.5 font-bold text-acc">✓</td></tr>)}</tbody></table></div>
      </Row>
    </div></section>
  );
}

export function HowItWorks() {
  return (
    <section id="how" className="ring-d relative overflow-hidden bg-dk py-[60px] text-dkfg md:py-[88px]"><div className="w relative z-[1]">
      <div className="mono !text-dkfg opacity-75">How it works</div>
      <h2 className="mt-2.5 text-[clamp(1.9rem,4vw,3rem)] font-extrabold">Four steps, none of them setup</h2>
      <div className="mt-11 grid border-[1.5px] border-dkfg sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.1} className="group border-dkfg p-5 transition-colors hover:bg-acc sm:[&:nth-child(n+3)]:border-t-[1.5px] lg:[&:nth-child(n+3)]:border-t-0 [&:not(:first-child)]:border-t-[1.5px] sm:[&:not(:first-child)]:border-t-0 sm:[&:nth-child(even)]:border-l-[1.5px] lg:[&:not(:first-child)]:border-l-[1.5px]">
            <b className="mb-3.5 block font-display text-[2.6rem] font-extrabold leading-none text-acc group-hover:text-dk">{i + 1}</b>
            <h3 className="mb-2 text-xl font-semibold">{t}</h3><p className="text-[15px] opacity-75">{d}</p>
          </Reveal>
        ))}
      </div>
    </div></section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden flex item-center py-[60px] md:py-[88px]"><div className="w relative z-[1]">
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold">Questions, answered</h2>
      <div className="mt-9 max-w-[760px] border-b-[1.5px] border-ln">
        {FAQ.map(([q, a]) => (
          <details key={q} className="border-t-[1.5px] border-ln"><summary className="flex w-[632px] min-h-12 cursor-pointer justify-between gap-4 py-[18px] text-[1.1rem] font-semibold">{q}</summary><p className="max-w-[62ch] pb-5 text-mut">{a}</p></details>
        ))}
      </div>
    </div></section>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-acc py-[88px] text-accfg">
      <div className="rise pointer-events-none absolute inset-0" aria-hidden>{[[6, 0], [17, 2], [29, 5], [41, 1], [53, 6], [65, 3], [78, 7], [91, 4]].map(([l, d]) => <i key={l} style={{ left: `${l}%`, animationDelay: `${d}s` }} />)}</div>
      <div className="w relative z-[1] grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <Reveal>
          <h2 className="max-w-[15ch] text-[clamp(1.9rem,4vw,3rem)] font-extrabold">Your first session is a few taps away</h2>
          <p className="mb-[30px] mt-[18px] max-w-[46ch] text-[1.15rem]">Open Nexus, add the one thing you need to finish, and start. You can see how long it really took when you are done.</p>
          <AppLink className="btn !border-accfg !bg-accfg !text-acc !shadow-[4px_4px_0_var(--dk)]" />
        </Reveal>
        <svg viewBox="0 0 360 400" role="img" aria-label="Illustration of a phone showing a task, a running timer and a Start button being tapped" className="h-auto w-full max-w-[380px] justify-self-center overflow-visible [&_text]:font-mono [&_text]:text-xs">
          <rect x="84" y="34" width="220" height="350" fill="var(--dk)" />
          <rect x="70" y="20" width="220" height="350" fill="var(--bg)" stroke="var(--dk)" strokeWidth="5" />
          <text x="90" y="50" fill="var(--mut)">TODAY</text>
          <rect x="90" y="62" width="180" height="40" fill="var(--dk)" /><rect x="100" y="74" width="16" height="16" fill="none" stroke="var(--bg)" strokeWidth="3" /><text x="126" y="87" fill="var(--bg)">WRITE SPEC</text>
          <rect x="90" y="110" width="180" height="30" fill="none" stroke="var(--dk)" strokeWidth="2" strokeDasharray="6 5" /><text x="100" y="130" fill="var(--mut)">+ ADD A TASK</text>
          <circle cx="180" cy="214" r="58" fill="var(--surf)" stroke="var(--dk)" strokeWidth="5" />
          <path d="M180 164v10M180 254v10M130 214h10M220 214h10" stroke="var(--dk)" strokeWidth="3" />
          <path className="hand" d="M180 214V176" stroke="#C8321A" strokeWidth="5" strokeLinecap="round" /><circle cx="180" cy="214" r="6" fill="var(--dk)" />
          <text x="156" y="250" fill="var(--mut)">25:00</text>
          <rect x="110" y="300" width="140" height="44" fill="#C8321A" stroke="var(--dk)" strokeWidth="3" /><text x="153" y="327" fill="#fff">START</text>
          <g className="bob"><circle cx="236" cy="338" r="9" fill="var(--accfg)" stroke="var(--dk)" strokeWidth="3" /></g>
          <circle className="rip" cx="236" cy="338" r="16" fill="none" stroke="var(--accfg)" strokeWidth="3" /><circle className="rip b" cx="236" cy="338" r="16" fill="none" stroke="var(--accfg)" strokeWidth="3" />
          <path className="spin" d="M322 70C324 90 330 96 350 98 330 100 324 106 322 126 320 106 314 100 294 98 314 96 320 90 322 70Z" fill="var(--accfg)" />
          <g className="bob" fill="none" stroke="var(--accfg)" strokeWidth="4"><circle cx="30" cy="300" r="12" /><circle cx="44" cy="340" r="7" /></g>
        </svg>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-10 pb-12"><div className="w flex flex-wrap justify-between gap-6 text-sm">
      <div><Logo /><p className="mt-2 max-w-[32ch] text-mut">A focus to-do list for web and mobile.</p></div>
      <ul className="flex flex-wrap gap-5" aria-label="Footer">
        {[["#features", "Features"], ["#how", "How it works"], ["#faq", "FAQ"]].map(([h, t]) => <li key={h}><a href={h}>{t}</a></li>)}
        <li className="text-mut">Privacy policy (not yet published)</li><li className="text-mut">Terms (not yet published)</li>
      </ul>
      <div className="text-mut">© 2026 Nexus</div>
    </div></footer>
  );
}
