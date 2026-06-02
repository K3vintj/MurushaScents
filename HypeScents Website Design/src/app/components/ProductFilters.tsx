import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface Filter {
  brands: string[];
  genders: string[];
  categories: string[];
  priceRange: [number, number];
}

interface ProductFiltersProps {
  filters: Filter;
  onFiltersChange: (filters: Filter) => void;
  onClearFilters: () => void;
}

export function ProductFilters({ filters, onFiltersChange, onClearFilters }: ProductFiltersProps) {
  const brands = ["Chanel", "Dior", "Tom Ford", "Creed", "Yves Saint Laurent", "Giorgio Armani", "Versace"];
  const genders = ["Hombre", "Mujer", "Unisex"];
  const categories = ["Cítrico", "Amaderado", "Floral", "Oriental", "Fresco", "Dulce"];

  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked 
      ? [...filters.brands, brand]
      : filters.brands.filter(b => b !== brand);
    
    onFiltersChange({ ...filters, brands: newBrands });
  };

  const handleGenderChange = (gender: string, checked: boolean) => {
    const newGenders = checked 
      ? [...filters.genders, gender]
      : filters.genders.filter(g => g !== gender);
    
    onFiltersChange({ ...filters, genders: newGenders });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked 
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({ ...filters, categories: newCategories });
  };

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  const activeFiltersCount = filters.brands.length + filters.genders.length + filters.categories.length;

  return (
    <div className="space-y-6">
      {/* Active filters */}
      {activeFiltersCount > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Filtros activos ({activeFiltersCount})</span>
              <Button variant="ghost" size="sm" onClick={onClearFilters}>
                <X className="h-4 w-4 mr-1" />
                Limpiar
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.brands.map(brand => (
                <Badge key={brand} variant="secondary" className="text-xs">
                  {brand}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleBrandChange(brand, false)}
                  />
                </Badge>
              ))}
              {filters.genders.map(gender => (
                <Badge key={gender} variant="secondary" className="text-xs">
                  {gender}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleGenderChange(gender, false)}
                  />
                </Badge>
              ))}
              {filters.categories.map(category => (
                <Badge key={category} variant="secondary" className="text-xs">
                  {category}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => handleCategoryChange(category, false)}
                  />
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Precio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              max={500}
              min={50}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Marcas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {brands.map(brand => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox 
                  id={brand}
                  checked={filters.brands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                />
                <label htmlFor={brand} className="text-sm cursor-pointer">
                  {brand}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gender */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Género</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {genders.map(gender => (
              <div key={gender} className="flex items-center space-x-2">
                <Checkbox 
                  id={gender}
                  checked={filters.genders.includes(gender)}
                  onCheckedChange={(checked) => handleGenderChange(gender, checked as boolean)}
                />
                <label htmlFor={gender} className="text-sm cursor-pointer">
                  {gender}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tipo de Fragancia</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map(category => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox 
                  id={category}
                  checked={filters.categories.includes(category)}
                  onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                />
                <label htmlFor={category} className="text-sm cursor-pointer">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}