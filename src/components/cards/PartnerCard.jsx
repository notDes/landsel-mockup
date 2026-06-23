import { useState } from "react";
import ExternalLink from "../common/ExternalLink.jsx";

function PartnerCard({ partner, onExternalOpen }) {
  const [failed, setFailed] = useState(false);

  return (
    <ExternalLink
      href={partner.url}
      label={partner.name}
      className="partner-card"
      onExternalOpen={onExternalOpen}
    >
      {!failed && (
        <img
          src={partner.image}
          alt={partner.name}
          onError={() => setFailed(true)}
        />
      )}

      {failed && <span>{partner.name}</span>}
    </ExternalLink>
  );
}

export default PartnerCard;