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
"Sushila Hospital brings quality healthcare closer to you, offering a comprehensive range of medical services supported by highly experienced doctors, modern infrastructure, and a compassionate staff. From general consultations and diagnostics to specialized treatments and emergency care, we are committed to delivering patient-centric services with excellence.Recognized as one of the best hospitals in Delhi, Sushila Hospital focuses on affordability, trust, and timely medical attention. "
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Orthopedics"
          description="The Department of Orthopaedics at Sushila Hospital is equipped with advanced infrastructure to provide comprehensive care for bone and joint conditions. Specializing in joint replacements (knee and hip), spinal surgeries, fracture management, sports injuries, and arthritis, our team uses modern surgical techniques and personalized rehabilitation to ensure faster recovery. Trusted for delivering excellent outcomes, we are recognized among the best orthopedic centers in Delhi."
          icon={ faBone}
        />

        <InformationCard
          title="Cancer Department"
          description="At Sushila Hospital, we provide comprehensive cancer care in Delhi NCR, offering support through every stage of the journey—from early detection to advanced treatment and post-care recovery. Our state-of-the-art cancer department is equipped with modern technology and skilled professionals dedicated to achieving the best outcomes for our patients.With timely interventions, modern techniques, and a patient-first mindset, Sushila Hospital is recognized as one of the best hospitals for cancer treatment in Delhi."
          icon={faRibbon}
        />

        <InformationCard
          title="Physician"
          description="Sushila Hospital’s General Medicine Department is led by experienced physicians who provide accurate diagnosis and treatment for a wide range of acute and chronic illnesses. With a focus on personalized, patient-centered care, our doctors ensure every patient receives the attention and support they need. Recognized for their expertise and compassion, they are counted among the best general physicians in Delhi, delivering trusted primary care for all age groups."
          icon={faUserDoctor}
        />
      </div>
    </div>
  );
}

export default Info;
