export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "";
export const FAQ = [
  ["Do I need an account?", "No. You can open Nexus, add a task and start a session without signing up. Linking an account is optional and is what lets your data follow you between devices."],
  ["How does Nexus know how long a task takes?", "It records the sessions you run against each task. That actual time is compared with the number of sessions you planned, so you can see how far your estimates drift."],
  ["What carries over between web and mobile?", "Your tasks, active session, break state and history are designed to behave the same on both. Linking an account is how devices connect."],
  ["What happens if I lose my connection mid-session?", "Nexus is built to recover your session when you are back online, so a dropped connection does not wipe out your work."],
  ["Who is it for?", "Anyone who wants a quick, no-fuss way to focus on one task at a time and get honest about how long their work takes."],
] as const;
export const STEPS = [
  ["Open", "Go to Nexus on web or mobile. No account needed."],
  ["Add a task", "Type it in, with a guess at how many sessions it needs."],
  ["Start a session", "Work in focused blocks, with breaks tracked for you."],
  ["Compare", "See what the task really took against your guess."],
] as const;
