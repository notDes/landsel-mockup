import { useEffect, useRef, useState } from "react";
import { PHONE, PHONE_TEL } from "../../data/constants.js";

/* =====================================================================
   PLACEHOLDER LINKS — swap these for the real destinations.
   ---------------------------------------------------------------------
   The TitleCapture URLs already used elsewhere in the site live in
   src/data/constants.js (TITLE_CAPTURE_QUOTE_URL, TITLE_CAPTURE_HOME_URL)
   if you want to reuse them here.
   ===================================================================== */
const WIDGET_LINKS = {
  titleQuote: "#", // TODO: replace with the real instant-quote link
  netSheets: "#", // TODO: replace with the real net sheets link
  contact: "/contact", // internal contact page (update if needed)
  login: "#", // TODO: replace with the real login / register link
};

const ACTIONS = [
  {
    href: WIDGET_LINKS.titleQuote,
    external: true,
    title: "Instant title quote",
    text: "Estimate title insurance and escrow fees.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </svg>
    ),
  },
  {
    href: WIDGET_LINKS.netSheets,
    external: true,
    title: "Seller & buyer net sheets",
    text: "Preview proceeds and closing costs.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v18M5 8c0-1.7 3.1-3 7-3s7 1.3 7 3-3.1 3-7 3-7 1.3-7 3 3.1 3 7 3 7-1.3 7-3" />
      </svg>
    ),
  },
  {
    href: WIDGET_LINKS.contact,
    external: false,
    title: "Contact our team",
    text: "Questions about a quote, file, or closing.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1Z" />
      </svg>
    ),
  },
  {
    href: WIDGET_LINKS.login,
    external: true,
    title: "Log in / register",
    text: "Access your LandSel tools account.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.5" />
        <path d="M5 20c1.2-3.2 3.8-5 7-5s5.8 1.8 7 5" />
      </svg>
    ),
  },
];

/**
 * Floating quick-tools launcher, rendered on every page.
 * Small round button bottom-right; opens a compact panel of actions.
 */
function QuoteWidget() {
  const [open, setOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);
  const [bubbleReady, setBubbleReady] = useState(false);
  const rootRef = useRef(null);

  /* Show the small teaser bubble a moment after load. */
  useEffect(() => {
    const timer = setTimeout(() => setBubbleReady(true), 2400);
    return () => clearTimeout(timer);
  }, []);

  /* Close on Escape or on a click outside the widget. */
  useEffect(() => {
    if (!open) return undefined;

    function onKeyDown(event) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const showBubble = bubbleReady && !bubbleDismissed && !open;

  return (
    <div className="quote-widget" ref={rootRef}>
      {showBubble && (
        <div className="quote-widget-bubble" role="status">
          <span>
            Need numbers for a closing? Get an instant quote or net sheet.
          </span>
          <button
            type="button"
            className="quote-widget-bubble-close"
            aria-label="Dismiss message"
            onClick={() => setBubbleDismissed(true)}
          >
            ×
          </button>
        </div>
      )}

      {open && (
        <div
          className="quote-widget-panel"
          role="dialog"
          aria-label="LandSel quick tools"
        >
          <div className="quote-widget-header">
            <p className="quote-widget-kicker">LandSel quick tools</p>
            <strong>How can we help you close?</strong>
          </div>

          <div className="quote-widget-actions">
            {ACTIONS.map((action) => (
              <a
                key={action.title}
                className="quote-widget-action"
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
              >
                <span className="quote-widget-action-icon">{action.icon}</span>
                <span>
                  <strong>{action.title}</strong>
                  <span>{action.text}</span>
                </span>
              </a>
            ))}
          </div>

          <p className="quote-widget-foot">
            Prefer to talk? Call <a href={`tel:${PHONE_TEL}`}>{PHONE}</a>
          </p>
        </div>
      )}

      <button
        type="button"
        className="quote-widget-fab"
        aria-expanded={open}
        aria-label={open ? "Close quick tools" : "Open quick tools"}
        onClick={() => {
          setBubbleDismissed(true);
          setOpen((isOpen) => !isOpen);
        }}
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M8.5 7h7" />
            <path d="M8.5 11.5h0M12 11.5h0M15.5 11.5h0M8.5 15h0M12 15h0M15.5 15h0" />
          </svg>
        )}
      </button>
    </div>
  );
}

export default QuoteWidget;
