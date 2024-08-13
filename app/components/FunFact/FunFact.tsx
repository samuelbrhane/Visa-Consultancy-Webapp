"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type FunFactProps = {
  icon: IconDefinition;
  value: number;
  label: string;
};

const FunFact: React.FC<FunFactProps> = ({ icon, value, label }) => {
  return (
    <div className="text-center p-6 bg-white bg-opacity-85 rounded-lg shadow-lg">
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl text-blue-600" />
      </div>
      <div className="text-3xl font-bold">
        {value.toLocaleString()}
        <span className="text-xl">+</span>
      </div>
      <h3 className="text-lg font-semibold mt-2">{label}</h3>
    </div>
  );
};

export default FunFact;
