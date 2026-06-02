import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { QuickView } from "./QuickView";
import { useCart } from "./CartContext";
import { toast } from "sonner@2.0.3";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  notes: string[];
  category: string;
  gender: string;
  isNew?: boolean;
  isOnSale?: boolean;
}

export function ProductCard({ 
  id,
  name, 
  brand, 
  price, 
  originalPrice, 
  image, 
  description, 
  notes, 
  category,
  gender,
  isNew, 
  isOnSale 
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickView, setShowQuickView] = useState(false);
  const { addToCart } = useCart();

  const product = {
    id,
    name,
    brand,
    price,
    originalPrice,
    image,
    description,
    notes,
    category,
    gender,
    isNew,
    isOnSale
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    
    addToCart({
      id,
      name,
      brand,
      price,
      image
    });

    toast.success(`${brand} ${name} agregado al carrito`, {
      description: "Puedes ver tu carrito haciendo clic en el ícono del carrito",
    });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
  };

  const handleQuickView = () => {
    setShowQuickView(true);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${brand} ${name}`}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && <Badge className="bg-emerald-500 text-white">Nuevo</Badge>}
          {isOnSale && <Badge className="bg-red-500 text-white">Oferta</Badge>}
        </div>

        {/* Favorite button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
        </Button>

        {/* Overlay with quick actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            variant="secondary" 
            className="bg-white text-gray-900 hover:bg-gray-100"
            onClick={handleQuickView}
          >
            Vista Rápida
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-3">
          <div>
            <p className="text-sm text-amber-600 font-medium">{brand}</p>
            <h3 className="font-serif text-lg text-gray-900 group-hover:text-amber-600 transition-colors">
              {name}
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="space-y-2">
            <p className="text-xs text-gray-500">Notas principales:</p>
            <div className="flex flex-wrap gap-1">
              {notes.slice(0, 3).map((note, index) => (
                <span 
                  key={index} 
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-serif text-gray-900">
                ${price.toLocaleString()}
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>

          <Button 
            className="w-full bg-gray-900 hover:bg-amber-600 text-white transition-colors duration-300"
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Agregando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                Agregar al Carrito
              </div>
            )}
          </Button>
        </div>
      </CardContent>

      <QuickView 
        product={product}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
      />
    </Card>
  );
}