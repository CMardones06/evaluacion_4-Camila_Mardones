import type { AboutPageProps } from "../types";

export default function AboutPage({ perfil }: AboutPageProps) {
    return (
        <section className="about" aria-labelledby="titulo-sobre-mi">
            <h2 id="titulo-sobre-mi" className="about__title">
                Sobre mí
            </h2>

            <p className="about__biography">{perfil.biografia}</p>

            <h3 className="about__skills-title">
                Habilidades y conocimientos
            </h3>

            <ul className="about__skills">
                {perfil.habilidades.map((habilidad) => (
                    <li key={habilidad} className="about__skill">
                        {habilidad}
                    </li>
                ))}    
            </ul>
        </section>
    );
}