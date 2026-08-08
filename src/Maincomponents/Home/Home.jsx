import React, { useState } from "react";
import bg from "./../../assets/bg.jpg";
import Bookroom from "../Booking/Booking";
import Facilities from "../Facilities/Facilities";
import Partfromabout from "../PartAbout/PartAbout";
import Reviews from "../Reviews/Reviews";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Toast } from "@heroui/react";
import AccomodationContent from "../Accomodation/AccomodationContent";
import BlogContent from "../Blog/BlogContent";

export default function Home() {
  const navigate = useNavigate();

  const [check_in, setcheck_in] = useState(null);
  const [check_out, setcheck_out] = useState(null);
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [rooms, setRooms] = useState("");
   const [roomsType, setRoomsType] = useState([]);

  return (
    <div>
      <div
        className="min-h-screen bg-center bg-cover bg-fixed relative flex flex-col"
        style={{ backgroundImage: `url(${bg})` }}
      > <Toaster/>
        <div className="absolute inset-0 bg-[#3131318f]" />

        <div className="relative z-10 flex-1 flex justify-center items-center w-[85%] mx-auto">
          <div className="text-center font-sec text-white py-50 md:py-0">
            <h6 className="mb-5">AWAY FROM MONOTONOUS LIFE</h6>

            <h2 className="font-bold md:text-6xl text-5xl mb-5">
              Relax Your Mind
            </h2>

            <p className="font-light text-sm mb-5">
              If you are looking at blank cassettes on the web, you may be very
              confused at the difference in price.
            </p>

            <button className="text-white bg-[#F3C300] hover:bg-[#c09a03] transition-all duration-500 rounded-md text-sm px-4 py-2.5">
              GET STARTED
            </button>
          </div>
        </div>

        <div className=" bottom-0 left-0 right-0 z-30 md:relative md:bottom-auto md:left-auto md:right-auto">
          <Bookroom
            check_in={check_in}
            setcheck_in={setcheck_in}
            check_out={check_out}
            setcheck_out={setcheck_out}
            adults={adults}
            setAdults={setAdults}
            children={children}
            setChildren={setChildren}
            rooms={rooms}
            setRooms={setRooms}
            roomsType={roomsType}
            setRoomsType={setRoomsType}
            
          />
        </div>
      </div>
     <AccomodationContent/>
      <Facilities />
      <Partfromabout />
      <Reviews />
    <BlogContent/>
    </div>
  );
}
