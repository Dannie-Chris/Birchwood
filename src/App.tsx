import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar/TopBar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";


const App: React.FC = () => {
  return (
    <Router>
      <TopBar/>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services/:id" element={<ServiceDetails/>}/>
        
      </Routes> 
    </Router>
  );
};

export default App;