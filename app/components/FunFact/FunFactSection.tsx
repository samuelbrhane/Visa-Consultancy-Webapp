"use client";
import React from "react";
import {
  faUser,
  faGlobe,
  faUsers,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";
import FunFact from "./FunFact";

const FunFactSection: React.FC = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-48"
      style={{ backgroundImage: `url('/visa2.webp')` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>{" "}
      <div className="relative container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FunFact icon={faUser} value={2200} label="Satisfied Clients" />
        <FunFact icon={faGlobe} value={70} label="Countries" />
        <FunFact icon={faUsers} value={750} label="Happy Students" />
        <FunFact icon={faUniversity} value={140} label="Universities" />
      </div>
    </section>
  );
};

export default FunFactSection;
