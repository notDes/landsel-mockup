import ExternalLink from "./ExternalLink.jsx";

function SocialLink({ href, label, children, onExternalOpen, iconOnly = false }) {
  return (
    <ExternalLink
      href={href}
      label={label}
      ariaLabel={`Open LandSel ${label}`}
      className={iconOnly ? "social-icon-link icon-only" : "social-icon-link"}
      onExternalOpen={onExternalOpen}
    >
      {children}
      <span>{label}</span>
    </ExternalLink>
  );
}

export default SocialLink;