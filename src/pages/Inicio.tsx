import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, LayoutDashboard, Accessibility, Share2, FileText, ShieldAlert, Presentation, Maximize2 } from "lucide-react";
import PresentationMode from "../components/PresentationMode";
import ExportOptions from "../components/ExportOptions";
import AnimatedStats from "../components/AnimatedStats";
import ProjectTimeline from "../components/ProjectTimeline";
import InteractiveDemo from "../components/InteractiveDemo";
import TechStack from "../components/TechStack";
import ComparisonTable from "../components/ComparisonTable";
import LiveMetrics from "../components/LiveMetrics";
import Testimonials from "../components/Testimonials";
import KeyFeatures from "../components/KeyFeatures";
import ScrollToTop from "../components/ScrollToTop";
import QuickNav from "../components/QuickNav";

export default function Inicio() {
  const [showPresentationMode, setShowPresentationMode] = useState(false);
  const sections = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Seguridad y Control de Acceso",
      description: "Salvaguardar la información y administrar de forma precisa los accesos.",
      link: "/seguridad",
      gradient: "from-red-600 to-red-400"
    },
    {
      icon: <LayoutDashboard className="w-12 h-12" />,
      title: "Panel de Control (Dashboard)",
      description: "Centralizar la gestión del negocio con una herramienta visual completa.",
      link: "/dashboard",
      gradient: "from-red-700 to-red-500"
    },
    {
      icon: <Accessibility className="w-12 h-12" />,
      title: "Experiencia y Accesibilidad",
      description: "Garantizar una experiencia moderna, rápida y adaptable.",
      link: "/accesibilidad",
      gradient: "from-red-500 to-orange-400"
    },
    {
      icon: <Share2 className="w-12 h-12" />,
      title: "Gestión de Redes Sociales",
      description: "Aumentar la exposición del catálogo y automatizar la difusión.",
      link: "/redes",
      gradient: "from-red-600 to-rose-500"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Blog Corporativo",
      description: "Fortalecer la marca, atraer tráfico orgánico y fidelizar clientes.",
      link: "/blog",
      gradient: "from-red-800 to-red-600"
    },
    {
      icon: <ShieldAlert className="w-12 h-12" />,
      title: "Seguro de Ciberriesgo",
      description: "Proteger la empresa ante ataques informáticos o brechas de datos.",
      link: "/ciberriesgo",
      gradient: "from-red-900 to-red-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Proyecto E-commerce DeReyes
          </h1>
          <p className="text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
            Solución integral de comercio electrónico con seguridad avanzada, gestión inteligente y presencia digital optimizada.
          </p>
          
          {/* Presentation Controls */}
          <div className="flex justify-center gap-4 mt-8">
          {/*  <button
              onClick={() => setShowPresentationMode(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-400 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <Presentation size={20} />
              Modo Presentación
            </button>

          */}
            <button
              onClick={() => document.documentElement.requestFullscreen()}
              className="flex items-center gap-2 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              <Maximize2 size={20} />
              Pantalla Completa
            </button>
          </div>
        </div>

        {/* Animated Stats */}
        <div id="stats">
          <AnimatedStats />
        </div>

        {/* Live Metrics Dashboard */}
        <LiveMetrics />

        {/* Interactive Demo <InteractiveDemo />*/}
        <div id="demo">
          
        </div>

        {/* Key Features */}
        <KeyFeatures />



        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-8 text-white shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">¿Listo para ver las plantillas?</h2>
          <p className="mb-6 text-white/90">Explora las maquetas y diseños del proyecto</p>
          <Link
            to="/plantillas"
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
          >
            Ver Plantillas
          </Link>
        </div>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Tech Stack */}
        <div id="tech">
          <TechStack />
        </div>

        {/* Testimonials */}
        <div id="testimonios">
          <Testimonials />
        </div>

        {/* Project Timeline */}
        <ProjectTimeline />

        {/* Export Options */}
        <ExportOptions />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Quick Navigation */}
      <QuickNav />

      {/* Presentation Mode Modal */}
      {showPresentationMode && (
        <PresentationMode onClose={() => setShowPresentationMode(false)} />
      )}
    </div>
  );
}
