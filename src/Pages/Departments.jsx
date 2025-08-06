import React from "react";
import { Helmet } from "react-helmet-async";
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
    desc: "Expert heart care at one of the best cardiology centers in Delhi NCR — offering ECG, angiography, angioplasty, pacemaker implants, and treatment for heart failure and arrhythmia.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Obstetrics and Gynecology",
    desc: "Comprehensive women’s health services by top gynecologists in Ghaziabad — including pregnancy care, infertility treatment, menopause support, and gynecological surgeries.",
    icon: <FaHospitalUser />,
  },
  {
    title: "Neurosurgery",
    desc: "Advanced brain and spine surgeries by leading neurosurgeons in Delhi NCR — including trauma, tumors, hydrocephalus, aneurysms, and minimally invasive spine procedures.",
    icon: <FaBrain />,
  },
  {
    title: "Pediatrics",
    desc: "Top pediatric care in Noida and Ghaziabad — for newborns, children, and teens. Includes vaccinations, nutrition, infections, and growth tracking by trusted child specialists.",
    icon: <FaChild />,
  },
  {
    title: "Pulmonary & Critical Care",
    desc: "Best lung and ICU care in Delhi — for asthma, COPD, pneumonia, and respiratory failure, with 24/7 critical care, ventilator support, and specialized pulmonologists.",
    icon: <FaLungs />,
  },
  {
    title: "Orthopedic and Joint Replacement",
    desc: "Trusted orthopedic center in Delhi NCR for knee/hip replacement, sports injuries, fracture management, arthritis treatment, and joint pain rehabilitation.",
    icon: <FaWheelchair />,
  },
  {
    title: "Spine Surgery",
    desc: "Top spine surgery services in Ghaziabad and Noida — including herniated discs, scoliosis, and degenerative spine diseases, using advanced minimally invasive techniques.",
    icon: <FaProcedures />,
  },
  {
    title: "Urological Services",
    desc: "Leading urology care in Delhi for kidney stones, prostate issues, UTIs, bladder disorders, and male infertility — performed with cutting-edge urological technology.",
    icon: <FaSyringe />,
  },
  {
    title: "ENT",
    desc: "Top ENT specialists in Ghaziabad for ear, nose, and throat care — treating sinusitis, hearing loss, tonsillitis, allergies, tinnitus, and head-neck surgeries.",
    icon: <FaStethoscope />,
  },
  {
    title: "Neurology",
    desc: "Best neurology services in Delhi NCR — for stroke, seizures, migraines, Parkinson’s, multiple sclerosis, and comprehensive neuro-rehabilitation programs.",
    icon: <FaBrain />,
  },
  {
    title: "Nephrology",
    desc: "Expert kidney care in Noida and Delhi — including CKD treatment, dialysis, kidney transplant support, and electrolyte management by experienced nephrologists.",
    icon: <FaCapsules />,
  },
  {
    title: "Oncology",
    desc: "Personalized cancer treatment by leading oncologists in Delhi — covering chemotherapy, surgical oncology, radiation therapy, and palliative care across all cancer types.",
    icon: <FaFlask />,
  },
  {
    title: "Plastic Surgery",
    desc: "Top plastic and cosmetic surgery center in Ghaziabad — offering facial aesthetics, scar revision, burn care, body contouring, and reconstructive procedures.",
    icon: <FaCut />,
  },
  {
    title: "Dentistry",
    desc: "Complete dental care by expert dentists in Delhi NCR — including braces, implants, fillings, extractions, smile design, root canal, and cosmetic dentistry.",
    icon: <FaTooth />,
  },
  {
    title: "General, Laparoscopic and Bariatric Surgery",
    desc: "Best laparoscopic and bariatric surgery in Delhi NCR — for hernia, gallbladder, piles, obesity, and appendix removal using safe, minimally invasive techniques.",
    icon: <FaCut />,
  },
  {
    title: "Internal Medicine",
    desc: "Expert general physicians in Ghaziabad and Delhi for diabetes, hypertension, thyroid issues, infections, and chronic condition management with personalized care.",
    icon: <FaNotesMedical />,
  },
  {
    title: "Gastroenterology",
    desc: "Top digestive care in Noida — treating acidity, ulcers, IBS, hepatitis, pancreatitis, and liver diseases with endoscopy, colonoscopy, and lifestyle-based solutions.",
    icon: <FaFlask />,
  },
  {
    title: "Dermatology",
    desc: "Best skin specialists in Delhi NCR for acne, eczema, pigmentation, rashes, fungal infections, hair loss, and cosmetic treatments like Botox and chemical peels.",
    icon: <FaUserMd />,
  },
  {
    title: "Anesthesia",
    desc: "Comprehensive anesthesia services in Delhi — ensuring pain-free surgeries with expert pre-op evaluations, intraoperative monitoring, and post-op recovery support.",
    icon: <FaSyringe />,
  },
  {
    title: "Physiotherapy",
    desc: "Advanced physiotherapy center in Ghaziabad — for post-surgery rehab, joint pain, paralysis, mobility improvement, and sports injury recovery using modern techniques.",
    icon: <FaWheelchair />,
  },
  {
    title: "Radiology",
    desc: "Best radiology services in Noida and Delhi NCR — offering X-ray, ultrasound, CT scan, MRI, and Doppler imaging for accurate diagnosis and guided treatments.",
    icon: <FaXRay />,
  },
];
const Departments = () => {
  return (
    <div>
      <Helmet>
        <title>Departments & Specialties - Sushila Hospital |Best Multi-speciality Services in India </title>
        <meta
          name="description"
          content="Explore all departments at Sushila Hospital including cardiology, neurology, orthopedics, gynecology, pediatrics, oncology, and more. Top medical care in Delhi NCR, Ghaziabad, and Noida."
        />
        <meta
          name="keywords"
          content="Best hospital departments Delhi NCR, Ghaziabad, Noida, cardiology, gynecology, oncology, neurology, pediatrics, surgery, physiotherapy, radiology"
        />
        <link rel="canonical" href="https://yourdomain.com/treatment" />
        <meta property="og:title" content="Specialized Treatments & Departments - Sushila Hospital" />
        <meta
          property="og:description"
          content="Browse our medical specialties — from cardiology to oncology — with expert doctors and cutting-edge facilities across Delhi NCR, Ghaziabad, and Noida."
        />
        <meta property="og:url" content="https://yourdomain.com/treatment" />
        <meta property="og:type" content="website" />
      </Helmet>

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

      <Footer />
    </div>
  );
};

export default Departments;
