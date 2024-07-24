"use client";
import React from "react";
import { MissionVision, CompanyIntro } from ".";

const About = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 mt-6 lg:mt-32 mb-20">
      <CompanyIntro />
      <MissionVision />
    </section>
  );
};

export default About;
