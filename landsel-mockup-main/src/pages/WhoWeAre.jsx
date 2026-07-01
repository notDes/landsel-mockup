import TeamCard from "../components/cards/TeamCard.jsx";
import { teamMembers } from "../data/team.js";

function WhoWeAre() {
  return (
    <main>
      <section className="section about-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <p>
              LandSel Title is a private family owned business that has been
              in operation since 1992. We pride ourselves on service through
              integrity and treating people right. We are ready to assist our
              clients whether you have questions on title, closing, deed
              preparation or language, trust preparation, quiet title,
              probate, lot splits, development, technology, or to help market
              you to potential clients. While our market and technology are
              always changing, the one thing that has stayed consistent at
              LandSel is good old fashioned service. Our team of experienced
              professionals are here to support you and will go the extra
              mile on each and every closing.
            </p>
          </div>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Staff</h2>
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