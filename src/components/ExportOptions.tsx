import { useState } from "react";
import { Download, FileText, Image as ImageIcon } from "lucide-react";

export default function ExportOptions() {
  const [isExporting, setIsExporting] = useState(false);

  const exportAsPDF = async () => {
    setIsExporting(true);
    try {
      // Descargar el PDF real desde assets
      const pdfUrl = "/src/assets/PresentaciónDeReyes.pdf";
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = "PresentaciónDeReyes.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } finally {
      setIsExporting(false);
    }
  };

  const exportAsImages = async () => {
    setIsExporting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Exportación iniciada. En una implementación real, esto generaría capturas de cada sección.");
    } finally {
      setIsExporting(false);
    }
  };

  const generateReport = () => {
    const content = `
REPORTE DE PRESENTACIÓN - PROYECTO E-COMMERCE DEREYES
======================================================

1. SEGURIDAD Y CONTROL DE ACCESO
   - Autenticación JWT
   - Gestión de roles
   - Trazabilidad completa
   - Copias de seguridad automatizadas

2. PANEL DE CONTROL (DASHBOARD)
   - Gestión de productos
   - Órdenes y ventas
   - Logística
   - Análisis y reportes

3. EXPERIENCIA Y ACCESIBILIDAD
   - Modo oscuro/claro
   - Notificaciones automáticas
   - Búsqueda inteligente
   - Diseño responsivo

4. GESTIÓN DE REDES SOCIALES
   - Publicación automática
   - Programación de campañas
   - Métricas y análisis
   - Integración WhatsApp Business

5. BLOG CORPORATIVO
   - SEO optimizado
   - Generación de autoridad
   - Captura de leads
   - Integración social

6. SEGURO DE CIBERRIESGO
   - Gestión de crisis
   - Protección legal
   - Recuperación de datos
   - Cobertura integral
    `;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "reporte-presentacion-dereyes.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-200 dark:border-zinc-700">
      <h3 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
        Opciones de Exportación
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={exportAsPDF}
          disabled={isExporting}
          className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-red-600 to-red-400 text-white hover:from-red-500 hover:to-red-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FileText size={32} />
          <span className="font-semibold">Exportar PDF</span>
          <span className="text-xs text-white/80">Documento completo</span>
        </button>

        <button
          onClick={exportAsImages}
          disabled={isExporting}
          className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-red-700 to-red-500 text-white hover:from-red-600 hover:to-red-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ImageIcon size={32} />
          <span className="font-semibold">Exportar Imágenes</span>
          <span className="text-xs text-white/80">Capturas de pantalla</span>
        </button>

        <button
          onClick={generateReport}
          className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-red-800 to-red-600 text-white hover:from-red-700 hover:to-red-500 transition-all"
        >
          <Download size={32} />
          <span className="font-semibold">Generar Reporte</span>
          <span className="text-xs text-white/80">Resumen en texto</span>
        </button>
      </div>

      {isExporting && (
        <div className="mt-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Procesando exportación...
        </div>
      )}
    </div>
  );
}
