import React from "react";
import {
  FaBrain,
  FaHeartbeat,
  FaStethoscope,
  FaUserMd,
  FaChild,
  FaXRay,
  FaLungs,
  FaSyringe,
  FaCut,
  FaFlask,
  FaCapsules,
  FaTooth,
  FaWheelchair,
  FaProcedures,
  FaNotesMedical,
  FaHospitalUser,
} from "react-icons/fa";
import Footer from "../Components/Footer";

const departments = [
  {
    title: "Cardiology",
    desc: "Expert care for all heart-related conditions, including ECG, angiography, angioplasty, pacemaker implants, and advanced treatment for heart failure and rhythm disorders.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Obstetrics and Gynecology",
    desc: "Dedicated to women's health — providing complete services for pregnancy, prenatal care, childbirth, infertility treatment, menopause management, and gynecological surgeries.",
    icon: <FaHospitalUser />,
  },
  {
  title: "Neurosurgery",
  desc: "Advanced surgical care for brain and spinal disorders including tumors, trauma, hydrocephalus, aneurysms, and minimally invasive spine surgeries by experienced neurosurgeons.",
  icon: <FaBrain />,
},

  {
    title: "Pediatrics",
    desc: "Comprehensive healthcare for newborns, children, and teenagers, including vaccinations, growth tracking, nutrition, infections, and childhood illness management by pediatric experts.",
    icon: <FaChild />,
  },
  {
    title: "Pulmonary & Critical Care",
    desc: "Specialized treatment for lung and chest conditions like asthma, COPD, and pneumonia, along with intensive care support such as mechanical ventilation and 24/7 ICU monitoring.",
    icon: <FaLungs />,
  },
  {
    title: "Orthopedic and Joint Replacement",
    desc: "Advanced care for bone and joint problems, including total knee/hip replacements, fracture management, arthritis treatment, and sports injury rehabilitation.",
    icon: <FaWheelchair />,
  },
  {
    title: "Spine Surgery",
    desc: "Minimally invasive and advanced surgical options for spinal injuries, herniated discs, scoliosis, and degenerative spine diseases handled by experienced spine surgeons.",
    icon: <FaProcedures />,
  },
  {
    title: "Urological Services",
    desc: "Full range of services for kidney stones, prostate enlargement, urinary tract infections, bladder disorders, and male infertility — using latest urological technology.",
    icon: <FaSyringe />,
  },
  {
    title: "ENT",
    desc: "Diagnosis and treatment of ear, nose, and throat issues such as hearing loss, sinusitis, tonsillitis, tinnitus, allergies, and head-neck surgeries with modern tools.",
    icon: <FaStethoscope />,
  },
  {
    title: "Neurology",
    desc: "Care for conditions affecting the brain, spine, and nervous system — including stroke, seizures, multiple sclerosis, migraines, Parkinson’s, and neuro-rehabilitation.",
    icon: <FaBrain />,
  },
  {
    title: "Nephrology",
    desc: "Expert management of kidney disorders including chronic kidney disease (CKD), dialysis services, electrolyte imbalances, and pre/post kidney transplant support.",
    icon: <FaCapsules />,
  },
  {
    title: "Oncology",
    desc: "Personalized cancer treatment plans using chemotherapy, surgery, targeted therapies, and palliative care — covering all types of cancers with a multidisciplinary team.",
    icon: <FaFlask />,
  },
  {
    title: "Plastic Surgery",
    desc: "Cosmetic and reconstructive procedures including scar revision, burn surgery, facial aesthetics, body contouring, and post-trauma or post-cancer reconstruction.",
    icon: <FaCut />,
  },
  {
    title: "Dentistry",
    desc: "Comprehensive dental care including tooth cleaning, fillings, braces, implants, extractions, root canal treatment, smile design, and cosmetic dental solutions.",
    icon: <FaTooth />,
  },
  {
    title: "General, Laparoscopic and Bariatric Surgery",
    desc: "Surgical solutions for hernia, appendix, gallbladder, piles, and obesity using laparoscopic (keyhole) and bariatric (weight-loss) surgery by expert surgeons.",
    icon: <FaCut />,
  },
  {
    title: "Internal Medicine",
    desc: "Diagnosis and long-term management of adult medical conditions such as diabetes, hypertension, thyroid disorders, infections, and lifestyle-related diseases.",
    icon: <FaNotesMedical />,
  },
  {
    title: "Gastroenterology",
    desc: "Advanced care for digestive system issues including liver diseases, acidity, ulcers, IBS, hepatitis, pancreatitis, and endoscopy/colonoscopy procedures.",
    icon: <FaFlask />,
  },
  {
    title: "Dermatology",
    desc: "Skin, hair, and nail care for conditions like acne, rashes, hair fall, pigmentation, eczema, fungal infections, and aesthetic treatments like chemical peels and Botox.",
    icon: <FaUserMd />,
  },
  {
    title: "Anesthesia",
    desc: "Complete anesthesia care for surgeries with expert pre-operative assessment, pain-free operation support, and close monitoring during recovery.",
    icon: <FaSyringe />,
  },
  {
    title: "Physiotherapy",
    desc: "Rehabilitation and therapy for joint pain, post-surgery recovery, sports injuries, paralysis, and mobility improvement using modern physiotherapy techniques.",
    icon: <FaWheelchair />,
  },
  {
    title: "Radiology",
    desc: "Diagnostic imaging services such as X-ray, CT scan, MRI, ultrasound, and Doppler tests for accurate diagnosis and guidance during procedures.",
    icon: <FaXRay />,
  },
];


const Departments = () => {
  return (
    <div>
  <div className="pt-32 px-4 md:px-20 pb-20 bg-[#F9FBFF]">
 
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1E1E] mb-2">
    Treatments & Specialties at Sushila Hospital
  </h2>
  <div className="w-60 h-1 mx-auto bg-[#9D2553] mb-6 rounded-full" />
  <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed text-center mb-12">
    Our hospital provides expert care across a wide range of medical specialties, delivered by experienced professionals using advanced technology.
  </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {departments.map((dept, idx) => (
          <div
            key={idx}
            className="bg-gray-50 border rounded-xl p-6 shadow hover:shadow-lg transition-all"
          >
            <div className="w-14 h-14 flex items-center justify-center text-white text-2xl bg-blue-900 rounded-full mx-auto mb-4">
              {dept.icon}
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
              {dept.title}
            </h3>
            <p className="text-gray-600 text-sm text-center">{dept.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Departments;
