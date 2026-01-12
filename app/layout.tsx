import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Inter, Cormorant_Garamond, Inconsolata } from "next/font/google"

// Initialize fonts
const _inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})
const _cormorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Marcia Glow Studio | Premium Hair & Nail Salon",
  description:
    "Experience professional hair styling, treatments, manicure & pedicure services at Marcia Glow Studio. Book your appointment today.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
