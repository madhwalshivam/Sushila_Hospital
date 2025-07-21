import React from "react";
import image1 from "../Assets/lab.jpg";       
import image2 from "../Assets/lab1.jpg";
import image3 from "../Assets/lab2.jpg";
import image4 from "../Assets/lab3.jpg";
import image5 from "../Assets/lab4.jpg";
import image6 from "../Assets/lab5.jpg";
import Footer from "../Components/Footer";

const facilities = [
  {
  title: "Intensive Care Unit",
  img: image1,
  desc: "Sushila Hospital's Intensive Care Unit (ICU) is equipped with advanced life support systems and 24x7 monitoring to provide critical care to patients with life-threatening conditions."
},
{
  title: "In-House Radiology Lab",
  img: image2,
  desc: "Our in-house radiology lab offers immediate access to diagnostic imaging such as X-rays, ultrasounds, CT scans, and MRIs, enabling quick and accurate diagnosis within the hospital premises."
},
 {
  title: "Deluxe Rooms",
  img: image3,
  desc: "Our Deluxe Rooms offer enhanced comfort with spacious layouts, electronic beds, personal refrigerators, and attached hygienic bathrooms—ensuring a private and peaceful recovery environment."
},
 {
  title: "60 Beds Hospital",
  img: image4,
  desc: "Sushila Hospital has a capacity of 60 beds, including general wards and deluxe rooms. We provide comfortable, hygienic, and well-equipped spaces tailored to meet the needs and budget of every patient."
},
 {
  title: "Nursery (New Born)",
  img: image5,
  desc: "Our specialized newborn nursery is equipped with advanced neonatal care facilities, ensuring a safe, warm, and monitored environment for premature and newborn babies."
},
 {
  title: "Dialysis",
  img: image6,
  desc: "Sushila Hospital offers advanced dialysis care with modern equipment and expert staff, ensuring safe and effective treatment for patients with kidney-related conditions."
}

];

function FacilitiesPage() {
  return (
    <div>
      <div className="pt-32 px-4 md:px-20 pb-20 bg-[#F9FBFF] min-h-screen">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1E1E] mb-2">
          Facilities & Technology at Sushila Hospital
        </h2>
        <div className="w-60 h-1 mx-auto bg-[#9D2553] mb-6 rounded-full" />
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed text-center mb-12">
          Sushila Hospital offers world-class infrastructure, specialized departments, and round-the-clock support services to ensure comprehensive healthcare for all.
        </p>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FacilitiesPage;
