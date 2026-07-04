import { Link } from "react-router-dom";
import ExternalLink from "../common/ExternalLink.jsx";

function ActionCard({ title, text, to, href, label, ariaLabel }) {
  return (
    <article className="action-card">
      <h3>{title}</h3>
      <p>{text}</p>

      {href ? (
        <ExternalLink href={href} ariaLabel={ariaLabel || label}>
          {label} →
        </ExternalLink>
      ) : (
        <Link to={to}>{label} →</Link>
      )}
    </article>
  );
}

export default ActionCard;
