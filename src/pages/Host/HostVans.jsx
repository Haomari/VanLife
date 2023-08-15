import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

import HostVanList from "../../app-components/host/HostVanList";
import { getHostVans } from "../../app-components/api";
import { requireAuth } from "../../app-components/utils";
import { LoadingFullScreen } from "../../app-components/Loading";

// Loader function for fetching host van data
export async function loader({ request }) {
  // Ensure the user is authenticated before loading data
  await requireAuth(request);
  // Defer loading of host van data
  return defer({ vans: getHostVans() });
}

// Component to display a list of host vans
export default function HostVans() {
  return (
    <section className="host__vans vans-host">
      <Suspense fallback={<LoadingFullScreen />}>
        <Await resolve={useLoaderData().vans}>
          {(loadedVans) => {
            return (
              <div className="vans-host__container">
                {/* Display the title */}
                <h2 className="vans-host__title">Your listed vans</h2>
                {/* Display the list of host vans */}
                <div className="vans-host__vans-list vans-list">
                  <HostVanList data={loadedVans} />
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </section>
  );
}
