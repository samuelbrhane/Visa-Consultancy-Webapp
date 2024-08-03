"use client";
import React from "react";
import HeroCard from "./HeroCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faGlobe,
  faGraduationCap,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const HeroContent: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, staggerChildren: 0.3 },
    },
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-4 md:-mt-12 px-4 md:px-6 lg:px-12"
      ref={ref}
    >
      {[
        {
          icon: faGlobe,
          title: "Apply Online Visa",
          subtitle: "Complete your visa application online with ease.",
        },
        {
          icon: faGraduationCap,
          title: "Education Permits",
          subtitle: "Get assistance for obtaining education permits abroad.",
        },
        {
          icon: faUserTie,
          title: "Immigration Experts",
          subtitle: "Consult with our experienced immigration experts.",
        },
      ].map((card, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={controls}
          variants={cardVariants}
        >
          <HeroCard
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroContent;
