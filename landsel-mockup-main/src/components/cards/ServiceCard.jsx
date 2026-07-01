function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-icon">✦</div>
      <h3>{service.title}</h3>
      <p>{service.text}</p>
    </article>
  );
}

export default ServiceCard;