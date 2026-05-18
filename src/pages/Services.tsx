import { useNavigate } from "react-router-dom";
import services from "../components/Services/Services";


const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services-page">
      
      <h1>Our Services</h1>

      {/* 🔥 THIS IS THE WRAPPER */}
      <div className="services-container">

        <div
          className="service-card"
          onClick={() => navigate("/services/burial")}
        >
          <h3>Burial Services</h3>
          <p>Dignified burial arrangements.</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/services/funeral-planning")}
        >
          <h3>Funeral Planning</h3>
          <p>Complete funeral organization.</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/services/transportation")}
        >
          <h3>Transportation</h3>
          <p>Hearse and family transport.</p>
        </div>

        <div
          className="service-card"
          onClick={() => navigate("/services/coffins")}
        >
          <h3>Coffins & Caskets</h3>
          <p>High-quality coffin options.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;