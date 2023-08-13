import React, { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

import HostVanList from "../../app-components/host/HostVanList";
import { getHostVans } from "../../app-components/api";
import { requireAuth } from "../../app-components/utils";
import { LoadingFullScreen } from "../../app-components/Loading";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default function HostVans() {
  return (
    <section className="host__vans vans-host">
      <Suspense fallback={<LoadingFullScreen />}>
        <Await resolve={useLoaderData().vans}>
          {(loadedVans) => {
            return (
              <div className="vans-host__container">
                <h2 className="vans-host__title">Your listed vans</h2>
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
