import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="not-found" aria-labelledby="titulo-no-encontrado">
            <h2 id="titulo-no-encontrado">404: página no encontrada</h2>
            <p>La dirección que ingresaste no corresponde a una página del portafolio.</p>
            <Link to="/">Volver al inicio</Link>
        </section>
    );
}