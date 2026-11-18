import type { FooterProps } from "../types";

export default function Footer({ nombre }: FooterProps) {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <p className="footer__copyright">
                    © 2026 {nombre}. Todos los derechos reservados. 
                </p>
            </div>
        </footer>
    );
}