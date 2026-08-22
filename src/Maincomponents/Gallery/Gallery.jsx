import React from "react";
import bg from "../../assets/hotel9.jpg";
import img1 from "./.././../assets/img1.jpg";
import img2 from "./.././../assets/img2.jpg";
import img3 from "./.././../assets/img3.jpg";
import img4 from "./.././../assets/img4.jpg";
import img5 from "./.././../assets/img5.jpg";
import img6 from "./.././../assets/img6.jpg";
import img7 from "./.././../assets/img7.jpg";
import img8 from "./.././../assets/img8.jpg";
import img9 from "./.././../assets/img9.jpg";
export default function Gallery() {
  return (
    <>
      <div
        className="h-80 overlay bg-parallax relative bg-cover bg-fixed object-center  translate-y-[--0.0724151px] "
        data-stellar-ratio="0.8"
        data-stellar-vertical-offset="0"
        data-background=""
        style={{
          transform: "translateY(-0.0724151px)",
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="relative inset-0 bg-[#3131318f]">
          <div className="flex justify-center items-center h-80 ">
            <div className="text-center font-sec text-white">
              <h2 className="text-4xl font-bold pb-3">Gallery</h2>
              <h6 >
                Home <i className="fa-solid fa-right-long"></i> Gallery Us
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-sm md:w-full 2xl:w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center my-20">
          <h1 className="text-4xl pb-2 font-bold">Royal Hotel Gallery</h1>
          <p className="text-[#777777]">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="columns-1 md:columns-3 gap-5 mt-10 mb-20 space-y-5">
          <div className="relative group">
            <img src={img1} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img4} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img7} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img2} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
         <div className="relative group">
            <img src={img6} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img8} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img3} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img5} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
           <div className="relative group">
            <img src={img9} className="w-full block" />
            <div className="absolute inset-0 bg-[#3131318f] opacity-0 group-hover:opacity-100 transition-all duration-500 flex justify-center items-center text-white">
              <i className="fa-solid fa-up-right-and-down-left-from-center text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
