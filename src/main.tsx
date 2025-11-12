import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App'

// Aplicar el tema de forma síncrona antes de renderizar para evitar flash
const applyTheme = () => {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    html.classList.add("dark");
    html.classList.remove("light");
  } else if (savedTheme === "light") {
    html.classList.add("light");
    html.classList.remove("dark");
  } else {
    // Si no hay tema guardado, usar preferencias del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }
};

// Ejecutar antes de cualquier renderización
applyTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
