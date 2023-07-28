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
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route element={<HostLayout />}>
            <Route path="/host" element={<Host />} />
            <Route path="/host/vans" element={<HostVans />} />
            <Route path="/host/reviews" element={<HostReviews />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
