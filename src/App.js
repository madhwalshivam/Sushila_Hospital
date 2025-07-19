import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import About from "./Components/AboutUs";
import MediaPage from "./Pages/MediaPage";
import Doctors1 from "./Components/Doctors1";
import FacilitiesPage from "./Pages/FacilitiesPage";
import ScrollToTop from "./Components/ScrollToTop"; 
import Departments from "./Pages/Departments";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop /> {/* Scroll handler here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<MediaPage />} />
          <Route path="/team" element={<Doctors1 />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/treatment" element={<Departments/>} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
