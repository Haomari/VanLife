import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { vanData } = useOutletContext();

  return (
    <div className="van-host__pricing pricing-van-host">
      {vanData ? (
        <div className="pricing-van-host__price">
          <p className="pricing-van-host__price_amount">
            ${vanData.price}
            <span className="pricing-van-host__price_period">/day</span>
          </p>
        </div>
      ) : (
        <h2 className="van-host__loading loading">Loading</h2>
      )}
    </div>
  );
}
