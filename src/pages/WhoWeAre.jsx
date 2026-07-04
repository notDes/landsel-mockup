import PageHero from "../components/common/PageHero.jsx";
import TeamCard from "../components/cards/TeamCard.jsx";
import { teamMembers } from "../data/team.js";

function WhoWeAre() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Who We Are" title="A family-owned title agency built around service.">
        <p>
          LandSel Title is a private, family-owned business that has been in
          operation since 1992. The team prides itself on service through
          integrity, responsiveness, and treating people right.
        </p>
      </PageHero>

      <section className="section about-section">
        <div className="container split-grid">
          <div className="about-media" aria-hidden="true">
            <div className="glass-card">
              <p className="small-label">Since 1992</p>
              <h2>Service through integrity.</h2>
            </div>
          </div>

          <div className="section-copy">
            <p className="eyebrow">About LandSel</p>
            <h2>Ready to assist from title questions to closing support.</h2>
            <p>
              Whether clients have questions about title, closing, deed
              preparation, trust preparation, quiet title, probate, lot splits,
              development, technology, or marketing support, LandSel is focused
              on making the transaction easier to understand and complete.
            </p>
            <p>
              Markets and technology continue to change, but LandSel’s focus on
              personal service has remained consistent. The team works to go the
              extra mile on each closing.
            </p>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-heading centered">
            <p className="eyebrow">Staff</p>
            <h2>Meet the LandSel team.</h2>
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

export default WhoWeAre;
