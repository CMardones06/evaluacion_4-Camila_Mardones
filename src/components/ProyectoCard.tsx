import type { ProyectoCardProps } from "../types";

export default function ProyectoCard({ proyecto }: ProyectoCardProps) {
    const tituloId = `proyecto-${proyecto.id}`;

    return (
        <article className="project-card" aria-labelledby={tituloId}>
            <div className="project-card__image">
                <img
                src={proyecto.imagen}
                alt={proyecto.textoAlternativo}
                loading="lazy"
                decoding="async"
                />
            </div>

            <h3 id={tituloId} className="project-card__title">
                <a href={proyecto.urlRepositorio}>
                    {proyecto.titulo}
                </a>
            </h3>

            <p className="project-card__description">
                {proyecto.descripcion}
            </p>

            <p className="project-card__technologies">
                <strong>Tecnologías:</strong>{" "}
                {proyecto.tecnologias.join(", ")}.
            </p>

        </article>
    );
}