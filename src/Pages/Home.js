import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Helmet>
        <title>Sushila Hospital |Best Multi-Speciality Hospital in Delhi NCR, India</title>
        <meta
          name="description"
          content="Sushila Hospital is your trusted multi-speciality healthcare partner in Delhi NCR. We offer expert medical care with advanced technology and compassionate service across Ghaziabad, Noida, Gurgaon, and Delhi."
        />
        <meta
          name="keywords"
          content="Sushila Hospital, Multi-Speciality Hospital, Hospital in Delhi NCR, Best Hospital in Ghaziabad, Noida Hospital, Gurgaon Healthcare, Affordable Medical Services, Expert Doctors in Delhi NCR"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sushila Hospital" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Sushila Hospital - Best Multi-Speciality Hospital in Delhi NCR" />
        <meta
          property="og:description"
          content="We provide affordable and compassionate care in Ghaziabad, Noida, Gurgaon & Delhi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sushilahospital.com/" />
        <meta property="og:image" content="https://www.sushilahospital.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sushila Hospital | Delhi NCR’s Trusted Hospital" />
        <meta
          name="twitter:description"
          content="Compassionate care with advanced technology. Serving Ghaziabad, Noida, Gurgaon & Delhi."
        />
        <meta name="twitter:image" content="https://www.sushilahospital.com/twitter-image.jpg" />
      </Helmet>

      <Navbar />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
