import React, { Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";

import { getVans } from "../app-components/api";
import { LoadingFullScreen } from "../app-components/Loading";

export function loader({ params }) {
  return defer({ vans: getVans(params.id) });
}

export default function VanDetail() {
  const dataPromise = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const buttonText = location.state?.buttonText;

  return (
    <main className="van">
      <section className="van__main">
        <div className="van__container">
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
            <Await resolve={dataPromise.vans}>
              {(loadedVans) => {
                return (
                  <>
                    <div className="van__image-body">
                      <img
                        src={loadedVans.imageUrl}
                        alt="Van"
                        className="van__image"
                      />
                    </div>
                    <div className={`van__type van__type_${loadedVans.type}`}>
                      <p>
                        {loadedVans.type.charAt(0).toUpperCase() +
                          loadedVans.type.slice(1)}
                      </p>
                    </div>
                    <h4 className="van__title">{loadedVans.name}</h4>
                    <div className="van__price">
                      <p className="van__price_amount">
                        ${loadedVans.price}
                        <span className="van__price_period">/day</span>
                      </p>
                    </div>
                    <div className="van__description">
                      <p>{loadedVans.description}</p>
                    </div>
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
