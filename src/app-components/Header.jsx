import { Link } from "react-router-dom";
import logo from "../img/logo.png";


export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link to={"/"}>
          <img src={logo} className="header__logo"></img>
        </Link>
				<nav className="header__menu">
					<Link to={"/host"} className="header__menu-item">Host</Link>
					<Link to={"/about"} className="header__menu-item">About</Link>
					<Link to={"/vans"} className="header__menu-item">Vans</Link>
				</nav>
      </div>
    </header>
  );
}
