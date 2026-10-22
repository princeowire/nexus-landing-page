import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Fx from "@/components/Fx";
import "./globals.css";
const d = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "800"], variable: "--f-d" });
const s = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-s" });
const m = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500"], variable: "--f-m" });
export const metadata: Metadata = {
  title: "Nexus — A focus to-do list with no signup",
  description: "Open Nexus, add a task, start a focus session. See how long your tasks really take. Same session on web and mobile.",
  openGraph: { title: "Nexus — A focus to-do list with no signup", description: "Add a task and start a session in seconds. Learn how long your work really takes." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${d.variable} ${s.variable} ${m.variable}`}>
      <body className="font-sans text-[17px] leading-relaxed text-ink">{children}<Fx /></body>
    </html>
  );
}
