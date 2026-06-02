import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-violet-400">AURA</h3>
            <p className="text-gray-300 leading-relaxed">
              Perfumería joven para quienes buscan expresar su identidad a través del aroma. Fragancias femeninas, masculinas y unisex.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-violet-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-violet-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-violet-400">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-violet-400">Enlaces Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#inicio" className="text-gray-300 hover:text-violet-400 transition-colors">
                Inicio
              </a>
              <a href="#nosotros" className="text-gray-300 hover:text-violet-400 transition-colors">
                Nosotros
              </a>
              <a href="#catalogo" className="text-gray-300 hover:text-violet-400 transition-colors">
                Catálogo
              </a>
              <a href="#contacto" className="text-gray-300 hover:text-violet-400 transition-colors">
                Contacto
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-violet-400">Categorías</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Perfumes para Hombre
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Perfumes para Mujer
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Fragancias Unisex
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Ediciones Limitadas
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Ofertas Especiales
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-violet-400">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-violet-400" />
                <span className="text-gray-300">
                  Av. Perfumes 123, Centro Comercial Luxury
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-violet-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-violet-400" />
                <span className="text-gray-300">hola@aurascents.com</span>
              </div>
            </div>

            <div className="pt-4">
              <h5 className="text-sm font-semibold text-violet-400 mb-2">Horarios de Atención</h5>
              <p className="text-gray-300 text-sm">
                Lun - Vie: 9:00 AM - 8:00 PM<br />
                Sáb - Dom: 10:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2025 AURA — Perfumería Joven. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors">
                Envíos y Devoluciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}