import React from "react";
import Doctor from "../Assets/doctor-picture.png";
import SolutionStep from "./SolutionStep";
import FeaturesSection from "./CardsSection";
import ServicesPage from "../Pages/ServicesPage";
import Footer from "./Footer";


function About() {
  return (
    <>
      <div
        className="pt-32 pb-8 px-4 md:px-16 flex flex-col md:flex-row justify-center items-center gap-6 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]"
        id="about"
      >
        {/* Left Image */}
        <div className="w-full md:w-1/2 text-center">
          <img
            src={Doctor}
            alt="Doctor Group"
            className="w-[80%] max-w-[450px] h-auto md:h-[500px] mx-auto object-contain"
          />
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-bold font-poppins mb-4 relative inline-block">
            <span className="relative z-10">About Us</span>
            <span className="absolute bottom-[-12px] left-0 w-3/4 h-1 rounded bg-[#9D2553] z-0" />
          </h3>

          <p className="my-8 text-[#4d4b4b] font-rubik text-[18px] leading-[1.7rem] tracking-wide">
            Welcome to Sushila Hospital — your trusted multi-speciality healthcare
            partner. We offer expert medical care with a human touch, combining
            advanced technology and compassionate service at an affordable cost.
          </p>

          <h4 className="text-2xl font-bold font-poppins text-[#4d4b4b] tracking-wide mb-6">
            Our Facilities
          </h4>

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

     
      <FeaturesSection/>
      <ServicesPage/>
      <Footer/>
    </>
  );
}

export default About;

