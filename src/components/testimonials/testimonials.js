import React from "react";
import { personReviews } from "./personData";
import "./testimonials.css";
import { FaQuoteRight } from "react-icons/fa";

import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <section id="testimonials   ">
      <h5 className="text-[#191919] dark:text-[#fff]">Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       
      >
        {personReviews.map((person) => {
          const { id, image, title, quote, name } = person;
          return (
            <SwiperSlide className="testimonials bg-transparent border-[#4dbfff] border-2 dark:border-none dark:bg-[#2c2c6c]" key={id}>
              <div className="client_avatar">
                <img src={image} alt={title} loading='lazy' />
              </div>
              <h5 className="client_review  dark:text-[rgba(255,255,255,0.6)]">{name}</h5>
              <small>{quote}</small>
              <FaQuoteRight className="icon" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
