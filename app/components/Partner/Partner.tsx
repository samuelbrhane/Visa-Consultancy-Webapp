"use client";
import React, { useRef, useEffect, useState } from "react";
import { PartnerImage, PartnerInfo } from ".";

const Partner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const fadeInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (fadeInRef.current) {
      observer.observe(fadeInRef.current);
    }

    return () => {
      if (fadeInRef.current) {
        observer.unobserve(fadeInRef.current);
      }
    };
  }, []);

  return (
    <section className="flex flex-col-reverse lg:flex-row w-full mb-12 mt-28">
      <div
        ref={fadeInRef}
        className={`w-full lg:w-1/2 -my-10 px-4 md:px-6 lg:px-12 bg-blue-800 flex items-center justify-center rounded-r-xl ${
          isVisible ? "fadeInLeft" : ""
        }`}
      >
        <PartnerImage />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <PartnerInfo />
      </div>
    </section>
  );
};

export default Partner;
