import React from "react";
import { Helmet } from "react-helmet-async";
import Doctor from "../Assets/doctor-picture.png";
import SolutionStep from "./SolutionStep";
import FeaturesSection from "./CardsSection";
import ServicesPage from "../Pages/ServicesPage";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Sushila Hospital | Best Hospital in Delhi NCR, Patel Nagar</title>
        <meta
          name="description"
          content="Learn more about Sushila Hospital — a leading multi-speciality hospital in Delhi NCR, Ghaziabad, and Noida. We deliver advanced, affordable, and compassionate healthcare services across all departments."
        />
        <meta
          name="keywords"
          content="Best hospital in Delhi NCR, hospital in Ghaziabad, hospital in Noida, multi-speciality hospital, affordable healthcare, Sushila Hospital"
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
        <meta property="og:title" content="About Sushila Hospital - Best Multi-Speciality Hospital in Delhi NCR" />
        <meta
          property="og:description"
          content="Sushila Hospital offers affordable and expert medical care in Delhi NCR, Ghaziabad, and Noida. Trusted for compassionate healthcare services."
        />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

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
            Welcome to Sushila Hospital — your trusted Best multi-speciality hospital in Delhi NCR, Ghaziabad, and Noida. We offer expert medical care with a human touch, combining advanced technology, experienced doctors, and compassionate service. Committed to providing affordable healthcare in Delhi NCR, Sushila Hospital ensures quality treatment and patient satisfaction across all departments.
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

      <FeaturesSection />
      <ServicesPage />
      <Footer />
    </>
  );
}

export default About;
