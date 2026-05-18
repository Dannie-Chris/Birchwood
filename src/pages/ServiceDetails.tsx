import { useParams } from "react-router-dom";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { id } = useParams();

  // 🔥 ALL DATA INSIDE THIS FILE
  const services = {
    burial: {
      title: "Burial Services",
      description: "Professional burial arrangements with dignity.",
      details: [
        {
          title: "Standard Burial",
          price: "KES 50,000",
          info: "Includes grave preparation and coordination."
        },
        {
          title: "Premium Burial",
          price: "KES 120,000",
          info: "Includes tent, seating, and full ceremony setup."
        }
      ]
    },

    "funeral-planning": {
      title: "Funeral Planning",
      description: "Complete funeral organization services.",
      details: [
        {
          title: "Basic Planning",
          price: "KES 30,000",
          info: "Documentation and coordination."
        },
        {
          title: "Full Planning",
          price: "KES 100,000",
          info: "End-to-end funeral arrangement."
        }
      ]
    },

    transportation: {
      title: "Transportation",
      description: "Hearse and transport services.",
      details: [
        {
          title: "Local Transport",
          price: "KES 15,000",
          info: "Within town transport."
        },
        {
          title: "Long Distance",
          price: "KES 40,000",
          info: "Upcountry transportation."
        }
      ]
    },

    coffins: {
      title: "Coffins & Caskets",
      description: "High-quality coffins and caskets.",
      details: [
        {
          title: "Standard Coffin",
          price: "KES 20,000",
          info: "Simple wooden coffin."
        },
        {
          title: "Luxury Casket",
          price: "KES 80,000",
          info: "Premium polished casket."
        }
      ]
    }
  };

  // 🔍 Get selected service
  const service = services[id as keyof typeof services];

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>Service not found</h2>;
  }

  return (
    <div className="service-details-container">

      {/* 🔥 HEADER */}
      <div className="service-header">
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>

      {/* 🔥 GRID */}
      <div className="service-grid">
        {service.details.map((item, index) => (
          <div key={index} className="service-card-detail">

            <h3>{item.title}</h3>

            <p className="service-info">
              {item.info}
            </p>

            <p className="service-price">
              {item.price}
            </p>

            <button className="service-btn">
              Book Now
            </button>

          </div>
        ))}
      </div>

    </div>
  );
};

export default ServiceDetails;