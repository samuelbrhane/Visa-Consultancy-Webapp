"use client";
import React from "react";
import { MissionVision, CompanyIntro } from ".";

const About = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 mt-6 lg:mt-32 mb-4 md:mb-8 lg:mb-12 xl:mb-16 bg-white opacity-95">
      <CompanyIntro />
      <MissionVision />
    </section>
  );
};

export default About;
