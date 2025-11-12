import { useState } from "react";
import { Code, Eye, Smartphone, Monitor, Tablet } from "lucide-react";

export default function InteractiveDemo() {
  const [activeView, setActiveView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showCode, setShowCode] = useState(false);

  const viewSizes = {
    desktop: "w-full aspect-[16/9]",
    tablet: "w-2/3 aspect-[4/3]",
    mobile: "w-1/3 aspect-[9/16]"
  };

  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-2xl p-6 md:p-8 shadow-xl border border-zinc-200 dark:border-zinc-700 mb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Vista Interactiva del Proyecto
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explora cómo se ve la plataforma en diferentes dispositivos
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setActiveView('desktop')}
            className={`p-3 rounded-lg transition-all ${
              activeView === 'desktop'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
            }`}
            title="Vista Desktop"
          >
            <Monitor size={20} />
          </button>
          <button
            onClick={() => setActiveView('tablet')}
            className={`p-3 rounded-lg transition-all ${
              activeView === 'tablet'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
            }`}
            title="Vista Tablet"
          >
            <Tablet size={20} />
          </button>
          <button
            onClick={() => setActiveView('mobile')}
            className={`p-3 rounded-lg transition-all ${
              activeView === 'mobile'
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
            }`}
            title="Vista Mobile"
          >
            <Smartphone size={20} />
          </button>
          
          <div className="w-px bg-zinc-300 dark:bg-zinc-600 mx-2"></div>
          
          <button
            onClick={() => setShowCode(!showCode)}
            className={`p-3 rounded-lg transition-all ${
              showCode
                ? 'bg-gradient-to-r from-red-600 to-red-400 text-white shadow-lg'
                : 'bg-zinc-100 dark:bg-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-600'
            }`}
            title="Ver Código"
          >
            {showCode ? <Eye size={20} /> : <Code size={20} />}
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 rounded-xl p-8 min-h-[400px]">
        <div className={`${viewSizes[activeView]} transition-all duration-500 ease-in-out transform`}>
          {showCode ? (
            <div className="bg-zinc-900 rounded-lg p-6 h-full overflow-auto">
              <pre className="text-green-400 text-xs md:text-sm font-mono">
{`// Estructura del Proyecto E-commerce
const DeReyesEcommerce = {
  security: {
    authentication: "JWT",
    authorization: "Role-based (RBAC)",
    encryption: "AES-256",
    backup: "Automatizado 24/7"
  },
  dashboard: {
    analytics: "Real-time metrics",
    inventory: "Smart management",
    orders: "Automated workflow",
    reports: "Custom & scheduled"
  },
  features: {
    responsive: true,
    darkMode: true,
    pwa: true,
    i18n: ["es", "en"]
  }
};`}
              </pre>
            </div>
          ) : (
            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-2xl h-full overflow-hidden border-4 border-zinc-800 dark:border-zinc-600">
              <div className="bg-gradient-to-r from-red-600 to-red-400 p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white/20 rounded px-3 py-1 text-white text-xs font-mono">
                  https://dereyes-ecommerce.com
                </div>
              </div>
              <div className="p-4 space-y-3 h-[calc(100%-40px)] overflow-auto">
                <div className="h-12 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded animate-pulse"></div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-20 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  <div className="h-20 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                  <div className="h-20 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
                </div>
                <div className="h-32 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/10 dark:to-orange-900/10 rounded"></div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-zinc-100 dark:bg-zinc-700/50 rounded"></div>
                  <div className="h-16 bg-zinc-100 dark:bg-zinc-700/50 rounded"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-semibold">
          ✓ Responsive Design
        </span>
        <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
          ✓ Dark Mode
        </span>
        <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm font-semibold">
          ✓ PWA Ready
        </span>
        <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 rounded-full text-sm font-semibold">
          ✓ SEO Optimizado
        </span>
      </div>
    </div>
  );
}
