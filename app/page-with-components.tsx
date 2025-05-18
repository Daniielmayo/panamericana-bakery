import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin } from "lucide-react"
import Header from "./components/header"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Freshly baked bread"
              fill
              className="object-cover brightness-[0.85]"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-2xl text-white">
              <h1 className="font-brand text-5xl md:text-6xl font-bold mb-2">Tradición y sabor desde 2006</h1>
              <p className="text-xl mb-4 text-secondary font-brand font-bold">Frescura y Sabor</p>
              <p className="text-lg mb-8">18 años horneando con pasión y dedicación en La Dorada, Caldas</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#products"
                  className="bg-primary rounded-sm hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                >
                  Nuestros Productos
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#location"
                  className="bg-secondary hover:bg-secondary/90 text-gray-800 px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
                >
                  Visítanos
                  <MapPin className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same as in page.tsx */}
        {/* ... */}
      </main>

      {/* Footer remains the same as in page.tsx */}
      {/* ... */}
    </div>
  )
}
