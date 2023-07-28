import HostVanList from "../../app-components/host/HostVanList";

export default function HostVans() {
  return (
    <section className="host__vans vans-host">
      <div className="vans-host__container">
        <h2 className="vans-host__title">Your listed vans</h2>
        <div className="vans-host__vans-list vans-list">
          <HostVanList />
        </div>
      </div>
    </section>
  );
}
