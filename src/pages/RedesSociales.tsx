import { Share2, Facebook, Instagram, Calendar, TrendingUp, MessageCircle } from "lucide-react";

export default function RedesSociales() {
  const features = [
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Publicación Automática",
      description: "Publicación automática de productos nuevos en Facebook e Instagram sin intervención manual."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Reimpulso de Contenido",
      description: "Reimpulso de publicaciones existentes para mantener la visibilidad y engagement."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Programación de Campañas",
      description: "Programación de campañas y promociones por fecha para planificación estratégica."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Métricas y Análisis",
      description: "Seguimiento de métricas básicas: alcance, clics, interacciones y conversiones."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "WhatsApp Business",
      description: "Conexión directa con WhatsApp Business para atención inmediata y ventas directas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-4">
            <Share2 className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Gestión de Redes Sociales
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Aumentar la exposición del catálogo y automatizar la difusión de contenido.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all"
            >
              <div className="text-orange-500 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <Facebook className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Facebook</h3>
            <p className="text-white/90">
              Publicaciones automáticas, gestión de comentarios y análisis de engagement en tu página de Facebook.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <Instagram className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Instagram</h3>
            <p className="text-white/90">
              Stories, posts y reels automáticos con tus productos más recientes y promociones especiales.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl text-center">
          <p className="text-2xl font-semibold italic mb-4">
            "Con este módulo, cada nuevo producto o promoción puede difundirse automáticamente en las redes sociales, generando tráfico y presencia constante sin depender de publicaciones manuales."
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Automatizado</p>
            </div>
            <div className="bg-white/20 rounded-lg px-6 py-3">
              <p className="text-3xl font-bold">24/7</p>
              <p className="text-sm">Activo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Missing import
import { BarChart3 } from "lucide-react";
