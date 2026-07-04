import ExternalLink from "../components/common/ExternalLink.jsx";
import PageHero from "../components/common/PageHero.jsx";
import {
  TITLE_CAPTURE_HOME_URL,
  TITLE_CAPTURE_QUOTE_URL,
} from "../data/constants.js";

function Estimates() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Estimates" title="Quotes, net sheets, and buyer estimates in one place.">
        <p>
          Use LandSel’s connected online tools to generate title quotes, seller
          net sheets, buyer estimates, and closing cost estimates.
        </p>
      </PageHero>

      <section className="section title-tools-section">
        <div className="container tools-panel">
          <div>
            <p className="eyebrow">Online estimate tools</p>
            <h2>Start with the right numbers.</h2>
            <p>
              The estimate tools open in LandSel’s existing secure TitleCapture
              portal so clients can continue using the tools they already know.
            </p>
          </div>

          <div className="tools-actions">
            <ExternalLink
              className="button primary light-green"
              href={TITLE_CAPTURE_QUOTE_URL}
              ariaLabel="Open LandSel estimate tools"
            >
              Open Estimate Tools
            </ExternalLink>

            <ExternalLink
              className="button secondary light"
              href={TITLE_CAPTURE_HOME_URL}
              ariaLabel="Open LandSel login portal"
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
