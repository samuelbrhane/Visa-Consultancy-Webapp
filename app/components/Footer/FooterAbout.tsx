"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterAbout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex lg:justify-center"
    >
      <div className="">
        <h3 className="relative text-2xl font-bold pb-1 inline-block">
          About Visa Consultancy
        </h3>
        <div className="h-1 w-12 rounded bg-red-500 mb-4"></div>

        <p className="mb-4">
          Visa Consultancy is a global firm that provides expert advice and
          guidance on visa applications and immigration processes. We ensure a
          smooth transition for individuals and businesses looking to expand
          their horizons internationally.
        </p>
        <div className="flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FooterAbout;
