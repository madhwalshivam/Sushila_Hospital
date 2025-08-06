import React, { useState } from "react";
import profile1 from "../Assets/dr1.webp";
import profile2 from "../Assets/dr2.webp";
import profile3 from "../Assets/dr3.jpeg";
import profile4 from '../Assets/dr12.png';
import profile5 from '../Assets/im.jpg';
import profile6 from '../Assets/imm.png'
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
const doctors = [
  {
    img: profile1,
    name: "Dr. Anupam Singh, MD",
    description: "A capable and caring chest specialist is essential for maintaining strong respiratory health. Dr. Anupam Kumar Singh, one of the best chest doctors in Delhi NCR, offers expert care at Sushila Hospital, a trusted name in multi-specialty and trauma care.With years of clinical experience and a patient-first approach, Dr. Singh is known for his dedication to treating lung and chest conditions with precision and compassion. From managing chronic respiratory issues to addressing sudden chest illnesses and providing preventive care, Dr. Anupam Kumar Singh is a trusted chest doctor near me for patients seeking quality care in Delhi NCR."
  },
  {
     img: profile2,
    name: "Dr. J. Kumar, MD",
    description: "Dr. J Kumar is a highly respected pediatrician at Sushila Hospital, delivering exceptional care for infants, children, and adolescents. With years of experience and a passion for children's health, he is recognized as one of the best pediatricians in Delhi NCR, trusted by families for his gentle approach and medical expertise.Dr. Kumar specializes in newborn care, childhood illnesses, immunizations, and comprehensive pediatric treatments. His warm, child-friendly approach ensures that every child receives personalized attention in a safe and comforting environment. For parents searching for a child specialist near me, Dr. J Kumar at Sushila Hospital offers the highest standard of pediatric care."
  },
   {
     img: profile3,
    name: "Dr. Komal Goel, MD",
    description: "Few professionals in critical care match the expertise and dedication of Dr. Komal Goel, a highly respected Intensive Care Specialist at Sushila Hospital, Delhi NCR. With over a decade of experience in managing critically ill patients, she is recognized as one of the best critical care doctors in Delhi NCR.Dr. Goel is known for her clinical excellence in handling complex medical emergencies and leading multidisciplinary ICU teams with precision and care. Her patient-focused approach and deep understanding of intensive care medicine make her a top choice for those searching for an ICU specialist near me. At Sushila Hospital, she ensures critically ill patients receive timely, compassionate, and advanced medical support."
  },
   {
   img: profile4,
    name: "Dr. Siddharth Anand, MD",
    description: "Dr. Siddharth Anand is a highly experienced and compassionate pulmonologist at Sushila Hospital, a trusted multi-specialty and trauma care center in Delhi NCR. He is widely recognized for his expertise in diagnosing and treating a wide range of respiratory conditions, including asthma, COPD, lung infections, and other pulmonary diseases. With years of clinical experience and a patient-centric approach, Dr. Anand is considered one of the best pulmonologists in Delhi NCR. For those searching for a pulmonologist near me, Sushila Hospital offers advanced respiratory care with compassion and cutting-edge technology."
  },
  {
    img: profile5,
    name: "Dr. Aman Mathur, MD",
    description: "Expert in chronic disease management and preventive care."
  },
  {
    img: profile6,
    name: "Dr. Neeshu Singh, MD",
    description: "Focuses on lifestyle-related diseases and evidence-based internal medicine."
  },
  {
    img: profile5,
    name: "Dr. Vinesh Kumar",
    description: "Experienced general practitioner with a holistic approach to care."
  },
  {
    img: profile5,
    name: "Dr. Anand Kumar, MD",
    description: "Internal medicine specialist with focus on diabetes and hypertension."
  },
  {
    img: profile5,
    name: "Dr. Vishrut Singh, MD",
    description: "Physician with interest in cardiac care and infectious disease."
  },
  {
    img: profile6,
    name: "Dr. Shubhra Jaiswal, MD",
    description: "Dedicated to women's health and autoimmune disease treatment."
  },
  {
    img: profile6,
    name: "Dr. Shweta, DGO",
    description: "Obstetrician and gynecologist with expertise in prenatal and reproductive care."
  },
  {
    img: profile5,
    name: "Dr. D.D. Verma, MS",
    description: "Renowned surgeon specializing in general and laparoscopic procedures."
  },
  {
    img: profile5,
    name: "Dr. Sandeep, MD",
    description: "Physician known for patient-centered care and diagnostics."
  },
  {
    img: profile5,
    name: "Dr. Milind Gautam, MS",
    description: "Surgeon focused on minimally invasive surgical techniques."
  },
  {
    img: profile5,
    name: "Dr. Abhay Singhal, MS",
    description: "General surgeon with special interest in trauma and critical care."
  },
  {
    img: profile5,
    name: "Dr. Apoorv Goel, MS",
    description: "Experienced in gastrointestinal and hepatobiliary surgeries."
  },
  {
    img: profile5,
    name: "Dr. B.K Jain, MS",
    description: "Veteran surgeon with decades of experience in operative care."
  },
  {
    img: profile5,
    name: "Dr. Uday Pratap Singh, MS",
    description: "Specialist in urology and endoscopic surgical procedures."
  },
  {
    img: profile6,
    name: "Dr. Shruti Patel, MS, MCH",
    description: "Super-specialist in surgical oncology with focus on women’s cancers."
  },
  {
    img: profile5,
    name: "Dr. Sanjay Mishra, MS, MCH",
    description: "Highly experienced neurosurgeon and spine surgery expert."
  },
  {
    img: profile6,
    name: "Dr. P. Kasarwani, MS, MCH",
    description: "Cardiothoracic surgeon known for precision and innovation."
  },
  {
    img: profile5,
    name: "Dr. Ritesh, MS, MCH",
    description: "Plastic and reconstructive surgery expert with aesthetic specialization."
  },
  {
    img: profile5,
    name: "Dr. Anshul Garg, MS",
    description: "Surgeon with specialization in hernia, thyroid, and general procedures."
  },
  {
    img: profile5,
    name: "Dr. Lalit Varma, MS",
    description: "General and vascular surgeon focused on diabetic limb care."
  },
  {
    img: profile5,
    name: "Dr. Rakesh Kumar, MD, DM",
    description: "Super-specialist in neurology with extensive research in epilepsy and stroke."
  },
  {
    img: profile5,
    name: "Dr. Amit Malik, MS, MCH",
    description: "Orthopedic surgeon with focus on joint replacement and trauma care."
  },
  {
    img: profile5,
    name: "Dr. Gajendra Singh, MS, MCH",
    description: "Pediatric surgeon with a compassionate approach to child surgical care."
  },
  {
    img: profile5,
    name: "Dr. Dhaval, MS, MCH",
    description: "Plastic and maxillofacial surgery expert with cosmetic specialization."
  },
  {
    img: profile5,
    name: "Dr. Hemendra Jha, MS",
    description: "Skilled in abdominal surgeries and laparoscopic procedures."
  },
  {
    img: profile6,
    name: "Dr. Rashi Agrawal, MD, DM",
    description: "Endocrinologist specializing in thyroid, diabetes, and hormonal disorders."
  },
  {
    img: profile5,
    name: "Dr. Jalaj Bakashi, MS, MCH",
    description: "Urologist known for advanced kidney and bladder surgery."
  },
  {
    img: profile5,
    name: "Dr. Nitin Manglik, MD, DM",
    description: "Senior cardiologist with experience in interventional and non-invasive cardiology."
  },
  {
    img: profile5,
    name: "Dr. Sharib, MDS",
    description: "Dental surgeon with expertise in prosthodontics and smile design."
  },
  {
    img: profile5,
    name: "Dr. Faizan Khan, MPT",
    description: "Physiotherapist focusing on rehabilitation, ortho, and sports injuries."
  },
  {
    img: profile5,
    name: "Dr. Navneet Dev, MD",
    description: "Specialist in internal medicine with focus on diagnostics and primary care."
  },
  {
    img: profile5,
    name: "Dr. Ankul Gupta, MD, DM",
    description: "Oncologist dedicated to personalized cancer treatment and research."
  }
];



function Doctors1() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div>
      <Helmet>
        <title>Our Doctors | Sushila Hospital | Best doctors in Delhi NCR</title>
        <meta
          name="description"
          content="Meet our dedicated team of expert doctors at Sushila Hospital, serving Delhi, Ghaziabad, Noida, and Gurgaon. Discover top specialists in pediatrics, surgery, critical care, pulmonology, and more."
        />
        <meta
          name="keywords"
          content="Sushila Hospital doctors, best doctors in Delhi NCR, top pediatricians, surgeons, pulmonologists, critical care specialists, doctors in DElhi"
        />
        <meta name="author" content="Sushila Hospital" />
        <link rel="canonical" href="https://www.sushilahospital.com/team" />
      </Helmet>
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