import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Clock, Phone } from "lucide-react"
import Header from "./components/header"
import { Button } from "@/components/ui/button"

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
                  className="bg-primary/80 border-2 border-white backdrop-blur-sm hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium inline-flex items-center transition-colors"
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
                <Button>
                  Visítanos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Ubicación - Versión unificada */}
        <section id="location" className="relative py-16 px-4 bg-gradient-to-b from-primary/10 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="font-brand text-3xl md:text-4xl font-bold text-primary mb-4">Encuéntranos</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Visita nuestra panadería en el corazón de La Dorada</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6">
              {/* Columna de Información */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-brand font-bold text-lg text-gray-800 mb-1">Dirección</h3>
                    <p className="text-gray-600">Calle Principal #123<br />La Dorada, Caldas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-brand font-bold text-lg text-gray-800 mb-1">Horario</h3>
                    <p className="text-gray-600">Lunes a Sábado: 6AM - 8PM<br />Domingo: 7AM - 2PM</p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <Button variant="outline" className="gap-2">
                    <Phone className="h-4 w-4" />
                    Llamar ahora
                  </Button>
                  <Button className="bg-secondary hover:bg-secondary/90 gap-2">
                    <MapPin className="h-4 w-4" />
                    Cómo llegar
                  </Button>
                </div>
              </div>

              {/* Columna del Mapa */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <iframe
                  src="https://www.google.com/maps?q=5.4528557,-74.66424&z=16&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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
