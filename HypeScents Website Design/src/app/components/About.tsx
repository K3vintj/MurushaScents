export function About() {
  return (
    <section id="nosotros" className="min-h-screen py-20 bg-gray-50 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Quiénes Somos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              HypeScents nació de la pasión por las fragancias exclusivas y el deseo de hacer 
              accesible el lujo olfativo a todos los amantes de los buenos perfumes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra misión es conectarte con esa fragancia única que refleja tu personalidad 
              y estilo de vida. Trabajamos con las marcas más prestigiosas del mundo para 
              ofrecerte una selección curada de perfumes excepcionales.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Cada fragancia en nuestra colección es elegida cuidadosamente por nuestros 
              expertos perfumistas, garantizando autenticidad y calidad en cada botella.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-600 mb-2">500+</div>
                <div className="text-gray-600">Fragancias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-600 mb-2">50+</div>
                <div className="text-gray-600">Marcas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-600 mb-2">10k+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1673442598728-71caf1f15820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwY29sbGVjdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzU4MTc0MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="Colección de perfumes HypeScents" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}