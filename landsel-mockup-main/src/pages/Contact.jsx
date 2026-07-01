import SocialLink from "../components/common/SocialLink.jsx";
import { FacebookIcon, LinkedInIcon } from "../components/common/Icons.jsx";

import {
  ADDRESS,
  CONTACT_EMAIL,
  FACEBOOK_URL,
  FAX,
  FL_CONTACT_EMAIL,
  LINKEDIN_URL,
  PHONE,
  PHONE_TEL,
} from "../data/constants.js";

import { officeLocations } from "../data/offices.js";

function Contact() {
  return (
    <main>
      <section className="section contact-section">
        <div className="container">
          <p className="contact-intro">
            Use the information on the right to get in touch with us, or fill
            in the form below. Our staff will be in touch with you shortly.
          </p>

          <div className="contact-layout">
            <div className="contact-form-card">
              <h2>Fill in the form below</h2>

              <form
                className="contact-form"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="form-row">
                  <label className="form-field">
                    <span>Your Name</span>
                    <input type="text" name="name" placeholder="Alex Fernandez" />
                  </label>

                  <label className="form-field">
                    <span>Your Email Address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="alexfernandez@nextrealty.com"
                    />
                  </label>
                </div>

                <label className="form-field">
                  <span>Phone Number</span>
                  <input type="tel" name="phone" placeholder="305-300-0000" />
                </label>

                <label className="form-field">
                  <span>Comments</span>
                  <textarea name="comments" rows={6} />
                </label>

                <label className="form-consent">
                  <input type="checkbox" name="consent" />
                  <span>
                    I agree to receive marketing and customer service calls,
                    emails, and text messages from LandSel Title Agency,
                    Inc.. Consent is not a condition of purchase. Msg/data
                    rates may apply. Msg frequency varies. Reply STOP to text
                    messages to unsubscribe.
                  </span>
                </label>

                <button type="submit" className="button secondary">
                  Send
                </button>
              </form>
            </div>

            <div className="contact-info-card">
              <h2>Reach out to us</h2>

              <p className="contact-info-name">LandSel Title Agency, Inc.</p>
              <p>{ADDRESS}</p>
              <p>
                Phone: <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
              </p>
              <p>Fax: {FAX}</p>
              <p>
                Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
                or <a href={`mailto:${FL_CONTACT_EMAIL}`}>{FL_CONTACT_EMAIL}</a>
              </p>

              <div className="social-links">
                <SocialLink href={FACEBOOK_URL} label="Facebook">
                  <FacebookIcon />
                </SocialLink>

                <SocialLink href={LINKEDIN_URL} label="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section offices-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Office Locations</p>
            <h2>Local service with multi-state reach.</h2>
            <p>
              Make it easy for customers to identify the right office and
              contact the team directly.
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
    </main>
  );
}

export default Contact;