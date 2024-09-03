"use client";
import React from "react";
import { delay, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ChooseUs: React.FC = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  return (
    <section className="px-4 md:px-6 lg:px-12 opacity-95 pb-12">
      <div className="container mx-auto py-20 shadow-custom px-8 md:px-12 lg:px-20 bg-white -mt-16 z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            className="space-y-6"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <h2 className="text-3xl font-bold">WHY YOU SHOULD CHOOSE US?</h2>
            <h3 className="text-2xl font-semibold">
              Many Benefits
            </h3>
            <p>
              At IGlobal Visa Consultancy, We provide the best service with affordable price price.
              Our price starts from as low as 10,000 ETB for Educational Application and 13,000 ETB 
              for Tourism and Family Visa application.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-600"
                />
                <span>Fast Visa Processing</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-600"
                />
                <span>24 Hours Online Response</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-600"
                />
                <span>Money back Grantee</span>
              </li>
              <li className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="text-blue-600"
                />
                <span>High success rate </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="w-full h-full"
            ref={ref}
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            <Image
              src="/visa.jpg"
              alt="Man with airplane tickets and passport"
              width={1920}
              height={900}
              className="rounded-lg object-cover w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
