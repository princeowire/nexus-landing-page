"use client";
import { useState } from "react";
import { APP_URL } from "@/lib/content";
export default function AppLink({ className = "btn", children = "Open Nexus" }: { className?: string; children?: React.ReactNode }) {
  const [msg, setMsg] = useState(false);
  if (APP_URL) return <a href={APP_URL} className={className}>{children}</a>;
  return (
    <>
      <a href="#" className={className} onClick={(e) => { e.preventDefault(); setMsg(true); setTimeout(() => setMsg(false), 3500); }}>{children}</a>
      <div role="status" className={`fixed bottom-5 left-1/2 z-30 max-w-[90vw] -translate-x-1/2 bg-ink px-[18px] py-3 text-sm text-bg transition-opacity ${msg ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        {msg ? "coming soon." : ""}
      </div>
    </>
  );
}
