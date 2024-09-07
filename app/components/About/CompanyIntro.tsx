"use client";
import React from "react";
import { AboutImage, CompanyText } from ".";

const CompanyIntro: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 gap-8 items-start">
      <CompanyText />

      <AboutImage />
    </div>
  );
};

export default CompanyIntro;
