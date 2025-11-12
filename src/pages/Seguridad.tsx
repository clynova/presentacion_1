import { Shield, Lock, Eye, Database, AlertTriangle, Key, Users, FileCheck } from "lucide-react";

export default function Seguridad() {
  const features = [
    {
      icon: <Key className="w-8 h-8" />,
      title: "Autenticación Robusta",
      description: "Inicio de sesión mediante JWT (Tokens de seguridad), garantizando que solo usuarios legítimos puedan ingresar."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gestión de Roles",
      description: "Definición clara de perfiles (Administrador, Moderador, Cliente) con permisos específicos."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Trazabilidad Completa",
      description: "Registro detallado de toda la actividad del sistema para auditorías o seguimiento interno."
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Prevención de Riesgos",
      description: "Cierre automático de sesión por inactividad y bloqueo de cuentas tras múltiples intentos fallidos."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vigilancia Activa",
      description: "Monitoreo de IPs y alertas automáticas ante accesos o comportamientos sospechosos."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Copias de Seguridad",
      description: "Respaldo automatizado diario de la base de datos para prevenir pérdidas de información."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Cifrado de Información",
      description: "Toda la información sensible se almacena en formato cifrado, imposible de interpretar en caso de brecha."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cierre Seguro",
      description: "El cierre de sesión elimina toda conexión activa, evitando accesos en dispositivos compartidos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 pt-28 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block p-4 bg-gradient-to-br from-red-600 to-red-400 rounded-2xl mb-4">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Seguridad y Control de Acceso
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Salvaguardar la información y administrar de forma precisa los accesos de los usuarios.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-zinc-200 dark:border-zinc-700 hover:scale-105"
            >
              <div className="text-red-600 dark:text-red-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Security Measures */}
        <div className="bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Medidas Adicionales de Seguridad</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">🛡️ Prevención de Errores Humanos</h3>
              <p className="text-white/90">
                Validaciones de datos y controles de tipificación para reducir inconsistencias.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔐 Gestión Segura de Cookies</h3>
              <p className="text-white/90">
                Las cookies se gestionan con medidas adicionales de seguridad para impedir su uso indebido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
