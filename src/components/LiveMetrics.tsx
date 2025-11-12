import { useEffect, useState, ReactElement } from "react";
import { TrendingUp, Users, ShoppingCart, DollarSign, Activity } from "lucide-react";

interface Metric {
  icon: ReactElement;
  label: string;
  value: number;
  change: number;
  format: 'number' | 'currency' | 'percentage';
  color: string;
}

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { icon: <Users size={24} />, label: "Usuarios Activos", value: 1250, change: 0, format: 'number', color: "from-blue-600 to-blue-400" },
    { icon: <ShoppingCart size={24} />, label: "Pedidos Hoy", value: 87, change: 0, format: 'number', color: "from-green-600 to-green-400" },
    { icon: <DollarSign size={24} />, label: "Ventas del Mes", value: 45680, change: 0, format: 'currency', color: "from-red-600 to-red-400" },
    { icon: <TrendingUp size={24} />, label: "Conversión", value: 3.8, change: 0, format: 'percentage', color: "from-purple-600 to-purple-400" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const change = (Math.random() - 0.5) * 10;
        const newValue = Math.max(0, metric.value + change);
        return {
          ...metric,
          value: newValue,
          change: change
        };
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (value: number, format: 'number' | 'currency' | 'percentage') => {
    switch (format) {
      case 'currency':
        return `$${value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
      case 'percentage':
        return `${value.toFixed(1)}%`;
      default:
        return Math.floor(value).toLocaleString();
    }
  };

  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 md:p-8 shadow-xl border border-zinc-200 dark:border-zinc-700 mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-r from-red-600 to-red-400">
          <Activity size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Métricas en Tiempo Real
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Dashboard simulado con datos actualizados cada 2 segundos
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${metric.color} rounded-xl p-5 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            
            <div className="relative">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur">
                  {metric.icon}
                </div>
                <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  metric.change > 0 ? 'bg-green-400/30' : metric.change < 0 ? 'bg-red-400/30' : 'bg-white/20'
                }`}>
                  {metric.change > 0 ? '↑' : metric.change < 0 ? '↓' : '→'} {Math.abs(metric.change).toFixed(1)}
                </div>
              </div>

              <div className="text-3xl font-bold mb-1">
                {formatValue(metric.value, metric.format)}
              </div>
              
              <div className="text-sm text-white/90 font-medium">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 rounded-lg">
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-red-600 dark:text-red-400">Dashboard Interactivo:</span> Los datos se actualizan automáticamente simulando un entorno real de producción
        </p>
      </div>
    </div>
  );
}
