import { Link } from "react-router-dom";
import PageHero from "../components/common/PageHero.jsx";

function NotFound() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Page not found" title="This page could not be found.">
        <p>
          The page may have moved or the link may be incorrect. Return to the
          homepage to continue.
        </p>
        <Link className="button primary" to="/">
          Back to Home
        </Link>
      </PageHero>
    </main>
  );
}

export default NotFound;
