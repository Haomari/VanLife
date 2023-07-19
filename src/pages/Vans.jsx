import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Vans() {
  useEffect(() => {
    // Fetch quiz data from API when component mounts or triggerReload changes
    axios.get('/api/vans')
      .then((response) => {
        console.log("lol", response);
        console.log("dfg");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="vans">
      <section className="vans__main">
        <div className="vans__container">
          <div className="header-vans">
            <h2 className="header-vans__title">Explore our van options</h2>
            <ul className="header-vans__filters">
              <li>
                <button
                  onClick={(e) => console.log(e)}
                  className="header-vans__filter-default"
                >
                  Simple
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => console.log(e)}
                  className="header-vans__filter-default"
                >
                  Luxury
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => console.log(e)}
                  className="header-vans__filter-default"
                >
                  Rugged
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => console.log(e)}
                  className="header-vans__filter-clear"
                >
                  Clear filters
                </button>
              </li>
            </ul>
          </div>
          <div className="list-vans">
            <a href="google.com" className="list-vans__item">
              <div className="list-vans__image-body">
                <img
                  src={
                    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  }
                  alt="Van"
                ></img>
              </div>
              <div className="list-vans__information">
                <h4 className="list-vans__title">Modest Explore</h4>
                <div className="list-vans__price">
                  <p className="list-vans__price_amount">$60</p>
                  <p className="list-vans__price_period">/day</p>
                </div>
              </div>
              <div className="list-vans__type">
                <p>Simple</p>
              </div>
            </a>
            <a className="list-vans__item">
              <div className="list-vans__image-body">
                <img
                  src={
                    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  }
                  alt="Van"
                ></img>
              </div>
              <div className="list-vans__information">
                <h4 className="list-vans__title">Modest Explore</h4>
                <div className="list-vans__price">
                  <p className="list-vans__price_amount">$60</p>
                  <p className="list-vans__price_period">/day</p>
                </div>
              </div>
              <div className="list-vans__type">
                <p>Simple</p>
              </div>
            </a>
            <a className="list-vans__item">
              <div className="list-vans__image-body">
                <img
                  src={
                    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  }
                  alt="Van"
                ></img>
              </div>
              <div className="list-vans__information">
                <h4 className="list-vans__title">Modest Explore</h4>
                <div className="list-vans__price">
                  <p className="list-vans__price_amount">$60</p>
                  <p className="list-vans__price_period">/day</p>
                </div>
              </div>
              <div className="list-vans__type">
                <p>Simple</p>
              </div>
            </a>
            <a className="list-vans__item">
              <div className="list-vans__image-body">
                <img
                  src={
                    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  }
                  alt="Van"
                ></img>
              </div>
              <div className="list-vans__information">
                <h4 className="list-vans__title">Modest Explore</h4>
                <div className="list-vans__price">
                  <p className="list-vans__price_amount">$60</p>
                  <p className="list-vans__price_period">/day</p>
                </div>
              </div>
              <div className="list-vans__type">
                <p>Simple</p>
              </div>
            </a>
            <a className="list-vans__item">
              <div className="list-vans__image-body">
                <img
                  src={
                    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  }
                  alt="Van"
                ></img>
              </div>
              <div className="list-vans__information">
                <h4 className="list-vans__title">Modest Explore</h4>
                <div className="list-vans__price">
                  <p className="list-vans__price_amount">$60</p>
                  <p className="list-vans__price_period">/day</p>
                </div>
              </div>
              <div className="list-vans__type">
                <p>Simple</p>
              </div>
            </a>
            <a className="list-vans__item">
              <div className="list-vans__image-body">
                <img
                  src={
                    "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png"
                  }
                  alt="Van"
                ></img>
              </div>
              <div className="list-vans__information">
                <h4 className="list-vans__title">Modest Explore</h4>
                <div className="list-vans__price">
                  <p className="list-vans__price_amount">$60</p>
                  <p className="list-vans__price_period">/day</p>
                </div>
              </div>
              <div className="list-vans__type">
                <p>Simple</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
