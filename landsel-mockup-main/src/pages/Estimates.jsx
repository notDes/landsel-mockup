import ExternalLink from "../components/common/ExternalLink.jsx";
import {
  TITLE_CAPTURE_HOME_URL,
  TITLE_CAPTURE_QUOTE_URL,
} from "../data/constants.js";

function Estimates() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Estimates</p>
          <h1>Quotes, net sheets, and buyer estimates in one place.</h1>
          <p>
            The public website builds confidence. The estimate tools help users
            move forward when they’re ready.
          </p>
        </div>
      </section>

      <section className="section title-tools-section">
        <div className="container tools-panel">
          <div>
            <p className="eyebrow">Online estimate tools</p>
            <h2>Generate title quotes, seller net sheets, and more.</h2>
            <p>
              Keep TitleCapture connected while making the public website feel
              cleaner, easier to navigate, and more professional.
            </p>
          </div>

          <div className="tools-actions">
            <ExternalLink
              className="button primary light-green"
              href={TITLE_CAPTURE_QUOTE_URL}
            >
              Open Estimate Tools
            </ExternalLink>

            <ExternalLink
              className="button secondary light"
              href={TITLE_CAPTURE_HOME_URL}
            >
              Login / Register
            </ExternalLink>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Estimates;