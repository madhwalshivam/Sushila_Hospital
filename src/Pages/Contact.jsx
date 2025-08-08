import React from "react";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../Components/Footer";

const Contact = () => {
  const hours = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO Helmet */}
      <Helmet>
        <title>Contact Us | Sushila Hospital Patel Nagar | Best Hospital in Delhi NCR</title>
        <meta
          name="description"
          content="Get in touch with Sushila Multispeciality Hospital, Ghaziabad. Find contact numbers, email, hospital address, and book your appointments online. We're available 24/7."
        />
        <meta
          name="keywords"
          content="Sushila Hospital contact, Ghaziabad hospital phone number, book appointment, hospital email, hospital location"
        />
        <link rel="canonical" href="https://www.sushilahospital.com/contact" />
        <meta name="author" content="Sushila Multispeciality Hospital" />

        {/* Open Graph (Facebook) */}
        <meta property="og:title" content="Contact Us | Sushila Hospital" />
        <meta
          property="og:description"
          content="Reach out to Sushila Hospital for any queries or appointments. We're located near Patel Nagar Metro, Ghaziabad and open 24/7."
        />
        <meta
          property="og:url"
          content="https://www.sushilahospital.com/contact"
        />
        <meta
          property="og:image"
          content="https://www.sushilahospital.com/static/contact-cover.jpg"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Sushila Hospital" />
        <meta
          name="twitter:description"
          content="Have questions or need help? Contact Sushila Multispeciality Hospital Ghaziabad. We're available round the clock to assist you."
        />
      </Helmet>

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* SEND A MESSAGE FORM */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">
              SEND A MESSAGE
            </h2>
            <form className="space-y-4">
              <div className="flex items-center border rounded px-3 py-2">
                <FaUser className="text-gray-500 mr-3" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded px-3 py-2">
                <FaPhoneAlt className="text-gray-500 mr-3" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full outline-none"
                />
              </div>
              <div className="flex items-center border rounded px-3 py-2">
                <FaEnvelope className="text-gray-500 mr-3" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Note"
                className="w-full border rounded px-3 py-2 outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                SEND
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-6 border-b pb-2">CONTACT US</h2>
            <div className="flex items-start gap-3 mb-4">
              <FaMapMarkerAlt className="text-blue-900 mt-1" />
              <p>
                A-43, Patel Nagar 2, Near Metro Station, Ghaziabad U.P - 201001
              </p>
            </div>

            <h3 className="font-semibold text-gray-700 mb-2">RECEIVE RECORDS</h3>
            <div className="mb-2">
              <p className="text-sm">
                Call Us: <span className="font-semibold">9211704745</span>
              </p>
              <p className="text-sm">
                Email:{" "}
                <span className="font-semibold">
                  hospitalshushila@gmail.com
                </span>
              </p>
            </div>

            <h3 className="font-semibold text-gray-700 mt-4 mb-2">
              CUSTOMER CARE
            </h3>
            <div>
              <p className="text-sm">
                Call Us: <span className="font-semibold">0120 4448294</span>
              </p>
              <p className="text-sm">
                Email:{" "}
                <span className="font-semibold">
                  hospitalshushila@gmail.com
                </span>
              </p>
            </div>
          </div>

          {/* OPENING HOURS */}
          <div className="bg-blue-900 text-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <FaClock className="mr-2 text-xl" />
              <h2 className="text-lg font-semibold">OPENING HOURS</h2>
            </div>
            <ul className="space-y-2 border-t pt-2 border-white/30">
              {hours.map((day) => (
                <li key={day} className="flex justify-between">
                  <span>{day}</span>
                  <span>Open 24/7</span>
                </li>
              ))}
            </ul>
            <Link to="/appointment">
              <button className="w-full mt-6 border border-white rounded py-2 hover:bg-white hover:text-blue-900 transition">
                BOOK APPOINTMENTS
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Google Map Embed */}
      <div className="w-full mt-10">
        <iframe
          title="Sushila Multispeciality Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.109226874164!2d77.40798030305954!3d28.670774419096535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf049355b682f%3A0x6124b6c81b91af3f!2sSushila%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1721308622469!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
