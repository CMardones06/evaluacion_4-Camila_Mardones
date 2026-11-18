import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
        className="theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-pressed={theme === "dark"}
        >
            Modo Oscuro
        </button>
    );
}