export default function HostSpacingScaleReviews() {
  // Array of review data with star rating and corresponding percentage
  const reviewDataArray = [
    {
      star: 5,
      procent: 100,
    },
    {
      star: 4,
      procent: 80,
    },
    {
      star: 3,
      procent: 60,
    },
    {
      star: 2,
      procent: 40,
    },
    {
      star: 1,
      procent: 20,
    },
  ];

  // Map through the array to generate review scale items
  return reviewDataArray.map((review, i) => {
    return (
      <div key={i} className={`spacing-scale__item`}>
        {/* Display star rating */}
        <div className="spacing-scale__stars">
          <p>{review.star} stars</p>
        </div>
        {/* Display rating scale */}
        <div className="spacing-scale__scale">
          {/* Filled portion of the scale */}
          <div
            className="spacing-scale__scale--filled"
            style={{width: review.procent + "%"}}
          ></div>
        </div>
        {/* Display percentage */}
        <div className="spacing-scale__procent">
          <p>{review.procent}%</p>
        </div>
      </div>
    );
  });
}
