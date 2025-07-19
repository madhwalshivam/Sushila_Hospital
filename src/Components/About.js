import React from "react";
import Doctor from "../Assets/family.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
         Welcome to Sushila Hospital — your trusted multi-speciality healthcare partner. We offer expert medical care with a human touch, combining advanced technology and compassionate service at an affordable cost.
        </p>

       <h4 className="about-text-title">Our Facilities</h4>

<SolutionStep
  title="Advanced Critical Care"
  description="Our ICU and Neonatal units are equipped with 18 beds, offering continuous monitoring and specialized care for adults and newborns."
/>

<SolutionStep
  title="Emergency & Maternity Services"
  description="Fully-equipped delivery suites and a dedicated emergency ward ensure timely care for urgent and maternity cases."
/>

<SolutionStep
  title="Expert Surgical Facilities"
  description="Three modern OTs and advanced C-Arm support complex procedures in Urology, Ortho, Pediatrics, Gastro, and Neurosurgery."
/>

      </div>
    </div>
  );
}

export default About;
