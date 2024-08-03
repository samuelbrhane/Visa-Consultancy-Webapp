"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MissionTexts, MissionCard } from ".";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const MissionVision: React.FC = () => {
  // Animation controls
  const controlsTitle = useAnimation();
  const controlsSubtitle = useAnimation();
  const controlsParagraph = useAnimation();
  const controlsCards = useAnimation();

  // InView hooks for each element
  const { ref: refTitle, inView: inViewTitle } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refSubtitle, inView: inViewSubtitle } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refParagraph, inView: inViewParagraph } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refCards, inView: inViewCards } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inViewTitle) controlsTitle.start("visible");
    else controlsTitle.start("hidden");
    if (inViewSubtitle) controlsSubtitle.start("visible");
    else controlsSubtitle.start("hidden");
    if (inViewParagraph) controlsParagraph.start("visible");
    else controlsParagraph.start("hidden");
    if (inViewCards) controlsCards.start("visible");
    else controlsCards.start("hidden");
  }, [
    controlsTitle,
    inViewTitle,
    controlsSubtitle,
    inViewSubtitle,
    controlsParagraph,
    inViewParagraph,
    controlsCards,
    inViewCards,
  ]);

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.1 } },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  const cardsVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delay: 0.1, duration: 0.5 },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
      <motion.div
        ref={refCards}
        initial="hidden"
        animate={controlsCards}
        variants={cardsVariants}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <MissionCard
            title="Our Vision"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            icon={faGraduationCap}
            bgColor="bg-[#1C238C]"
            iconColor="text-white"
            textColor="text-white"
          />
          <div>
            <Image
              src="/hero5.jpg"
              alt="Company Intro"
              width={200}
              height={400}
              className="rounded-2xl w-full h-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="order-2 md:order-2">
            <Image
              src="/hero3.jpg"
              alt="Company Intro"
              width={200}
              height={400}
              className="rounded-2xl w-full h-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <MissionCard
              title="Our Mission"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              icon={faGraduationCap}
              bgColor="bg-[#F496F4]"
              iconColor="text-[#152B1E]"
              textColor="text-black"
            />
          </div>
        </div>
      </motion.div>

      <div>
        <motion.h1
          ref={refTitle}
          initial="hidden"
          animate={controlsTitle}
          variants={titleVariants}
          className="text-3xl lg:text-[60px] font-semibold mb-4 lg:mb-8 lg:leading-[58px]"
        >
          Providing Solutions For All Your Visa Needs
        </motion.h1>
        <motion.h2
          ref={refSubtitle}
          initial="hidden"
          animate={controlsSubtitle}
          variants={subtitleVariants}
          className="text-2xl md:text-[30px] font-semibold mb-4"
        >
          Trusted in more than 125+ countries in the world.
        </motion.h2>
        <motion.p
          ref={refParagraph}
          initial="hidden"
          animate={controlsParagraph}
          variants={paragraphVariants}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </motion.p>

        <motion.div
          ref={refCards}
          initial="hidden"
          animate={controlsCards}
          variants={cardsVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        >
          <MissionTexts
            title="Beneficial Strategies"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MissionTexts
            title="Beneficial Strategies"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MissionTexts
            title="Beneficial Strategies"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <MissionTexts
            title="Beneficial Strategies"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MissionVision;
