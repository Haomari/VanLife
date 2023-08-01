import "./app-components/server";

import Layout from "./app-components/Layout";
import Home from "./pages/Home";

import About from "./pages/About";

import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";

import Host from "./pages/Host/Host";
import HostLayout from "./app-components/host/HostLayout";
import HostVans from "./pages/Host/HostVans";
import HostReviews from "./pages/Host/HostReviews";
import HostIncome from "./pages/Host/HostIncome";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanHome from "./pages/Host/HostVanHome";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Host />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}> 
							<Route index element={<HostVanHome/>}/>
							<Route path="pricing" element={<HostVanPricing/>}/>
							<Route path="photos" element={<HostVanPhotos/>}/>
						</Route>
            <Route path="reviews" element={<HostReviews />} />
						<Route path="income" element={<HostIncome />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
