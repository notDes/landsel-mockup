import { Link } from "react-router-dom";

import ActionCard from "../components/cards/ActionCard.jsx";
import PartnerCard from "../components/cards/PartnerCard.jsx";
import ExternalLink from "../components/common/ExternalLink.jsx";
import FadeIn from "../components/common/FadeIn.jsx";
import { partners } from "../data/partners.js";
import { TITLE_CAPTURE_QUOTE_URL } from "../data/constants.js";

function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Welcome to LandSel Title Agency, Inc.</p>
            <h1>Let us help you close with confidence.</h1>
            <p className="hero-text">
              LandSel provides family-owned title and escrow service built on
              communication, accuracy, and a commitment to treating people right.
            </p>

            <div className="hero-actions">
              <ExternalLink
                className="button primary"
                href={TITLE_CAPTURE_QUOTE_URL}
                ariaLabel="Open LandSel estimate tools"
              >
                Get an Estimate
              </ExternalLink>

              <Link className="button secondary" to="/who-we-are">
                Who We Are
              </Link>
            </div>

            <div className="hero-proof" aria-label="Company highlights">
              <div>
                <strong>1992</strong>
                <span>Family-owned since</span>
              </div>
              <div>
                <strong>48</strong>
                <span>States served</span>
              </div>
              <div>
                <strong>30+</strong>
                <span>Years of experience</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="floating-card card-main">
              <div className="card-top">
                <p className="card-kicker">Online estimate tools</p>
                <h2>Generate title quotes, net sheets, and buyer estimates.</h2>
              </div>

              <div className="tool-list">
                <ToolItem
                  icon="◎"
                  title="Title Quotes"
                  text="Estimate title insurance and escrow fees."
                />
                <ToolItem
                  icon="$"
                  title="Seller Net Sheets"
                  text="Estimate seller proceeds after closing costs."
                />
                <ToolItem
                  icon="⌂"
                  title="Buyer Estimates"
                  text="Preview buyer costs and monthly payment."
                />
              </div>

              <ExternalLink
                className="card-cta"
                href={TITLE_CAPTURE_QUOTE_URL}
                ariaLabel="Open LandSel estimate tools"
              >
                Open Estimate Tools →
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-links-section">
        <div className="container quick-links-grid">
          <ActionCard
            title="Who We Are"
            text="Learn about LandSel’s family-owned history, service-first approach, and experienced team."
            label="Meet LandSel"
            to="/who-we-are"
          />
          <ActionCard
            title="Services"
            text="Residential, commercial, agriculture, development, and closing support across 48 states."
            label="View services"
            to="/services"
          />
          <ActionCard
            title="Get in touch"
            text="Have a question about a quote, order, closing, or location? Reach the team directly."
            label="Contact us"
            to="/contact"
          />
        </div>
      </section>

      <TrustStrip />

      <section className="section partners-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Partners</p>
            <h2>Connected with respected title and real estate partners.</h2>
          </div>

          <div className="partner-grid">
            {partners.map((partner, index) => (
              <FadeIn
                key={partner.name}
                className="partner-reveal"
                delay={index * 60}
              >
                <PartnerCard partner={partner} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ToolItem({ icon, title, text }) {
  return (
    <div className="tool-item">
      <div className="tool-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="LandSel highlights">
      <div className="container trust-grid">
        <div>
          <span>Established</span>
          <strong>Since 1992</strong>
        </div>
        <div>
          <span>Ownership</span>
          <strong>Family-owned</strong>
        </div>
        <div>
          <span>Coverage</span>
          <strong>48 states</strong>
        </div>
      </div>
    </section>
  );
}

export default Home;
