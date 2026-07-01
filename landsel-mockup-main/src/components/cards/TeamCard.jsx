import { useState } from "react";

function TeamCard({ member }) {
  const [failed, setFailed] = useState(false);

  return (
    <article className="team-card">
      <div className="team-image">
        {!failed && (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setFailed(true)}
          />
        )}
        {failed && <span>{member.initials}</span>}
      </div>

      <div className="team-card-body">
        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>

        <div className="team-links">
          <a href={`tel:+1${member.phone.replaceAll("-", "")}`}>
            {member.phone}
          </a>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </div>
      </div>
    </article>
  );
}

export default TeamCard;