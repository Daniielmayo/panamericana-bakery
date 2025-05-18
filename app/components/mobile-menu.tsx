"use client"
import Link from "next/link"
import { X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="container mx-auto px-4 py-4 flex justify-end">
        <button onClick={onClose} className="text-primary">
          <X className="h-6 w-6" />
        </button>
      </div>
      <nav className="container mx-auto px-4 py-8">
        <ul className="space-y-6">
          <li>
            <Link
              href="#about"
              className="font-brand text-2xl text-gray-800 hover:text-primary transition-colors"
              onClick={onClose}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="#products"
              className="font-brand text-2xl text-gray-800 hover:text-primary transition-colors"
              onClick={onClose}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              href="#restaurant"
              className="font-brand text-2xl text-gray-800 hover:text-primary transition-colors"
              onClick={onClose}
            >
              Restaurante
            </Link>
          </li>
          <li>
            <Link
              href="#location"
              className="font-brand text-2xl text-gray-800 hover:text-primary transition-colors"
              onClick={onClose}
            >
              Ubicación
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
