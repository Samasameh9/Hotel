import React from "react";


import image from "./../../assets/image.jpg";

export default function Partfromabout() {
  return (
    <>
      <div className="container w-sm md:w-[85%] 2xl:w-6xl mx-auto md:flex my-20 gap-5 items-center">
        <div className="md:w-1/2">
          <h2 className="font-bold text-3xl ">
            About Us <br /> Our History <br /> Mission & Vision
          </h2>
          <p className="text-[#777777] my-5">
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That’s why it’s crucial that, as women, our behavior on the job is
            beyond reproach. inappropriate behavior is often laughed.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={image} alt="image" className="w-full" />
        </div>
      </div>
    </>
  );
}