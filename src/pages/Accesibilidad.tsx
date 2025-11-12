import { Accessibility, Moon, Sun, Bell, Search, Smartphone } from "lucide-react";

export default function AccesibilidadPage() {
  const features = [
    {
      icon: <Moon className="w-10 h-10" />,
      title: "Modo Oscuro / Claro",
      description: "Alternancia entre tema oscuro y claro para mayor comodidad visual según preferencias del usuario.",
      gradient: "from-red-600 to-red-400"
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "Notificaciones Automáticas",
      description: "Sistema de notificaciones internas y push automáticas para mantener informados a los usuarios.",
      gradient: "from-red-700 to-red-500"
    },
    {
      icon: <Search className="w-10 h-10" />,
      title: "Búsqueda Global Inteligente",
      description: "Búsqueda optimizada que permite encontrar productos, órdenes y clientes de forma rápida y precisa.",
      gradient: "from-red-500 to-orange-400"
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Diseño Responsivo",
      description: "Panel completamente responsivo y accesible desde móviles, tablets y desktops con experiencia óptima.",
      gradient: "from-red-800 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-red-400 rounded-2xl mb-4">
            <Accessibility className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Experiencia y Accesibilidad
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Garantizar una experiencia moderna, rápida y adaptable para todos los usuarios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all hover:scale-105"
            >
              <div className={`inline-block p-4 bg-gradient-to-br ${feature.gradient} rounded-xl mb-4 text-white`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Beneficios Clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">⚡ Rendimiento</h3>
              <p className="text-white/90">
                Interfaz optimizada para tiempos de carga rápidos y navegación fluida.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">🎨 Diseño Moderno</h3>
              <p className="text-white/90">
                Interfaz intuitiva y atractiva que facilita la adopción por parte de los usuarios.
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">♿ Accesibilidad</h3>
              <p className="text-white/90">
                Cumplimiento de estándares de accesibilidad para usuarios con diferentes capacidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
