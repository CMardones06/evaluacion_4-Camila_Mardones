import { useGitHubRepos } from "../hooks/useGitHubRepos";
import RepositoryCard from "./RepositoryCard";

export default function GitHubRepos() {
  const { data, loading, error, reintentar } = useGitHubRepos();

  return (
    <section
      className="github-repos"
      aria-labelledby="titulo-github"
    >
      <h2 id="titulo-github">Repositorios recientes de GitHub</h2>

      <p className="github-repos__description">
        Mis seis repositorios públicos actualizados más recientemente.
      </p>

      <div role="status" aria-live="polite">
        {loading && (
          <p className="github-repos__status">
            Cargando repositorios…
          </p>
        )}
      </div>

      {error && (
        <div className="github-repos__error">
          <p role="alert">{error}</p>

          <button
            className="github-repos__retry"
            type="button"
            onClick={reintentar}
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && data && (
        data.length > 0 ? (
          <div className="github-repos__grid">
            {data.map((repositorio) => (
              <RepositoryCard
                key={repositorio.id}
                repositorio={repositorio}
              />
            ))}
          </div>
        ) : (
          <p role="status">No hay repositorios públicos disponibles.</p>
        )
      )}
    </section>
  );
}