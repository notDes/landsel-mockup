import { holidaysClosed } from "../data/holidays.js";

function Resources() {
  return (
    <main>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="eyebrow">Resources</p>
          <h1>Helpful information without clutter.</h1>
          <p>
            Important operational details like holiday closures should be easy
            to find without making the homepage feel overloaded.
          </p>
        </div>
      </section>

      <section className="section resources-section">
        <div className="container resources-panel">
          <div>
            <p className="eyebrow">Holiday Closures</p>
            <h2>Holiday office closures.</h2>
            <p>
              LandSel’s current resources area lists the holidays their offices
              are closed.
            </p>
          </div>

          <div className="holiday-card">
            <h3>Offices are closed on:</h3>

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