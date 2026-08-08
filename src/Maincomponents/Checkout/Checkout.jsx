import React, { useContext, useEffect, useState } from "react";
import bg from "./../../assets/Hotel9.jpg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authcontext";
import GetBookingHistory from "../../Services/GetBookingHistory";

export default function Checkout() {
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  async function GetBooks() {
    const response = await GetBookingHistory(userId);

    if (response?.statusText === "OK") {
      setBookings(response?.data || []);
    }
  }

  useEffect(() => {
    if (userId) {
      GetBooks();
    }
  }, [userId]);

  const lastBooking =
    bookings.length > 0 ? bookings[bookings.length - 1] : null;

  return (
    <div className="font-sec">
      <div
        className="h-80 relative bg-cover bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#3131318f] flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white">Check out</h2>
        </div>
      </div>
      <div className="w-full md:w-[85%] mx-auto py-16 px-4">
        <h2 className="font-bold text-2xl mb-6">Review your booking</h2>

        {lastBooking ? (
          <div className="bg-white shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-[300px]">
              <img src={bg} alt="room" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 space-y-3 text-center md:text-left">
              <h3 className="text-xl font-semibold">
                {lastBooking?.rooms?.room_type}
              </h3>

              <p className="text-sm text-gray-500">
                👤 {lastBooking?.adults} Adults • {lastBooking?.children}{" "}
                Children
              </p>

              <p className="text-sm text-gray-600">
                📅 {new Date(lastBooking?.check_in).toDateString()} <br />
                📅 {new Date(lastBooking?.check_out).toDateString()}
              </p>

              <p className="text-sm text-gray-500">
                🏨 {lastBooking?.rooms[0]?.nights} night(s)
              </p>
            </div>
            <div className="text-center md:text-right space-y-3">
              <h4 className="text-2xl font-bold text-gray-900">
                ${lastBooking?.total_price}
              </h4>

              <Button
                onClick={() =>
                  navigate(`/BookingDetails/${lastBooking?.booking_id}`)
                }
                className="bg-[#F3C300] hover:bg-[#c09a03] text-white w-full md:w-auto cursor-pointer"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-[#F3C300] text-2xl border-2 p-2 rounded-2xl border-[#F3C300]">
              No booking
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
