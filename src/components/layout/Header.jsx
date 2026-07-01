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
  TITLE_CAPTURE_QUOTE_URL,
} from "../../data/constants.js";

function Header({ onExternalOpen }) {
  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <p>Family-owned title & escrow services since 1992</p>

          <div className="top-links">
            <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            <span>•</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span>•</span>

            <SocialLink
              href={FACEBOOK_URL}
              label="Facebook"
              onExternalOpen={onExternalOpen}
              iconOnly
            >
              <FacebookIcon />
            </SocialLink>

            <SocialLink
              href={LINKEDIN_URL}
              label="LinkedIn"
              onExternalOpen={onExternalOpen}
              iconOnly
            >
              <LinkedInIcon />
            </SocialLink>
          </div>
        </div>
      </div>

      <header className="navbar">
        <div className="container nav-inner">
          <NavLink to="/" className="brand" aria-label="LandSel homepage">
            <Logo />
          </NavLink>

          <nav className="nav-links" aria-label="Main navigation">
            <NavLink to="/who-we-are">Who We Are</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/estimates">Estimates</NavLink>
            <NavLink to="/emd">EMD</NavLink>
            <NavLink to="/order">Order</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <ExternalLink
            className="nav-button"
            href={TITLE_CAPTURE_QUOTE_URL}
            label="LandSel estimate tools"
            onExternalOpen={onExternalOpen}
          >
            Get a Quote
          </ExternalLink>
        </div>
      </header>
    </>
  );
}

export default Header;