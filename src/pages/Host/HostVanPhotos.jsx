import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { vanData } = useOutletContext();

  return (
    <div className="van-host__photos photos-van-host">
      {vanData ? (
				<>
        <div className="photos-van-host__image-body">
          <img src={vanData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vanData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vanData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vanData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vanData.imageUrl} alt=""></img>
        </div>
        <div className="photos-van-host__image-body">
          <img src={vanData.imageUrl} alt=""></img>
        </div>
				</>
      ) : (
        <h2 className="van-host__loading loading">Loading</h2>
      )}
    </div>
  );
}
