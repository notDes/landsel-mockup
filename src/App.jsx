import { useState } from "react";
import "./App.css";

const TITLE_CAPTURE_QUOTE_URL = "https://landsel.titlecapture.com/title-quote";
const TITLE_CAPTURE_HOME_URL = "https://landsel.titlecapture.com";
const FACEBOOK_URL = "https://www.facebook.com/LandSelTitleAgency/";
const LINKEDIN_URL =
  "https://www.linkedin.com/company/landsel-title-agency-inc./";

const CONTACT_EMAIL = "Orders@landsel.com";
const FL_CONTACT_EMAIL = "FLorders@landsel.com";
const PHONE = "614-337-1928";
const PHONE_TEL = "+16143371928";
const ADDRESS = "3 Easton Oval Ste 100, Columbus, OH 43219";

const teamMembers = [
  {
    name: "Randall Craycraft",
    role: "Founder",
    phone: "614-337-1928",
    email: "rcraycraft@landsel.com",
    initials: "RC",
    image: "/assets/team/randall-craycraft.jpg",
  },
  {
    name: "Kelly Craycraft",
    role: "Owner / CEO",
    phone: "614-226-6751",
    email: "kcraycraft@landsel.com",
    initials: "KC",
    image: "/assets/team/kelly-craycraft.jpg",
  },
  {
    name: "Michael J. Bostrom",
    role: "Vice President",
    phone: "317-418-1704",
    email: "mbostrom@landsel.com",
    initials: "MB",
    image: "/assets/team/michael-bostrom.jpg",
  },
  {
    name: "Sarah Pollyea Esq.",
    role: "General Counsel & Commercial Underwriting Counsel",
    phone: "614-800-4992",
    email: "spollyea@landsel.com",
    initials: "SP",
    image: "/assets/team/sarah-pollyea.jpg",
  },
  {
    name: "Amber Wood",
    role: "Business Development",
    phone: "614-787-0664",
    email: "awood@landsel.com",
    initials: "AW",
    image: "/assets/team/amber-wood.jpg",
  },
  {
    name: "Paul Wittenberg",
    role: "Business Development",
    phone: "614-218-3581",
    email: "pwittenberg@landsel.com",
    initials: "PW",
    image: "/assets/team/paul-wittenberg.jpg",
  },
  {
    name: "Scott Lewis",
    role: "Business Development",
    phone: "740-403-0040",
    email: "slewis@landsel.com",
    initials: "SL",
    image: "/assets/team/scott-lewis.jpg",
  },
  {
    name: "Emily Lowe",
    role: "Business Development",
    phone: "614-989-4846",
    email: "Elowe@landsel.com",
    initials: "EL",
    image: "/assets/team/emily-lowe.jpg",
  },
];

const services = [
  {
    title: "Residential Title",
    text: "Reliable title support for purchases, refinances, and real estate closings.",
  },
  {
    title: "Commercial Transactions",
    text: "Experienced guidance for commercial closings, investments, and development projects.",
  },
  {
    title: "Escrow Services",
    text: "Secure handling of funds, documents, and closing details with accuracy and care.",
  },
  {
    title: "Nationwide Closings",
    text: "Flexible closing coordination across 48 states with service that still feels personal.",
  },
];

const officeLocations = [
  {
    name: "Columbus Office",
    address: "3 Easton Oval Ste 100, Columbus, OH 43219",
    phone: "614-337-1928",
  },
  {
    name: "Cape Coral Office",
    address: "3208 Chiquita Blvd. S Ste 215, Cape Coral, FL 33914",
    phone: "239-205-6373",
  },
  {
    name: "Fort Myers Office",
    address: "9371 Cypress Lake Drive, Suite 1, Fort Myers, FL 33919",
    phone: "239-214-7009",
  },
  {
    name: "Additional Closing Locations",
    address:
      "Dublin, Easton, OSU, Polaris, Upper Arlington, Worthington, Delaware, Springfield, Cincinnati, Cleveland, and Indianapolis.",
    phone: "866-337-1928",
  },
];

