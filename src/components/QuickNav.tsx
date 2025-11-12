import { useState } from "react";
import { Menu, X, BarChart3, Code2, MessageSquare } from "lucide-react";

export default function QuickNav() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: "stats", label: "Estadísticas", icon: <BarChart3 size={20} /> },
    { id: "tech", label: "Tecnología", icon: <Code2 size={20} /> },
    { id: "testimonios", label: "Testimonios", icon: <MessageSquare size={20} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Quick Nav Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 p-4 bg-gradient-to-r from-red-600 to-red-400 text-white rounded-full shadow-2xl hover:shadow-red-500/50 transition-all hover:scale-110"
        aria-label="Navegación rápida"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Quick Nav Menu */}
      {isOpen && (
        <div className="fixed bottom-24 left-8 z-40 bg-white dark:bg-zinc-800 rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-700 p-4 space-y-2 animate-scale-in">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-700 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-400 hover:text-white text-zinc-700 dark:text-zinc-300 transition-all hover:scale-105 font-medium"
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      )}
    </>
  );
}
