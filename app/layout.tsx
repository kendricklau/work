import type React from "react"
import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata = {
  title: "Work — Minimal designs for modern professionals",
  description: "Premium bags designed with intention for the modern professional.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}

