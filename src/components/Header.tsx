import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import type { HeaderProps } from "../types";

export default function Header({ nombre }: HeaderProps) {
  return (
    <header className="header">
      <div className="container header__content">
        <h1 className="header__title">{nombre}</h1>

        <div className="header__actions">
          <Navbar />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}