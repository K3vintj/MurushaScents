import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Heart, ShoppingCart, Star, Clock, Droplets, Sparkles } from "lucide-react";
import { useState } from "react";
import { useCart } from "./CartContext";

interface Product {
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

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const usageRecommendations = {
  "Cítrico": {
    icon: <Droplets className="h-4 w-4" />,
    time: "Mañana y día",
    occasion: "Perfecto para el uso diario, oficina y actividades al aire libre",
    season: "Ideal para primavera y verano",
    tips: "Aplica en pulsos después de la ducha para mayor duración"
  },
  "Amaderado": {
    icon: <Sparkles className="h-4 w-4" />,
    time: "Tarde y noche",
    occasion: "Excelente para eventos formales, cenas y ocasiones especiales",
    season: "Perfecto para otoño e invierno",
    tips: "Aplica en puntos de calor como muñecas y cuello"
  },
  "Floral": {
    icon: <Star className="h-4 w-4" />,
    time: "Todo el día",
    occasion: "Ideal para uso romántico, citas y eventos sociales",
    season: "Versátil para todas las estaciones",
    tips: "Rocía ligeramente en el cabello para un aroma sutil"
  },
  "Oriental": {
    icon: <Clock className="h-4 w-4" />,
    time: "Noche",
    occasion: "Perfecto para eventos nocturnos y ocasiones íntimas",
    season: "Ideal para otoño e invierno",
    tips: "Usa con moderación, es una fragancia intensa"
  },
  "Fresco": {
    icon: <Droplets className="h-4 w-4" />,
    time: "Mañana y tarde",
    occasion: "Excelente para deporte, playa y actividades casuales",
    season: "Perfecto para primavera y verano",
    tips: "Reaplicar cada 4-6 horas para mantener la frescura"
  },
  "Dulce": {
    icon: <Heart className="h-4 w-4" />,
    time: "Tarde y noche",
    occasion: "Ideal para citas románticas y eventos sociales",
    season: "Versátil, especialmente acogedor en invierno",
    tips: "Aplica en ropa para prolongar el aroma"
  }
};

export function QuickView({ product, isOpen, onClose }: QuickViewProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    
    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image
    });

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsAddingToCart(false);
  };

  const recommendations = usageRecommendations[product.category as keyof typeof usageRecommendations] || usageRecommendations["Fresco"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={product.image} 
              alt={`${product.brand} ${product.name}`}
              className="w-full h-96 md:h-full object-cover rounded-lg"
            />
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isNew && <Badge className="bg-emerald-500 text-white">Nuevo</Badge>}
              {product.isOnSale && <Badge className="bg-red-500 text-white">Oferta</Badge>}
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
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <DialogHeader>
              <div className="space-y-2">
                <p className="text-amber-600 font-medium">{product.brand}</p>
                <DialogTitle className="text-2xl font-serif">{product.name}</DialogTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant="outline">{product.gender}</Badge>
                </div>
              </div>
            </DialogHeader>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-serif text-gray-900">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h4 className="font-medium mb-2">Descripción</h4>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Notes */}
            <div>
              <h4 className="font-medium mb-3">Notas Principales</h4>
              <div className="flex flex-wrap gap-2">
                {product.notes.map((note, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <Separator />

            {/* Usage Recommendations */}
            <div>
              <h4 className="font-medium mb-4 flex items-center gap-2">
                {recommendations.icon}
                Recomendaciones de Uso
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-4 w-4 mt-1 text-amber-600" />
                  <div>
                    <p className="font-medium text-sm">Mejor momento</p>
                    <p className="text-gray-600 text-sm">{recommendations.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Star className="h-4 w-4 mt-1 text-amber-600" />
                  <div>
                    <p className="font-medium text-sm">Ocasión ideal</p>
                    <p className="text-gray-600 text-sm">{recommendations.occasion}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Sparkles className="h-4 w-4 mt-1 text-amber-600" />
                  <div>
                    <p className="font-medium text-sm">Temporada</p>
                    <p className="text-gray-600 text-sm">{recommendations.season}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Droplets className="h-4 w-4 mt-1 text-amber-600" />
                  <div>
                    <p className="font-medium text-sm">Consejo de aplicación</p>
                    <p className="text-gray-600 text-sm">{recommendations.tips}</p>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-gray-900 hover:bg-amber-600 text-white transition-colors duration-300"
                onClick={handleAddToCart}
                disabled={isAddingToCart}
                size="lg"
              >
                {isAddingToCart ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Agregando al carrito...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Agregar al Carrito
                  </div>
                )}
              </Button>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="lg">
                  Agregar a Favoritos
                </Button>
                <Button variant="outline" size="lg">
                  Comparar
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>✓ Envío gratuito en compras superiores a $100</p>
              <p>✓ Garantía de autenticidad</p>
              <p>✓ Devolución gratuita dentro de 30 días</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}