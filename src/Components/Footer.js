import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-10 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        <div className="lg:col-span-2 animate-fadeInUp delay-[100ms]">
          <h4 className="text-xl font-bold mb-4 text-white border-b-2 border-blue-500 inline-block">
            About Sushila Hospital
          </h4>
          <p className="text-gray-400 mb-6">
           Sushila Hospital is a multi-specialty and trauma care center, trusted since its inception for delivering affordable, high-quality healthcare with compassion. Equipped with advanced medical technology and expert doctors, we are committed to providing personalized treatment with a human touch. Recognized as one of the best hospital in Delhi, we strive to ensure every patient receives the care they deserve.
          </p>
          <Link
            to="/about"
            className="inline-block border border-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Read More About
          </Link>
        </div>

        {/* Quick Links */}
        <div className="animate-fadeInUp delay-[200ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/" className="hover:text-white">› Home</Link></li>
            <li><Link to="/about" className="hover:text-white">› About Us</Link></li>
            <li><Link to="/treatment" className="hover:text-white">› Treatments & Specialties</Link></li>
             <li><Link to="/facilities" className="hover:text-white">› Facilities & Technology</Link></li>
            <li><Link to="/team" className="hover:text-white">› Meet Our Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-white">› Contact</Link></li>
          </ul>
        </div>

        {/* Departments */}
<div className="animate-fadeInUp delay-[300ms]">
  <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
    Departments
  </h4>
  <ul className="space-y-2 text-gray-400">
  <li>
    <Link to="/treatment" className="hover:text-white">
      › Cardiology
    </Link>
  </li>
  <li>
    <Link to="/treatment" className="hover:text-white">
      › Gynaecology
    </Link>
  </li>
  <li>
    <Link to="/treatment" className="hover:text-white">
      › Orthopaedics
    </Link>
  </li>
  <li>
    <Link to="/treatment" className="hover:text-white">
      › Paediatrics
    </Link>
  </li>
  <li>
    <Link to="/treatment" className="hover:text-white">
      › ICU & Emergency
    </Link>
  </li>
  <li>
    <Link to="/treatment" className="hover:text-white">
      › Internal Medicine
    </Link>
  </li>
  <li>
    <Link to="/treatment" className="hover:text-white">
      › Pulmonary & Critical Care
    </Link>
  </li>
</ul>
</div>


        {/* Contact Info */}
        <div className="animate-fadeInUp delay-[400ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Get in Touch
          </h4>
  <div className="text-gray-400">
  <p>
    Sushila Multispeciality Hospital,<br />
    A-43, Patel Nagar 2, Chhabil Das Marg,<br />
    Near Pelican Hotel, Ghaziabad, U.P - 201001
  </p>
  <a
    href="https://www.google.com/maps?q=Sushila+Multispeciality+Hospital,+Block+A,+A-43,+Chhabil+Das+Marg,+near+Pelican+Hotel,+Pocket+D,+Patel+Nagar+2nd,+Patel+Nagar,+Ghaziabad,+Uttar+Pradesh+201001"
    target="_blank"
    rel="noreferrer"
    className="text-blue-900 hover:text-blue-700  inline-block mt-1"
  >
    View on Google Maps →
  </a>
</div>

          <p className="mt-3 text-blue-400 font-semibold">
            Phone:<br />
            <a href="tel:+919997000000" className="hover:underline">+91-9990785220</a>
          </p>

          <div className="flex gap-4 mt-4 text-gray-800">
            <a
              href="https://www.facebook.com/sushilahospital"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FacebookIcon fontSize="small" />
            </a>
            <a
              href="https://www.youtube.com/sushilahospital"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-red-600 hover:text-white transition duration-300"
            >
              <YouTubeIcon fontSize="small" />
            </a>
            <a
              href="https://www.instagram.com/sushilahospital"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
            >
              <InstagramIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 animate-fadeInUp delay-[500ms]">
        <p>© 2025 Sushila Hospital. All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <Link to="https://www.websiteseotool.in/" className="text-blue-400 hover:underline">
            Advertising India
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
