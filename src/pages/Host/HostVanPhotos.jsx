import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function HostVanPhotos() {
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
    <div className="van-host__photos photos-van-host">
      {vansData ? (
				<>
        <div className="photos-van-host__image-body">
          <img src={vansData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vansData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vansData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vansData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vansData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vansData.imageUrl} alt=""></img>
        </div>
				</>
      ) : (
        <h2 className="van-host__loading loading">Loading</h2>
      )}
    </div>
  );
}
