import starSVG from "../../img/star.svg";
import HostSpacingScaleReviews from "../../app-components/host/HostSpacingScaleReviews";
import HostReviewsList from "../../app-components/host/HostReviewsLIst";

export default function HostReviews() {
  return (
    <section className="host__reviews reviews-host">
      <div className="reviews-host__container">
        <div className="reviews-host__title-body title-body">
          <h2 className="title-body__title">Your reviews</h2>
          <p className="title-body__time">last <span>30 days</span></p>
        </div>
        <div className="reviews-host__overall-rating overall-rating">
          <div className="overall-rating__amount">
            <p className="overall-rating__number">5.0</p>
            <img src={starSVG} alt="Star"></img>
            <p className="overall-rating__text">overall rating</p>
          </div>

          <div className="overall-rating__spacing-scale spacing-scale spacing-scale">
            <HostSpacingScaleReviews />
          </div>
        </div>
        <div className="reviews-host__reviews reviews">
          <HostReviewsList />
        </div>
      </div>
    </section>
  );
}
