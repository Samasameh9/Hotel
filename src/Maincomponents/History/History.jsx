import React, { useContext, useEffect, useState } from "react";
import bg from "./../../assets/Hotel9.jpg";
import { AuthContext } from "../Context/authcontext";
import { Link, useNavigate } from "react-router-dom";
import GetBookingHistory from "../../Services/GetBookingHistory";
import { Button } from "@heroui/react";

export default function History() {
  const { userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  async function GetBooks() {
    const response = await GetBookingHistory(userId);
console.log(response);

    if (response?.statusText === "OK") {
      setBookings(response?.data || []);
    }
  }

  useEffect(() => {
    if (userId) {
      GetBooks();
    }
  }, [userId]);

  return (
    <>
      <div
        className="h-80 relative bg-cover bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-[#3131318f] flex justify-center items-center">
          <h2 className="text-4xl font-bold text-white">History booking</h2>
        </div>
      </div>

      <div className="w-full md:w-[85%] mx-auto py-16 px-4">
        <h2 className="font-bold text-2xl mb-6">Your Booking History</h2>

        {bookings.length > 0 ? (
          bookings.map((book) => (
            <div
              key={book?.booking_id}
              className="bg-white shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center mb-6"
            >
              <div className="w-full md:w-[300px]">
                <img
                  src={bg}
                  alt="room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-3 text-center md:text-left">
                <p className="text-sm text-gray-500">
                  👤 {book?.adults} Adults • {book?.children} Children
                </p>

                <p className="text-sm text-gray-600">
                  📅 {new Date(book?.check_in).toDateString()} <br />
                  📅 {new Date(book?.check_out).toDateString()}
                </p>

                <p className="text-sm text-gray-500">
                  🏨 {book?.rooms[0]?.nights} night(s)
                </p>
              </div>
              <div className="text-center md:text-right space-y-3">
                <h4 className="text-2xl font-bold text-gray-900">
                  ${book?.total_price}
                </h4>
                <Link to={`/bookingdetails/${book?.booking_id}`}>
                  {" "}
                  <Button className="text-white bg-[#F3C300] hover:bg-[#c09a03] transition-all duration-500">
                    Show details
                  </Button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-[#F3C300] text-2xl border-2 p-2 rounded-2xl border-[#F3C300]">
              No booking History
            </h2>
          </div>
        )}
      </div>
    </>
  );
}
