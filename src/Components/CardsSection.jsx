import React from "react";
import { FaUserMd, FaClock, FaHospital, FaHeartbeat, FaPhone, FaComments } from "react-icons/fa";

const features = [
  {
    icon: <FaUserMd size={30} />,
    title: "Qualified Doctors",
    description:
      "Experienced professionals offering top-quality healthcare services with care and dedication.",
  },
  {
    icon: <FaClock size={30} />,
    title: "24 Hours Service",
    description:
      "Round-the-clock medical assistance to ensure you're never without support when you need it.",
  },
  {
    icon: <FaHospital size={30} />,
    title: "Modern Equipment",
    description:
      "State-of-the-art technology ensures accurate diagnosis and effective treatment.",
  },
  {
    icon: <FaHeartbeat size={30} />,
    title: "Conscientious Doctors",
    description:
      "Caring, empathetic, and attentive professionals ensuring patient well-being.",
  },
  {
    icon: <FaPhone size={30} />,
    title: "Call in 10 Minutes",
    description:
      "Rapid response team ready to assist with appointments and queries within minutes.",
  },
  {
    icon: <FaComments size={30} />,
    title: "Enthusiastic Support",
    description:
      "Friendly and knowledgeable staff ready to guide you through every step of your care.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-20">
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border rounded-md shadow hover:shadow-lg transition"
          >
            <div className="bg-blue-900 text-white p-3 rounded-md">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

