import { Link } from "react-router-dom";
import ExternalLink from "../common/ExternalLink.jsx";

function ActionCard({ title, text, to, href, label }) {
  return (
    <article className="action-card">
      <div className="action-shine" />
      <h3>{title}</h3>
      <p>{text}</p>

      {href ? (
        <ExternalLink href={href}>{label} →</ExternalLink>
      ) : (
        <Link to={to}>{label} →</Link>
      )}
    </article>
  );
}

export default ActionCard;