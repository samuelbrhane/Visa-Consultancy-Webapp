"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const PartnerImage: React.FC = () => {
  return (
    <div className="bg-blue-800 flex items-center justify-center">
      <img
        src="https://demo.wprise.co/EntryWay/wp-content/uploads/2024/03/lipsum1.png"
        alt="lipsum1"
        className="w-40 h-40 bg-red-700"
      />

      <img
        src="https://demo.wprise.co/EntryWay/wp-content/uploads/2024/03/lipsum1.png"
        alt="lipsum1"
        className="w-40 h-40 bg-green-700"
      />
    </div>
  );
};

export default PartnerImage;
