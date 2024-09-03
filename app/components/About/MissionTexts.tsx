import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";

type CompanyTextsProps = {
  title: string;
  subtitle: string;
};

const MissionTexts: React.FC<CompanyTextsProps> = ({ title, subtitle }) => {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faClock} className={`w-8 h-8`} />
        <h1 className="border-b-2 border-gray-500 border-dashed mb-2 pb-2 font-semibold text-2xl">
          {title}
        </h1>
      </div>

      <h2>{subtitle}</h2>
    </div>
  );
};

export default MissionTexts;
