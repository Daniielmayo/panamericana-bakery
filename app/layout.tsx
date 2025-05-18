import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Panadería Panamericana | Frescura y Sabor desde 2006",
  description:
    "Panadería artesanal en La Dorada, Caldas. Panes, pasteles, restaurante y más. 18 años de tradición y sabor.",
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  themeColor: "#f5730f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
