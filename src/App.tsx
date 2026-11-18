import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { perfil } from "./data/portfolioData";

export default function App() {
  return (
    <>
      <Header nombre={perfil.nombre} />

      <main id="contenido" className="container" tabIndex={-1}>
        <AboutPage perfil={perfil} />
        <ProjectsPage />
        <ContactPage correo={perfil.correo} />
      </main>

      <Footer nombre={perfil.nombre} />
    </>
  );
}