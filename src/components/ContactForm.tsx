import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import type {
  ContactProps,
  ContactFormValues,
  ContactFormErrors,
} from "../types";

export default function ContactForm({ correo }: ContactProps) {
  const [valores, setValores] = useState<ContactFormValues>({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState<ContactFormErrors>({});
  const [enlaceCorreo, setEnlaceCorreo] = useState<string | null>(null);

  function manejarCambio(
    evento: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = evento.currentTarget;

    if (name !== "nombre" && name !== "correo" && name !== "mensaje") {
      return;
    }

    setValores((anteriores) => ({
      ...anteriores,
      [name]: value,
    }));

    setErrores((anteriores) => ({
      ...anteriores,
      [name]: undefined,
    }));

    setEnlaceCorreo(null);
  }

  function manejarEnvio(evento: FormEvent<HTMLFormElement>): void {
    evento.preventDefault();

    const nuevosErrores: ContactFormErrors = {};
    const nombre = valores.nombre.trim();
    const remitente = valores.correo.trim();
    const mensaje = valores.mensaje.trim();

    if (!nombre) {
      nuevosErrores.nombre = "Escribe tu nombre.";
    }

    if (!remitente) {
      nuevosErrores.correo = "Escribe tu correo electrónico.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(remitente)) {
      nuevosErrores.correo = "Escribe un correo como nombre@dominio.cl.";
    }

    if (!mensaje) {
      nuevosErrores.mensaje = "Escribe un mensaje.";
    }

    setErrores(nuevosErrores);
    setEnlaceCorreo(null);

    if (Object.keys(nuevosErrores).length > 0) {
      return;
    }

    const asunto = encodeURIComponent(`Contacto desde el portafolio: ${nombre}`);
    const cuerpo = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${remitente}\n\n${mensaje}`,
    );

    setEnlaceCorreo(`mailto:${correo}?subject=${asunto}&body=${cuerpo}`);
  }

  return (
    <form
      className="contact-form"
      aria-label="Formulario de contacto"
      onSubmit={manejarEnvio}
      noValidate
    >
      <div className="contact-form__field">
        <label htmlFor="nombre">Nombre (obligatorio)</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          value={valores.nombre}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.nombre)}
          aria-describedby={errores.nombre ? "error-nombre" : undefined}
        />

        {errores.nombre && (
          <p id="error-nombre" className="contact-form__error">
            {errores.nombre}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="correo">Correo electrónico (obligatorio)</label>

        <p id="ayuda-correo" className="contact-form__help">
          Utiliza una dirección completa, por ejemplo: nombre@dominio.cl.
        </p>

        <input
          id="correo"
          name="correo"
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={254}
          required
          value={valores.correo}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.correo)}
          aria-describedby={
            errores.correo ? "ayuda-correo error-correo" : "ayuda-correo"
          }
        />

        {errores.correo && (
          <p id="error-correo" className="contact-form__error">
            {errores.correo}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label htmlFor="mensaje">Mensaje (obligatorio)</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          maxLength={3000}
          required
          value={valores.mensaje}
          onChange={manejarCambio}
          aria-invalid={Boolean(errores.mensaje)}
          aria-describedby={errores.mensaje ? "error-mensaje" : undefined}
        />

        {errores.mensaje && (
          <p id="error-mensaje" className="contact-form__error">
            {errores.mensaje}
          </p>
        )}
      </div>

      <button className="contact-form__submit" type="submit">
        Preparar correo
      </button>

      <p className="contact-form__feedback" role="alert">
        {Object.values(errores).some(Boolean)
          ? "Revisa los campos indicados antes de continuar."
          : ""}
      </p>

      <div role="status" aria-live="polite">
        {enlaceCorreo && (
          <div className="contact-form__success">
            <p>
              Mensaje preparado. Abre tu aplicación de correo para revisarlo
              y enviarlo.
            </p>
            <a href={enlaceCorreo}>Abrir aplicación de correo</a>
          </div>
        )}
      </div>
    </form>
  );
}