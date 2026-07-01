import { NavLink } from "react-router-dom";

import ExternalLink from "../common/ExternalLink.jsx";
import SocialLink from "../common/SocialLink.jsx";
import { FacebookIcon, LinkedInIcon } from "../common/Icons.jsx";

import {
  ADDRESS,
  CONTACT_EMAIL,
  FACEBOOK_URL,
  FL_CONTACT_EMAIL,
  LINKEDIN_URL,
  PHONE,
  PHONE_TEL,
  TITLE_CAPTURE_QUOTE_URL,
} from "../../data/constants.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-stack">
        <nav className="footer-nav" aria-label="Footer navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/who-we-are">Who We Are</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/emd">EMD</NavLink>
          <NavLink to="/estimates">Estimates</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>

        <p className="footer-company">LandSel Title Agency, Inc.</p>

        <div className="footer-contact-lines">
          <p>{ADDRESS}</p>
          <p>
            <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          </p>
          <p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or{" "}
            <a href={`mailto:${FL_CONTACT_EMAIL}`}>{FL_CONTACT_EMAIL}</a>
          </p>
        </div>

        <div className="footer-socials">
          <SocialLink href={FACEBOOK_URL} label="Facebook">
            <FacebookIcon />
          </SocialLink>

          <SocialLink href={LINKEDIN_URL} label="LinkedIn">
            <LinkedInIcon />
          </SocialLink>
        </div>

        <ExternalLink
          className="button light footer-cta"
          href={TITLE_CAPTURE_QUOTE_URL}
        >
          Get a Quote
        </ExternalLink>
      </div>
    </footer>
  );
}

export default Footer;