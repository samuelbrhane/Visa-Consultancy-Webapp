"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Consultation: React.FC = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-6 lg:px-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <div className="absolute z-30 bg-blue-200 opacity-30 inset-0"></div>
        {/* <Image
          src="/consultation.avif"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full h-full"
        /> */}
        {/* Overlay */}
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex justify-center md:mr-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <Image
            src="/consultation.avif"
            alt="Consultation"
            width={800}
            height={534}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>

      <div className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left">
        <motion.h3
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Lorem, ipsum.
        </motion.h3>
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FREE <span className="text-yellow-400">CONSULTATION</span>
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit, curabitur
          dictumst diam cum ligula purus fringilla, pretium felis dapibus proin
          sem scelerisque.
        </motion.p>
        {/* <motion.a
          href="https://demo.wprise.co/VisaVision/apply-now/"
          className="inline-flex items-center justify-center px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          APPLY NOW
          <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
        </motion.a> */}
      </div>
    </section>
  );
};

export default Consultation;
