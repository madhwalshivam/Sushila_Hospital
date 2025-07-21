import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStethoscope } from "react-icons/fa";

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
• Nerves`,
  },
  {
    name: "Cancer Department",
    description: `
Cancer care involves the detection, diagnosis, and treatment of abnormal cell growth. We offer:

• Cancer screening (mammograms, colonoscopy, PAP smears)  
• Biopsy & imaging (CT, MRI, PET scans)  
• Chemotherapy & radiation therapy  
• Tumor removal surgeries`,
  },
  {
    name: "Physician",
    description: `
Our physicians manage a wide range of general medical conditions, focusing on adult health:

• Preventing diseases  
• Diagnosing medical conditions  
• Managing chronic illnesses  
• Referrals to specialists when needed`,
  },
  {
    name: "Obstetrics & Gynaecology",
    description: `
Comprehensive care for women’s health, pregnancy, and reproductive needs:

• Antenatal checkups  
• Labour & delivery services  
• Menstrual disorders & PCOS management  
• Ultrasound & postpartum care`,
  },
  {
    name: "Dermatology & Venereology",
    description: `
Expert care for skin, hair, nail, and sexually transmitted infections:

• Skin diseases, rashes, and infections  
• Hair and scalp disorders  
• Nail problems  
• Cosmetic dermatology (acne, scars, pigmentation)  
• STIs and related treatments`,
  },
  {
    name: "Pediatrics",
    description: `
Focused on the physical, emotional, and social health of children from birth to young adulthood:

• Newborn and infant care  
• Immunizations and vaccinations  
• Developmental screenings  
• Treatment of childhood illnesses  
• Nutritional and growth monitoring`,
  },
  {
    name: "Neurology",
    description: `
Neurology deals with disorders of the nervous system, including:

• Headaches and migraines  
• Epilepsy and seizures  
• Stroke management  
• Multiple sclerosis  
• Parkinson’s disease and other movement disorders`,
  },
  {
    name: "Neurosurgery",
    description: `
Surgical care for complex neurological conditions:

• Brain and spinal cord surgeries  
• Tumor removal  
• Treatment of traumatic brain injuries  
• Minimally invasive spine surgeries  
• Neurosurgical consultation and follow-up`,
  },
  {
    name: "Pulmonary",
    description: `
Pulmonology focuses on diseases related to the lungs and respiratory system:

• Asthma and chronic bronchitis  
• Tuberculosis (TB) care  
• COPD management  
• Sleep apnea diagnosis and treatment  
• Lung function testing and pulmonary rehabilitation`,
  },
];

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-gradient-to-br from-[#F8FAFC] to-white px-4 md:px-20 pt-20 pb-16">
      <h2 className="text-4xl font-extrabold text-blue-900 mb-12 text-center">
        <FaStethoscope className="inline-block text-blue-900 mr-2 mb-1" />
        Our Medical Services
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <div className="md:w-1/3 space-y-3 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300">

          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left px-5 py-3 rounded-lg font-medium transition-all duration-300 border ${
                index === activeIndex
                  ? "bg-blue-900 text-white border-blue-900 shadow-lg"
                  : "bg-white text-blue-800 border-gray-300 hover:bg-blue-100 hover:shadow"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="md:w-2/3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-blue-200 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-3xl font-semibold text-blue-900 mb-4">
                {services[activeIndex].name}
              </h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed tracking-wide text-[17px]">
                {services[activeIndex].description.trim()}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;



