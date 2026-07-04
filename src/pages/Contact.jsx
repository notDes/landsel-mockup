import SocialLink from "../components/common/SocialLink.jsx";
import PageHero from "../components/common/PageHero.jsx";
import { FacebookIcon, LinkedInIcon } from "../components/common/Icons.jsx";
import { formatPhoneHref } from "../utils/formatPhoneHref.js";

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
    <main id="main-content">
      <PageHero eyebrow="Contact" title="Have a question about a quote, file, or closing?">
        <p>
          Reach the LandSel team directly by phone, email, or social media.
        </p>
      </PageHero>

      <section className="section contact-section">
        <div className="container contact-layout">
          <div className="contact-copy-card">
            <p className="eyebrow">Get in touch</p>
            <h2>We’re ready to help.</h2>
            <p>
              For the fastest response, contact LandSel directly using the phone
              numbers or email addresses below.
            </p>
            <a className="button primary" href={`mailto:${CONTACT_EMAIL}`}>
              Email Orders
            </a>
          </div>

          <div className="contact-info-card">
            <h2>LandSel Title Agency, Inc.</h2>
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
      </section>

      <section className="section offices-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Office Locations</p>
            <h2>Local service with multi-state reach.</h2>
            <p>
              Find the office or closing location that fits your transaction.
            </p>
          </div>

          <div className="office-grid">
            {officeLocations.map((office) => (
              <article className="office-card" key={office.name}>
                <span className="office-pin" aria-hidden="true">
                  ⌖
                </span>
                <h3>{office.name}</h3>
                <p>{office.address}</p>
                <a href={formatPhoneHref(office.phone)}>{office.phone}</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
