import { Rocket, Target, Zap, Award, Shield, TrendingUp } from "lucide-react";

export default function KeyFeatures() {
  const features = [
    {
      icon: <Rocket size={32} />,
      title: "Lanzamiento Rápido",
      description: "De idea a producción en menos de 30 días con metodología ágil",
      color: "from-blue-600 to-blue-400",
      stat: "30 días"
    },
    {
      icon: <Target size={32} />,
      title: "Enfoque en Resultados",
      description: "KPIs claros y medibles para cada fase del proyecto",
      color: "from-green-600 to-green-400",
      stat: "100% ROI"
    },
    {
      icon: <Zap size={32} />,
      title: "Performance Superior",
      description: "Optimizado para cargar en menos de 2 segundos",
      color: "from-yellow-600 to-yellow-400",
      stat: "<2s carga"
    },
    {
      icon: <Award size={32} />,
      title: "Calidad Premium",
      description: "Código limpio, testeado y documentado profesionalmente",
      color: "from-purple-600 to-purple-400",
      stat: "95% coverage"
    },
    {
      icon: <Shield size={32} />,
      title: "Máxima Seguridad",
      description: "Certificación SSL, encriptación y auditorías regulares",
      color: "from-red-600 to-red-400",
      stat: "A+ Security"
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Escalabilidad",
      description: "Preparado para crecer de 100 a 1M de usuarios sin problemas",
      color: "from-pink-600 to-pink-400",
      stat: "1M+ users"
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          Características Destacadas
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Todo lo que necesitas para dominar el mercado digital
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${feature.color} text-white`}>
                  {feature.stat}
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                {feature.title}
              </h3>
              
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
