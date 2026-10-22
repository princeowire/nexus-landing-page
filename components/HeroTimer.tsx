"use client";
import { useEffect, useState } from "react";
export default function HeroTimer() {
  const [s, setS] = useState(1122);
  useEffect(() => { const i = setInterval(() => setS((v) => (v <= 0 ? 1500 : v - 1)), 1000); return () => clearInterval(i); }, []);
  return <strong className="font-display text-[2.2rem] font-extrabold">{String(Math.floor(s / 60)).padStart(2, "0")}:{String(s % 60).padStart(2, "0")}</strong>;
}
