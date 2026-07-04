import PageHero from "../components/common/PageHero.jsx";
import { services } from "../data/services.js";
import { testimonials } from "../data/testimonials.js";

function Services() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Services" title="Services we offer" compact>
        <p>
          Title and escrow support for residential, commercial, agriculture,
          development, and closing needs.
        </p>
      </PageHero>

      <section className="section services-section">
        <div className="container">
          <div className="service-list">
            {services.map((service) => (
              <article className="service-block" key={service.title}>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Testimonials</p>
            <h2>What clients say about LandSel.</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-block" key={testimonial.name}>
                <blockquote>“{testimonial.quote}”</blockquote>
                <figcaption>{testimonial.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
