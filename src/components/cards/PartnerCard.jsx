import { useState } from "react";
import ExternalLink from "../common/ExternalLink.jsx";

function PartnerCard({ partner }) {
  const [failed, setFailed] = useState(false);

  return (
    <ExternalLink
      href={partner.url}
      ariaLabel={`Visit ${partner.name}`}
      className="partner-card"
    >
      {!failed && (
        <img
          src={partner.image}
          alt={partner.name}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}

      {failed && <span>{partner.name}</span>}
    </ExternalLink>
  );
}

export default PartnerCard;
