function PageHero({ eyebrow, title, children, compact = false }) {
  return (
    <section className={compact ? "page-hero page-hero-compact" : "page-hero"}>
      <div className="container page-hero-inner">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {children && <div className="page-hero-copy">{children}</div>}
      </div>
    </section>
  );
}

export default PageHero;
