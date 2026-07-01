import { useState } from "react";

function Logo({ variant = "default" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`logo-wrap logo-wrap-${variant}`}>
      {!failed && (
        <img
          src="/assets/landsel-logo.png"
          alt="LandSel Title Agency"
          className="brand-logo"
          onError={() => setFailed(true)}
        />
      )}

      {failed && (
        <div className="fallback-logo">
          <div className="brand-mark">LS</div>
          <div>
            <p className="brand-name">LandSel</p>
            <p className="brand-subtitle">Title Agency, Inc.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Logo;