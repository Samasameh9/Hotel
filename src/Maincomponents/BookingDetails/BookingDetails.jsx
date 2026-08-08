import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { format, isValid } from "date-fns";
import GetBookDetails from "../../Services/GetBookDetails";
import { AuthContext } from "../Context/authcontext";

export default function BookingDetails() {
let {id}= useParams()
 const navigate = useNavigate();
   let { userId } = useContext(AuthContext);
   let [BookUserDetails,setBookUserDetails]=useState({})
 async function GetBooking() {
    const response = await GetBookDetails(userId,id);
    console.log(response);
    if (response?.statusText == "OK") {
      setBookUserDetails(response?.data);
    }
  }
  useEffect(() => {
    if (userId && id) {
      GetBooking();
    }
  }, [userId,id]);
  

  return<> 
     <div className="min-h-screen bg-gray-200 text-white flex justify-center items-center py-20">
      <div className="bg-[#0c1228] p-8 w-[90%] md:w-[500px] border border-gray-600 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-400">
          Booking Confirmed ✅
        </h2>

        <div className="space-y-3 text-gray-300">
          <p>
            <span className="text-gray-400 font-bold">Check in:</span> {BookUserDetails?.check_in}
          

          </p>
          <p>
            <span className="text-gray-400 font-bold">Check out:</span> {BookUserDetails?.check_out}

          </p>

          <p>
            <span className="text-gray-400 font-bold">Adults:</span> {BookUserDetails?.adults}
          </p>

          <p>
            <span className="text-gray-400 font-bold">Children:</span> {BookUserDetails?.children}
          </p>

          <p>
            <span className="text-gray-400 font-bold">Rooms:</span> {BookUserDetails?.rooms?.length}
          </p>
          {BookUserDetails?.rooms?.length>0 ? BookUserDetails?.rooms.map((room,index)=>{return <div key={index} className="flex flex-col gap-3">  <p>
            <span className="text-gray-400 font-bold">Room type {index+1}:</span> {room?.room_type}
          </p> <p>
            <span className="text-gray-400 font-bold">Nights of room {index+1}:</span> {room?.nights}
          </p> <p>
            <span className="text-gray-400 font-bold">Price per night of room {index+1}: </span> ${room?.price_per_night}
          </p></div>}):null}
             <p>
            <span className="text-gray-400 font-bold">Total price: </span >${BookUserDetails?.total_price}
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full bg-[#F3C300] hover:bg-[#c09a03] text-white transition-all duration-500 cursor-pointer py-2 rounded"
        >
          Back to Home
        </button>
      </div>
    </div>
  </>
}