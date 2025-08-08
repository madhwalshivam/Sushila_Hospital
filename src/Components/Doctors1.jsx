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
    name: "Dr. Anupam Singh, MD. Medicine",
    description:
      "A capable and caring chest specialist is essential for maintaining strong respiratory health. Dr. Anupam Kumar Singh, one of the best chest doctors in Delhi NCR, offers expert care at Sushila Hospital, a trusted name in multi-specialty and trauma care. With years of clinical experience and a patient-first approach, Dr. Singh is known for his dedication to treating lung and chest conditions with precision and compassion. From managing chronic respiratory issues to addressing sudden chest illnesses and providing preventive care, Dr. Anupam Kumar Singh is a trusted chest doctor near me for patients seeking quality care in Delhi NCR."
  },
  {
    img: profile2,
    name: "Dr. J. Kumar, MD. Pediatrics",
    description:
      "Dr. J. Kumar is a highly experienced Pediatrician and Neonatologist with over 20 years of overall clinical expertise. He is currently practicing at Sushila Multi-Speciality Hospital and is also associated with several nearby hospitals. After completing his MBBS and MD from reputed universities, Dr. Kumar has dedicated his career to the specialized care of newborns, infants, children, and adolescents, earning a reputation for his excellence in pediatric and neonatal health care."
  },
  {
    img: profile3,
    name: "Dr. Komal Goel, MD. Critical Care",
    description:
      "Few professionals in critical care match the expertise and dedication of Dr. Komal Goel, a highly respected Intensive Care Specialist at Sushila Hospital, Delhi NCR. With over a decade of experience in managing critically ill patients, she is recognized as one of the best critical care doctors in Delhi NCR. Dr. Goel is known for her clinical excellence in handling complex medical emergencies and leading multidisciplinary ICU teams with precision and care."
  },
  {
    img: profile4,
    name: "Dr. Siddharth Anand, MD. Pulmonary Medicine",
    description:
      "Dr. Siddharth Anand is a highly experienced and compassionate pulmonologist at Sushila Hospital, a trusted multi-specialty and trauma care center in Delhi NCR. He is widely recognized for his expertise in diagnosing and treating a wide range of respiratory conditions, including asthma, COPD, lung infections, and other pulmonary diseases."
  },
  {
    img: profile5,
    name: "Dr. Aman Mathur, MD. Medicine",
    description:
      "Dr. Aman Mathur is a highly accomplished and respected Internist currently practicing at Sushila Hospital, one of the most trusted and advanced healthcare institutions in Delhi NCR. With over 15 years of extensive clinical experience, Dr. Mathur has built a reputation as one of the best Internal Medicine specialists in Delhi NCR."
  },
  {
    img: profile6,
    name: "Dr. Neeshu Singh, MD. Medicine",
    description: "Focuses on lifestyle-related diseases and evidence-based internal medicine."
  },
  {
    img: profile6,
    name: "Dr. Shubhra Jaiswal, MD. Obstetrics & Gynecology",
    description: "Dedicated to women's health and autoimmune disease treatment."
  },
  {
    img: profile6,
    name: "Dr. Shweta, DGO. Obstetrics & Gynecology",
    description: "Obstetrician and gynecologist with expertise in prenatal and reproductive care."
  },
  {
    img: profile5,
    name: "Dr. Sandeep, MD. Anesthesiology",
    description: "Expert anesthesiologist with extensive experience in surgical and pain management."
  },
  {
    img: profile5,
    name: "Dr. Milind Gautam, MS. General & Laparoscopic Surgery",
    description: "Surgeon focused on minimally invasive surgical techniques."
  },
  {
    img: profile5,
    name: "Dr. B.K. Jain, MS. Orthopedic Surgery",
    description: "Veteran orthopedic surgeon with decades of experience in operative care."
  },
  {
    img: profile5,
    name: "Dr. Uday Pratap Singh, D. Ortho",
    description: "Specialist in urology and endoscopic surgical procedures."
  },
  {
    img: profile6,
    name: "Dr. Shruti Patel, MS, MCH. Plastic & Cosmetic Surgery",
    description: "Super-specialist in surgical oncology with focus on women’s cancers."
  },
  {
    img: profile5,
    name: "Dr. Ritesh Gupta, MS, MCH. Urology",
    description: "Plastic and reconstructive surgery expert with aesthetic specialization."
  },
  {
    img: profile5,
    name: "Dr. Anshul Garg, MS. ENT",
    description: "ENT surgeon with specialization in hernia, thyroid, and general procedures."
  },
  {
    img: profile5,
    name: "Dr. Rakesh Kumar, MD, DM. Neurology",
    description: "Super-specialist in neurology with extensive research in epilepsy and stroke."
  },
  {
    img: profile5,
    name: "Dr. Dhaval, MS, DNB. Neurosurgery",
    description: "Plastic and maxillofacial surgery expert with cosmetic specialization."
  },
  {
    img: profile5,
    name: "Dr. Hemendra Jha, MS. Ophthalmology",
    description: "Specialist in advanced eye surgeries and treatments."
  },
  {
    img: profile5,
    name: "Dr. Nitin Manglik, MD, DM. Gastroenterology",
    description: "Senior gastroenterologist with expertise in digestive system disorders."
  },
  {
    img: profile5,
    name: "Dr. Sharib, MDS. Prosthodontics",
    description: "Dental surgeon with expertise in prosthodontics and smile design."
  },
  {
    img: profile5,
    name: "Dr. Faizan Khan, BPT, MPT. Physiotherapy",
    description: "Physiotherapist focusing on rehabilitation, ortho, and sports injuries."
  },
  {
    img: profile5,
    name: "Dr. Navneet Dev, MD. Dermatology",
    description: "Dermatologist specializing in skin care, cosmetology, and dermatological treatments."
  },
  {
    img: profile5,
    name: "Dr. Ankul Gupta, MD, DM. Cardiology",
    description: "Cardiologist dedicated to personalized heart care and prevention."
  },
  {
    img: profile5,
    name: "Dr. Adnan Khan, MD. Oncology",
    description: "Oncologist specializing in cancer diagnosis, treatment, and research."
  },
  {
    img: profile5,
    name: "Dr. Kamal Kant, MCH. Nephrology, MD.",
    description: "Specialist in kidney diseases and advanced renal care."
  },
  {
    img: profile5,
    name: "Dr. Saleem Ahmed, MBA. Hospital Management",
    description: "Director of hospital operations with expertise in healthcare administration."
  },
  {
    img: profile5,
    name: "Dr. Chirag Jain, MS, DNB. Oncology Surgery",
    description: "Specialist in complex cancer surgeries with advanced surgical skills."
  },
  {
    img: profile6,
    name: "Dr. Priyanka Singh, MS. ENT",
    description: "Experienced ENT surgeon specializing in ear, nose, and throat care."
  },
  {
    img: profile5,
    name: "Dr. Ashwani Mishra, MBBS, DNB. Pediatric Surgery",
    description: "Pediatric surgeon with expertise in neonatal and child surgical care."
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