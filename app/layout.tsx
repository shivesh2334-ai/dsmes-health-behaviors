import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Health Behaviors Care Planner — ADA Standards of Care 2026, Section 5",
  description: "Person-centered planning for DSMES, nutrition, activity, sleep, tobacco cessation and psychosocial care."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}
