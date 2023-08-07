import "./app-components/server";

import Layout from "./app-components/Layout";
import Home from "./pages/Home";

import About from "./pages/About";

import Vans, { loader as vansLoader } from "./pages/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/VanDetail";

import HostLayout from "./app-components/host/HostLayout";
import Host, { loader as hostLoader } from "./pages/Host/Host";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostReviews from "./pages/Host/HostReviews";
import HostIncome from "./pages/Host/HostIncome";
import HostVanDetail, { loader as hostVanDetailLoader } from "./pages/Host/HostVanDetail";
import HostVanHome from "./pages/Host/HostVanHome";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import Page404 from "./pages/Page404";
import Error from "./pages/Error";


import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} /* errorElement={<Error />} */>
      <Route index element={<Home />} />
      <Route path="login" element={<h1>lol</h1>} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route
        path="host"
        loader={async () => {
          const isLoggedIn = true;
          if (!isLoggedIn) {
            throw redirect("/login");
          }
          return null;
        }}
        element={<HostLayout />}
      >
        <Route
          index
          loader={hostLoader}
          element={<Host />}
        />
        <Route
          path="vans"
          loader={hostVansLoader}
          element={<HostVans />}
        />
        <Route
          path="vans/:id"
          loader={hostVanDetailLoader}
          element={<HostVanDetail />}
        >
          <Route
            index
            loader={async () => {
              const isLoggedIn = true;
              if (!isLoggedIn) {
                throw redirect("/login");
              }
              return null;
            }}
            element={<HostVanHome />}
          />
          <Route
            path="pricing"
            loader={async () => {
              const isLoggedIn = true;
              if (!isLoggedIn) {
                return redirect("/login");
              }
              return null;
            }}
            element={<HostVanPricing />}
          />
          <Route
            path="photos"
            loader={async () => {
              const isLoggedIn = true;
              if (!isLoggedIn) {
                throw redirect("/login");
              }
              return null;
            }}
            element={<HostVanPhotos />}
          />
        </Route>
        <Route
          path="reviews"
          loader={async () => {
            const isLoggedIn = true;
            if (!isLoggedIn) {
              throw redirect("/login");
            }
            return null;
          }}
          element={<HostReviews />}
        />
        <Route
          path="income"
          loader={async () => {
            const isLoggedIn = true;
            if (!isLoggedIn) {
              throw redirect("/login");
            }
            return null;
          }}
          element={<HostIncome />}
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
