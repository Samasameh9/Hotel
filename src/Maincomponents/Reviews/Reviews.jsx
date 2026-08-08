import React from "react";
import review3 from "./../../assets/review3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Card } from "@heroui/react";
export default function Reviews() {
  return (
    <>
    <div className="bg-[#F9F9FF]">
         <div className="container mx-auto max-w-6xl px-4  py-20 text-center">
        <h2 className="font-bold text-3xl">Testimonial from our Clients</h2>
        <p className="text-[#777777] pt-3 pb-5">
          Who are in extremely love with eco friendly system.
        </p>
        <div className="w-full">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {[1, 2, 3, 4].map((_, index) => (
              <SwiperSlide key={index} className="h-auto">
                <Card className="p-5 border rounded-2xl shadow-lg  text-left h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={review3}
                      alt="review"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <h3 className="font-bold text-lg">Fanny Spencer</h3>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    As conscious traveling Paupers we must always be concerned
                    about our dear Mother Earth. If you think about it, you
                    travel across her face.
                  </p>

                  <div className="text-[#F3C300] text-sm flex gap-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
     
    </>
  );
}