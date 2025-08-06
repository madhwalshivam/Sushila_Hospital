import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Phone number must be exactly 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select preferred mode";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setPatientName("");
    setPatientNumber("");
    setPatientGender("default");
    setAppointmentTime("");
    setPreferredMode("default");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="min-h-screen pt-32 bg-gray-50 flex flex-col justify-between">
      {/* Helmet SEO */}
      <Helmet>
        <title>Book Appointment | Sushila Multispeciality Hospital | Best Hospital in Ghaziabad</title>
        <meta
          name="description"
          content="Book an appointment online with Sushila Multispeciality Hospital for quality healthcare services. Choose your preferred time and consultation mode."
        />
        <meta
          name="keywords"
          content="Sushila Hospital appointment, book online doctor, hospital consultation, Ghaziabad hospital, multispeciality clinic"
        />
        <link rel="canonical" href="https://www.sushilahospital.com/appointment" />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow p-6">
        <h1 className="text-3xl font-bold text-blue-900 text-center">
          <Link to="/">Sushila Multispeciality Hospital</Link>
        </h1>
      </header>

      {/* Form Section */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-blue-900 mb-6">
            Book Appointment Online
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Patient Full Name</label>
              <input
                type="text"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-900"
              />
              {formErrors.patientName && (
                <p className="text-sm text-red-600 mt-1">{formErrors.patientName}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Patient Phone Number</label>
              <input
                type="text"
                value={patientNumber}
                onChange={(e) => setPatientNumber(e.target.value)}
                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-900"
              />
              {formErrors.patientNumber && (
                <p className="text-sm text-red-600 mt-1">{formErrors.patientNumber}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Patient Gender</label>
              <select
                value={patientGender}
                onChange={(e) => setPatientGender(e.target.value)}
                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="default">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="private">I will inform Doctor only</option>
              </select>
              {formErrors.patientGender && (
                <p className="text-sm text-red-600 mt-1">{formErrors.patientGender}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Preferred Appointment Time</label>
              <input
                type="datetime-local"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-900"
              />
              {formErrors.appointmentTime && (
                <p className="text-sm text-red-600 mt-1">{formErrors.appointmentTime}</p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">Preferred Mode</label>
              <select
                value={preferredMode}
                onChange={(e) => setPreferredMode(e.target.value)}
                className="w-full border rounded px-4 py-2 outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="default">Select</option>
                <option value="voice">Voice Call</option>
                <option value="video">Video Call</option>
                <option value="physical">Physical Visit</option>
              </select>
              {formErrors.preferredMode && (
                <p className="text-sm text-red-600 mt-1">{formErrors.preferredMode}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded hover:bg-blue-800 transition"
            >
              Confirm Appointment
            </button>

            {isSubmitted && (
              <p className="text-green-600 text-center mt-4">
                Appointment details sent to patient’s phone number via SMS.
              </p>
            )}
          </form>
        </div>
      </main>

      <Footer />
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
