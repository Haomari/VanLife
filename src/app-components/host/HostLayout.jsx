import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <main className="host">
        <nav className="host__host-menu host-menu host-menu__container">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "host-menu__link host-menu__link--selected"
                : "host-menu__link"
            }
						end
            to={"."}
          >
            Dashboard
          </NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "host-menu__link host-menu__link--selected"
                : "host-menu__link"
            } to={"income"}>
            Income
          </NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "host-menu__link host-menu__link--selected"
                : "host-menu__link"
            } to={"vans"}>
            Vans
          </NavLink>
          <NavLink className={({ isActive }) =>
              isActive
                ? "host-menu__link host-menu__link--selected"
                : "host-menu__link"
            } to={"reviews"}>
            Reviews
          </NavLink>
        </nav>
        <Outlet />
      </main>
    </>
  );
}
