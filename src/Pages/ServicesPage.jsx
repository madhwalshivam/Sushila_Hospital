import React, { useState } from "react";

const services = [
  {
    name: "Orthopedics",
    description: `
Orthopedics focuses on the diagnosis, treatment, and prevention of musculoskeletal issues involving:

• Bones
• Joints
• Muscles
• Ligaments
• Tendons
• Nerves
    `,
  },
  {
    name: "Cancer Department",
    description: `
Cancer care involves the detection, diagnosis, and treatment of abnormal cell growth. We offer:

• Cancer screening (mammograms, colonoscopy, PAP smears)
• Biopsy & imaging (CT, MRI, PET scans)
• Chemotherapy & radiation therapy
• Tumor removal surgeries
    `,
  },
  {
    name: "Physician",
    description: `
Our physicians manage a wide range of general medical conditions, focusing on adult health:

• Preventing diseases
• Diagnosing medical conditions
• Managing chronic illnesses
• Referrals to specialists when needed
    `,
  },
  {
    name: "Obstetrics & Gynaecology",
    description: `
Comprehensive care for women’s health, pregnancy, and reproductive needs:

• Antenatal checkups
• Labour & delivery services
• Menstrual disorders & PCOS management
• Ultrasound & postpartum care
    `,
  },
  {
    name: "Dermatology & Venereology",
    description: `
Expert care for skin, hair, nail, and sexually transmitted infections:

• Skin diseases, rashes, and infections
• Hair and scalp disorders
• Nail problems
• Cosmetic dermatology (acne, scars, pigmentation)
• STIs and related treatments
    `,
  },
];

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className=" bg-gradient-to-br from-[#ECF2FF] to-[#FBFCFF] px-4 md:px-20 pt-16 pb-8">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
        Our Medical Services
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="md:w-1/3 flex flex-col gap-3">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-5 py-3 rounded-md font-medium transition-all duration-300 border-2 ${
                index === activeIndex
                  ? "bg-blue-900 text-white border-blue-900 shadow-md"
                  : "bg-white text-blue-900 border-blue-200 hover:bg-blue-100"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 bg-white border border-blue-200 rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            {services[activeIndex].name}
          </h3>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed tracking-wide">
            {services[activeIndex].description.trim()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

