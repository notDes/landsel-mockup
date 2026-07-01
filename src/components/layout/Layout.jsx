import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout({ onExternalOpen }) {
  return (
    <div className="site-shell">
      <Header onExternalOpen={onExternalOpen} />
      <Outlet />
      <Footer onExternalOpen={onExternalOpen} />
    </div>
  );
}

export default Layout;