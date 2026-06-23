function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  label,
  onExternalOpen,
}) {
  function handleClick(event) {
    event.preventDefault();

    if (onExternalOpen) {
      onExternalOpen(href, label || "external page");
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default ExternalLink;