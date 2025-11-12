import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Importar las imágenes
import desktop from "../assets/plantillas/desktop.png";
import desktopOffers from "../assets/plantillas/desktopOffers.png";
import desktopProductDetails from "../assets/plantillas/desktopProductDetails.png";
import letras from "../assets/plantillas/letras.webp";
import navegacion from "../assets/plantillas/navegacion.webp";
import navegacion2 from "../assets/plantillas/navegacion2.webp";
import orderConfirmed from "../assets/plantillas/orderConfirmed.png";
import otherLandingPage from "../assets/plantillas/otherLandingPage.webp";
import otherLandingPage2 from "../assets/plantillas/otherLandingPage2.webp";
import plantilla3 from "../assets/plantillas/plantilla3.png";
import searchBox from "../assets/plantillas/searchBox.png";
import videoframe1 from "../assets/plantillas/videoframe_14601.png";
import videoframe2 from "../assets/plantillas/videoframe_18578.png";

export default function Plantillas() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const images = [
    { src: desktop, title: "Vista Desktop Principal", description: "Página principal del e-commerce" },
    { src: desktopOffers, title: "Ofertas Desktop", description: "Sección de ofertas y promociones" },
    { src: desktopProductDetails, title: "Detalle de Producto", description: "Vista detallada de productos" },
    { src: letras, title: "Tipografía", description: "Sistema de fuentes y estilos" },
    { src: navegacion, title: "Navegación Principal", description: "Menú y navegación del sitio" },
    { src: navegacion2, title: "Navegación Secundaria", description: "Navegación alternativa" },
    { src: orderConfirmed, title: "Confirmación de Orden", description: "Página de confirmación de compra" },
    { src: otherLandingPage, title: "Landing Page 1", description: "Primera versión de landing page" },
    { src: otherLandingPage2, title: "Landing Page 2", description: "Segunda versión de landing page" },
    { src: plantilla3, title: "Plantilla Adicional", description: "Diseño complementario" },
    { src: searchBox, title: "Búsqueda", description: "Sistema de búsqueda del sitio" },
    { src: videoframe1, title: "Frame Video 1", description: "Captura de demostración 1" },
    { src: videoframe2, title: "Frame Video 2", description: "Captura de demostración 2" }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Plantillas y Diseños
          </h1>
          <p className="text-xl text-zinc-700 dark:text-zinc-300">
            Explora las maquetas visuales del proyecto E-commerce DeReyes
          </p>
        </div>

        {/* Main Slider */}
        <div className="bg-white dark:bg-zinc-800/50 rounded-2xl shadow-2xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-700 mb-8">
          {/* Image Container */}
          <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden mb-6">
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform"
              onClick={toggleFullscreen}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-zinc-700 transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-zinc-700 transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              {images[currentIndex].title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {images[currentIndex].description}
            </p>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`aspect-video rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                  currentIndex === index
                    ? "border-red-500 shadow-lg"
                    : "border-zinc-200 dark:border-zinc-700 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-xl shadow-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:shadow-xl transition-all cursor-pointer group"
              onClick={() => goToSlide(index)}
            >
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {image.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-all"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="max-w-full max-h-full object-contain"
          />
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-3 rounded-full hover:bg-white/20 transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-6 py-3 rounded-full">
            <p className="font-semibold">{images[currentIndex].title}</p>
            <p className="text-sm text-white/80">{currentIndex + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}
