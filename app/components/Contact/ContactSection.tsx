"use client";

import React from "react";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const ContactSection: React.FC = () => {
  return (
    <section className="relative text-white py-16 px-4 md:px-6 lg:px-12 bg-white opacity-[0.96]">
      <div className="container mx-auto flex flex-col md:flex-row h-full gap-12 ">
        <LeftContent />
        <RightContent />
      </div>
    </section>
  );
};

export default ContactSection;
