import Image from "next/image";
import React from "react";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row px-4 md:px-8 lg:px-24 gap-8 bg-white mt-6">
      <div>
        <h1 className="font-bold text-2xl mb-4 md:text-3xl lg:text-4xl">
          Ready to apply for Visa?
        </h1>
        <p className="text-lg">
          If you are ready to Apply for any type of visa, 
          <br />
          Submit your application requests here.
        </p>
      </div>
      <div>
        <Image
          src="/foot1.png"
          alt="Footer intro"
          width={500}
          height={700}
          className="rounded-2xl w-full h-full"
        />
      </div>
      <li>
            <a href="https://iglobalvisa.com/Apply" className="text-green-400 hover:text-blue">
            SUBMIT YOUR REQUEST NOW
            </a>
          </li>
    </div>
  );
};

export default FooterTop;
