import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function HostVanDetail() {
  const [vanData, setVanData] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch quiz data from API when component mounts or triggerReload changes
    axios
      .get(`/api/host/vans/${params.id}`)
      .then((response) => {
        console.log("vanData", response);
        setVanData(response.data.vans[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(vanData);

  return (
    <section className="host__van van-host">
      <div className="van-host__container">
        <Link relative="path" to=".." className="van-host__back-button">
          Back to all vans
        </Link>
        {vanData ? (
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
          </div>
        ) : (
          <h2 className="van__loading">Loading</h2>
        )}
      </div>
    </section>
  );
}

{
  /* <div className="van__image-body">
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
              <Link to={"/vans"} className="van__main-button">Rent this van</Link> */
}
