import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type CompanyCardProps = {
  title: string;
  subtitle: string;
  icon: IconDefinition;
};

const CompanyCard: React.FC<CompanyCardProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white shadow px-6 py-4 border-l-4 border-[#36b0dcfc] rounded-md flex items-center">
        <FontAwesomeIcon icon={icon} className="w-12 h-12 text-blue-500 mr-4" />
        <div>
          <h1 className="text-xl font-bold mb-1">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
