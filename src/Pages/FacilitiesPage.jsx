import React from "react";
import { Helmet } from "react-helmet-async";
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
    desc: "Looking for an advanced ICU in Delhi, Ghaziabad, Noida, or Gurgaon? Sushila Hospital’s Intensive Care Unit provides 24x7 critical care with modern life support systems, ensuring top-tier emergency treatment across NCR."
  },
  {
    title: "In-House Radiology Lab",
    img: image2,
    desc: "Get quick access to X-rays, ultrasounds, CT scans, and MRIs at our in-house radiology lab. Serving patients from Delhi, Noida, Ghaziabad, and Gurgaon, our lab enables faster diagnosis without leaving the hospital."
  },
  {
    title: "Deluxe Rooms",
    img: image3,
    desc: "Searching for hospitals with deluxe rooms in Delhi NCR? Sushila Hospital offers luxury recovery rooms in Ghaziabad, Noida, Gurgaon, and Delhi—equipped with electronic beds, hygienic bathrooms, and peaceful privacy."
  },
  {
    title: "60 Beds Hospital",
    img: image4,
    desc: "Sushila Hospital is a 60-bed multispecialty hospital conveniently located to serve Delhi, Ghaziabad, Noida, and Gurgaon. From general wards to deluxe rooms, we offer comfortable and hygienic recovery spaces."
  },
  {
    title: "Nursery (New Born)",
    img: image5,
    desc: "Need neonatal care in Delhi, Ghaziabad, Noida, or Gurgaon? Our hospital nursery is fully equipped for newborns and premature babies, ensuring specialized and monitored care in a warm environment."
  },
  {
    title: "Dialysis",
    img: image6,
    desc: "Sushila Hospital provides safe, reliable dialysis treatment near Delhi, Ghaziabad, Noida, and Gurgaon. With expert nephrologists and state-of-the-art machines, we ensure effective kidney care you can trust."
  }
];

function FacilitiesPage() {
  return (
    <div>
      <Helmet>
        <title>Facilities & Technology | Sushila Hospital - Best Facilities & Technology in Delhi NCR </title>
        <meta
          name="description"
          content="Explore the advanced facilities at Sushila Hospital including ICU, radiology lab, dialysis, deluxe rooms, and neonatal care. Serving Delhi, Noida, Ghaziabad, and Gurgaon."
        />
        <meta
          name="keywords"
          content="hospital facilities in Delhi, ICU in Ghaziabad, dialysis Noida, deluxe rooms hospital, radiology services, neonatal care Delhi NCR"
        />
        <link rel="canonical" href="https://www.sushilahospital.com/facilities" />
      </Helmet>

      <div className="pt-32 px-4 md:px-20 pb-20 bg-[#F9FBFF] min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E1E1E] mb-2">
          Facilities & Technology at Sushila Hospital
        </h2>
        <div className="w-60 h-1 mx-auto bg-[#9D2553] mb-6 rounded-full" />
        <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed text-center mb-12">
          Sushila Hospital offers world-class infrastructure, specialized departments, and round-the-clock support services to ensure comprehensive healthcare for all.
        </p>

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
