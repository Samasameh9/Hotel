import React from "react";
import img1 from "./../../assets/img1.jpg";

export default function Facilities() {
  return (
    <div
      className="min-h-screen bg-center relative bg-cover"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-[#10142de3]" />
      <div className="relative z-10 mx-auto w-[85%] py-10">
        <div className="text-center">
          <h2 className="text-white font-bold text-3xl pt-20 md:mt-10">
            Palm Facilities
          </h2>
          <p className="text-[#777777] py-5">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="text-white border hover:scale-105 transition-all duration-500 px-5 py-10 border-[#777777] bg-transparent rounded-2xl">
            <h3 className="font-bold text-xl">
              <i className="fa-solid fa-utensils text-[#F3C300] pe-8"></i>
              Restaurant
            </h3>
            <p className="text-sm">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          <div className="text-white border hover:scale-105 transition-all duration-500 px-5 py-5 border-[#777777] bg-transparent rounded-2xl">
            <h3 className="font-bold text-xl">
              <i className="fa-solid fa-bicycle text-[#F3C300] pe-8"></i>
              Sports Club
            </h3>
            <p className="text-sm py-2">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          <div className="text-white border hover:scale-105 transition-all duration-500 px-5 py-5 border-[#777777] bg-transparent rounded-2xl">
            <h3 className="font-bold text-xl">
              <i className="fa-solid fa-person-swimming text-[#F3C300] pe-8"></i>
              Swimming Pool
            </h3>
            <p className="text-sm py-2">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          <div className="text-white border hover:scale-105 transition-all duration-500 px-5 py-5 border-[#777777] bg-transparent rounded-2xl">
            <h3 className="font-bold text-xl">
              <i className="fa-solid fa-car text-[#F3C300] pe-8"></i>
              Rent a Car
            </h3>
            <p className="text-sm py-2">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          <div className="text-white border hover:scale-105 transition-all duration-500 px-5 py-5 border-[#777777] bg-transparent rounded-2xl">
            <h3 className="font-bold text-xl">
              <i className="fa-solid fa-baseball text-[#F3C300] pe-8"></i>
              Basketball
            </h3>
            <p className="text-sm py-2">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>

          <div className="text-white border hover:scale-105 transition-all duration-500 px-5 py-5 border-[#777777] bg-transparent rounded-2xl">
            <h3 className="font-bold text-xl">
              <i className="fa-solid fa-mug-saucer text-[#F3C300] pe-8"></i>
              Bar
            </h3>
            <p className="text-sm py-2">
              Usage of the Internet is becoming more common due to rapid
              advancement of technology and power.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
