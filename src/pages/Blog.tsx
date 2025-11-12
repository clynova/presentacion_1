import { FileText, TrendingUp, Users, Tag, Share2, Mail } from "lucide-react";

export default function Blog() {
  const benefits = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Atracción de Tráfico Orgánico (SEO)",
      description: "Creación de artículos optimizados que se posicionan en buscadores, aumentando la visibilidad sin inversión publicitaria.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Generación de Autoridad y Confianza",
      description: "Contenido educativo que muestra experiencia en el rubro, construyendo credibilidad en el mercado.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Tag className="w-10 h-10" />,
      title: "Canal de Venta Indirecta",
      description: "Integración de productos dentro de los artículos (ej. '5 recetas con aceite de oliva DeReyes').",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Share2 className="w-10 h-10" />,
      title: "Sinergia con Redes Sociales",
      description: "Contenido compartible que amplifica la presencia digital y genera engagement con la audiencia.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    "Sistema de comentarios para crear comunidad",
    "Etiquetas y categorías para fácil navegación",
    "Botones de compartición social",
    "Enlaces contextuales hacia productos del catálogo",
    "Captura de leads con formulario de suscripción",
    "Optimización SEO automática"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mb-4">
            <FileText className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Blog Corporativo
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Fortalecer la marca, atraer tráfico orgánico y fidelizar clientes.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all"
            >
              <div className={`inline-block p-4 bg-gradient-to-br ${benefit.color} rounded-xl mb-4 text-white`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                {benefit.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-700 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
            Funcionalidades del Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-indigo-500 text-xl">✓</span>
                <span className="text-zinc-600 dark:text-zinc-400">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Capture */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-12 h-12" />
            <div>
              <h2 className="text-3xl font-bold">Captura de Leads</h2>
              <p className="text-white/90">Construye tu base de datos de clientes potenciales</p>
            </div>
          </div>
          <div className="bg-white/10 rounded-xl p-6">
            <p className="text-lg mb-4">
              Formulario de suscripción integrado para campañas de email marketing, permitiendo mantener contacto directo con clientes interesados.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <p className="text-2xl font-bold">📧</p>
                <p className="text-sm">Email Marketing</p>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <p className="text-2xl font-bold">🎯</p>
                <p className="text-sm">Segmentación</p>
              </div>
              <div className="bg-white/20 rounded-lg px-6 py-3">
                <p className="text-2xl font-bold">📊</p>
                <p className="text-sm">Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
