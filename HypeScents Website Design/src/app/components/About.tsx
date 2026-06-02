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
              AURA es una perfumería joven nacida de la idea de que el aroma es la huella
              personal que cada persona deja en el mundo. Nuestro nombre refleja esa esencia
              invisible pero poderosa que te define.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestra misión es hacer el lujo olfativo accesible para jóvenes y millennials
              entre 18 y 35 años, ofreciendo fragancias femeninas, masculinas y unisex a
              precios competitivos, con una experiencia de compra moderna y segura.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos sustentamos en tres pilares: <strong>diseño</strong> estético y coherente
              con nuestra identidad de marca, <strong>usabilidad</strong> con una navegación
              sencilla desde cualquier dispositivo, y <strong>accesibilidad</strong> para que
              todos puedan disfrutar nuestra tienda.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-serif text-violet-600 mb-2">200+</div>
                <div className="text-gray-600">Fragancias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-violet-600 mb-2">3</div>
                <div className="text-gray-600">Géneros</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-violet-600 mb-2">5k+</div>
                <div className="text-gray-600">Clientes</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1673442598728-71caf1f15820?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwY29sbGVjdGlvbiUyMGRpc3BsYXl8ZW58MXx8fHwxNzU4MTc0MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Colección de fragancias AURA"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
