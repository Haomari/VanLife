import aboutImage from "../img/aboutImage.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about">
      <section className="about__main main-about">
        <div className="main-about__container">
          <div className="main-about__image-container">
            <img src={aboutImage} alt="aboutImage"></img>
          </div>
          <div className="main-about__body">
            <h2 className="main-about__title">
              Don’t squeeze in a sedan when you could relax in a van.
            </h2>
            <p className="main-about__text">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch.
              <br /> (Hitch costs extra 😉) <br />
              <br />
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
          <div className="main-about__link-body">
            <h3 className="link-body__title">
              Your destination is waiting. Your van is ready.
            </h3>
            <Link className="link-body__link" to="/vans">
              Explore our vans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
