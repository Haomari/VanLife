import { useOutletContext } from "react-router-dom";

export default function HostVanHome() {
  const { vanData } = useOutletContext();
  return (
    <div className="van-host__home home-van-host">
      <div className="home-van-host__name">
        <p>
          <span>Name:</span> {vanData.name}
        </p>
      </div>
      <div className="home-van-host__category">
        <p>
          <span>Category:</span>{" "}
          {vanData.type.charAt(0).toUpperCase() + vanData.type.slice(1)}
        </p>
      </div>
      <div className="home-van-host__description">
        <p>
          <span>Description:</span> {vanData.description}
        </p>
      </div>
      <div className="home-van-host__visibility">
        <p>
          <span>Visibility:</span> Public
        </p>
      </div>
    </div>
  );
}
