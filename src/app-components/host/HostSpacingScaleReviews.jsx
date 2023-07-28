export default function HostSpacingScaleReviews() {
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

  return reviewDataArray.map((review) => {
    return (
      <div className={`spacing-scale__item`}>
        <div className="spacing-scale__stars">
          <p>{review.star} stars</p>
        </div>
        <div className="spacing-scale__scale">
          <div
            className="spacing-scale__scale--filled"
            style={{width: review.procent + "%"}}
          ></div>
        </div>
        <div className="spacing-scale__procent">
          <p>{review.procent}%</p>
        </div>
      </div>
    );
  });
}
