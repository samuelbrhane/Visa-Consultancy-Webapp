"use client";
import React from "react";
import { motion } from "framer-motion";
import { CountryCard } from ".";

const FavoriteDestinations: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white opacity-90 px-4 md:px-6 lg:px-12">
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-8">
          <h5 className="text-xl font-medium">Favorite Destination</h5>
          <motion.h2
            className="text-3xl font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            For The Immigration{" "}
            <span className="text-blue-500">Choose Your Country</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CountryCard
            imageSrc="/canada1.avif"
            countryName="Canada"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.1}
          />
          <CountryCard
            imageSrc="/australia.webp"
            countryName="Australia"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.2}
          />
          <CountryCard
            imageSrc="/usa.jpg"
            countryName="United States"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.3}
          />
          <CountryCard
            imageSrc="/italy.jpg"
            countryName="Italy"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.4}
          />
          <CountryCard
            imageSrc="/germany.jpg"
            countryName="Germany"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.1}
          />
          <CountryCard
            imageSrc="/uk1.jpg"
            countryName="United Kingdom"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.2}
          />
          <CountryCard
            imageSrc="/china.jpg"
            countryName="China"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.3}
          />
          <CountryCard
            imageSrc="/russia.jpg"
            countryName="Russian Federation"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt."
            delay={0.4}
          />
        </div>

        <div className="text-center mt-8">
          <motion.h2
            className="text-lg font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Would you like to speak with one of our consultants?{" "}
            <span className="text-blue-500">Explore All Countries.</span>
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default FavoriteDestinations;
