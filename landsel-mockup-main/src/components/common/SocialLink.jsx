import ExternalLink from "./ExternalLink.jsx";

function SocialLink({ href, label, children, iconOnly = false }) {
  return (
    <ExternalLink
      href={href}
      ariaLabel={`Open LandSel ${label}`}
      className={iconOnly ? "social-icon-link icon-only" : "social-icon-link"}
    >
      {children}
      <span>{label}</span>
    </ExternalLink>
  );
}

export default SocialLink;