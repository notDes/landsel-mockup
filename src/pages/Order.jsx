import PageHero from "../components/common/PageHero.jsx";
import { orderSections } from "../data/orderSections.js";

function Order() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Order Title" title="A better way to start a title order.">
        <p>
          The order flow organizes transaction, property, buyer, seller, agent,
          and escrow details into clear sections.
        </p>
      </PageHero>

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
                      <h2>{section.title}</h2>
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
              <p className="eyebrow">Organized order intake</p>
              <h2>Same important details, easier to follow.</h2>
              <p>
                A guided layout helps users understand what information is
                needed and reduces the feeling of one long, overwhelming form.
              </p>

              <div className="order-highlight">
                <strong>Built for clarity:</strong>
                <span>
                  Each section groups related information so the ordering
                  process feels structured and professional.
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
