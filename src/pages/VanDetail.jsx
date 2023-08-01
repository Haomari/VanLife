import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function VanDetail() {
  const [vanData, setVanData] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch quiz data from API when component mounts or triggerReload changes
    axios
      .get(`/api/vans/${params.id}`)
      .then((response) => {
        console.log("vanData", response);
        setVanData(response.data.vans);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="van">
      <section className="van__main">
        <div className="van__container">
          {vanData ? (
            <>
              <Link relative="path" to=".." className="van__back-button">Back to all vans</Link>
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
              <Link relative="path" to=".." className="van__main-button">Rent this van</Link>
            </>
          ) : (
            <h2 className="van__loading">Loading</h2>
          )}
        </div>
      </section>
    </main>
  );
}
