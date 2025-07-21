import React, { useState } from "react";
import profile1 from "../Assets/dr1.webp";
import profile2 from "../Assets/dr2.webp";
import profile3 from "../Assets/dr3.jpeg";

import Footer from "./Footer";
const doctors = [
  {
    img: profile1,
    name: "Dr. Anupam Singh, MD",
    description: "Senior physician specializing in internal medicine and metabolic disorders."
  },
  {
    name: "Dr. Aman Mathur, MD",
    description: "Expert in chronic disease management and preventive care."
  },
  {
    name: "Dr. Neeshu Singh, MD",
    description: "Focuses on lifestyle-related diseases and evidence-based internal medicine."
  },
  {
    name: "Dr. Vinesh Kumar",
    description: "Experienced general practitioner with a holistic approach to care."
  },
  {
     img: profile2,
    name: "Dr. J. Kumar, MD",
    description: "Senior pediatrician with extensive experience in child health and development."
  },
  {
    name: "Dr. Anand Kumar, MD",
    description: "Internal medicine specialist with focus on diabetes and hypertension."
  },
  {
    name: "Dr. Vishrut Singh, MD",
    description: "Physician with interest in cardiac care and infectious disease."
  },
  {
    name: "Dr. Shubhra Jaiswal, MD",
    description: "Dedicated to women's health and autoimmune disease treatment."
  },
  {
    name: "Dr. Shweta, DGO",
    description: "Obstetrician and gynecologist with expertise in prenatal and reproductive care."
  },
  {
    name: "Dr. D.D. Verma, MS",
    description: "Renowned surgeon specializing in general and laparoscopic procedures."
  },
  {
     img: profile3,
    name: "Dr. Komal Goel, MD",
    description: "Critical care physician with expertise in ICU and emergency response."
  },
  {
    name: "Dr. Sandeep, MD",
    description: "Physician known for patient-centered care and diagnostics."
  },
  {
    name: "Dr. Siddharth Anand, MD",
    description: "Experienced in managing lifestyle diseases and geriatric care."
  },
  {
    name: "Dr. Milind Gautam, MS",
    description: "Surgeon focused on minimally invasive surgical techniques."
  },
  {
    name: "Dr. Abhay Singhal, MS",
    description: "General surgeon with special interest in trauma and critical care."
  },
  {
    name: "Dr. Apoorv Goel, MS",
    description: "Experienced in gastrointestinal and hepatobiliary surgeries."
  },
  {
    name: "Dr. B.K Jain, MS",
    description: "Veteran surgeon with decades of experience in operative care."
  },
  {
    name: "Dr. Uday Pratap Singh, MS",
    description: "Specialist in urology and endoscopic surgical procedures."
  },
  {
    name: "Dr. Shruti Patel, MS, MCH",
    description: "Super-specialist in surgical oncology with focus on women’s cancers."
  },
  {
    name: "Dr. Sanjay Mishra, MS, MCH",
    description: "Highly experienced neurosurgeon and spine surgery expert."
  },
  {
    name: "Dr. P. Kasarwani, MS, MCH",
    description: "Cardiothoracic surgeon known for precision and innovation."
  },
  {
    name: "Dr. Ritesh, MS, MCH",
    description: "Plastic and reconstructive surgery expert with aesthetic specialization."
  },
  {
    name: "Dr. Anshul Garg, MS",
    description: "Surgeon with specialization in hernia, thyroid, and general procedures."
  },
  {
    name: "Dr. Lalit Varma, MS",
    description: "General and vascular surgeon focused on diabetic limb care."
  },
  {
    name: "Dr. Rakesh Kumar, MD, DM",
    description: "Super-specialist in neurology with extensive research in epilepsy and stroke."
  },
  {
    name: "Dr. Amit Malik, MS, MCH",
    description: "Orthopedic surgeon with focus on joint replacement and trauma care."
  },
  {
    name: "Dr. Gajendra Singh, MS, MCH",
    description: "Pediatric surgeon with a compassionate approach to child surgical care."
  },
  {
    name: "Dr. Dhaval, MS, MCH",
    description: "Plastic and maxillofacial surgery expert with cosmetic specialization."
  },
  {
    name: "Dr. Hemendra Jha, MS",
    description: "Skilled in abdominal surgeries and laparoscopic procedures."
  },
  {
    name: "Dr. Rashi Agrawal, MD, DM",
    description: "Endocrinologist specializing in thyroid, diabetes, and hormonal disorders."
  },
  {
    name: "Dr. Jalaj Bakashi, MS, MCH",
    description: "Urologist known for advanced kidney and bladder surgery."
  },
  {
    name: "Dr. Nitin Manglik, MD, DM",
    description: "Senior cardiologist with experience in interventional and non-invasive cardiology."
  },
  {
    name: "Dr. Sharib, MDS",
    description: "Dental surgeon with expertise in prosthodontics and smile design."
  },
  {
    name: "Dr. Faizan Khan, MPT",
    description: "Physiotherapist focusing on rehabilitation, ortho, and sports injuries."
  },
  {
    name: "Dr. Navneet Dev, MD",
    description: "Specialist in internal medicine with focus on diagnostics and primary care."
  },
  {
    name: "Dr. Ankul Gupta, MD, DM",
    description: "Oncologist dedicated to personalized cancer treatment and research."
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
    {doc.img ? (
      <img
        src={doc.img}
        alt={doc.name}
        className="w-28 h-28 object-cover rounded-full mx-auto mt-6 border border-gray-300"
      />
    ) : (
      <div className="w-28 h-28 rounded-full mx-auto mt-6 border border-gray-300 bg-gray-100" />
    )}
    <div className="p-4">
      <h4 className="text-base font-semibold text-black">{doc.name}</h4>
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