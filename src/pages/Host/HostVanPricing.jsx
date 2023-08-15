import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { vanData } = useOutletContext();

  return (
    <div className="van-host__pricing pricing-van-host">
        <div className="pricing-van-host__price">
          <p className="pricing-van-host__price_amount">
            ${vanData.price}
            <span className="pricing-van-host__price_period">/day</span>
          </p>
        </div>
    </div>
  );
}