const partnerLogos = [
  { name: "Chicago Title", image: "/assets/partners/chicago-title.png" },
  { name: "WFG National Title", image: "/assets/partners/wfg.png" },
  { name: "HOY Land Surveying", image: "/assets/partners/hoy.png" },
  { name: "McSteen Land Surveyors", image: "/assets/partners/mcsteen.png" },
  { name: "Landmark Surveying", image: "/assets/partners/landmark.png" },
];

const holidaysClosed = [
  "New Year's Day",
  "Martin Luther King Jr. Day",
  "President's Day",
  "Memorial Day",
  "4th of July",
  "Labor Day",
  "Columbus Day",
  "Thanksgiving",
  "Christmas",
];

const orderSections = [
  {
    title: "Transaction Details",
    items: [
      "Purchase with Financing",
      "For Sale By Owner",
      "Short Sale",
      "Sales Price",
      "Closing Date",
    ],
  },
  {
    title: "Contact Information",
    items: ["First Name", "Last Name", "Email Address", "Phone Number"],
  },
  {
    title: "Property Information",
    items: ["Address", "City", "Zip", "HOA Information"],
  },
  {
    title: "Seller Details",
    items: [
      "Seller Type",
      "Seller Names",
      "Marital Status",
      "Seller Loan",
      "Seller Contact",
    ],
  },
  {
    title: "Buyer Details",
    items: [
      "Buyer Type",
      "Buyer Names",
      "Marital Status",
      "Buyer Loan",
      "Buyer Contact",
    ],
  },
  {
    title: "Agent & Escrow Details",
    items: [
      "Seller's Agent",
      "Buyer's Agent",
      "Compensation",
      "Escrow Amount",
      "Additional Details",
    ],
  },
];

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
    <div className="site-shell">
      <TopBar onExternalOpen={requestExternalOpen} />
      <Navbar onExternalOpen={requestExternalOpen} />

      <main>
        <Hero onExternalOpen={requestExternalOpen} />
        <TrustStrip />
        <QuickActions onExternalOpen={requestExternalOpen} />
        <About />
        <Team />
        <Services />
        <EstimateTools onExternalOpen={requestExternalOpen} />
        <EMDSection />
        <OrderSection />
        <ResourcesSection />
        <Process />
        <Partners />
        <Offices />
        <Contact onExternalOpen={requestExternalOpen} />
      </main>

      <Footer onExternalOpen={requestExternalOpen} />

      <ExternalRedirectModal
        link={externalLink}
        onCancel={closeExternalModal}
        onConfirm={confirmExternalOpen}
      />
    </div>
  );
}

function ExternalRedirectModal({ link, onCancel, onConfirm }) {
  if (!link) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onCancel}>
      <div
        className="redirect-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="redirect-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-icon">
          <ExternalIcon />
        </div>

        <div>
          <p className="modal-eyebrow">External link</p>
          <h2 id="redirect-title">Open this page in a new tab?</h2>
          <p>
            You’re about to leave this website and open{" "}
            <strong>{link.label || "an external page"}</strong>.
          </p>
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onCancel}>
            Stay here
          </button>
          <button className="modal-button primary" onClick={onConfirm}>
            Open new tab
          </button>
        </div>
      </div>
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  label,
  onExternalOpen,
}) {
  function handleClick(event) {
    event.preventDefault();
    onExternalOpen(href, label || "external page");
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function TopBar({ onExternalOpen }) {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <p>Family-owned title & escrow services since 1992</p>

        <div className="top-links">
          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          <span>•</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <span>•</span>

          <SocialLink
            href={FACEBOOK_URL}
            label="Facebook"
            onExternalOpen={onExternalOpen}
            iconOnly
          >
            <FacebookIcon />
          </SocialLink>

          <SocialLink
            href={LINKEDIN_URL}
            label="LinkedIn"
            onExternalOpen={onExternalOpen}
            iconOnly
          >
            <LinkedInIcon />
          </SocialLink>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, label, children, onExternalOpen, iconOnly = false }) {
  return (
    <ExternalLink
      href={href}
      label={label}
      ariaLabel={`Open LandSel ${label}`}
      className={iconOnly ? "social-icon-link icon-only" : "social-icon-link"}
      onExternalOpen={onExternalOpen}
    >
      {children}
      <span>{label}</span>
    </ExternalLink>
  );
}

function Navbar({ onExternalOpen }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#" className="brand" aria-label="LandSel homepage">
          <Logo />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">Who We Are</a>
          <a href="#services">Services</a>
          <a href="#tools">Estimates</a>
          <a href="#emd">EMD</a>
          <a href="#order">Order</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </nav>

        <ExternalLink
          className="nav-button"
          href={TITLE_CAPTURE_QUOTE_URL}
          label="LandSel estimate tools"
          onExternalOpen={onExternalOpen}
        >
          Get a Quote
        </ExternalLink>
      </div>
    </header>
  );
}

