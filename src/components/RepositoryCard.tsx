import type { RepositoryCardProps } from "../types";

export default function RepositoryCard({
  repositorio,
}: RepositoryCardProps) {
  return (
    <article
      className="repository-card"
      aria-labelledby={`repositorio-${repositorio.id}`}
    >
      <h3
        id={`repositorio-${repositorio.id}`}
        className="repository-card__title"
      >
        {repositorio.name}
      </h3>

      <p className="repository-card__description">
        {repositorio.description?.trim() || "Sin descripción disponible."}
      </p>

      <dl className="repository-card__details">
        <div>
          <dt>Lenguaje</dt>
          <dd>{repositorio.language ?? "No especificado"}</dd>
        </div>

        <div>
          <dt>Estrellas</dt>
          <dd>{repositorio.stargazers_count}</dd>
        </div>
      </dl>

      <a
        className="repository-card__link"
        href={repositorio.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver código de {repositorio.name} (nueva pestaña)
      </a>
    </article>
  );
}