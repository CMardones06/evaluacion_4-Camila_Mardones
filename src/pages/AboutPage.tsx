import type { AboutPageProps } from "../types";

export default function AboutPage({ perfil }: AboutPageProps) {
  return (
    <>
      <section className="about" aria-labelledby="titulo-sobre-mi">
        <h2 id="titulo-sobre-mi" className="about__title">
          Sobre mí
        </h2>

        <p className="about__biography">{perfil.biografia}</p>

        <h3 className="about__skills-title">
          Habilidades y conocimientos
        </h3>

        <div className="about__skill-groups">
          <p className="about__skills-note">
            Tecnologías utilizadas en proyectos académicos y personales.
          </p>

          {perfil.habilidades.map((grupo) => (
            <div key={grupo.categoria} className="about__skill-group">
              <h4 className="about__category">{grupo.categoria}</h4>

              <ul className="about__skills">
                {grupo.elementos.map((habilidad) => (
                  <li key={habilidad} className="about__skill">
                    {habilidad}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        className="development"
        aria-labelledby="titulo-formacion"
      >
        <div className="development__block">
          <h2 id="titulo-formacion">Formación</h2>

          <ul className="development__list">
            {perfil.formacion.map((elemento) => (
              <li key={elemento}>{elemento}</li>
            ))}
          </ul>
        </div>

        <div className="development__block">
          <h2>Objetivos de aprendizaje</h2>

          <ul className="development__list">
            {perfil.objetivos.map((objetivo) => (
              <li key={objetivo}>{objetivo}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}