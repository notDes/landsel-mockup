import PageHero from "../components/common/PageHero.jsx";
import { holidaysClosed } from "../data/holidays.js";

function Resources() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Resources" title="Helpful information without clutter.">
        <p>
          Important operational details like holiday closures should be simple
          to find and easy to understand.
        </p>
      </PageHero>

      <section className="section resources-section">
        <div className="container resources-panel">
          <div>
            <p className="eyebrow">Holiday Closures</p>
            <h2>LandSel offices are closed on these holidays.</h2>
            <p>
              Please plan closings and document needs around these holiday
              closures.
            </p>
          </div>

          <div className="holiday-card">
            <h3>Closed holidays</h3>

            <div className="holiday-grid">
              {holidaysClosed.map((holiday) => (
                <span key={holiday}>{holiday}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resources;
