"use client";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type StepCardProps = {
  icon: any;
  title: string;
  description: string;
  delay?: number;
};

const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="flex-shrink-0 p-4 border-4 border-orange-400 rounded w-[60px] h-[60px] flex items-center justify-center">
        <FontAwesomeIcon icon={icon} className="text-4xl" />
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default StepCard;
