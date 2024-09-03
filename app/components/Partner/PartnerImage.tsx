"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const PartnerImage: React.FC = () => {
  return (
    <div className="bg-blue-800 flex flex-col text-white items-center justify-center text-center">
      <h1 className="text-4xl mb-4">Our Mission</h1>
      <ul className="text-white">
        <li>
          &#x2022; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>
        <li>
          &#x2022; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>
        <li>
          &#x2022; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>
        <li>
          &#x2022; Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </li>
      </ul>
    </div>
  );
};

export default PartnerImage;
