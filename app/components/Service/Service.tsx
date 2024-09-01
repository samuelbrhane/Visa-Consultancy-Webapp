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
          <h2 className="text-3xl font-bold">OUR SERVICES</h2>
          <h3 className="text-2xl font-semibold mt-4">
            Visa Services Offered by iGlobal Visa Consultancy Company
          </h3>
          <p className="text-lg mt-2">
            Here is the list of our services, feel free to choose one!.
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
              title="Work Visa"
              description="For individuals seeking employment abroad, these visas allow you to work and reside in the host country for the duration of your job. This category includes various types of work visas based on the specific job role and country requirements."
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
              title="Study Visa"
              description="If you want to study at educational institution overseas/abroad, a study visa permits you to live and study in the host country throughout your course duration. This visa often includes provisions for part-time work."
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
              title="Business/Tourist Visas"
              description="Business visas are ideal for professionals needing to conduct short-term business activities like meetings, conferences, or negotiations in a foreign country. These visas typically do not permit long-term stays or full-time employment."
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
              title="Family Visa"
              description="These visas are designed for family members of individuals who are legally residing in another country. Family visas often cover spouses, children, and dependent parents, allowing them to live together with their relative abroad."
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
              title="Diplomatic Visa"
              description="Diplomatic visas are issued to government officials and diplomats who are traveling internationally on official government business. They usually come with special privileges and immunities in the host country."
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
              title="Immigration Consultation"
              description="iGlobal Visa offers professional advice and guidance for those looking to immigrate. This service helps you navigate the complex legalities and procedures involved in immigration, ensuring that you meet all requirements and submit the correct documentation."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
