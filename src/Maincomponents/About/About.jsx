import React from "react";
import bg from "./../../assets/Hotel9.jpg";
import image from "./../../assets/image.jpg";
import img1 from "./../../assets/img1.jpg";
import review3 from "./../../assets/review3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Card } from "@heroui/react";
import "swiper/css";
import Reviews from "../Reviews/Reviews";
import Facilities from "../Facilities/Facilities";
import Partfromabout from "../PartAbout/PartAbout";
export default function About() {
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
              <h2 className="text-4xl font-bold pb-3">About Us</h2>
              <h6>
                Home <i className="fa-solid fa-right-long"></i> About
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Partfromabout />
      <div
        className="min-h-screen bg-center relative bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-[#10142de3]" />
        <Facilities />
      </div>
      <Reviews />
    </>
  );
}
