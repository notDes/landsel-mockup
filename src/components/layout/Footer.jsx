import { NavLink } from "react-router-dom";

import Logo from "../common/Logo.jsx";
import ExternalLink from "../common/ExternalLink.jsx";
import SocialLink from "../common/SocialLink.jsx";
import { FacebookIcon, LinkedInIcon } from "../common/Icons.jsx";

import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  PHONE,
  PHONE_TEL,
  TITLE_CAPTURE_HOME_URL,
  TITLE_CAPTURE_QUOTE_URL,
} from "../../data/constants.js";

function Footer({ onExternalOpen }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <Logo variant="footer" />
          </div>

          <p>
            Family-owned title and escrow services with a focus on trust,
            communication, and confident closings.
          </p>

          <div className="footer-socials">
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

        <div>
          <h4>Website</h4>
          <NavLink to="/who-we-are">Who We Are</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/estimates">Estimates</NavLink>
          <NavLink to="/emd">EMD</NavLink>
          <NavLink to="/order">Order</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <div>
          <h4>Connect</h4>

          <ExternalLink
            href={TITLE_CAPTURE_QUOTE_URL}
            label="LandSel estimate tools"
            onExternalOpen={onExternalOpen}
          >
            Estimate Tools
          </ExternalLink>

          <ExternalLink
            href={TITLE_CAPTURE_HOME_URL}
            label="LandSel login portal"
            onExternalOpen={onExternalOpen}
          >
            Login / Register
          </ExternalLink>

          <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 LandSel Title Agency, Inc.</span>
        <span>Estimate tools remain connected through TitleCapture.</span>
      </div>
    </footer>
  );
}

export default Footer;