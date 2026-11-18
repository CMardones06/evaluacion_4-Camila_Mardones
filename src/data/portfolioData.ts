import type { Perfil, Proyecto } from "../types";

import coloresImagen from "../assets/img/colores.png";
import rutasImagen from "../assets/img/rutas.png";
import animacionImagen from "../assets/img/animacion.png";

export const perfil: Perfil = {
  nombre: "Camila Mardones",
  biografia:
    "Soy estudiante de Ingeniería Civil en Informática en la Universidad Católica de Temuco. Me apasionan la programación y el desarrollo de software, y busco aprender nuevas tecnologías y mejorar mis habilidades.",
  habilidades: ["Python", "HTML", "CSS"],
  correo: "camila.mardones2025@alu.uct.cl",
};

export const proyectos: Proyecto[] = [
  {
    id: "paleta",
    titulo: "Web para paleta de colores",
    descripcion:
      "Sitio web para obtener una paleta de colores monocromática.",
    tecnologias: ["HTML", "CSS"],
    imagen: coloresImagen,
    textoAlternativo:
      "Cuadrícula de tonos verdes de distintas intensidades en la paleta de colores",
    urlRepositorio: "https://github.com/CMardones06/26-08",
  },
  {
    id: "rutas",
    titulo: "Calculadora de rutas",
    descripcion:
      "Calculadora de rutas óptimas entre ciudades mediante el algoritmo de Dijkstra.",
    tecnologias: ["Python", "Matplotlib", "NetworkX"],
    imagen: rutasImagen,
    textoAlternativo:
      "Grafo de ciudades argentinas con la ruta entre Mar del Plata y Corrientes resaltada",
    urlRepositorio:
      "https://github.com/CMardones06/Proyecto-de-Matematica-Discreta",
  },
  {
    id: "animacion",
    titulo: "Animación matemática",
    descripcion: "Animación de integrales definidas realizada en Python.",
    tecnologias: ["Python", "Manim Community"],
    imagen: animacionImagen,
    textoAlternativo:
      "Fotograma de una animación sobre integrales definidas con una región sombreada bajo una curva",
    urlRepositorio:
      "https://github.com/CMardones06/EID-CalculoIntermedio-G06",
  },
];