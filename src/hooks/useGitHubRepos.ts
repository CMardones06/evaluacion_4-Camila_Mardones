import { useEffect, useState } from "react";
import { obtenerRepositorios } from "../services/githubService";
import type { GitHubReposState } from "../types";

export function useGitHubRepos() {
  const [estado, setEstado] = useState<GitHubReposState>({
    data: null,
    loading: true,
    error: null,
  });

  const [intento, setIntento] = useState<number>(0);

  useEffect(() => {
    const controller = new AbortController();

    async function cargarRepositorios(): Promise<void> {
      try {
        const repositorios = await obtenerRepositorios(controller.signal);

        if (controller.signal.aborted) {
          return;
        }

        setEstado({
          data: repositorios,
          loading: false,
          error: null,
        });
      } catch (error: unknown) {
        if (controller.signal.aborted) {
          return;
        }

        const mensaje =
          error instanceof Error
            ? error.message
            : "Ocurrió un error inesperado.";

        setEstado({
          data: null,
          loading: false,
          error:
            `No fue posible cargar los repositorios. ` +
            `Comprueba tu conexión. ${mensaje}`,
        });
      }
    }

    void cargarRepositorios();

    return () => {
      controller.abort();
    };
  }, [intento]);

  function reintentar(): void {
    setEstado({
      data: null,
      loading: true,
      error: null,
    });

    setIntento((anterior) => anterior + 1);
  }

  return { ...estado, reintentar };
}