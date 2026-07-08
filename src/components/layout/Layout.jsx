import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import QuoteWidget from "../common/QuoteWidget.jsx";

function Layout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <Outlet />
      <Footer />
      <QuoteWidget />
    </div>
  );
}

export default Layout;
