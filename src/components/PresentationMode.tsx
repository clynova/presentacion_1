import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause, Maximize2 } from "lucide-react";

interface PresentationModeProps {
  onClose: () => void;
}

export default function PresentationMode({ onClose }: PresentationModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    { title: "DeReyes E-commerce", route: "/" },
    { title: "Seguridad y Control de Acceso", route: "/seguridad" },
    { title: "Panel de Control (Dashboard)", route: "/dashboard" },
    { title: "Experiencia y Accesibilidad", route: "/accesibilidad" },
    { title: "Gestión de Redes Sociales", route: "/redes" },
    { title: "Blog Corporativo", route: "/blog" },
    { title: "Seguro de Ciberriesgo", route: "/ciberriesgo" },
    { title: "Plantillas", route: "/plantillas" },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    window.location.href = slides[index].route;
  };

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950 text-white">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-zinc-900/90 to-transparent p-4 flex justify-between items-center z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
            title={isAutoPlay ? "Pausar" : "Auto-reproducir"}
          >
            {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <span className="text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>

        <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>

        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
          title="Salir del modo presentación (ESC)"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="h-full flex items-center justify-center p-16">
        <iframe
          src={slides[currentSlide].route}
          className="w-full h-full bg-white rounded-lg shadow-2xl"
          title={slides[currentSlide].title}
        />
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900/90 to-transparent p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevSlide}
            className="p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50"
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-red-600"
                    : "w-2 bg-zinc-700 hover:bg-zinc-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors disabled:opacity-50"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center text-sm text-zinc-400">
          Use las flechas del teclado ← → para navegar | ESC para salir
        </div>
      </div>
    </div>
  );
}
