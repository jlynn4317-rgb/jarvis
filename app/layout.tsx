import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GeekerBoogin Lab HQ",
  description: "The underground operating system for signal, content, and growth.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body>{children}</body></html>
}
