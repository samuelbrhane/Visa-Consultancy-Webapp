import React from "react";

const QuickLinks = () => {
  return (
    <div className="flex lg:justify-center">
      <div>
        <h3 className="relative text-2xl font-bold pb-1 inline-block">
          Quick Links
        </h3>
        <div className="h-1 w-12 rounded bg-red-500 mb-4"></div>

        <ul className="space-y-2">
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 hover:text-white">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;
