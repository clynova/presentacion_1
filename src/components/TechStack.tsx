import { Code2, Database, Shield, Zap, Cloud, Sparkles } from "lucide-react";

export default function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code2 size={32} />,
      color: "from-blue-600 to-blue-400",
      items: ["React 19", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      category: "Backend",
      icon: <Database size={32} />,
      color: "from-green-600 to-green-400",
      items: ["Node.js", "Express", "MongoDB", "TypeScript"]
    },
    {
      category: "Seguridad",
      icon: <Shield size={32} />,
      color: "from-red-600 to-red-400",
      items: ["JWT Auth", "Bcrypt", "Rate Limiting", "HTTPS"]
    },
    {
      category: "Performance",
      icon: <Zap size={32} />,
      color: "from-yellow-600 to-yellow-400",
      items: ["Code Splitting", "Lazy Loading", "CDN", "Caching"]
    },
    {
      category: "Cloud & Deploy",
      icon: <Cloud size={32} />,
      color: "from-purple-600 to-purple-400",
      items: ["Vercel", "CloudFlare", "GitHub Actions", "Render"]
    },
    {
      category: "Integraciones",
      icon: <Sparkles size={32} />,
      color: "from-pink-600 to-pink-400",
      items: ["WebPay", "WhatsApp API", "Google Analytics", "Cloudinary"]
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          Stack Tecnológico
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg">
          Tecnologías modernas y robustas para un producto de primera clase
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${tech.color} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {tech.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {tech.category}
                </h3>
              </div>
            </div>
            
            <ul className="space-y-2">
              {tech.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400"
                >
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tech.color}`}></div>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
