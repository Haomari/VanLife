import { useLoaderData } from 'react-router-dom'
import HostVanList from "../../app-components/host/HostVanList";
import { getHostVans } from '../../app-components/api';

export function loader() {
  return getHostVans();
}

export default function HostVans() {
  return (
    <section className="host__vans vans-host">
      <div className="vans-host__container">
        <h2 className="vans-host__title">Your listed vans</h2>
        <div className="vans-host__vans-list vans-list">
          <HostVanList data={useLoaderData()} />
        </div>
      </div>
    </section>
  );
}