function Logo({ variant = "default" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`logo-wrap logo-wrap-${variant}`}>
      {!failed && (
        <img
          src="/assets/landsel-logo.png"
          alt="LandSel Title Agency"
          className="brand-logo"
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="fallback-logo">
          <div className="brand-mark">LS</div>
          <div>
            <p className="brand-name">LandSel</p>
            <p className="brand-subtitle">Title Agency, Inc.</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Hero({ onExternalOpen }) {
  return (
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

            <a className="button secondary" href="#contact">
              Contact LandSel
            </a>
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
                <h2>Generate title quotes, net sheets, and buyer estimates.</h2>
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

function QuickActions({ onExternalOpen }) {
  return (
    <section className="section quick-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Start here</p>
          <h2>Simple paths for clients and partners.</h2>
          <p>
            The homepage should help visitors quickly find estimate tools, submit
            earnest money, start an order, or contact the right team.
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
            text="Start an earnest money deposit with a guided buyer and property form."
            href="#emd"
            label="View EMD"
          />

          <ActionCard
            title="Order Title"
            text="Start a title order with transaction, buyer, seller, agent, and escrow details."
            href="#order"
            label="View order flow"
          />

          <ActionCard
            title="Contact LandSel"
            text="Questions about a file, quote, closing, or location? Reach the team directly."
            href="#contact"
            label="Contact team"
          />
        </div>
      </div>
    </section>
  );
}

function ActionCard({
  title,
  text,
  href,
  label,
  externalLabel,
  onExternalOpen,
}) {
  const isExternal = href?.startsWith("http");

  return (
    <article className="action-card">
      <div className="action-shine" />
      <h3>{title}</h3>
      <p>{text}</p>

      {isExternal ? (
        <ExternalLink
          href={href}
          label={externalLabel || title}
          onExternalOpen={onExternalOpen}
        >
          {label} →
        </ExternalLink>
      ) : (
        <a href={href}>{label} →</a>
      )}
    </article>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container split-grid">
        <div className="about-media">
          <div className="glass-card">
            <p className="small-label">Who We Are</p>
            <h3>Title service rooted in trust, communication, and care.</h3>
            <p>
              A warmer visual direction gives LandSel a more established,
              natural, and family-owned feel.
            </p>
          </div>
        </div>

        <div className="section-copy">
          <p className="eyebrow">About LandSel</p>
          <h2>Private, family-owned, and built around service.</h2>

          <p>
            LandSel Title Agency has been operating since 1992 with a focus on
            integrity, responsiveness, and helping clients feel supported
            through every step of the closing process.
          </p>

          <p>
            This redesign keeps the experience simple: communicate trust, show
            the people behind the work, and guide visitors to the right tools or
            contact information.
          </p>

          <div className="mini-list">
            <span>Residential</span>
            <span>Refinance</span>
            <span>Commercial</span>
            <span>Escrow</span>
            <span>Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">The LandSel Team</p>
          <h2>Real people behind every closing.</h2>
          <p>
            A stronger team section makes the company feel personal,
            established, and trustworthy.
          </p>
        </div>

        <div className="team-feature">
          <div>
            <p className="eyebrow">Family-owned leadership</p>
            <h3>Experienced support from estimate to closing table.</h3>
            <p>
              LandSel’s strength is the people behind each file. This redesign
              brings the team forward with clean photography, stronger
              hierarchy, and a warmer brand feel.
            </p>
          </div>

          <div className="team-photo-stack">
            <Portrait initials="KC" image="/assets/team/kelly-craycraft.jpg" />
            <Portrait initials="MB" image="/assets/team/michael-bostrom.jpg" />
            <Portrait initials="SP" image="/assets/team/sarah-pollyea.jpg" />
          </div>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard member={member} key={member.email} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Portrait({ initials, image }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="portrait-card">
      {!failed && <img src={image} alt="" onError={() => setFailed(true)} />}
      {failed && <span>{initials}</span>}
    </div>
  );
}

function TeamCard({ member }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="team-card">
      <div className="team-image">
        {!failed && (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setFailed(true)}
          />
        )}
        {failed && <span>{member.initials}</span>}
      </div>

      <div className="team-card-body">
        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>

        <div className="team-links">
          <a href={`tel:+1${member.phone.replaceAll("-", "")}`}>
            {member.phone}
          </a>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </div>
      </div>
    </article>
  );
}

function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Title and escrow support for every side of the transaction.</h2>
          <p>
            Clean service cards help visitors quickly understand what LandSel
            handles before they call, email, or start an estimate.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">✦</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EstimateTools({ onExternalOpen }) {
  return (
    <section className="section title-tools-section" id="tools">
      <div className="container tools-panel">
        <div>
          <p className="eyebrow">Online estimate tools</p>
          <h2>Quotes, net sheets, and buyer estimates in one place.</h2>
          <p>
            The public website builds confidence. The estimate tools help users
            move forward when they’re ready.
          </p>
        </div>

        <div className="tools-actions">
          <ExternalLink
            className="button primary light-green"
            href={TITLE_CAPTURE_QUOTE_URL}
            label="LandSel estimate tools"
            onExternalOpen={onExternalOpen}
          >
            Open Estimate Tools
          </ExternalLink>

          <ExternalLink
            className="button secondary light"
            href={TITLE_CAPTURE_HOME_URL}
            label="LandSel login portal"
            onExternalOpen={onExternalOpen}
          >
            Login / Register
          </ExternalLink>
        </div>
      </div>
    </section>
  );
}

function EMDSection() {
  return (
    <section className="section emd-section" id="emd">
      <div className="container split-grid emd-grid">
        <div className="section-copy">
          <p className="eyebrow">Earnest Money Deposit</p>
          <h2>A cleaner EMD experience for buyers and agents.</h2>

          <p>
            The current LandSel website includes an EMD flow for submitting
            earnest money deposit details. In the redesign, this should be easy
            to find and presented as a clear, trusted next step.
          </p>

          <div className="mini-list">
            <span>Amount</span>
            <span>Buyer Info</span>
            <span>Property Details</span>
            <span>SMS Consent</span>
          </div>

          <a className="button primary section-button" href="#contact">
            Ask About EMD
          </a>
        </div>

        <div className="emd-preview-card">
          <div className="mock-browser-bar">
            <span />
            <span />
            <span />
          </div>

          <div className="emd-preview-header">
            <Logo />
            <p>Secure EMD Deposit</p>
          </div>

          <div className="mock-field wide">
            <span>$ Amount</span>
          </div>

          <div className="mock-grid">
            <div className="mock-field">
              <span>Purchasing Entity</span>
            </div>
            <div className="mock-field">
              <span>Property Type</span>
            </div>
          </div>

          <div className="mock-section-title">Buyer Information</div>

          <div className="mock-grid">
            <div className="mock-field">
              <span>Email Address</span>
            </div>
            <div className="mock-field">
              <span>Mobile Phone Number</span>
            </div>
          </div>

          <div className="mock-section-title">Property Under Contract</div>

          <div className="mock-grid">
            <div className="mock-field">
              <span>Property Address</span>
            </div>
            <div className="mock-field">
              <span>Property State</span>
            </div>
          </div>

          <div className="mock-submit-row">
            <div className="mock-checkbox" />
            <span>SMS consent for multi-factor authentication</span>
          </div>

          <div className="mock-submit-button">Initiate Deposit</div>
        </div>
      </div>
    </section>
  );
}

function OrderSection() {
  return (
    <section className="section order-section" id="order">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Order Title</p>
          <h2>A better way to start a title order.</h2>
          <p>
            Instead of overwhelming users with one long form, this redesign can
            group the same information into clear sections.
          </p>
        </div>

        <div className="order-layout">
          <div className="order-flow-card">
            <div className="order-flow-header">
              <span>Order Form Preview</span>
              <strong>Send Order</strong>
            </div>

            <div className="order-step-list">
              {orderSections.map((section, index) => (
                <div className="order-step" key={section.title}>
                  <div className="order-step-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{section.title}</h3>
                    <div className="order-tags">
                      {section.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-copy-card">
            <p className="eyebrow">Why this matters</p>
            <h3>Same order details, cleaner presentation.</h3>
            <p>
              The original order form collects transaction details, property
              information, seller information, buyer information, agent details,
              escrow amount, and additional notes. The redesigned version should
              preserve those fields while making the flow easier to scan.
            </p>

            <div className="order-highlight">
              <strong>Recommended prototype approach:</strong>
              <span>
                Show this as a guided order flow now. Build the actual working
                form later only if LandSel wants implementation.
              </span>
            </div>

            <a className="button secondary order-contact-button" href="#contact">
              Discuss Order Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  return (
    <section className="section resources-section" id="resources">
      <div className="container resources-panel">
        <div>
          <p className="eyebrow">Resources</p>
          <h2>Holiday office closures.</h2>
          <p>
            LandSel’s current resources area lists the holidays their offices
            are closed. This keeps important operational information visible
            without making the site feel cluttered.
          </p>
        </div>

        <div className="holiday-card">
          <h3>Offices are closed on:</h3>

          <div className="holiday-grid">
            {holidaysClosed.map((holiday) => (
              <span key={holiday}>{holiday}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Start with an estimate",
      text: "Use LandSel’s online tools to create title quotes, seller net sheets, and buyer estimates.",
    },
    {
      number: "02",
      title: "Connect with the team",
      text: "LandSel helps coordinate the file, answer questions, and keep everyone moving toward closing.",
    },
    {
      number: "03",
      title: "Close with confidence",
      text: "From contract to closing table, the focus stays on communication, timing, and accuracy.",
    },
  ];

  return (
    <section className="section process-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">How it works</p>
          <h2>A simple path from estimate to closing.</h2>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="section partners-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow">Partners</p>
          <h2>Connected with respected title and real estate partners.</h2>
        </div>

        <div className="partner-grid">
          {partnerLogos.map((partner) => (
            <PartnerLogo partner={partner} key={partner.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ partner }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="partner-card">
      {!failed && (
        <img
          src={partner.image}
          alt={partner.name}
          onError={() => setFailed(true)}
        />
      )}

      {failed && <span>{partner.name}</span>}
    </div>
  );
}

function Offices() {
  return (
    <section className="section offices-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Office Locations</p>
          <h2>Local service with multi-state reach.</h2>
          <p>
            Make it easy for customers to identify the right office and contact
            the team directly.
          </p>
        </div>

        <div className="office-grid">
          {officeLocations.map((office) => (
            <article className="office-card" key={office.name}>
              <span className="office-pin">⌖</span>
              <h3>{office.name}</h3>
              <p>{office.address}</p>
              <a href={`tel:+1${office.phone.replaceAll("-", "")}`}>
                {office.phone}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ onExternalOpen }) {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Contact LandSel</p>
          <h2>Have a question about a quote, file, or closing?</h2>
          <p>Reach the LandSel team directly by phone, email, or social media.</p>
        </div>

        <div className="contact-details">
          <div>
            <a className="contact-row" href={`tel:${PHONE_TEL}`}>
              <PhoneIcon />
              <span>{PHONE}</span>
            </a>
            <p className="contact-helper">
              Tap to call on mobile. On desktop, this opens your calling app if
              one is connected.
            </p>
          </div>

          <a className="contact-row" href={`mailto:${CONTACT_EMAIL}`}>
            <MailIcon />
            <span>{CONTACT_EMAIL}</span>
          </a>

          <a className="contact-row" href={`mailto:${FL_CONTACT_EMAIL}`}>
            <MailIcon />
            <span>{FL_CONTACT_EMAIL}</span>
          </a>

          <p className="contact-row text-row">
            <LocationIcon />
            <span>{ADDRESS}</span>
          </p>

          <div className="social-links">
            <SocialLink
              href={FACEBOOK_URL}
              label="Facebook"
              onExternalOpen={onExternalOpen}
            >
              <FacebookIcon />
            </SocialLink>

            <SocialLink
              href={LINKEDIN_URL}
              label="LinkedIn"
              onExternalOpen={onExternalOpen}
            >
              <LinkedInIcon />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onExternalOpen }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Logo variant="footer" />
          </div>

          <p>
            Family-owned title and escrow services with a focus on trust,
            communication, and confident closings.
          </p>

          <div className="footer-socials">
            <SocialLink
              href={FACEBOOK_URL}
              label="Facebook"
              onExternalOpen={onExternalOpen}
            >
              <FacebookIcon />
            </SocialLink>

            <SocialLink
              href={LINKEDIN_URL}
              label="LinkedIn"
              onExternalOpen={onExternalOpen}
            >
              <LinkedInIcon />
            </SocialLink>
          </div>
        </div>

        <div>
          <h4>Website</h4>
          <a href="#about">Who We Are</a>
          <a href="#services">Services</a>
          <a href="#tools">Estimates</a>
          <a href="#emd">EMD</a>
          <a href="#order">Order</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h4>Connect</h4>
          <ExternalLink
            href={TITLE_CAPTURE_QUOTE_URL}
            label="LandSel estimate tools"
            onExternalOpen={onExternalOpen}
          >
            Estimate Tools
          </ExternalLink>
          <ExternalLink
            href={TITLE_CAPTURE_HOME_URL}
            label="LandSel login portal"
            onExternalOpen={onExternalOpen}
          >
            Login / Register
          </ExternalLink>
          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 LandSel Title Agency, Inc.</span>
        <span>Estimate tools remain connected through TitleCapture.</span>
      </div>
    </footer>
  );
}

/* Icons */

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.5 21v-7.7H16l.4-3h-2.9V8.4c0-.9.3-1.5 1.6-1.5h1.5V4.2c-.7-.1-1.5-.2-2.3-.2-2.4 0-4.1 1.5-4.1 4.2v2.1H7.5v3h2.7V21h3.3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.7 8.8H3.8V21h2.9V8.8ZM5.2 3C4.2 3 3.5 3.7 3.5 4.6c0 .9.7 1.6 1.7 1.6s1.7-.7 1.7-1.6C6.9 3.7 6.2 3 5.2 3ZM20.5 14c0-3.4-1.8-5.5-4.6-5.5-1.6 0-2.7.9-3.2 1.8V8.8H9.8V21h2.9v-6.4c0-1.7.9-3.1 2.5-3.1 1.5 0 2.3 1.1 2.3 3V21h3v-7Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.3 4.2 9.1 8c.3.6.1 1.3-.4 1.7l-1.1.9c1 2.1 2.7 3.8 4.8 4.8l.9-1.1c.4-.5 1.1-.7 1.7-.4l3.8 1.8c.6.3.9.9.8 1.5l-.4 2.5c-.1.7-.7 1.2-1.4 1.2C9.6 20.9 3.1 14.4 3.1 6.2c0-.7.5-1.3 1.2-1.4l2.5-.4c.6-.1 1.2.2 1.5.8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.8 5.5h14.4c1 0 1.8.8 1.8 1.8v9.4c0 1-.8 1.8-1.8 1.8H4.8c-1 0-1.8-.8-1.8-1.8V7.3c0-1 .8-1.8 1.8-1.8Zm7.2 7.1 7.1-4.7H4.9l7.1 4.7Zm0 2.1L4.7 9.9v6.8h14.6V9.9L12 14.7Z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.8c-3.5 0-6.3 2.8-6.3 6.3 0 4.7 6.3 12.1 6.3 12.1s6.3-7.4 6.3-12.1c0-3.5-2.8-6.3-6.3-6.3Zm0 8.7c-1.3 0-2.4-1.1-2.4-2.4S10.7 6.7 12 6.7s2.4 1.1 2.4 2.4-1.1 2.4-2.4 2.4Z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3h7v7h-2.4V7.1l-8.5 8.5-1.7-1.7 8.5-8.5H14V3ZM5.5 5h6v2.4h-6v11.1h11.1v-6H19v6.3c0 1.2-1 2.2-2.2 2.2H5.3C4 21 3 20 3 18.8V7.2C3 6 4 5 5.3 5h.2Z" />
    </svg>
  );
}

export default App;