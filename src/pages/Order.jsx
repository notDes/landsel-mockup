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

function Order() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Order Title</p>
          <h1>A better way to start a title order.</h1>
          <p>
            The order flow keeps the same important information while making it
            easier to scan and understand.
          </p>
        </div>
      </section>

      <section className="section order-section">
        <div className="container">
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
                information, seller information, buyer information, agent
                details, escrow amount, and additional notes.
              </p>

              <div className="order-highlight">
                <strong>Recommended prototype approach:</strong>
                <span>
                  Show this as a guided order flow now. Build the actual working
                  form later only if LandSel wants implementation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Order;