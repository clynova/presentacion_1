import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Verificar localStorage primero
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) return savedTheme;
    
    // Verificar preferencias del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  useEffect(() => {
    // Aplicar el tema al elemento html
    const htmlElement = document.documentElement;
    
    // Remover ambas clases primero para asegurar limpieza
    htmlElement.classList.remove("dark", "light");
    
    // Aplicar la clase correspondiente
    if (theme === "dark") {
      htmlElement.classList.add("dark");
      htmlElement.style.colorScheme = "dark";
    } else {
      htmlElement.classList.add("light");
      htmlElement.style.colorScheme = "light";
    }
    
    // Guardar en localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
