import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="flex lg:justify-center">
      <div>
        <h3 className="relative text-2xl font-bold pb-1 inline-block">
          Contact Info
        </h3>
        <div className="h-1 w-12 rounded bg-red-500 mb-4"></div>

        <p className="mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> Italy: +39 123 456
          7890
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> Germany: +49 123
          456 7890
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faPhone} className="mr-2" /> UK: +44 123 456
          7890
        </p>
        <p className="mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
          info@visaconsultancy.com
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
