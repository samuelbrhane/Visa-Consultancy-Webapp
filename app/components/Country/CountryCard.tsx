"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type CountryCardProps = {
  imageSrc: string;
  countryName: string;
  description: string;
  delay?: number;
};

const CountryCard: React.FC<CountryCardProps> = ({
  imageSrc,
  countryName,
  description,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center gap-4 shadow-md w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={countryName}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="text-left space-y-4 w-full px-4 py-6">
        <h2 className="text-2xl font-bold">{countryName}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </motion.div>
  );
};

export default CountryCard;
