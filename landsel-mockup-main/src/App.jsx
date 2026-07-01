import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

import Home from "./pages/Home.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import Services from "./pages/Services.jsx";
import Estimates from "./pages/Estimates.jsx";
import EMD from "./pages/EMD.jsx";
import Order from "./pages/Order.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="services" element={<Services />} />
          <Route path="estimates" element={<Estimates />} />
          <Route path="emd" element={<EMD />} />
          <Route path="order" element={<Order />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;