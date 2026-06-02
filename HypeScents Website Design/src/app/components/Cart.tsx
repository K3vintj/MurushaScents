import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, X } from "lucide-react";
import { useCart } from "./CartContext";
import { Badge } from "./ui/badge";

interface CartProps {
  children: React.ReactNode;
}

export function Cart({ children }: CartProps) {
  const { items, updateQuantity, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    // Simulate checkout process
    alert("Funcionalidad de checkout - Integrar con pasarela de pago");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative">
          {children}
          {totalItems > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs h-5 w-5 flex items-center justify-center p-0 rounded-full"
            >
              {totalItems}
            </Badge>
          )}
        </div>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrito de Compras
            {totalItems > 0 && (
              <Badge variant="secondary">
                {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tu carrito está vacío</h3>
                <p className="text-gray-500 mb-6">
                  Agrega algunos perfumes para comenzar tu compra
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg">
                    <img 
                      src={item.image} 
                      alt={`${item.brand} ${item.name}`}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <p className="text-sm text-amber-600">{item.brand}</p>
                        <h4 className="font-medium text-gray-900 leading-tight">{item.name}</h4>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="px-3 py-1 text-sm font-medium min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-medium">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Vaciar carrito
                </Button>
                <span className="text-sm text-gray-500">
                  {totalItems} {totalItems === 1 ? 'producto' : 'productos'}
                </span>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Subtotal:</span>
                  <span className="text-lg font-medium">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>• Envío gratuito en compras superiores a $100</p>
                  <p>• Los impuestos se calcularán al finalizar la compra</p>
                </div>

                <Button 
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceder al Checkout
                </Button>

                <Button variant="outline" className="w-full" size="lg">
                  Continuar Comprando
                </Button>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}