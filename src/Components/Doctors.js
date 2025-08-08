import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/dr1.png";
import profile2 from "../Assets/dr3.png";
import profile3 from "../Assets/dr4.png";
import profile4 from "../Assets/dr12.png";
import { Link } from "react-router-dom";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our dedicated team of expert doctors at Sushila Hospital, committed to delivering trusted and compassionate healthcare. With years of experience and advanced medical knowledge, they strive to ensure your well-being and guide you towards a healthier future.
        </p>
      </div>

     <div className="dt-cards-content">
  <DoctorCard
    img={profile1}
    name="Dr. Anupam Singh"
    title="MD. Medicine"
    stars="4.9"
    reviews="1200"
  />
  <DoctorCard
    img={profile2}
    name="Dr. J Kumar"
    title="MD. Pediatrics"
    stars="4.8"
    reviews="1100"
  />
  <DoctorCard
    img={profile3}
    name="Dr. Komal Goel"
    title="MD. Critical Care"
    stars="4.7"
    reviews="950"
  />
  <DoctorCard
    img={profile4}
    name="Dr. Siddharth Anand"
    title="MD. Pulmonary Medicine"
    stars="4.8"
    reviews="1000"
  />
</div>
<div className="text-center mt-6">
      <Link
        to="/team"
        className="inline-block px-6 py-2 text-white bg-blue-900 hover:bg-blue-800 font-semibold rounded-full shadow-md transition-all duration-300"
      >
        All Doctors
      </Link>
    </div>

    </div>
  );
}

export default Doctors;
