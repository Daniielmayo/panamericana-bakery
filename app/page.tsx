import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className=" rounded-full p-2">
              <Image
                src="/logoPanamericana.png?height=100&width=40"
                alt="Panamericana Logo"
                width={40}
                height={40}
                className=" w-[10rem] h-[6rem] object-contain"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="font-brand text-gray-800 hover:text-primary transition-colors">
              Nosotros
            </Link>
            <Link href="#products" className="font-brand text-gray-800 hover:text-primary transition-colors">
              Productos
            </Link>
            <Link href="#restaurant" className="font-brand text-gray-800 hover:text-primary transition-colors">
              Restaurante
            </Link>
            <Link href="#location" className="font-brand text-gray-800 hover:text-primary transition-colors">
              Ubicación
            </Link>
          </nav>
          <button className="md:hidden">
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

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/banner.webp?height=1080&width=1920"
              alt="Freshly baked bread"
              fill
              className="object-cover brightness-[0.95] rounded-[10px]"
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
                  className="bg-primary rounded-[8px]  hover:bg-primary/90 text-white px-6 py-3  font-medium inline-flex items-center transition-colors"
                >
                  Nuestros Productos
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#location"
                  className="bg-secondary rounded-[8px] hover:bg-secondary/90 text-gray-800 px-6 py-3  font-medium inline-flex items-center transition-colors"
                >
                  Visítanos
                  <MapPin className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="font-brand text-3xl md:text-4xl font-bold text-primary mb-6">Nuestra Historia</h2>
                <p className="text-gray-700 mb-4">
                  Desde 2006, Panamericana ha sido el corazón de la tradición panadera en La Dorada. Lo que comenzó como
                  un pequeño negocio familiar, se ha convertido en un referente de calidad y sabor en nuestra comunidad.
                </p>
                <p className="text-gray-700 mb-6">
                  Mantenemos vivas las técnicas artesanales que dan a nuestros productos ese sabor inconfundible,
                  mientras incorporamos toques modernos para satisfacer los gustos contemporáneos.
                </p>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <span className="text-4xl font-bold text-primary">18</span>
                  </div>
                  <span className="text-lg font-brand">
                    años de tradición
                    <br />y excelencia
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 relative h-80 md:h-96 w-full rounded-[18px] overflow-hidden">
                <Image
                  src="/about.jpg?height=600&width=800"
                  alt="Panadería Panamericana a través de los años"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Nuestros Productos
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Elaborados con ingredientes frescos y técnicas tradicionales para garantizar la mejor calidad y sabor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Bread Category */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 relative">
                  <Image
                    src="/panes.jpg?height=400&width=600"
                    alt="Variedad de panes artesanales"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-brand text-xl font-bold text-primary mb-2">Panes</h3>
                  <p className="text-gray-600 mb-4">
                    Elaborados con masa madre y horneados en horno de piedra para lograr ese sabor tradicional.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Ver variedades
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Pastries Category */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 relative">
                  <Image
                    src="/pasteleria.jpg?height=400&width=600"
                    alt="Pasteles y postres"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-brand text-xl font-bold text-primary mb-2">Pasteles y Postres</h3>
                  <p className="text-gray-600 mb-4">
                    Dulces creaciones que combinan sabores tradicionales con presentaciones modernas.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Ver variedades
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Restaurant Category */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 relative">
                  <Image
                    src="/restaurante.jpg?height=400&width=600"
                    alt="Servicio de restaurante"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-brand text-xl font-bold text-primary mb-2">Restaurante</h3>
                  <p className="text-gray-600 mb-4">
                    Disfruta de nuestro menú de desayunos y almuerzos preparados con ingredientes frescos.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Ver menú
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Beverages Category */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 relative">
                  <Image
                    src="/bebidas.jpg?height=400&width=600"
                    alt="Bebidas y cafés"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-brand text-xl font-bold text-primary mb-2">Bebidas y Cafés</h3>
                  <p className="text-gray-600 mb-4">
                    Desde café recién molido hasta jugos naturales para acompañar tus momentos.
                  </p>
                  <Link href="#" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                    Ver opciones
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Productos Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Pan Artesanal"
                    width={80}
                    height={80}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="font-brand text-xl font-bold text-primary mb-2">Pan Campesino</h3>
                <p className="text-gray-600 mb-4">Nuestro pan más vendido, con corteza crujiente y miga suave.</p>
                <span className="text-primary font-bold">$5.000</span>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Croissant"
                    width={80}
                    height={80}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="font-brand text-xl font-bold text-primary mb-2">Croissant Clásico</h3>
                <p className="text-gray-600 mb-4">Horneado diariamente, con capas perfectas y mantequilla francesa.</p>
                <span className="text-primary font-bold">$3.500</span>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt="Café"
                    width={80}
                    height={80}
                    className="h-16 w-16"
                  />
                </div>
                <h3 className="font-brand text-xl font-bold text-primary mb-2">Café Especial</h3>
                <p className="text-gray-600 mb-4">
                  Café colombiano de origen único, tostado en nuestras instalaciones.
                </p>
                <span className="text-primary font-bold">$4.000</span>
              </div>
            </div>
          </div>
        </section>

        {/* Restaurant Section */}
        <section id="restaurant" className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="font-brand text-3xl md:text-4xl font-bold mb-6">Nuestro Restaurante</h2>
                <p className="mb-4">
                  Más que una panadería, somos un espacio donde puedes disfrutar de deliciosos desayunos, almuerzos y
                  meriendas en un ambiente acogedor.
                </p>
                <p className="mb-6">
                  Nuestro menú combina recetas tradicionales con toques modernos, utilizando ingredientes frescos y de
                  temporada.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 p-4 rounded-[8px]">
                    <h3 className="font-brand font-medium text-lg mb-2">Desayunos</h3>
                    <p className="text-white/80">Disponibles desde las 6:00 AM</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-[8px]">
                    <h3 className="font-brand font-medium text-lg mb-2">Almuerzos</h3>
                    <p className="text-white/80">Menú diario de 12:00 PM a 3:00 PM</p>
                  </div>
                </div>
                <Link
                  href="#"
                  className="bg-secondary text-gray-800 hover:bg-secondary/90 px-6 py-3 rounded-[8px] font-medium inline-flex items-center transition-colors"
                >
                  Ver Menú Completo
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="md:w-1/2  relative h-80 md:h-96 w-full rounded-[18px] overflow-hidden order-1 md:order-2">
                <Image
                  src="/RESTAURANTE2.jpeg?height=600&width=800"
                  alt="Interior del restaurante Panamericana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    MC
                  </div>
                  <div>
                    <h3 className="font-brand font-medium">María Castillo</h3>
                    <p className="text-sm text-gray-500">Cliente desde 2010</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "El pan de Panamericana es parte de nuestra mesa familiar desde hace años. Su calidad nunca cambia y
                  siempre encuentro mis favoritos."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    JR
                  </div>
                  <div>
                    <h3 className="font-brand font-medium">Juan Ramírez</h3>
                    <p className="text-sm text-gray-500">Cliente desde 2015</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Los desayunos son increíbles, especialmente los fines de semana. El ambiente es perfecto para
                  reunirse con amigos o familia."
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    LP
                  </div>
                  <div>
                    <h3 className="font-brand font-medium">Laura Pérez</h3>
                    <p className="text-sm text-gray-500">Cliente desde 2018</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Sus pasteles son obras de arte, no solo son hermosos sino que saben increíble. Siempre los encargo
                  para ocasiones especiales."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="py-20 h-auto bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="font-brand text-3xl md:text-4xl font-bold text-center text-primary mb-12">Encuéntranos</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-brand text-xl font-bold text-primary mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-brand font-medium">Dirección</p>
                      <p className="text-gray-600">Calle 14 con Cra. 4 – Centro de La Dorada, Caldas.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-brand font-medium">Teléfono</p>
                      <p className="text-gray-600">68370239</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <p className="font-brand font-medium">Horario</p>
                      <p className="text-gray-600">Abierto 24/7</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-brand text-xl font-bold text-primary mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    <Link
                      href="#"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="#"
                      className="bg-primary/10 hover:bg-primary/20 text-primary p-3 rounded-full transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 rounded-xl">
                {/* This would be replaced with an actual map component */}
                <section id="location" className="w-full h-full">
                  <div className="container mx-auto max-w-4xl">
                    {/* <h2 className="text-3xl font-bold text-center mb-8">Nuestra Ubicación</h2> */}
                    <div className="w-full h-full rounded-[8px] max-w-4xl mx-auto  overflow-hidden shadow-lg">
                      <a
                        href="https://www.google.com/maps/place/Panadería+Panamericana,+La+Dorada,+Caldas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <iframe
                          src="https://www.google.com/maps?q=5.4528557,-74.66424&z=20&output=embed"
                          width="100%"
                          height="400"
                          style={{ border: "0" }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                      </a>
                    </div>

                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
 
        {/* Newsletter/Contact Section */}
        <section className="py-16 bg-secondary text-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-brand text-3xl font-bold mb-4">Mantente Conectado</h2>
              <p className="mb-8">
                Suscríbete para recibir noticias sobre nuestros productos, eventos especiales y promociones.
              </p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="flex-grow px-4 py-3 rounded-[8px] text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary rounded-[8px] hover:bg-primary/90 text-white px-6 py-3 font-medium transition-colors whitespace-nowrap"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">

                <Image
                  src="/whiteLogo.png?height=500&width=250"
                  alt="Panamericana Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />

              </div>
              <p className="max-w-xs text-gray-400">
                18 años de tradición panadera en La Dorada, Caldas. Horneando con pasión desde 2006.
              </p>
              <p className="mt-2 text-secondary font-brand font-bold">Frescura y Sabor</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-brand font-medium text-white mb-4">Enlaces Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="#products" className="text-gray-400 hover:text-white transition-colors">
                      Productos
                    </Link>
                  </li>
                  <li>
                    <Link href="#restaurant" className="text-gray-400 hover:text-white transition-colors">
                      Restaurante
                    </Link>
                  </li>
                  <li>
                    <Link href="#location" className="text-gray-400 hover:text-white transition-colors">
                      Ubicación
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-brand font-medium text-white mb-4">Productos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Panes
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Pasteles
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Desayunos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Almuerzos
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-brand font-medium text-white mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Términos
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                      Privacidad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Panadería Panamericana. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
