import "./globals.css";
import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = {
  title: "Health Behaviors Care Planner — ADA Standards of Care 2026, Section 5",
  description: "Person-centered planning for DSMES, nutrition, activity, sleep, tobacco cessation and psychosocial care."
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>);
}
