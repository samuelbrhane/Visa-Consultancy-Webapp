import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type ServiceCardProps = {
  icon: IconDefinition;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="text-center p-8 border rounded-lg shadow-lg">
      <div className="mb-4">
        <FontAwesomeIcon icon={icon} className="text-4xl text-blue-500" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="text-blue-500 hover:text-blue-700 transition-colors"
      >
        READ MORE
      </a>
    </div>
  );
};

export default ServiceCard;
