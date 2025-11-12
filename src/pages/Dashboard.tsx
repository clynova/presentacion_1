import { LayoutDashboard, Package, ShoppingCart, Truck, BarChart3, FileSpreadsheet } from "lucide-react";

export default function Dashboard() {
  const modules = [
    {
      icon: <Package className="w-10 h-10" />,
      title: "Gestión de Productos",
      color: "from-purple-500 to-pink-500",
      features: [
        "Historial de modificaciones por producto",
        "Indicadores de rendimiento: ventas, rotación, margen",
        "Control de stock con alertas automáticas"
      ]
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Gestión de Órdenes y Ventas",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Registro detallado de modificaciones por usuario",
        "Flujo visual de estados: En proceso → En preparación → En tránsito → Entregado",
        "Acceso a detalle de productos, precios, clientes y métodos de pago"
      ]
    },
    {
      icon: <Truck className="w-10 h-10" />,
      title: "Logística y Distribución",
      color: "from-green-500 to-emerald-500",
      features: [
        "Visualización del estado de cada envío con número de rastreo",
        "Mapa interactivo de entregas recientes",
        "Análisis geográfico de distribución"
      ]
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Análisis y Reportes",
      color: "from-orange-500 to-red-500",
      features: [
        "Gráficos analíticos de ventas diarias, semanales y mensuales",
        "Identificación de productos, categorías y clientes destacados",
        "KPIs: ventas totales, órdenes del día, nuevos clientes, bajo stock"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4">
            <LayoutDashboard className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Panel de Control (Dashboard)
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Centralizar la gestión del negocio con una herramienta visual, segura y completa.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-2xl p-8 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all"
            >
              <div className={`inline-block p-3 bg-gradient-to-br ${module.color} rounded-xl mb-4 text-white`}>
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                {module.title}
              </h3>
              <ul className="space-y-3">
                {module.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-zinc-600 dark:text-zinc-400">
                    <span className="mr-2 text-purple-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Export Feature */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <FileSpreadsheet className="w-12 h-12" />
            <div>
              <h2 className="text-3xl font-bold">Exportación de Datos</h2>
              <p className="text-white/90">Genera reportes detallados en múltiples formatos</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">📊 Excel</p>
              <p className="text-sm text-white/80">Análisis y tablas dinámicas</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="font-semibold">📄 PDF</p>
              <p className="text-sm text-white/80">Reportes profesionales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
