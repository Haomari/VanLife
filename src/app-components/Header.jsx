import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={"."}>
          <img src={logo} className="header__logo"></img>
        </Link>
        <nav className="header__menu">
          <NavLink
            to={"host"}
            className={({ isActive }) =>
              isActive
                ? "header__menu-item header__menu-item--selected"
                : "header__menu-item"
            }
          >
            Host
          </NavLink>
          <NavLink
            to={"about"}
            className={({ isActive }) =>
              isActive
                ? "header__menu-item header__menu-item--selected"
                : "header__menu-item"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"vans"}
            className={({ isActive }) =>
              isActive
                ? "header__menu-item header__menu-item--selected"
                : "header__menu-item"
            }
          >
            Vans
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
