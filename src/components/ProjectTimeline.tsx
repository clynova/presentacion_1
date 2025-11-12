import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface TimelineItem {
    title: string;
    description: string;
    icon?: string;
}

const timelineData: TimelineItem[] = [
    {
        title: "Análisis de Requerimientos",
        description: "Identificación de necesidades específicas del cliente",
        icon: "📋"
    },
    {
        title: "Diseño de Arquitectura",
        description: "Estructura de seguridad, base de datos y APIs",
        icon: "🏗️"
    },
    {
        title: "Desarrollo Backend",
        description: "APIs seguras, autenticación JWT y gestión de datos",
        icon: "⚙️"
    },
    {
        title: "Desarrollo Frontend",
        description: "Interfaz responsiva con React y Tailwind CSS",
        icon: "💻"
    },

    {
        title: "Integración de Servicios",
        description: "Redes sociales, pagos y notificaciones",
        icon: "🔗"
    },
    {
        title: "Testing y QA",
        description: "Pruebas de seguridad, rendimiento y usabilidad",
        icon: "🧪"
    },
    {
        title: "Despliegue y Monitoreo",
        description: "Implementación en producción con monitoreo 24/7",
        icon: "🚀"
    }
];

export default function ProjectTimeline() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        document.querySelectorAll(".timeline-item").forEach((item) => {
            observer.observe(item);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="my-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
                Proceso de Desarrollo
            </h2>

            <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-red-400 to-red-200 dark:from-red-800 dark:via-red-600 dark:to-red-400"></div>

                <div className="space-y-8">
                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            data-index={index}
                            className={`timeline-item relative pl-20 transition-all duration-500 ${visibleItems.includes(index)
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-10"
                                }`}
                        >
                            {/* Icon Circle */}
                            <div className="absolute left-4 w-8 h-8 bg-gradient-to-br from-red-600 to-red-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                {visibleItems.includes(index) ? (
                                    <CheckCircle2 size={16} className="animate-scale-in" />
                                ) : (
                                    <span className="text-xs">{index + 1}</span>
                                )}
                            </div>

                            {/* Content Card */}
                            <div className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all hover:scale-105">
                                <div className="flex items-start gap-4">
                                    <span className="text-3xl">{item.icon}</span>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-600 dark:text-zinc-400">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
