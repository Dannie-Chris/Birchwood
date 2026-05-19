import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar";

const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Birchwood Funerals</div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className={open ? "nav active" : "nav"}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact" className="btn-nav">Contact</Link>
      </nav>
    </header>
  );
};

export default NavBar;