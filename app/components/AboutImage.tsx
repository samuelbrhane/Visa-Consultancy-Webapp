"use client";
import React from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GiDuration } from "react-icons/gi";

const AboutImage = () => {
  // Setup animation controls
  const controlsTopRight = useAnimation();
  const controlsBottomLeft = useAnimation();

  // Setup inView hooks
  const { ref: refTopRight, inView: inViewTopRight } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const { ref: refBottomLeft, inView: inViewBottomLeft } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inViewTopRight) {
      controlsTopRight.start("visible");
    } else {
      controlsTopRight.start("hidden");
    }
    if (inViewBottomLeft) {
      controlsBottomLeft.start("visible");
    } else {
      controlsBottomLeft.start("hidden");
    }
  }, [controlsTopRight, inViewTopRight, controlsBottomLeft, inViewBottomLeft]);

  // Variants for the animations
  const topRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const bottomLeftVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, duration: 0.9, delay: 0.5 },
    },
  };

  return (
    <div className="relative h-[400px] lg:h-[550px] w-full flex justify-center mt-20 lg:mt-0">
      <Image
        src="/hero5.jpg"
        alt="Company Intro"
        width={500}
        height={700}
        className="rounded-2xl w-full lg:w-[80%] md:w-[85%] h-full"
      />
      <div className="absolute md:-top-16 md:-right-4 top-0 transform -translate-y-1/2 md:translate-y-0 w-full md:w-auto">
        <p className="shadow-lg flex items-center justify-center text-white text-2xl uppercase border-8 border-[#fff] rounded-2xl bg-[#a132a2] w-[300px] lg:w-[240px] h-[150px] mx-auto lg:mx-0">
          Fast Service
        </p>
      </div>
      <motion.div
        className="hidden md:block absolute -bottom-8 -left-4"
        ref={refBottomLeft}
        initial="hidden"
        animate={controlsBottomLeft}
        variants={bottomLeftVariants}
      >
        <Image
          src="/hero1.jpg"
          alt="Passport"
          width={300}
          height={350}
          className="shadow-lg border-8 border-[#eeabefa0] rounded-tr-2xl rounded-tl-2xl"
        />
      </motion.div>
    </div>
  );
};

export default AboutImage;
