import React from "react";

import media1 from "../Assets/media1.jpeg";
import media2 from "../Assets/media2.jpeg";
import media3 from "../Assets/media3.jpeg";
import media4 from "../Assets/media4.jpeg";
import media5 from "../Assets/media5.jpeg";
import media6 from "../Assets/media6.jpeg";
import media7 from "../Assets/media7.jpeg";
import media8 from "../Assets/media11.jpg";
import media9 from "../Assets/media10.jpeg";
import Footer from "../Components/Footer";

const mediaImages = [
  media3,
  media4,
  media5,
  media6,
  media9,
  media8,
];

const MediaPage = () => {
  return (
    <>
      <div className="min-h-screen bg-[#F9FBFF] px-4 md:px-20 pt-32 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">
          OUR GALLERY
        </h2>
        <div className="w-24 h-1 mx-auto bg-[#9D2553] mb-4 rounded-full" />
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore glimpses of our hospital's events, milestones, and day-to-day
          activities captured through the lens. We believe in sharing our journey
          with the community.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Media ${idx + 1}`}
                className="w-full aspect-[4/3] object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default MediaPage;


