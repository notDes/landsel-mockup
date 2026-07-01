import { Link } from "react-router-dom";
import ExternalLink from "../common/ExternalLink.jsx";

function ActionCard({
  title,
  text,
  to,
  href,
  label,
  externalLabel,
  onExternalOpen,
}) {
  return (
    <article className="action-card">
      <div className="action-shine" />
      <h3>{title}</h3>
      <p>{text}</p>

      {href ? (
        <ExternalLink
          href={href}
          label={externalLabel || title}
          onExternalOpen={onExternalOpen}
        >
          {label} →
        </ExternalLink>
      ) : (
        <Link to={to}>{label} →</Link>
      )}
    </article>
  );
}

export default ActionCard;