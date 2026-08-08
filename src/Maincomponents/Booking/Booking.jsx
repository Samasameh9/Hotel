import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/authcontext";
import BookApi from "../../Services/BookApi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Bookroom({
  check_in,
  setcheck_in,
  check_out,
  setcheck_out,
  adults,
  setAdults,
  children,
  setChildren,
  rooms,
  setRooms,
  setRoomsType,
  roomsType,
}) {
  let { userId } = useContext(AuthContext);
  
  let navigate = useNavigate();
  const roomMap = {
    single: "single deluxe",
    double: "double deluxe",
    suite: "honeymoon suite",
    economy: "economy double",
  };

  function handleRoomTypeChange(index, value) {
    setRoomsType((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  }

  async function HotelBooking() {
    const payload = {
      user_id: userId,
      check_in: check_in ? format(check_in, "yyyy-MM-dd") : null,
      check_out: check_out ? format(check_out, "yyyy-MM-dd") : null,
      adults: Number(adults),
      children: Number(children),
      rooms: roomsType.filter(Boolean).map((type) => ({
        room_type: roomMap[type],
      })),
    };
    const response = await BookApi(payload);
    console.log(response);
    if (userId == null) {
      toast.error("Error Login first");
    } else if (
      !check_out ||
      !check_in ||
      !children ||
      !adults ||
      !rooms ||
      !roomsType
    ) {
      toast.error("Error All booking details are required");
    } else if (check_out <= check_in) {
      toast.error("Must checkout be greater than checkin");
    } else if (response?.data?.message == "Booking successful") {
      toast.success(response?.data?.message);
      navigate("/checkout");
    } else {
      toast.error("somtheing went wrong");
    }
  }
  return (
    <>
      <Toaster />
      <div className="bg-[#04091E] md:py-10 pb-10 font-sec md:w-[85%] md:mx-auto">
        <div className="w-[85%] mx-auto md:flex md:items-center md:justify-center">
          <h2 className="font-semibold md:me-10 text-2xl pt-10 text-white mb-6">
            BOOK <br /> YOUR ROOM
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full rounded-none border border-gray-500 justify-start text-left font-normal bg-transparent text-gray-400">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {check_in ? format(check_in, "PPP") : "Check-in"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={check_in}
                  onSelect={setcheck_in}
                />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-full rounded-none border border-gray-500 justify-start text-left font-normal bg-transparent text-gray-400">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {check_out ? format(check_out, "PPP") : "Check-out"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={check_out}
                  onSelect={setcheck_out}
                />
              </PopoverContent>
            </Popover>
            <div>
              <Combobox value={adults} onValueChange={setAdults}>
                <ComboboxInput
                  className="w-full rounded-none border border-gray-500 bg-transparent text-white"
                  placeholder="Adults"
                />
                <ComboboxContent className="p-3 text-sm">
                  <ComboboxList>
                    <ComboboxItem value="1">1 Adult</ComboboxItem>
                    <ComboboxItem value="2">2 Adults</ComboboxItem>
                    <ComboboxItem value="3">3 Adults</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>

            <div>
              <Combobox value={rooms} onValueChange={setRooms}>
                <ComboboxInput
                  className="w-full rounded-none border border-gray-500 bg-transparent text-white"
                  placeholder="Rooms"
                />
                <ComboboxContent className="p-3 text-sm">
                  <ComboboxList>
                    <ComboboxItem value="1">1 Room</ComboboxItem>
                    <ComboboxItem value="2">2 Room</ComboboxItem>
                    <ComboboxItem value="3">3 Room</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>
            {Array.from({ length: Number(rooms || 0) }).map((_, index) => (
              <div key={index}>
                <Combobox
                  value={roomsType?.[index] || ""}
                  onValueChange={(value) => handleRoomTypeChange(index, value)}
                >
                  <ComboboxInput
                    className="w-full rounded-none border border-gray-500 bg-transparent text-white"
                    value={
                      {
                        single: "Single Deluxe",
                        double: "Double Deluxe",
                        suite: "Honeymoon Suite",
                        economy: "Economy Double",
                      }[roomsType?.[index]] || ""
                    }
                    placeholder={`Room ${index + 1} type`}
                  />
                  <ComboboxContent className="p-3 text-sm">
                    <ComboboxList>
                      <ComboboxItem value="single">Single Deluxe</ComboboxItem>
                      <ComboboxItem value="double">Double Deluxe</ComboboxItem>
                      <ComboboxItem value="suite">Honeymoon Suite</ComboboxItem>
                      <ComboboxItem value="economy">
                        Economy Double
                      </ComboboxItem>
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
              </div>
            ))}

            <div>
              <Combobox value={children} onValueChange={setChildren}>
                <ComboboxInput
                  className="w-full rounded-none border border-gray-500 bg-transparent text-white"
                  placeholder="Children"
                />
                <ComboboxContent className="p-3 text-sm">
                  <ComboboxList>
                    <ComboboxItem value="0">0 Child</ComboboxItem>
                    <ComboboxItem value="1">1 Child</ComboboxItem>
                    <ComboboxItem value="2">2 Children</ComboboxItem>
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </div>

            <Button
              onClick={HotelBooking}
              className="w-full cursor-pointer rounded-none bg-[#F3C300] hover:bg-[#c09a03] text-white"
            >
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
