import { ExternalIcon } from "./Icons.jsx";

function ExternalRedirectModal({ link, onCancel, onConfirm }) {
  if (!link) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onCancel}>
      <div
        className="redirect-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="redirect-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-icon">
          <ExternalIcon />
        </div>

        <div>
          <p className="modal-eyebrow">External link</p>
          <h2 id="redirect-title">Open this page in a new tab?</h2>
          <p>
            You’re about to leave this website and open{" "}
            <strong>{link.label || "an external page"}</strong>.
          </p>
        </div>

        <div className="modal-actions">
          <button className="modal-button secondary" onClick={onCancel}>
            Stay here
          </button>
          <button className="modal-button primary" onClick={onConfirm}>
            Open new tab
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExternalRedirectModal;