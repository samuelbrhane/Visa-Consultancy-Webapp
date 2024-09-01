"use client";
import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import {
  faBriefcase,
  faGraduationCap,
  faUsers,
  faUserFriends,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-12 opacity-[0.96] px-4 md:px-6 lg:px-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">OUR SERVICE</h2>
          <h3 className="text-2xl font-semibold mt-4">
            Choose The Visa You Need Among our services
          </h3>
          <p className="text-lg mt-2">
            Here is the list of our services! feel free to choose one!.
          </p>
        </div>

        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ServiceCard
              icon={faSuitcaseRolling}
              title="Working Visas"
              description="Donec suscipit justo euismod magna efficitur quis."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ServiceCard
              icon={faGraduationCap}
              title="Study Visas"
              description="Donec suscipit justo euismod magna efficitur quis."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ServiceCard
              icon={faBriefcase}
              title="Business Visas"
              description="Donec suscipit justo euismod magna efficitur quis."
            />
          </motion.div>
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ServiceCard
              icon={faUserFriends}
              title="Family Visas"
              description="Donec suscipit justo euismod magna efficitur quis."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ServiceCard
              icon={faUsers}
              title="Diplomatic Visas"
              description="Donec suscipit justo euismod magna efficitur quis."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ServiceCard
              icon={faUsers}
              title="Immigration Consult"
              description="Donec suscipit justo euismod magna efficitur quis."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
