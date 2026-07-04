import Logo from "../components/common/Logo.jsx";
import PageHero from "../components/common/PageHero.jsx";

function EMD() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Earnest Money Deposit" title="A clear path for EMD submissions.">
        <p>
          The EMD experience should be easy to find, easy to scan, and clear
          about the details needed to initiate a deposit.
        </p>
      </PageHero>

      <section className="section emd-section">
        <div className="container split-grid emd-grid">
          <div className="section-copy">
            <p className="eyebrow">EMD Flow</p>
            <h2>Focused details without overwhelming the page.</h2>
            <p>
              Buyers and agents can quickly understand what is needed: deposit
              amount, purchasing entity, buyer contact information, property
              details, and SMS consent for verification.
            </p>

            <div className="mini-list">
              <span>Amount</span>
              <span>Buyer Info</span>
              <span>Property Details</span>
              <span>SMS Consent</span>
            </div>
          </div>

          <div className="emd-preview-card" aria-label="EMD form preview">
            <div className="mock-browser-bar" aria-hidden="true">
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
              <div className="mock-checkbox" aria-hidden="true" />
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
