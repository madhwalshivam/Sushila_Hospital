import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import banner1 from "../Assets/s.jpg";
import banner2 from "../Assets/s1.jpg";
import banner3 from "../Assets/s2.jpg";

import bannerMobile1 from "../Assets/sm-1.jpg";
import bannerMobile2 from "../Assets/sm-1.jpg";
import bannerMobile3 from "../Assets/sm-1.jpg";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  const desktopBanners = [banner1, banner2, banner3];
  const mobileBanners = [bannerMobile1, bannerMobile2, bannerMobile3];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 2 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full pt-24 relative">
      <Link to="/contact">
        <img
          src={isMobile ? mobileBanners[currentIndex] : desktopBanners[currentIndex]}
          alt="Banner"
          className={`w-full ${isMobile ? "h-auto object-contain" : "h-screen object-cover object-top"} transition-all duration-700`}
        />
      </Link>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {desktopBanners.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
