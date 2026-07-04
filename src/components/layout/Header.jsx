import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../common/Logo.jsx";
import ExternalLink from "../common/ExternalLink.jsx";
import SocialLink from "../common/SocialLink.jsx";
import { FacebookIcon, LinkedInIcon } from "../common/Icons.jsx";

import { mainNavigation } from "../../config/navigation.js";
import {
  CONTACT_EMAIL,
  FACEBOOK_URL,
  LINKEDIN_URL,
  PHONE,
  PHONE_TEL,
  TITLE_CAPTURE_QUOTE_URL,
} from "../../data/constants.js";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-inner">
          <p>Family-owned title & escrow services since 1992</p>

          <div className="top-links">
            <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
            <span aria-hidden="true">•</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span aria-hidden="true">•</span>

            <SocialLink href={FACEBOOK_URL} label="Facebook" iconOnly>
              <FacebookIcon />
            </SocialLink>

            <SocialLink href={LINKEDIN_URL} label="LinkedIn" iconOnly>
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
            {mainNavigation.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <ExternalLink
              className="nav-button"
              href={TITLE_CAPTURE_QUOTE_URL}
              ariaLabel="Open LandSel estimate tools"
            >
              Get a Quote
            </ExternalLink>

            <button
              className="menu-button"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
            >
              <span className="menu-button-lines" aria-hidden="true" />
              <span>Menu</span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          className={menuOpen ? "mobile-nav is-open" : "mobile-nav"}
          aria-label="Mobile navigation"
        >
          <div className="container mobile-nav-inner">
            {mainNavigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
