import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme, ThemeProviderProps } from "../types";

function obtenerTemaInicial(): Theme {
  try {
    const guardado = localStorage.getItem("portafolio-theme");

    if (guardado === "light" || guardado === "dark") {
      return guardado;
    }
  } catch {
    //
  }

  return "light";
}

export default function ThemeProvider({
  children,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(obtenerTemaInicial);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    try {
      localStorage.setItem("portafolio-theme", theme);
    } catch {
      // 
    }
  }, [theme]);

  function toggleTheme(): void {
    setTheme((anterior) => anterior === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}