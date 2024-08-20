// TestimonialCard.tsx

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Testimonial } from "../../../utils/testimonials";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="p-6 z-20 bg-white shadow-lg rounded-lg h-full ">
      <h1 className="text-2xl md:text-4xl mb-[16px] md:mb-8 md:text-[45px] lg:text-[50px] font-bold">
        Testimonial
      </h1>
      <h1 className="text-3xl md:text-4xl border-l-[5px] border-blue-400 pl-2 mb-[16px] md:mb-8 font-semibold ml-2">
        Satisfied Customers
      </h1>
      <div className="flex items-center mb-4">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={100}
          height={100}
          className="rounded-full w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{testimonial.name}</h3>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
      <p className="text-gray-700">{testimonial.comment}</p>
    </div>
  );
};

export default TestimonialCard;
