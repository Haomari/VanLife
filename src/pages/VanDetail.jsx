import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
import axios from "axios";

import { getVans } from "../app-components/api";

export function loader({params}) {
  return getVans(params.id);
}


export default function VanDetail() {
  const vanData = useLoaderData();
  const location = useLocation();

  const search = location.state?.search || "";
  const buttonText = location.state?.buttonText;

  return (
    <main className="van">
      <section className="van__main">
        <div className="van__container">
          {vanData ? (
            <>
              <Link
                relative="path"
                to={`..?${search}`}
                className="van__back-button"
              >
                {buttonText
                  ? `Back to ${buttonText.split("-").join(", ")} vans`
                  : "Back to all vans"}
              </Link>
              <div className="van__image-body">
                <img src={vanData.imageUrl} alt="Van" className="van__image" />
              </div>
              <div className={`van__type van__type_${vanData.type}`}>
                <p>
                  {vanData.type.charAt(0).toUpperCase() + vanData.type.slice(1)}
                </p>
              </div>
              <h4 className="van__title">{vanData.name}</h4>
              <div className="van__price">
                <p className="van__price_amount">
                  ${vanData.price}
                  <span className="van__price_period">/day</span>
                </p>
              </div>
              <div className="van__description">
                <p>{vanData.description}</p>
              </div>
              <Link
                relative="path"
                to={`..?${search}`}
                className="van__main-button"
              >
                Rent this van
              </Link>
            </>
          ) : (
            <h2 className="van__loading">Loading</h2>
          )}
        </div>
      </section>
    </main>
  );
}
