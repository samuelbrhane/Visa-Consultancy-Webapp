"use client";
import React from "react";
import { StepCard } from ".";
import {
  faFile,
  faCreditCard,
  faFileAlt,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";

const HowWeWork: React.FC = () => {
  return (
    <section className="px-4 md:px-6 lg:px-12 py-8 md:py-12 lg:py-16 opacity-[0.96] bg-white">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">HOW WE WORK</h2>
          <h3 className="text-4xl md:text-[50px] lg:text-[60px] font-semibold mb-4 lg:leading-[60px]">
            Following Steps Apply Online Visa
          </h3>
          <p className="text-gray-700 mb-4">
            Maecenas dictum viverra porta. Praesent auctor risus vel orci
            consectetur facilisis. Aliquam facilisis feugiat massa. Vestibulum
            eu felis in lacus venenatis bibendum. Sed bibendum mauris mauris,
            malesuada viverra mi consequat.
          </p>
          <p className="text-gray-700 mb-8">
            In faucibus velit eget porttitor ornare. Nunc vitae nunc ante. Morbi
            vel risus bibendum tellus sollicitudin bibendum at non arcu. Integer
            augue magna, egestas.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Apply Now
          </a>
        </div>

        <div className="space-y-8">
          <StepCard
            icon={faClipboard}
            title="Fill Out The Form Provided"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            delay={0.1}
          />
          <StepCard
            icon={faFile}
            title="Submit Documents"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            delay={0.2}
          />
          <StepCard
            icon={faCreditCard}
            title="Make a Payment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            delay={0.3}
          />
          <StepCard
            icon={faFileAlt}
            title="Receive a Visa"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
