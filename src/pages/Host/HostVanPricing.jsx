import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function HostVanPricing() {
  const [vansData, setVansData] = useState(null);
  const params = useParams();

  useEffect(() => {
    // Fetch quiz data from API when component mounts or triggerReload changes
    axios
      .get(`/api/host/vans/${params.id}`)
      .then((response) => {
        console.log("lol", response);
        setVansData(response.data.vans[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="van-host__pricing pricing-van-host">
      {vansData ? (
        <div className="pricing-van-host__price">
          <p className="pricing-van-host__price_amount">
            ${vansData.price}
            <span className="pricing-van-host__price_period">/day</span>
          </p>
        </div>
      ) : (
        <h2 className="van-host__loading loading">Loading</h2>
      )}
    </div>
  );
}
