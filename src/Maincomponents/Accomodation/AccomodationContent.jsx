import React from 'react'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import room3 from "../../assets/room3.jpg";
import room4 from "../../assets/room4.jpg";
import { useNavigate } from 'react-router-dom';
export default function AccomodationContent() {
let navigate=  useNavigate()
  const handleClick = () => {
    navigate("/");
    window.scrollTo(0, 0); 
  };
  return <>
  
   <div className="w-[85%] mx-auto conatiner py-20">
          <div className="font-sec text-center pb-20">
            <h1 className="text-3xl font-semibold text-gray-900">
              Hotel Accomodation
            </h1>
            <p className="text-sm font-light text-gray-400 py-5">
              We all live in an age that belongs to the young at heart. Life that
              is becoming extremely fast,
            </p>
          </div>
          <div className="md:flex">
            <div className="group w-60 mx-auto pb-20 md:pb-0">
              <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={room1}
                    alt="Event cover"
                    className="w-full group-hover:scale-110 duration-300"
                  />
  
                  <CardFooter className="absolute bottom-0 left-0 right-0 p-0">
                    <Button   onClick={handleClick} className="w-full cursor-pointer border-0 bg-[#F3C300]  rounded-none">
                      BOOK NOW
                    </Button>
                  </CardFooter>
                </div>
              </Card>
  
              <CardHeader className="text-center">
                <CardTitle className="font-semibold text-lg mt-3">
                  Double Deluxe Room
                </CardTitle>
                <CardDescription className="text-2xl font-semibold text-[#52c5fd]">
                  $250 <span className="text-sm font-light">/night</span>
                </CardDescription>
              </CardHeader>
            </div>
            <div className="group w-60 mx-auto pb-20 md:pb-0">
              <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={room2}
                    alt="Event cover"
                    className="w-full group-hover:scale-110 duration-300"
                  />
  
                  <CardFooter className="absolute bottom-0 left-0 right-0 p-0">
                      <Button   onClick={handleClick} className="w-full cursor-pointer border-0 bg-[#F3C300]  rounded-none">
                      BOOK NOW
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            
  
              <CardHeader className="text-center">
                <CardTitle className="font-semibold text-lg mt-3">
                  Single Deluxe Room
                </CardTitle>
                <CardDescription className="text-2xl font-semibold text-[#52c5fd]">
                  $200 <span className="text-sm font-light">/night</span>
                </CardDescription>
              </CardHeader>
            </div>
            <div className="group w-60 mx-auto pb-20 md:pb-0">
              <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={room3}
                    alt="Event cover"
                    className="w-full group-hover:scale-110 duration-300"
                  />
  
                  <CardFooter className="absolute bottom-0 left-0 right-0 p-0">
                      <Button   onClick={handleClick} className="w-full cursor-pointer border-0 bg-[#F3C300]  rounded-none">
                      BOOK NOW
                    </Button>
                  </CardFooter>
                </div>
              </Card>
  
              <CardHeader className="text-center">
                <CardTitle className="font-semibold text-lg mt-3">
                  Honeymoon suit
                </CardTitle>
                <CardDescription className="text-2xl font-semibold text-[#52c5fd]">
                  $750 <span className="text-sm font-light">/night</span>
                </CardDescription>
              </CardHeader>
            </div>
            <div className="group w-60 mx-auto">
              <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={room4}
                    alt="Event cover"
                    className="w-full group-hover:scale-110 duration-300"
                  />
  
                  <CardFooter className="absolute bottom-0 left-0 right-0 p-0">
                      <Button   onClick={handleClick} className="w-full cursor-pointer border-0 bg-[#F3C300]  rounded-none">
                      BOOK NOW
                    </Button>
                  </CardFooter>
                </div>
              </Card>
  
              <CardHeader className="text-center">
                <CardTitle className="font-semibold text-lg mt-3">
                  Economy Double
                </CardTitle>
                <CardDescription className="text-2xl font-semibold text-[#52c5fd]">
                  $150 <span className="text-sm font-light">/night</span>
                </CardDescription>
              </CardHeader>
            </div>
          </div>
        </div>
  </>
}
