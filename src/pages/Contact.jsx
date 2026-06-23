import SocialLink from "../components/common/SocialLink.jsx";
import { FacebookIcon, LinkedInIcon, LocationIcon, MailIcon, PhoneIcon } from "../components/common/Icons.jsx";

import {
  ADDRESS,
  CONTACT_EMAIL,
  FACEBOOK_URL,
  FL_CONTACT_EMAIL,
  LINKEDIN_URL,
  PHONE,
  PHONE_TEL,
} from "../data/constants.js";

import { officeLocations } from "../data/offices.js";

function Contact({ onExternalOpen }) {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Contact LandSel</p>
          <h1>Have a question about a quote, file, or closing?</h1>
          <p>Reach the LandSel team directly by phone, email, or social media.</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-card">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Talk with the LandSel team.</h2>
            <p>
              Call, email, or use the contact information below to reach the
              right office.
            </p>
          </div>

          <div className="contact-details">
            <div>
              <a className="contact-row" href={`tel:${PHONE_TEL}`}>
                <PhoneIcon />
                <span>{PHONE}</span>
              </a>
              <p className="contact-helper">
                Tap to call on mobile. On desktop, this opens your calling app
                if one is connected.
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