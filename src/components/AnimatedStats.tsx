import { useEffect, useState } from "react";

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  color?: string;
}

export default function AnimatedStats() {
  const stats = [
    { value: 100, label: "Seguridad", suffix: "%", color: "from-red-600 to-red-400" },
    { value: 6, label: "Módulos Principales", suffix: "", color: "from-red-700 to-red-500" },
    { value: 24, label: "Disponibilidad", suffix: "/7", color: "from-red-800 to-red-600" },
    { value: 99.9, label: "Uptime Garantizado", suffix: "%", color: "from-red-500 to-orange-400" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-12">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

function StatCard({ value, label, suffix = "", prefix = "", duration = 2000, color = "from-red-600 to-red-400" }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      const currentCount = easeOutQuart * value;
      
      setCount(currentCount);

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);

  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div className={`bg-gradient-to-br ${color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
      <div className="text-3xl md:text-4xl font-bold mb-2">
        {prefix}{displayValue}{suffix}
      </div>
      <div className="text-sm md:text-base text-white/90 font-medium">
        {label}
      </div>
    </div>
  );
}
