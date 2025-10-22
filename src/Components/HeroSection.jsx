import React, { use } from "react";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

//const categoryPromise = fetch("/categories.json").then((res) => res.json());
// const Categories = () => {
//   const categories = use(categoryPromise)
const slidePromise = fetch("/HeroSlide.json").then((res) => res.json());
const HeroSection = () => {
  const slides = use(slidePromise);
  //   console.log(slides);
  return (
    <div className="pt-20 mb-7">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="max-w-6xl mx-auto rounded-2xl shadow-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white/80 backdrop-blur-md rounded-2xl">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-4">
                  {slide.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">{slide.subtitle}</p>
                <button className="px-6 py-3 bg-linear-to-r from-green-600 to-green-800 text-white rounded-xl hover:opacity-90 transition-all">
                  Explore Plants
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-72 md:w-[380px] drop-shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
