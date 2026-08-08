import React from "react";
import hotel8 from "./../../assets/hotel8.jpg";
import hotel7 from "./../../assets/hotel7.jpg";
import hotel6 from "./../../assets/hotel6.jpg";
import hotel5 from "./../../assets/hotel5.jpg";
import hotel4 from "./../../assets/hotel4.jpg";
import hotel3 from "./../../assets/hotel3.jpg";
import hotel2 from "./../../assets/hotel2.jpg";
import hotel1 from "./../../assets/hotel1.jpg";
export default function Footer() {
  return (
    <>
      <div className=" bg-[#04091E] p-20">
        <div className="container mx-auto 2xl:w-6xl">
          <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
            <div>
              <h6 className="uppercase text-white pb-5">ABOUT AGENCY</h6>
              <p className="text-[#777777]">
                The world has become so fast paced that people don’t want to
                stand by reading a page of information, they would much rather
                look at a presentation and understand the message. It has come
                to a point
              </p>
            </div>
            <div>
              <h6 className="uppercase text-white pb-5 ">Navigation Links</h6>
              <div className="flex gap-5">
                <div className=" flex flex-col gap-2">
                  <p className="flex gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Home
                  </p>
                  <p className="flex gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Feature
                  </p>
                  <p className="flex gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Services
                  </p>
                  <p className="flex  gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Portfolio
                  </p>
                </div>
                <div className=" flex flex-col gap-2">
                  <p className="flex gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Team
                  </p>
                  <p className="flex gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Pricing
                  </p>
                  <p className="flex gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Blog
                  </p>
                  <p className="flex  gap-2 text-[#777777] hover:text-[#F3C300] cursor-pointer transition-all duration-500">
                    Contact
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h6 className=" uppercase text-white pb-5">Newsletter</h6>
              <p className="text-[#777777] pb-5">
                For business professionals caught between high OEM price and
                mediocre print and graphic output,
              </p>
              <div className="relative">
                <input
                  type="email"
                  className="border  border-[#777777] text-[#777777] px-2 py-1"
                  placeholder="Email Address"
                />
                <div className="absolute top-0  left-40 border border-[#777777] px-2 py-1  ">
                  <i className="fa-solid fa-location-arrow text-[#F3C300]  "></i>
                </div>
              </div>
            </div>
            <div>
              <h6 className="uppercase text-white pb-5">InstaFeed</h6>
              <ul className="grid grid-cols-6 sm:grid-cols-3 lg:grid-cols-4 gap-1">
                <li>
                  <img src={hotel8} alt="hotel8" />
                </li>
                <li>
                  <img src={hotel7} alt="hotel7" />
                </li>
                <li>
                  <img src={hotel6} alt="hotel6" />
                </li>
                <li>
                  <img src={hotel5} alt="hotel5" />
                </li>
                <li>
                  <img src={hotel4} alt="hotel4" />
                </li>
                <li>
                  <img src={hotel3} alt="hotel3" />
                </li>
                <li>
                  <img src={hotel2} alt="hotel2" />
                </li>
                <li>
                  <img src={hotel1} alt="hotel1" />
                </li>
              </ul>
            </div>
          </div>
          <div className=" my-10 border-b border-[#777777] container mx-auto 2xl:w-6xl"></div>
          <div className="lg:flex justify-between items-center">
            <div className="flex items-center  text-[#777777]">
              <p>
                Copyright ©2026 All rights reserved | This template is made with{" "}
                <i className="fa-regular fa-heart"></i>
                by{" "}
                <span className="text-[#F3C300] cursor-pointer">Colorlib</span>
              </p>
            </div>

            <div className="pt-5 lg:pt-0 justify-center flex gap-5 ">
              <a href="#">
                <i className="fa-brands fa-facebook-f text-[#777777]  hover:text-[#F3C300] cursor-pointer transition-all duration-500"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter text-[#777777]  hover:text-[#F3C300] cursor-pointer transition-all duration-500"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-basketball text-[#777777]  hover:text-[#F3C300] cursor-pointer transition-all duration-500"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-behance text-[#777777]  hover:text-[#F3C300] cursor-pointer transition-all duration-500"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
