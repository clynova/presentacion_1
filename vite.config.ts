import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    // ⚛️ React + Tailwind integrados correctamente
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "esnext",
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "react";
            }
            if (id.includes("lucide-react") || id.includes("@headlessui/react")) {
              return "ui";
            }
          }
          if (id.includes("/pages/play/") || id.includes("/components/play/")) {
            return "play";
          }
          if (id.includes("/pages/admin/")) {
            return "admin";
          }
        },
      },
    },
  },
});
