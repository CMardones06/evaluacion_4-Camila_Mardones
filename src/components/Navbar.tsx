import { NavLink } from "react-router-dom";
import { navigationItems } from "../data/navigation";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <ul className="navbar__list">
        {navigationItems.map((item) => (
          <li key={item.ruta} className="navbar__item">
            <NavLink
              to={item.ruta}
              end
              className={({ isActive }) =>
                isActive
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
              }
            >
              {item.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}