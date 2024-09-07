"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CompanyCard } from ".";
import {
  faClock,
  faUser,
  faSuitcaseRolling,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { GiDuration } from "react-icons/gi";

const CompanyText = () => {
  // Individual controls for each element
  const controlsHeader = useAnimation();
  const controlsSubheader = useAnimation();
  const controlsParagraph = useAnimation();
  const controlsCards = useAnimation();

  // InView hooks for each element
  const { ref: refHeader, inView: inViewHeader } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refSubheader, inView: inViewSubheader } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refParagraph, inView: inViewParagraph } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refCards, inView: inViewCards } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inViewHeader) controlsHeader.start("visible");
    else controlsHeader.start("hidden");
    if (inViewSubheader) controlsSubheader.start("visible");
    else controlsSubheader.start("hidden");
    if (inViewParagraph) controlsParagraph.start("visible");
    else controlsParagraph.start("hidden");
    if (inViewCards) controlsCards.start("visible");
    else controlsCards.start("hidden");
  }, [
    controlsHeader,
    inViewHeader,
    controlsSubheader,
    inViewSubheader,
    controlsParagraph,
    inViewParagraph,
    controlsCards,
    inViewCards,
  ]);

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const subheaderVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.1 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2 } },
  };

  const cardsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delay: 0.1, duration: 0.5 },
    },
  };

  return (
    <div className="relative">
      <div className="flex flex-col justify-center  w-full">
        <motion.h1
          ref={refHeader}
          initial="hidden"
          animate={controlsHeader}
          variants={headerVariants}
          className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 mt-4 text-[#a132a2] -top-16 lg:absolute"
        >
          ABOUT IGLOBAL VISA CONSULTANCY
        </motion.h1>
        <motion.h2
          ref={refSubheader}
          initial="hidden"
          animate={controlsSubheader}
          variants={subheaderVariants}
          className="text-3xl lg:text-[60px] font-semibold mb-4 lg:mb-8 lg:leading-[55px]"
        >
          We Are a Trusted Visa and Immigration Agent
        </motion.h2>
        <motion.p
          ref={refParagraph}
          initial="hidden"
          animate={controlsParagraph}
          variants={paragraphVariants}
          className="text-lg text-gray-700 mb-6"
        >
          At IGlobal Visa Consultancy, we provide expert visa and immigration
          services with a commitment to personalized care and real-time support.
          Our team of seasoned consultants ensures a seamless process, offering
          customized solutions tailored to your specific needs. With global
          reach and deep expertise, we help you navigate every step of your
          journey, from application to approval.
        </motion.p>
        <motion.div
          ref={refCards}
          initial="hidden"
          animate={controlsCards}
          variants={cardsVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <CompanyCard
            title="Real-Time Tracking"
            subtitle="Monitor your visa application with live updates."
            icon={faClock}
          />
          <CompanyCard
            title="Trusted Experts"
            subtitle="Our experienced consultants guide you at every stage."
            icon={faUser}
          />
          <CompanyCard
            title="Personalized Services"
            subtitle="Tailored visa assistance to meet your unique requirements."
            icon={faSuitcaseRolling}
          />
          <CompanyCard
            title="Worldwide Assistance"
            subtitle="Comprehensive visa services for work, travel, or relocation globally."
            icon={faGlobe}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyText;
