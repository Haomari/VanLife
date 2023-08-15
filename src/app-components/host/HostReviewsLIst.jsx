import React from "react";
import starSVG from "../../img/star.svg";

export default function HostReviewsList() {
  // Array of review data objects
  const reviewListDataArray = [
    {
      name: "Elliot",
      date: "December 1, 2023",
      text: "The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      numberOfStars: 5,
    },
    {
      name: "Sandy",
      date: "November 23, 2023",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      numberOfStars: 4,
    },
  ];

  return (
    <>
      {/* Display the number of reviews */}
      <h3 className="reviews__amount">
        Reviews ({reviewListDataArray.length})
      </h3>
      {/* Map through the array of reviews */}
      {reviewListDataArray.map((review, i) => {
        return (
          <div key={i} className="reviews__review">
            {/* Display star rating */}
            <div className="reviews__stars">
              {(() => {
                const options = [];

                // Generate star images based on the number of stars
                for (let i = 0; i < review.numberOfStars; i++) {
                  options.push(<img key={i} src={starSVG} alt="Star"></img>);
                }

                return options;
              })()}
            </div>
            {/* Display reviewer name and date */}
            <div className="reviews__info">
              <div className="reviews__name">{review.name}</div>
              <div className="reviews__date">{review.date}</div>
            </div>
            {/* Display review text */}
            <div className="reviews__text">{review.text}</div>
          </div>
        );
      })}
    </>
  );
}
