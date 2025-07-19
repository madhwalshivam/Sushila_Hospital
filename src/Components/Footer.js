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
            Sushila Hospital is a multi-specialty & trauma care center committed to delivering affordable, high-quality healthcare services with advanced technology and a human touch. Trusted since our inception, we continue to care with compassion.
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
            <li><Link to="/services" className="hover:text-white">› Our Services</Link></li>
            <li><Link to="/doctors" className="hover:text-white">› Meet Our Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-white">› Contact</Link></li>
          </ul>
        </div>

        {/* Departments */}
        <div className="animate-fadeInUp delay-[300ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Departments
          </h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/cardiology" className="hover:text-white">› Cardiology</Link></li>
            <li><Link to="/gynaecology" className="hover:text-white">› Gynaecology</Link></li>
            <li><Link to="/orthopaedics" className="hover:text-white">› Orthopaedics</Link></li>
            <li><Link to="/paediatrics" className="hover:text-white">› Paediatrics</Link></li>
            <li><Link to="/icu" className="hover:text-white">› ICU & Emergency</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fadeInUp delay-[400ms]">
          <h4 className="text-lg font-semibold mb-4 text-white border-b-2 border-blue-500 inline-block">
            Get in Touch
          </h4>
          <p className="text-gray-400">
            A-43, Patel Nagar 2,<br />
           Near Metro Station, Ghaziabad U.P - 201001<br />
            India
          </p>
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

      {/* Bottom Footer Text */}
      <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 animate-fadeInUp delay-[500ms]">
        <p>© 2025 Sushila Hospital. All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <Link to="/advertising-india" className="text-blue-400 hover:underline">
            Advertising India
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
