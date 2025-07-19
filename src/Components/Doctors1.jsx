import React, { useState } from "react";
import profile1 from "../Assets/dr1.webp";
import profile2 from "../Assets/dr2.webp";
import profile3 from "../Assets/dr3.jpeg";
import profile4 from "../Assets/dr4.jpg";
import profile5 from "../Assets/dr5.jpeg";
import profile6 from "../Assets/dr6.jpeg";
import profile7 from "../Assets/dr8.jpg";
import profile8 from "../Assets/dr9.jpg";
import profile9 from "../Assets/dr10.jpeg";
import profile10 from "../Assets/dr11.jpg";
import profile11 from "../Assets/dr12.jpeg";
import profile12 from "../Assets/dr13.jpeg";
import profile13 from "../Assets/dr14.jpeg";
import profile14 from "../Assets/dr15.jpg";
import profile15 from "../Assets/dr16.jpg";
import profile16 from "../Assets/dr17.jpg";
import profile17 from "../Assets/dr17.png";
import Footer from "./Footer";
const doctors = [
  {
    img: profile1,
    name: "Dr. Anupam K Singh",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    stars: "4.9",
    reviews: "1200",
    description: `Consultant Physician & Head of Department (Medicine)
Expertise: Metabolic Diseases, Diabetes, Cardiology, Infectious Diseases
Experience: Ex-Associate Prof at Santosh Medical College, 55 research papers
Awards: ERS Young Scientist Award 2008, HIV CME Best Paper 2013`
  },
  {
    img: profile2,
    name: "Dr. J Kumar",
    title: "DCH, MD (Pediatrics) – KIMS | PGPN Boston (USA)",
    stars: "4.8",
    reviews: "1100",
    description: `Senior Consultant Pediatrics with 17+ years of experience
Services: Vaccination, Growth Evaluation, Asthma, Obesity Management
Focus: Preventive care and adolescent health`
  },
  {
    img: profile3,
    name: "Dr. Komal Goel",
    title: "MBBS, MD, IDCCM, FCCS, CCEDM",
    stars: "4.7",
    reviews: "950",
    description: `Intensive Care Physician with 10+ years of experience
Skills: Ventilator management, Critical care, Tracheostomy, ICU Protocols`
  },
  {
    img: profile4,
    name: "Dr. Vimal Kumar Agrawal",
    title: "MBBS (MAMC) | MD (Medicine)",
    stars: "4.8",
    reviews: "1000",
    description: `Internal Medicine Specialist with special interest in chronic illness, diabetes care and advanced diagnostics.`
  },
  {
    img: profile5,
    name: "Dr. Neeshu Singh",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Experienced physician focused on infectious diseases and lifestyle medicine. Known for a patient-first approach.`
  },
  {
    img: profile6,
    name: "Dr. Omkar Singh",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Physician with expertise in cardiometabolic health and preventive medicine.`
  },
  {
    img: profile7,
    name: "Dr. Naved Akhter",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Senior Consultant with a strong academic background and research in endocrinology.`
  },
  {
    img: profile8,
    name: "Dr. Gaurav Shrivastav",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Physician known for thorough diagnosis and compassionate patient communication.`
  },
  {
    img: profile9,
    name: "Dr. Farha Khan",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Internal Medicine specialist focused on women’s health, PCOS, and preventive cardiology.`
  },
  {
    img: profile10,
    name: "Dr. Deepak Chahar",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Expert in geriatric care and chronic disease management. Passionate about community health.`
  },
  {
    img: profile11,
    name: "Dr. Ashish Kumar Shah",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Strong background in cardiology, with interest in non-invasive diagnostics and health education.`
  },
  {
    img: profile12,
    name: "Dr. Priyanka Bhadauria",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Expertise in autoimmune and hormonal disorders. Committed to evidence-based care.`
  },
  {
    img: profile13,
    name: "Dr. Abhishek Jain",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Broad internal medicine experience including metabolic disorders, infections and tropical medicine.`
  },
  {
    img: profile14,
    name: "Dr. Aditya Gore",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Experienced internist known for precision diagnostics and integrative treatment plans.`
  },
  {
    img: profile15,
    name: "Dr. Yogendra Kumar",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Focuses on patient education and chronic care pathways in internal medicine.`
  },
  {
    img: profile16,
    name: "Dr. Pavitra Dosaj",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Compassionate clinician focused on diabetes, hypertension, and women’s health.`
  },
  {
    img: profile17,
    name: "Dr. Rajeev Kumar",
    title: "MBBS (MAMC) | MD (Medicine) - RIMS | ECFMG Certified (USA)",
    description: `Trusted physician with deep experience in both hospital-based and outpatient care.`
  }
];


function Doctors1() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div>
    <section className="min-h-screen bg-[#F9FBFF] px-4 md:px-20 pt-32 pb-20" id="doctors">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-2">Our Team</h2>
      <div className="w-24 h-1 mx-auto bg-[#9D2553] mb-4 rounded-full" />
      <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-7 text-center mb-12 font-rubik">
        Meet our dedicated team of expert doctors at Sushila Hospital, committed to delivering trusted and compassionate healthcare. With years of experience and advanced medical knowledge, they strive to ensure your well-being and guide you towards a healthier future.
      </p>

      {/* Cards Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center">

        {doctors.map((doc, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer text-center"
            onClick={() => doc.description && setSelectedDoctor(doc)}
          >
            <img
              src={doc.img || profile1}
              alt={doc.name}
              className="w-28 h-28 object-cover rounded-full mx-auto mt-6 border border-gray-300"
            />
            <div className="p-4">
              <h4 className="text-base font-semibold text-black">{doc.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{doc.title}</p>
              {doc.description && (
                <p className="mt-3 text-blue-900 font-medium text-sm underline">Read More</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full rounded-lg p-6 relative shadow-xl max-h-[90vh] overflow-y-auto">
            <button className="absolute top-2 right-4 text-2xl font-bold" onClick={() => setSelectedDoctor(null)}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedDoctor.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{selectedDoctor.title}</p>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">{selectedDoctor.description}</p>
          </div>
         </div>
      )}
    </section>

    <Footer />
    </div>
  );
}


export default Doctors1;