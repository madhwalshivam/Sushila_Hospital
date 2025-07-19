import React from "react";
import InformationCard from "./InformationCard";
import { faBone, faRibbon, faUserDoctor } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
"Sushila Hospital brings quality healthcare closer to you, offering a wide range of medical services backed by experienced doctors, modern infrastructure, 
and compassionate staff. From general consultations and diagnostics to specialized treatments and emergency care, we are committed to delivering patient-centric services with excellence. With our focus on affordability, trust, and timely care, your health is always our priority. We also accept Ayushman Bharat and other government health schemes for your convenience."
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Orthopedics"
          description="The Department of Orthopaedics is equipped with advanced, state-of-the-art infrastructure, providing comprehensive care for a wide range of bone and joint conditions. It specializes in procedures like joint replacement surgeries (such as knee and hip replacements), spinal surgeries, and treatment of fractures, sports injuries, arthritis, and other musculoskeletal disorders. The department uses modern surgical techniques and rehabilitation facilities to ensure faster recovery and better outcomes for patients."
          icon={ faBone}
        />

        <InformationCard
          title="Cancer Department"
          description="We offer comprehensive care to cancer patients, backed by state-of-the-art facilities that cover every stage of treatment—from early detection and diagnosis to advanced therapies and supportive care. Our cancer care services include preventive screenings, chemotherapy, radiation therapy, surgical oncology, and personalized treatment plans, all aimed at ensuring the best possible outcomes. With a team of experienced oncologists and modern medical technology, we are committed to delivering compassionate and effective cancer care.."
          icon={faRibbon}
        />

        <InformationCard
          title="Physician"
          description="Our general physicians are highly qualified medical professionals who offer expert diagnosis and treatment for a wide range of common and chronic illnesses. With years of clinical experience, they focus on understanding each patient’s unique medical history and symptoms to provide accurate and effective care. Along with medical expertise, they are committed to delivering compassionate, patient-centered care, ensuring that each patient feels heard, supported, and well-treated throughout their healthcare journey."
          icon={faUserDoctor}
        />
      </div>
    </div>
  );
}

export default Info;
