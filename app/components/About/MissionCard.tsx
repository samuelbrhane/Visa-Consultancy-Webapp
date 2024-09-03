"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type MissionCardProps = {
  title: string;
  description: string;
  icon: IconDefinition;
  bgColor: string;
  iconColor: string;
  textColor: string;
};

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  icon,
  bgColor,
  iconColor,
  textColor,
}) => {
  return (
    <motion.div
      className={`relative ${bgColor}   shadow-sm rounded-lg p-6`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="absolute bottom-0 right-0 w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-white border-b-[30px] border-r-[30px]"></div>
      <FontAwesomeIcon
        icon={icon}
        className={`w-20 h-20 text-left border-b-4 ${iconColor} border-${iconColor} pb-2 mb-4`}
      />
      <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
      <p className={`${textColor} mb-4`}>{description}</p>
    </motion.div>
  );
};

export default MissionCard;
