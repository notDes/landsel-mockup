import { useState } from "react";
import TeamCard from "../components/cards/TeamCard.jsx";
import { teamMembers } from "../data/team.js";

function WhoWeAre() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Who We Are</p>
          <h1>Private, family-owned, and built around service.</h1>
          <p>
            LandSel Title Agency has been operating since 1992 with a focus on
            integrity, responsiveness, and helping clients feel supported through
            every step of the closing process.
          </p>
        </div>
      </section>

      <section className="section about-section">
        <div className="container split-grid">
          <div className="about-media">
            <div className="glass-card">
              <p className="small-label">Since 1992</p>
              <h3>Title service rooted in trust, communication, and care.</h3>
              <p>
                A warmer visual direction gives LandSel a more established,
                natural, and family-owned feel.
              </p>
            </div>
          </div>

          <div className="section-copy">
            <p className="eyebrow">About LandSel</p>
            <h2>Clear communication from contract to closing.</h2>

            <p>
              This redesign keeps the experience simple: communicate trust, show
              the people behind the work, and guide visitors to the right tools
              or contact information.
            </p>

            <p>
              Instead of making every page feel like a sales pitch, the site
              should feel calm, professional, and easy to navigate.
            </p>

            <div className="mini-list">
              <span>Residential</span>
              <span>Refinance</span>
              <span>Commercial</span>
              <span>Escrow</span>
              <span>Nationwide</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">The LandSel Team</p>
            <h2>Real people behind every closing.</h2>
            <p>
              A stronger team section makes the company feel personal,
              established, and trustworthy.
            </p>
          </div>

          <div className="team-feature">
            <div>
              <p className="eyebrow">Family-owned leadership</p>
              <h3>Experienced support from estimate to closing table.</h3>
              <p>
                LandSel’s strength is the people behind each file. This redesign
                brings the team forward with clean photography, stronger
                hierarchy, and a warmer brand feel.
              </p>
            </div>

            <div className="team-photo-stack">
              <Portrait initials="KC" image="/assets/team/kelly-craycraft.jpg" />
              <Portrait initials="MB" image="/assets/team/michael-bostrom.jpg" />
              <Portrait initials="SP" image="/assets/team/sarah-pollyea.jpg" />
            </div>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <TeamCard member={member} key={member.email} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Portrait({ initials, image }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="portrait-card">
      {!failed && <img src={image} alt="" onError={() => setFailed(true)} />}
      {failed && <span>{initials}</span>}
    </div>
  );
}

export default WhoWeAre;