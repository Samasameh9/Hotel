import React from "react";
import bg from "../../assets/hotel9.jpg";
export default function Contact() {
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
              <h2 className="text-4xl font-bold pb-3">Contact</h2>
              <h6 >
                Home <i className="fa-solid fa-right-long"></i> Contact Us
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-sm sm:w-full 2xl:w-6xl relative">
        <iframe
          className="w-full my-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.297532246222!2d72.82898107466146!3d18.918220056907895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1bf0d70b7e7%3A0xb9f54d28e77b0f40!2sPalm%20Breeze%20Hotel%20-%20Colaba!5e0!3m2!1sen!2seg!4v1776714444651!5m2!1sen!2seg"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute bg-[#3131318f] inset-0"></div>
      </div>
      <div className="container  w-sm  sm:w-full 2xl:w-6xl mx-auto my-15  md:flex  items-center gap-5 ">
        <div className=" md:w-1/3 flex flex-col items-center justify-center md:block">
          <div className="flex gap-2">
            <i className="fa-regular fa-house text-[#F3C300] mt-2"></i>
            <div>
              <h3 className="ps-1">California, United States</h3>
              <p className="text-[#777777]">Santa monica bullevard</p>
            </div>
          </div>
          <div className="flex gap-2 my-5">
            <i className="fa-solid fa-phone text-[#F3C300] mt-2"></i>
            <div>
              <h3 className="ps-1">00 (440) 9865 562</h3>
              <p className="text-[#777777]">Mon to Fri 9am to 6 pm</p>
            </div>
          </div>
          <div className="flex gap-2">
            <i className="fa-solid fa-envelope text-[#F3C300] mt-2"></i>
            <div>
              <h3 className="ps-2"> support@colorlib.com</h3>
              <p className="text-[#777777]">Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 flex flex-col md:block">
          <input
            type="text"
            name="name"
            className="border border-[#777777] px-4 py-3 mt-5 rounded-2xl w-full"
            placeholder="Enter your name"
          />
          <br />
          <input
            type="email"
            name="email"
            className="border border-[#777777] px-4 py-3 my-4  rounded-2xl w-full"
            placeholder="Enter email address"
          />
          <br />
          <input
            type="text"
            name="subject"
            className="border border-[#777777] px-4 py-3 mb-5 rounded-2xl w-full"
            placeholder="Enter subject"
          />
        </div>
        <div className="md:w-1/3 flex flex-col  relative md:block">
          <textarea
            name="message"
            placeholder="Enter message "
            cols={30}
            rows={7}
            className="border border-[#777777] ps-3 pt-2 rounded-2xl w-full"
          ></textarea>
          <button className="absolute -bottom-13 right-0 border p-3 text-white bg-[#F3C300] hover:bg-[#c09a03] transition-all duration-500 rounded-2xl cursor-pointer">
            Send message
          </button>
        </div>
      </div>
    </>
  );
}
