import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "./ui/button";
import { Cart } from "./Cart";

type Page = "inicio" | "nosotros" | "catalogo";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getNavItemClasses = (page: Page) => {
    const baseClasses = "transition-colors cursor-pointer";
    return currentPage === page 
      ? `${baseClasses} text-violet-600 font-medium`
      : `${baseClasses} text-gray-700 hover:text-violet-600`;
  };

  const handleMobileNavigation = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const handleMobileContact = () => {
    scrollToFooter();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate("inicio")}>
          <h1 className="text-2xl font-serif font-medium text-gray-900">AURA</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <span 
            className={getNavItemClasses("inicio")}
            onClick={() => onNavigate("inicio")}
          >
            Inicio
          </span>
          <span 
            className={getNavItemClasses("nosotros")}
            onClick={() => onNavigate("nosotros")}
          >
            Nosotros
          </span>
          <span 
            className={getNavItemClasses("catalogo")}
            onClick={() => onNavigate("catalogo")}
          >
            Catálogo
          </span>
          <span 
            className="text-gray-700 hover:text-violet-600 transition-colors cursor-pointer"
            onClick={scrollToFooter}
          >
            Contacto
          </span>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex hover:text-violet-600">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-violet-600">
            <User className="h-5 w-5" />
          </Button>
          <Cart>
            <Button variant="ghost" size="icon" className="hover:text-violet-600">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Cart>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <span 
              className={`block ${getNavItemClasses("inicio")}`}
              onClick={() => handleMobileNavigation("inicio")}
            >
              Inicio
            </span>
            <span 
              className={`block ${getNavItemClasses("nosotros")}`}
              onClick={() => handleMobileNavigation("nosotros")}
            >
              Nosotros
            </span>
            <span 
              className={`block ${getNavItemClasses("catalogo")}`}
              onClick={() => handleMobileNavigation("catalogo")}
            >
              Catálogo
            </span>
            <span 
              className="block text-gray-700 hover:text-violet-600 transition-colors cursor-pointer"
              onClick={handleMobileContact}
            >
              Contacto
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}