"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LeftContent: React.FC = () => {
  return (
    <motion.div
      className="w-full md:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className="relative h-full">
        <Image
          src="/contact1.jpg"
          alt="Our Experience"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
          //   objectPosition="center"
          //   className="rounded-lg"
        />
      </div>
    </motion.div>
  );
};

export default LeftContent;
