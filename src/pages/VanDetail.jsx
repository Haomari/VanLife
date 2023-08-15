import React, { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getVan } from "../app-components/api";
import { LoadingFullScreen } from "../app-components/Loading";

// Loader function for fetching van data based on params.id
export function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

// Component to display detailed information about a van
export default function VanDetail() {
  const dataPromise = useLoaderData();
  const location = useLocation();

  // Extract search and buttonText from location state, if available
  const search = location.state?.search || "";
  const buttonText = location.state?.buttonText;

  return (
    <main className="van">
      <section className="van__main">
        <div className="van__container">
          {/* Back button */}
          <Link
            relative="path"
            to={`..?${search}`}
            className="van__back-button"
          >
            {buttonText
              ? `Back to ${buttonText.split("-").join(", ")} vans`
              : "Back to all vans"}
          </Link>
          <Suspense fallback={<LoadingFullScreen />}>
            <Await resolve={dataPromise.van}>
              {(loadedVan) => {
                return (
                  <>
                    {/* Display van details */}
                    <div className="van__image-body">
                      <img
                        src={loadedVan.imageUrl}
                        alt="Van"
                        className="van__image"
                      />
                    </div>
                    <div className={`van__type van__type_${loadedVan.type}`}>
                      <p>
                        {loadedVan.type.charAt(0).toUpperCase() +
                          loadedVan.type.slice(1)}
                      </p>
                    </div>
                    <h4 className="van__title">{loadedVan.name}</h4>
                    <div className="van__price">
                      <p className="van__price_amount">
                        ${loadedVan.price}
                        <span className="van__price_period">/day</span>
                      </p>
                    </div>
                    <div className="van__description">
                      <p>{loadedVan.description}</p>
                    </div>
                    {/* Rent button */}
                    <Link
                      relative="path"
                      to={`..?${search}`}
                      className="van__main-button"
                    >
                      Rent this van
                    </Link>
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </section>
    </main>
  );
}
