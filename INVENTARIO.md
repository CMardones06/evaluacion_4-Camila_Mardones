# Inventario de migración E2 → React

## Proyecto de origen

Repositorio:
https://github.com/CMardones06/frontend-portafolio

La Evaluación 2 estaba construida con HTML y CSS.
No contenía scripts JavaScript, modo oscuro ni filtros programados.

La referencia visual se conserva en docs/captura-e2.png.

## Elementos recuperados

| Elemento de E2 | Destino | Conservación y cambios |
|---|---|---|
| Nombre y encabezado | Header.tsx | Se conserva la identidad y se agregan navegación y control del tema. |
| Biografía | portfolioData.ts y AboutPage.tsx | Se amplía la presentación personal. |
| Habilidades | AboutPage.tsx | Se organizan por categorías y se amplían con tecnologías utilizadas. |
| Tres proyectos destacados | portfolioData.ts, ProjectsPage.tsx y ProyectoCard.tsx | Se conservan imágenes, enlaces y contenido principal. |
| Imágenes de proyectos | src/assets/img/ | Se importan mediante Vite. |
| Correo de contacto | portfolioData.ts y ContactPage.tsx | Se conserva la dirección original. |
| Formulario | ContactForm.tsx | Se incorporan campos controlados, validación y confirmación. |
| Navegación por anclas | Navbar.tsx y App.tsx | Se reemplaza por React Router. |
| Pie de página | Footer.tsx | Se conserva la identificación y el regreso al inicio pasa a utilizar Link. |
| Estilos originales | src/index.css | Se conserva la identidad y se utilizan clases BEM. |
| Medidas de accesibilidad | Componentes y estilos | Se mantienen etiquetas, textos alternativos y foco; se agregan estados accesibles. |

## Funcionalidades nuevas

- Rutas individuales y página 404.
- Menú con indicación de ruta activa.
- Formación y objetivos de aprendizaje.
- Consulta de repositorios públicos de GitHub.
- Estados de carga, éxito, error y respuesta vacía.
- Reintento de la consulta.
- Cancelación de peticiones con AbortController.
- Caché en memoria durante cinco minutos.
- Tema claro y oscuro mediante Context API.
- Persistencia de la preferencia del tema en localStorage.

## Correcciones durante la migración

- Se corrigió una clase de habilidades que tenía un solo guion bajo.
- Se recuperaron los estilos generales que habían sido reemplazados
  accidentalmente al incorporar contacto.
- Se corrigió el nombre de la función ContactPage.
- Se corrigió el cálculo de la caché: 5 × 60 × 1000 milisegundos.
- Se corrigieron errores de sintaxis e importación de tipos
  en ThemeProvider.
- Se activó strict en la configuración TypeScript.
- Se actualiza la documentación para no mencionar un archivo
  accesibilidad.css inexistente en la versión original revisada.
- Se documenta el ancho máximo real de la implementación: 1160 px.

## Decisiones de conservación

Inicio mantiene una vista completa para facilitar la comparación
con la Evaluación 2. Las secciones también tienen rutas propias.

Los repositorios de GitHub complementan los proyectos destacados;
no reemplazan sus imágenes y descripciones originales.

El tema claro conserva la referencia visual. El modo oscuro
es una alternativa elegida por el visitante.

## Límites

El formulario prepara un mensaje mediante mailto; no incorpora
un servicio de envío.

Las mejoras visuales y funcionales deben comprobarse en el navegador.
Una compilación exitosa no demuestra por sí sola accesibilidad
ni fidelidad visual.