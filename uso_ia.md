# Declaración de uso de inteligencia artificial

Estudiante: Camila Mardones  
Asignatura: Desarrollo de Frontend — ICINF1107  
Evaluación: Proyecto Integrado Final N°4

## 1. Herramientas utilizadas

Utilicé ChatGPT, de OpenAI, mediante una conversación de asistencia.
No registré de manera verificable la versión exacta del modelo.

La asistencia incluyó interpretación de requisitos, generación
sustantiva de código, explicaciones, depuración, revisión de cambios
y propuestas de documentación.

## 2. Propósito de uso

Solicité apoyo para:

- Comparar el portafolio anterior con la pauta y la rúbrica.
- Organizar tareas y el flujo de trabajo con Git.
- Configurar Vite, React y TypeScript.
- Separar tipos, datos, componentes y vistas.
- Migrar los estilos originales a clases BEM.
- Implementar rutas y una página 404.
- Desarrollar un formulario controlado.
- Integrar GitHub REST API con estados, cancelación y caché.
- Ampliar el perfil y agregar un tema mediante Context API.
- Interpretar errores y advertencias de herramientas.
- Preparar README, inventario y esta declaración.

## 3. Prompts representativos

Estos son algunos mensajes textuales utilizados durante el proceso:

> empecemos a trabajr con el punto numero 1

> es necesario crear las ramas de trabajo? es algo solicitado por la rubrica o solamente es por comodiddad?

> antes de pasar a la documentacion, siento que el contenido de la pagina en si esta muy simple. que sugieres pudiera agregarle yo a mi portafolio para que se vea mas completo sin complejizar mucho el proyecto

> ya agregemos los siguientes cambios: presentación mas personal, habilidades agrupadas, formación y objetivos y tema claro/oscuro

> este codigo me esta dando varios problemas

También compartí enlaces a pull requests, capturas de VS Code,
salidas de compilación, resultados de ESLint, npm audit y fragmentos
de código para recibir orientación sobre problemas concretos.

## 4. Output recibido

La herramienta propuso:

- Una lista de tareas vinculada con los criterios de evaluación.
- Comandos de instalación, ramas, commits y pull requests.
- Interfaces TypeScript y archivos de datos.
- Componentes y vistas completos para recuperar el portafolio.
- CSS basado en los colores y distribución de la E2.
- Código de React Router y gestión del foco.
- Validación del formulario y preparación de correo.
- Servicio HTTP, hook y tarjetas para GitHub.
- Validación de datos recibidos como unknown.
- AbortController y caché temporal.
- Contexto, proveedor, hook y botón del tema.
- Textos iniciales de presentación, habilidades y objetivos.
- Borradores de documentación.

La intervención de IA no se limitó a sugerencias generales:
incluyó archivos completos utilizados como base del proyecto.

## 5. Ajustes, refactorización y verificación

La implementación se realizó de forma guiada, incorporando archivos
y comprobando resultados durante el desarrollo.

Entre los problemas detectados y corregidos estuvieron:

- El README inicialmente tenía otro nombre.
- VS Code mantuvo un aviso de importación que se resolvió
  al guardar y reiniciar el servidor de TypeScript.
- Los estilos generales se habían reemplazado al añadir contacto.
- Una clase BEM tenía un guion bajo en lugar de dos.
- La duración de la caché se había escrito como 30 segundos
  en lugar de cinco minutos.
- ThemeProvider presentaba errores en el operador lógico,
  la declaración de props, las importaciones y una cadena
  escrita sin comillas.

Se ejecutaron npm run build y npm run lint durante el proceso.
También se comprobaron los repositorios reales, la carga con red
lenta, el error sin conexión, el reintento y la caché entre rutas.

La revisión del código no reemplazó todas las comprobaciones visuales.
No se atribuyen resultados de Lighthouse ni pruebas con lector
de pantalla que no hayan sido realizadas.

Las propuestas de textos personales deben revisarse para asegurar
que describan mi experiencia y no exageren mis conocimientos.

## 6. Reflexión crítica final

La asistencia me permitió avanzar mediante ejemplos aplicados
a mi propio portafolio. También mostró que copiar código sin revisar
puede introducir errores de sintaxis, nombres o configuración
que no siempre se detectan de la misma manera.

Una compilación exitosa no asegura que el diseño se conserve:
la pérdida de estilos durante la migración fue un ejemplo de ello.
Las pruebas del navegador complementan las revisiones de TypeScript
y ESLint.

Reconozco que recibir archivos completos puede generar dependencia
si no comprendo su funcionamiento. Para preparar la validación
individual debo explicar el recorrido de los datos, las props,
el estado, los efectos, su limpieza, las rutas y el contexto.

La IA aportó una parte sustantiva del código y la documentación.
La selección, adaptación, comprobación de la entrega y comprensión
del proyecto son mi responsabilidad.