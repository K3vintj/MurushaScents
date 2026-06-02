import { Button } from "./ui/button";

interface HeroProps {
  onNavigateToProduct?: () => void;
}

export function Hero({ onNavigateToProduct }: HeroProps) {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1580951830551-abe9be6a7f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwaGVybyUyMGJhbm5lciUyMGx1eHVyeXxlbnwxfHx8fDE3NTgxNzQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          HypeScents
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Tu esencia, tu estilo
        </p>
        <p className="text-lg mb-10 text-gray-300 max-w-2xl mx-auto">
          Descubre nuestra exclusiva colección de perfumes de las marcas más prestigiosas del mundo. 
          Encuentra la fragancia que define tu personalidad.
        </p>
        <Button 
          size="lg" 
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          onClick={onNavigateToProduct}
        >
          Explorar Perfumes
        </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}