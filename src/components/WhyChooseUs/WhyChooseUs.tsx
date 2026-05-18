import { FaThumbsUp, FaGem, FaPhoneAlt } from "react-icons/fa";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why">
      <h2>Why Choose Us</h2>

      <div className="why-grid">
        <div className="why-card">
          <div className="icon"><FaThumbsUp /></div> 
          <h3>Strong Reputation</h3>
          <p>You can trust our services</p>
        </div>

        <div className="why-card">
          <div className="icon"><FaGem /></div>
          <h3>Best Service</h3>
          <p>We deliver quality always</p>
        </div>

        <div className="why-card">
          <div className="icon"><FaPhoneAlt /></div>
          <h3>24/7 Support</h3>
          <p>We are here for you anytime</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;