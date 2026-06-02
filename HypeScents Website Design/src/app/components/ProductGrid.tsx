import { useState, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Filter, Grid, List } from "lucide-react";

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

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Sauvage Elixir",
    brand: "Dior",
    price: 180,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1655500061669-1f8ac338a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTgwNTY1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Una fragancia intensa y sofisticada con notas especiadas y amaderadas",
    notes: ["Lavanda", "Nuez moscada", "Sándalo"],
    category: "Amaderado",
    gender: "Hombre",
    isNew: true,
    isOnSale: true
  },
  {
    id: "2",
    name: "Black Orchid",
    brand: "Tom Ford",
    price: 240,
    image: "https://images.unsplash.com/photo-1737920459846-2d0318700658?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFncmFuY2UlMjBib3R0bGUlMjBnb2xkJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTgxNzQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Una fragancia unisex audaz y misteriosa con orquídea negra",
    notes: ["Orquídea negra", "Trufa", "Vainilla"],
    category: "Oriental",
    gender: "Unisex",
    isNew: false
  },
  {
    id: "3",
    name: "Libre",
    brand: "Yves Saint Laurent",
    price: 160,
    image: "https://images.unsplash.com/photo-1680690458464-21cfd3188ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbnMlMjBwZXJmdW1lJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTgxNzQxODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "La libertad en una botella, una fragancia floral con carácter",
    notes: ["Lavanda", "Flor de naranjo", "Vainilla"],
    category: "Floral",
    gender: "Mujer"
  },
  {
    id: "4",
    name: "Aventus",
    brand: "Creed",
    price: 320,
    image: "https://images.unsplash.com/photo-1736605406021-afd8241d5edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY29sb2duZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTgwODgzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Inspirado en la vida dramática del emperador Napoleón",
    notes: ["Piña", "Abedul", "Roble"],
    category: "Fresco",
    gender: "Hombre",
    isNew: true
  },
  {
    id: "5",
    name: "J'adore",
    brand: "Dior",
    price: 140,
    image: "https://images.unsplash.com/photo-1655500061669-1f8ac338a319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NTgwNTY1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Un bouquet floral moderno y elegante",
    notes: ["Rosa de Damasco", "Jazmín", "Ylang-ylang"],
    category: "Floral",
    gender: "Mujer"
  },
  {
    id: "6",
    name: "Acqua di Gio",
    brand: "Giorgio Armani",
    price: 120,
    originalPrice: 140,
    image: "https://images.unsplash.com/photo-1736605406021-afd8241d5edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwY29sb2duZSUyMGJvdHRsZXxlbnwxfHx8fDE3NTgwODgzMjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Inspirado en la belleza del mar Mediterráneo",
    notes: ["Bergamota", "Neroli", "Cedro"],
    category: "Cítrico",
    gender: "Hombre",
    isOnSale: true
  }
];

interface Filter {
  brands: string[];
  genders: string[];
  categories: string[];
  priceRange: [number, number];
}

export function ProductGrid() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filters, setFilters] = useState<Filter>({
    brands: [],
    genders: [],
    categories: [],
    priceRange: [50, 500]
  });

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = mockProducts.filter(product => {
      const brandMatch = filters.brands.length === 0 || filters.brands.includes(product.brand);
      const genderMatch = filters.genders.length === 0 || filters.genders.includes(product.gender);
      const categoryMatch = filters.categories.length === 0 || filters.categories.includes(product.category);
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      
      return brandMatch && genderMatch && categoryMatch && priceMatch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [filters, sortBy]);

  const handleClearFilters = () => {
    setFilters({
      brands: [],
      genders: [],
      categories: [],
      priceRange: [50, 500]
    });
  };

  return (
    <section id="catalogo" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">
            Nuestro Catálogo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra exclusiva selección de perfumes de las marcas más prestigiosas del mundo
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <ProductFilters 
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filtros
                </Button>
                
                <span className="text-gray-600">
                  {filteredAndSortedProducts.length} productos encontrados
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nombre A-Z</SelectItem>
                    <SelectItem value="brand">Marca</SelectItem>
                    <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                    <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {filteredAndSortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No se encontraron productos con los filtros seleccionados
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={handleClearFilters}
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}