// TestimonialSection.tsx

"use client";

import React, { useState, useEffect } from "react";
import { testimonials } from "../../../utils/testimonials";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 py-16 px-4 md:px-6 lg:px-32 justify-center items-center">
      {/* Left Side - Testimonial Card */}
      <div className="w-full z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="h-[430px] md:h-[400px]"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Side - Large Image */}
      <div className="w-full h-[70vh] lg:h-[90vh] lg:-ml-10 mt-6 lg:mt-0">
        <div className="relative h-full">
          <Image src="/8-8.jpg" alt="Our Experience" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
