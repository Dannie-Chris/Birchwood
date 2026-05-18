import "./Services.css";

const services = [
  "Burial Services",
  "Funeral Planning",
  "Transportation",
  "Coffins & Caskets"
];

const Services: React.FC = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <h3>{s}</h3>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Services;