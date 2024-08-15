"use client";

import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const RightContent: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center text-black">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact With Us</h2>
        <p className="text-lg">
          Let's Consultation Now. Sed nec sollicitudin dui. Duis metus neque,
          egestas eu tristique quis, bibendum quis dui. Etiam pharetra sodales
          eros et imperdiet.
        </p>
      </motion.div>
      <ContactForm />
    </div>
  );
};

export default RightContent;
