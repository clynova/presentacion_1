import { ThemeProvider } from './contexts/ThemeContext'
import { Routes, Route } from "react-router-dom";
import MainLayout from './components/layouts/MainLayout';
import Inicio from './pages/Inicio';
import Seguridad from './pages/Seguridad';
import Dashboard from './pages/Dashboard';
import Accesibilidad from './pages/Accesibilidad';
import RedesSociales from './pages/RedesSociales';
import Blog from './pages/Blog';
import Ciberriesgo from './pages/Ciberriesgo';
import Plantillas from './pages/Plantillas';


function App() {

  return (

    <ThemeProvider>
      <Routes>
        {/* 🌐 Rutas públicas */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Inicio />} />
          <Route path="seguridad" element={<Seguridad />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="accesibilidad" element={<Accesibilidad />} />
          <Route path="redes" element={<RedesSociales />} />
          <Route path="blog" element={<Blog />} />
          <Route path="ciberriesgo" element={<Ciberriesgo />} />
          <Route path="plantillas" element={<Plantillas />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
