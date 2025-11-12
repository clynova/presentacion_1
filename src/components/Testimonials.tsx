import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      role: "Dueño de Minimarket El Trébol",
      image:
        "https://ui-avatars.com/api/?name=Juan+Perez&background=dc2626&color=fff&size=128",
      rating: 5,
      text: "Desde que usamos la nueva web de DeReyes, hacer pedidos es mucho más rápido y sencillo. Podemos ver los precios actualizados y gestionar nuestras compras sin depender de llamadas o correos."
    },
    {
      name: "Daniela Soto",
      role: "Administradora de Restaurante La Parrilla",
      image:
        "https://ui-avatars.com/api/?name=Daniela+Soto&background=dc2626&color=fff&size=128",
      rating: 5,
      text: "El sistema de órdenes y el seguimiento de envíos nos han ayudado muchísimo. Sabemos exactamente cuándo llegará cada pedido, y el panel es tan claro que cualquiera del equipo puede usarlo."
    },
    {
      name: "Felipe Araya",
      role: "Encargado de Compras, Almacén San José",
      image:
        "https://ui-avatars.com/api/?name=Felipe+Araya&background=dc2626&color=fff&size=128",
      rating: 5,
      text: "La nueva web es mucho más moderna y fácil de navegar. Además, las promociones aparecen directamente en el inicio, lo que nos ayuda a aprovechar ofertas sin perder tiempo buscando."
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          Lo que opinan nuestros clientes
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Opiniones de negocios y locales que ya utilizan la nueva plataforma DeReyes
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl transition-all hover:scale-105 relative"
          >
            <Quote
              className="absolute top-4 right-4 text-red-200 dark:text-red-900/30"
              size={40}
            />

            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-red-400"
              />
              <div>
                <h4 className="font-bold text-zinc-900 dark:text-zinc-100">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#dc2626"
                  className="text-red-600"
                />
              ))}
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
