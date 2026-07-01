import ServiceCard from "../components/cards/ServiceCard.jsx";
import { services } from "../data/services.js";

function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Services</p>
          <h1>Title and escrow support for every side of the transaction.</h1>
          <p>
            LandSel supports buyers, sellers, lenders, agents, and investors
            with title and escrow services designed around clear communication.
          </p>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard service={service} key={service.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;