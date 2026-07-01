import { Link } from "react-router-dom";

import ActionCard from "../components/cards/ActionCard.jsx";
import PartnerCard from "../components/cards/PartnerCard.jsx";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import ExternalLink from "../components/common/ExternalLink.jsx";
import { partners } from "../data/partners.js";
import { services } from "../data/services.js";
import { TITLE_CAPTURE_QUOTE_URL } from "../data/constants.js";

function Home({ onExternalOpen }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Nationwide title & escrow services</p>

            <h1>Clear title work. Confident closings.</h1>

            <p className="hero-text">
              LandSel Title Agency helps realtors, lenders, buyers, sellers, and
              investors move from contract to closing with steady communication,
              experienced guidance, and dependable service.
            </p>

            <div className="hero-actions">
              <ExternalLink
                className="button primary"
                href={TITLE_CAPTURE_QUOTE_URL}
                label="LandSel estimate tools"
                onExternalOpen={onExternalOpen}
              >
                Get Instant Estimate
              </ExternalLink>

              <Link className="button secondary" to="/contact">
                Contact LandSel
              </Link>
            </div>

            <div className="hero-proof">
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
                <div>
                  <p className="card-kicker">Online estimate tools</p>
                  <h2>
                    Generate title quotes, net sheets, and buyer estimates.
                  </h2>
                </div>
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
                label="LandSel estimate tools"
                onExternalOpen={onExternalOpen}
              >
                Open Estimate Tools →
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      <section className="section quick-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Start here</p>
            <h2>Simple paths for clients and partners.</h2>
            <p>
              Quickly access estimates, earnest money deposits, title orders, or
              contact information without digging through the site.
            </p>
          </div>

          <div className="quick-grid four-card-grid">
            <ActionCard
              title="Estimate Tools"
              text="Access title quotes, seller net sheets, buyer estimates, and more."
              href={TITLE_CAPTURE_QUOTE_URL}
              label="Open estimate tools"
              externalLabel="LandSel estimate tools"
              onExternalOpen={onExternalOpen}
            />

            <ActionCard
              title="EMD"
              text="Start an earnest money deposit with a guided buyer and property flow."
              to="/emd"
              label="View EMD"
            />

            <ActionCard
              title="Order Title"
              text="Start a title order with transaction, buyer, seller, and agent details."
              to="/order"
              label="View order flow"
            />

            <ActionCard
              title="Contact LandSel"
              text="Questions about a file, quote, closing, or location? Reach the team directly."
              to="/contact"
              label="Contact team"
            />
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Title and escrow support for every side of the transaction.</h2>
            <p>
              A simple overview of the main services LandSel supports for
              clients, agents, lenders, and investors.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.title} />
            ))}
          </div>

          <div className="section-link-row">
            <Link className="button secondary" to="/services">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section partners-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Partners</p>
            <h2>Connected with respected title and real estate partners.</h2>
          </div>

          <div className="partner-grid">
            {partners.map((partner) => (
              <PartnerCard
                partner={partner}
                key={partner.name}
                onExternalOpen={onExternalOpen}
              />
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
      <div className="tool-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip">
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
        <div>
          <span>Approach</span>
          <strong>Service first</strong>
        </div>
      </div>
    </section>
  );
}

export default Home;