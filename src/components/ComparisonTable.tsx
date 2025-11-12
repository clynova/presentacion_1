import { Check, X } from "lucide-react";

export default function ComparisonTable() {
  const features = [
    { name: "Autenticación JWT", ours: true, competition: false },
    { name: "Dashboard Analytics Real-time", ours: true, competition: true },
    { name: "Gestión de Inventario Inteligente", ours: true, competition: true },
    { name: "Integración WhatsApp Business", ours: true, competition: false },
    { name: "Blog Corporativo SEO", ours: true, competition: false },
    { name: "Seguro de Ciberriesgo", ours: true, competition: false },
    { name: "Modo Oscuro / Claro", ours: true, competition: false },
    { name: "Responsive Design", ours: true, competition: true },
    { name: "PWA (Instalable)", ours: true, competition: false },
    { name: "Notificaciones Push", ours: true, competition: true },
    { name: "Gestión de Redes Sociales", ours: true, competition: false },
    { name: "Copias de Seguridad Automáticas", ours: true, competition: true },
  ];

  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 overflow-hidden mb-12">
      <div className="bg-gradient-to-r from-red-600 to-red-400 p-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          En que nos Diferenciamos
        </h2>
        <p className="text-white/90">
          Comparación con soluciones tradicionales de e-commerce
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-zinc-100 dark:bg-zinc-900">
            <tr>
              <th className="text-left p-4 font-semibold text-zinc-900 dark:text-zinc-100">
                Característica
              </th>
              <th className="text-center p-4 font-semibold text-red-600 dark:text-red-400">
                DeReyes E-commerce
              </th>
              <th className="text-center p-4 font-semibold text-zinc-600 dark:text-zinc-400">
                Competencia
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr
                key={index}
                className={`border-t border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors ${
                  index % 2 === 0 ? 'bg-white dark:bg-zinc-800/20' : 'bg-zinc-50/50 dark:bg-zinc-800/10'
                }`}
              >
                <td className="p-4 text-zinc-700 dark:text-zinc-300 font-medium">
                  {feature.name}
                </td>
                <td className="p-4 text-center">
                  {feature.ours ? (
                    <div className="flex justify-center">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full p-1">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full p-1">
                        <X size={20} strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.competition ? (
                    <div className="flex justify-center">
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full p-1">
                        <Check size={20} strokeWidth={3} />
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full p-1">
                        <X size={20} strokeWidth={3} />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 p-6 text-center border-t border-zinc-200 dark:border-zinc-700">
        <p className="text-zinc-700 dark:text-zinc-300 text-lg font-semibold">
          <span className="text-red-600 dark:text-red-400 font-bold">8 características exclusivas</span> que nos diferencian de la competencia
        </p>
      </div>
    </div>
  );
}
