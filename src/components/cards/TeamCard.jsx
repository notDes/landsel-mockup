import { useState } from "react";
import { formatPhoneHref } from "../../utils/formatPhoneHref.js";

function TeamCard({ member }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="team-card">
      <div className="team-image">
        {!failed && (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
        {failed && <span>{member.initials}</span>}
      </div>

      <div className="team-card-body">
        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>

        <div className="team-links">
          <a href={formatPhoneHref(member.phone)}>{member.phone}</a>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </div>
      </div>
    </article>
  );
}

export default TeamCard;
