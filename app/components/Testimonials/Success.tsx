"use client";
import React from "react";
import { motion } from "framer-motion";

const Success: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-40 px-4 md:px-12 lg:px-32"
      style={{ backgroundImage: `url('/visa2.jpg')` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative container mx-auto px-4 gap-8 text-white">
        <div className="lg:w-[60%]">
          {/* Animate the first headline */}
          <motion.h1
            className="uppercase text-3xl mb-4 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Best service!
          </motion.h1>

          {/* Animate the second headline */}
          <motion.h1
            className="text-4xl lg:text-[45px] mb-4 border-l-[10px] border-gray-200 pl-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            We Provide the Best Service {" "}
            <span className="block font-bold py-2">with affordable price!</span>
          </motion.h1>

          {/* Animate the paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            You can make your dream come true with our help. We can apply to Universities across a globe 
            for you, if your goal is to study abroad. We assist you with your immigration issues aswell!
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Success;
