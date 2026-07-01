import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import PartnerCard from "../components/cards/PartnerCard.jsx";
import ExternalLink from "../components/common/ExternalLink.jsx";
import { partners } from "../data/partners.js";
import { TITLE_CAPTURE_QUOTE_URL } from "../data/constants.js";

function Home() {
  const partnerGridRef = useRef(null);

  useEffect(() => {
    const items = partnerGridRef.current?.querySelectorAll(".partner-reveal");
    if (!items || items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Welcome to LandSel Title Agency, Inc.</p>

            <h1>Let Us Help You Today</h1>

            <p className="hero-text">
              We pride LandSel on Customer Service, let us show you our
              excellence.
            </p>

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

            <div className="hero-cta-row">
              <Link className="button secondary" to="/who-we-are">
                Who We Are
              </Link>
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
              >
                Open Estimate Tools →
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section quick-links-section">
        <div className="container quick-links-grid">
          <QuickLinkCard
            title="Who We Are"
            text="LandSel Title is a privately held company for over 30 years proudly serving 48 states. We provide a one stop shop to create a flawless and enjoyable experience for you and your customers. We pride ourselves in being proactive rather than reactive. From residential refinance or purchase to commercial, to land development and agricultural we can cover all of your closing needs from coast to coast. At LandSel our goal is to provide the highest level of personal service at the lowest cost available. The bottom line is, when you choose LandSel Title you can be assured our team will go the extra mile on each and every file so that it is closed professionally and in a timely manner. Giving you and your clients peace of mind and consistently closing contracts correctly every time."
            linkLabel="Who we are"
            to="/who-we-are"
          />
          <QuickLinkCard
            title="Services"
            text="Anytime, Anywhere Closings!"
            linkLabel="We can help"
            to="/services"
          />
          <QuickLinkCard
            title="Get in touch"
            text="Get in touch with us. Our friendly staff is always here to answer all your questions."
            linkLabel="Get in touch"
            to="/contact"
          />
        </div>
      </section>

      <TrustStrip />

      <section className="section partners-section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Our Partners</h2>
          </div>

          <div className="partner-grid" ref={partnerGridRef}>
            {partners.map((partner, index) => (
              <div
                className="partner-reveal"
                key={partner.name}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <PartnerCard partner={partner} />
              </div>
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

function QuickLinkCard({ title, text, linkLabel, to }) {
  return (
    <div className="quick-link-card">
      <h3>{title}</h3>

      <p>{text}</p>

      <Link className="quick-link-cta" to={to}>
        {linkLabel} <span aria-hidden="true">→</span>
      </Link>
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
      </div>
    </section>
  );
}

export default Home;