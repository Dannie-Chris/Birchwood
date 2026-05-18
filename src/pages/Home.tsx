import React from "react";
import Navbar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
const Home=()=>{
    return (

    <>
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Celebrate a life well lived</h1>
          <p>Professional, dignified and caring funeral services</p>

          <div className="hero-buttons">
            <a href="#services" className="btn">Our Services</a>
            <a href="#contact" className="btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};
export default Home;