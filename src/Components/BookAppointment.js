import React from "react";
import Doctor from "../Assets/womanwhy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
  <span>Why Choose Sushila Hospital</span>
</h3>
<p className="ba-description">
At Sushila Hospital, your health is our top priority. Recognized as the No. 1 hospital in Delhi, we combine expert doctors, advanced medical facilities, and compassionate care to deliver the best treatment. From emergency services to routine checkups, we are committed to being the best hospital in Delhi for your complete well-being.
</p>


      <p className="ba-checks ba-check-first">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#253b52ff" }} /> Expert & Caring Doctors
</p>
<p className="ba-checks">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#253b52ff" }} /> 24x7 Emergency Services
</p>
<p className="ba-checks">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#253b52ff" }} /> Modern Surgical Facilities
</p>
<p className="ba-checks ba-check-last">
  <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#253b52ff" }} /> Affordable Quality Care
</p>


        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
