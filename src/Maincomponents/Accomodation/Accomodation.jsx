import React from "react";
import bg from "./../../assets/Hotel9.jpg";
import AccomodationContent from "./AccomodationContent";

export default function Accomodation() {
  return (
    <>
      <div >
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
                <h2 className="text-4xl font-bold pb-3">Accomodation</h2>
                <h6 >
                  Home <i className="fa-solid fa-right-long"></i> Accomodation
                </h6>
              </div>
            </div>
          </div>
        </div>
      <AccomodationContent/>
      </div>
    </>
  );
}