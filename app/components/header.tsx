"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-2">
              <Image
                src="/logoPanamericana.png?height=40&width=40"
                alt="Panamericana Logo"
                width={40}
                height={40}
                className="h-8 w-8"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="font-brand rounded-lg text-gray-800 hover:text-primary transition-colors px-4">
              Nosotros
            </Link>
            <Link href="#products" className="font-brand rounded-lg text-gray-800 hover:text-primary transition-colors px-4">
              Productos
            </Link>
            <Link href="#restaurant" className="font-brand rounded-lg text-gray-800 hover:text-primary transition-colors px-4">
              Restaurante
            </Link>
            <Link href="#location" className="font-brand rounded-lg text-gray-800 hover:text-primary transition-colors px-4">
              Ubicación
            </Link>
          </nav>
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
