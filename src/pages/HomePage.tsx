import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";
import { perfil } from "../data/portfolioData";

export default function HomePage() {
    return (
        <>
            <AboutPage perfil={perfil} />
            <ProjectsPage />
            <ContactPage correo={perfil.correo} />
        </>
    );
}