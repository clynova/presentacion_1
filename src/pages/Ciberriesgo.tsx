import { ShieldAlert, AlertTriangle, Scale, DollarSign, FileCheck, Umbrella } from "lucide-react";

export default function Ciberriesgo() {
  const coverage = [
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Costos de Investigación",
      description: "Equipos forenses y especialistas en ciberseguridad para análisis del incidente."
    },
    {
      icon: <FileCheck className="w-10 h-10" />,
      title: "Restauración de Datos",
      description: "Reconstrucción del sistema y recuperación de información comprometida."
    },
    {
      icon: <DollarSign className="w-10 h-10" />,
      title: "Pérdida de Ingresos",
      description: "Compensación por pérdida de ingresos durante la interrupción del servicio."
    },
    {
      icon: <Scale className="w-10 h-10" />,
      title: "Defensa Legal",
      description: "Gastos legales y defensa ante organismos reguladores y demandas."
    },
    {
      icon: <Bell className="w-10 h-10" />,
      title: "Notificación a Clientes",
      description: "Costos de notificación obligatoria a clientes afectados por brechas de datos."
    },
    {
      icon: <Umbrella className="w-10 h-10" />,
      title: "Multas y Sanciones",
      description: "Cobertura de multas por incumplimiento normativo o regulatorio."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-rose-50 dark:from-zinc-950 dark:to-zinc-900 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl mb-4">
            <ShieldAlert className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Seguro de Ciberriesgo
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Plan de Respaldo Financiero Digital para proteger la empresa ante ataques informáticos o brechas de datos.
          </p>
        </div>

        {/* Coverage Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Gestión de Crisis y Recuperación
            </h3>
            <p className="text-white/90 mb-4">Daños Propios - Cobertura interna</p>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Costos de investigación y equipos forenses</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Restauración de datos y reconstrucción del sistema</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Compensación por pérdida de ingresos</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Scale className="w-8 h-8" />
              Protección Legal y Regulatoria
            </h3>
            <p className="text-white/90 mb-4">Responsabilidad ante Terceros</p>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Gastos legales y defensa ante reguladores</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Costos de notificación a clientes afectados</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Cobertura de multas y sanciones</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Coverage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coverage.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all"
            >
              <div className="text-red-500 mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl p-8 text-white shadow-xl text-center">
          <ShieldAlert className="w-16 h-16 mx-auto mb-6" />
          <p className="text-2xl font-semibold italic mb-6">
            "El seguro de ciberriesgo actúa como una red de seguridad financiera, permitiendo que la empresa se recupere rápidamente ante cualquier evento cibernético sin comprometer su estabilidad operativa."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold mb-2">💼</p>
              <p className="font-semibold">Continuidad del Negocio</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold mb-2">🛡️</p>
              <p className="font-semibold">Protección Integral</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-3xl font-bold mb-2">⚡</p>
              <p className="font-semibold">Respuesta Rápida</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Missing import
import { Bell } from "lucide-react";
