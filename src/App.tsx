import { useEffect, useRef } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

import { perfil } from "./data/portfolioData";
import { navigationItems } from "./data/navigation";

function PortfolioLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const pagina = navigationItems.find((item) => item.ruta === pathname);
    const titulo = pagina?.texto ?? "Página no encontrada";

    document.title = `${titulo} | ${perfil.nombre}`;
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <Header nombre={perfil.nombre} />

      <main
        id="contenido"
        className="container"
        tabIndex={-1}
        ref={mainRef}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/sobre-mi"
            element={<AboutPage perfil={perfil} />}
          />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route
            path="/contacto"
            element={<ContactPage correo={perfil.correo} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer nombre={perfil.nombre} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <PortfolioLayout />
    </BrowserRouter>
  );
}