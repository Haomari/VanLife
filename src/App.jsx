import "./app-components/server"

import Header from "./app-components/Header";
import Footer from "./app-components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
				<Route path="/vans" element={<Vans />} />
				<Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
