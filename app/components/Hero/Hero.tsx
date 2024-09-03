"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: false });
  const { ref: h3Ref, inView: h3InView } = useInView({ triggerOnce: false });
  const { ref: h2Ref, inView: h2InView } = useInView({ triggerOnce: false });
  const { ref: pRef, inView: pInView } = useInView({ triggerOnce: false });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full -z-10 h-[calc(100vh-90px)] md:h-[calc(100vh-110px)] lg:h-[calc(100vh-130px)]">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-[5000ms] ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index}`}
            fill
            style={{ objectFit: "cover" }}
            quality={100}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-start text-white p-4">
        <motion.h1
          ref={h1Ref}
          className="text-3xl lg:text-5xl font-bold text-center mt-8 md:mt-20 lg:mt-8 uppercase text-[#c7e736]"
          initial={{ y: -50, opacity: 0 }}
          animate={h1InView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to IGlobal Visa Consultancy 
        </motion.h1>
        <motion.h3
          ref={h3Ref}
          className="border-l-[15px] border-gray-400 text-3xl lg:text-5xl pl-2 my-8"
          initial={{ x: -50, opacity: 0 }}
          animate={h3InView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Immigration & Educational Visa  <br />
          <span className="font-bold">Consultancy Agency Worldwide</span>
        </motion.h3>
        <motion.h2
          ref={h2Ref}
          className="text-2xl lg:text-3xl font-bold text-center mt-4"
          initial={{ y: -50, opacity: 0 }}
          animate={h2InView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          We provide best consultancy services to all types of Visa!
        </motion.h2>

        <motion.p
          ref={pRef}
          className="mt-4 text-center max-w-2xl text-[14px] md:text-lg mb-4 md:mb-8 lg:mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={pInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          The gateway of endless possibilities, where your journey begins with our expertise. 
          We connect your dreams to reality, ensuring your voyage is seamless and immediate. 
        </motion.p>
      <a href="https://iglobalvisa.com/apply" target="_blank" rel="noopener noreferrer"></a>
        <motion.button
          ref={buttonRef}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          initial={{ scale: 0 }}
          animate={buttonInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          APPLY NOW
        </motion.button>
      </a>
      </div>
    </div>
  );
};

export default Hero;
