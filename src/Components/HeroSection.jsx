import React, { use } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const slidePromise = fetch("/HeroSlide.json").then((res) => res.json());

const HeroSection = () => {
  const slides = use(slidePromise);

  return (
    <div className="relative w-full bg-linear-to-r from-green-100 via-green-200  to-green-400 flex items-center justify-center overflow-hidden shadow-md pt-30">
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 md:py-20">
              {/* Left Text Content */}
              <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                  <span className="block text-gray-800">
                    {slide.title.split(" ")[0]}
                  </span>
                  <span className="block text-green-600">
                    {slide.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
                  {slide.subtitle}
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg transition-all">
                    Get Started
                  </button>
                  <button className="px-6 py-3 border border-green-600 text-green-700 font-semibold rounded-xl hover:bg-green-100 transition-all">
                    How it works?
                  </button>
                </div>
              </div>

              {/* Right Image */}
              <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[420px] lg:w-[950px] drop-shadow-xl hover:scale-105 transition-transform duration-700 rounded-2xl  lg:object-cover"
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
