import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout.jsx";
import ExternalRedirectModal from "./components/common/ExternalRedirectModal.jsx";

import Home from "./pages/Home.jsx";
import WhoWeAre from "./pages/WhoWeAre.jsx";
import Services from "./pages/Services.jsx";
import Estimates from "./pages/Estimates.jsx";
import EMD from "./pages/EMD.jsx";
import Order from "./pages/Order.jsx";
import Resources from "./pages/Resources.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [externalLink, setExternalLink] = useState(null);

  function requestExternalOpen(href, label) {
    setExternalLink({ href, label });
  }

  function closeExternalModal() {
    setExternalLink(null);
  }

  function confirmExternalOpen() {
    if (externalLink?.href) {
      window.open(externalLink.href, "_blank", "noopener,noreferrer");
    }

    setExternalLink(null);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout onExternalOpen={requestExternalOpen} />}
        >
          <Route index element={<Home onExternalOpen={requestExternalOpen} />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="services" element={<Services />} />
          <Route
            path="estimates"
            element={<Estimates onExternalOpen={requestExternalOpen} />}
          />
          <Route path="emd" element={<EMD />} />
          <Route path="order" element={<Order />} />
          <Route path="resources" element={<Resources />} />
          <Route
            path="contact"
            element={<Contact onExternalOpen={requestExternalOpen} />}
          />
        </Route>
      </Routes>

      <ExternalRedirectModal
        link={externalLink}
        onCancel={closeExternalModal}
        onConfirm={confirmExternalOpen}
      />
    </>
  );
}

export default App;