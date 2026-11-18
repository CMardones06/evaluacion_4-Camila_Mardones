import ProyectoCard from "../components/ProyectoCard";
import GitHubRepos from "../components/GitHubRepos";
import { proyectos } from "../data/portfolioData";

export default function ProjectsPage() {
  return (
    <>
      <section className="projects" aria-labelledby="titulo-proyectos">
        <h2 id="titulo-proyectos">Mis proyectos</h2>

        <p className="projects__description">
          Los enlaces de cada proyecto llevan a su código en GitHub.
        </p>

        <div className="projects__grid">
          {proyectos.map((proyecto) => (
            <ProyectoCard
              key={proyecto.id}
              proyecto={proyecto}
            />
          ))}
        </div>
      </section>

      <GitHubRepos />
    </>
  );
}