import type { GitHubRepo } from "../types";
import {
  GITHUB_REPOS_URL,
  GITHUB_CACHE_TTL_MS,
} from "../data/githubConfig";

let repositoriosCache: GitHubRepo[] | null = null;
let fechaCache = 0;

function esRepositorio(valor: unknown): valor is GitHubRepo {
  if (typeof valor !== "object" || valor === null) {
    return false;
  }

  const repo = valor as Record<string, unknown>;

  return (
    typeof repo.id === "number" &&
    typeof repo.name === "string" &&
    (typeof repo.description === "string" || repo.description === null) &&
    typeof repo.html_url === "string" &&
    (typeof repo.language === "string" || repo.language === null) &&
    typeof repo.stargazers_count === "number" &&
    typeof repo.updated_at === "string"
  );
}

export async function obtenerRepositorios(
  signal: AbortSignal,
): Promise<GitHubRepo[]> {
  signal.throwIfAborted();

  const cacheVigente =
    repositoriosCache !== null &&
    Date.now() - fechaCache < GITHUB_CACHE_TTL_MS;

  if (cacheVigente && repositoriosCache !== null) {
    return repositoriosCache;
  }

  const respuesta = await fetch(GITHUB_REPOS_URL, {
    signal,
    headers: {
      Accept: "application/vnd.github+json",
    },
  });

  if (!respuesta.ok) {
    if (respuesta.status === 403 || respuesta.status === 429) {
      throw new Error(
        "GitHub ha limitado o rechazado la consulta. Inténtalo más tarde.",
      );
    }

    throw new Error(
      `No se pudieron obtener los repositorios. Código HTTP: ${respuesta.status}.`,
    );
  }

  const resultado: unknown = await respuesta.json();

  if (!Array.isArray(resultado) || !resultado.every(esRepositorio)) {
    throw new Error("GitHub devolvió datos con un formato inesperado.");
  }

  signal.throwIfAborted();

  repositoriosCache = resultado;
  fechaCache = Date.now();

  return resultado;
}