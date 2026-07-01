import Logo from "../components/common/Logo.jsx";

function EMD() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Earnest Money Deposit</p>
          <h1>A cleaner EMD experience for buyers and agents.</h1>
          <p>
            The EMD flow should be easy to find and presented as a clear,
            trusted next step.
          </p>
        </div>
      </section>

      <section className="section emd-section">
        <div className="container split-grid emd-grid">
          <div className="section-copy">
            <p className="eyebrow">EMD Flow</p>
            <h2>Focused form flow without overwhelming the page.</h2>

            <p>
              The original EMD tab uses a form for amount, buyer information,
              property details, and SMS consent. The mockup presents that flow in
              a cleaner, easier-to-scan way.
            </p>

            <div className="mini-list">
              <span>Amount</span>
              <span>Buyer Info</span>
              <span>Property Details</span>
              <span>SMS Consent</span>
            </div>
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
    </main>
  );
}

export default EMD;