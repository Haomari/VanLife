import React, { Suspense } from "react";
import {
  NavLink,
  Link,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVan } from "../../app-components/api";
import { requireAuth } from "../../app-components/utils";

import { LoadingFullScreen } from "../../app-components/Loading";

// Loader function for fetching van data
export async function loader({ params, request }) {
  // Ensure the user is authenticated before loading data
  await requireAuth(request);
  // Defer loading of van data
  return defer({ vans: getVan(params.id) });
}

// Component to display details about a host van
export default function HostVanDetail() {
  const dataPromise = useLoaderData();

  return (
    <section className="host__van van-host">
      <div className="van-host__container">
        {/* Link to go back to all vans */}
        <Link
          to="/host/vans"
          /* /host/vans - because component have an outlet component inside */
          className="van-host__back-button"
        >
          Back to all vans
        </Link>
        <Suspense fallback={<LoadingFullScreen />}>
          <Await resolve={dataPromise.vans}>
            {(vanData) => {
              return (
                <div className="van-host__body">
                  <div className="van-host__header">
                    <div className="van-host__image-body">
                      <img
                        src={vanData.imageUrl}
                        alt="Van"
                        className="van-host__image"
                      />
                    </div>
                    <div className="van-host__info">
                      <div
                        className={`van-host__type van-host__type_${vanData.type}`}
                      >
                        <p>
                          {vanData.type.charAt(0).toUpperCase() +
                            vanData.type.slice(1)}
                        </p>
                      </div>
                      <h4 className="van-host__title">{vanData.name}</h4>
                      <div className="van-host__price">
                        <p className="van-host__price_amount">
                          ${vanData.price}
                          <span className="van-host__price_period">/day</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Navigation links */}
                  <nav className="van-host__nav">
                    <NavLink
                      to={"."}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "van-host__link van-host__link--active"
                          : "van-host__link"
                      }
                    >
                      Details
                    </NavLink>
                    <NavLink
                      to={"pricing"}
                      className={({ isActive }) =>
                        isActive
                          ? "van-host__link van-host__link--active"
                          : "van-host__link"
                      }
                    >
                      Pricing
                    </NavLink>
                    <NavLink
                      to={"photos"}
                      className={({ isActive }) =>
                        isActive
                          ? "van-host__link van-host__link--active"
                          : "van-host__link"
                      }
                    >
                      Photos
                    </NavLink>
                  </nav>
                  {/* Outlet to render nested routes */}
                  <Outlet context={{ vanData }} />
                </div>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}
