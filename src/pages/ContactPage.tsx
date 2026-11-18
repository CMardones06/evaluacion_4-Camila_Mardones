import ContactForm from "../components/ContactForm";
import type { ContactProps } from "../types";

export default function ContactPage({ correo }: ContactProps) {
    return (
        <section className="contact" aria-labelledby="titulo-contacto">
            <div className="contact__information">
                <h2 id="titulo-contacto">Contacto</h2>
                <p>Puedes escribirme para conversar sobre mis proyectos.</p>

                <p>
                    <a className="contact__email" href={`mailto:${correo}`}>
                        {correo}
                    </a>
                </p>
            </div>
            <ContactForm correo={correo} />
        </section>
    );
}