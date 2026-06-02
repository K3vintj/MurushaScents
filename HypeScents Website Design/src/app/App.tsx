import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ProductGrid } from "./components/ProductGrid";
import { Footer } from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { Toaster } from "./components/ui/sonner";

type Page = "inicio" | "nosotros" | "catalogo";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("inicio");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "inicio":
        return <Hero onNavigateToProduct={() => setCurrentPage("catalogo")} />;
      case "nosotros":
        return <About />;
      case "catalogo":
        return <ProductGrid />;
      default:
        return <Hero onNavigateToProduct={() => setCurrentPage("catalogo")} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="min-h-[calc(100vh-140px)]">
          {renderCurrentPage()}
        </main>
        <Footer />
        <Toaster />
      </div>
    </CartProvider>
  );
}