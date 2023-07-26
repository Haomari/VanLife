import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <main className="host">
        <nav className="host__host-menu host-menu host-menu__container">
          <Link className="host-menu__link" to={"/host"}>
            Dashboard
          </Link>
          <Link className="host-menu__link" to={"/host/income"}>
            Income
          </Link>
          <Link className="host-menu__link" to={"/host/vans"}>
            Vans
          </Link>
          <Link className="host-menu__link" to={"/host/reviews"}>
            Reviews
          </Link>
        </nav>
        <Outlet />
      </main>
    </>
  );
}
