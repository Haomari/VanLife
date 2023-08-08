import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {

  return (
    <main className="home">
      <section className="home__main main-home">
        <div className="main-home__container">
          <h2 className="main-home__title">
            You got the travel plans, we got the travel vans.
          </h2>
          <p className="main-home__text">
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <Link to={"vans"} className="main-home__button">
            Find your van
          </Link>
        </div>
      </section>
    </main>
  );
}
