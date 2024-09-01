import Image from "next/image";
import React from "react";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center flex-col lg:flex-row px-4 md:px-8 lg:px-24 gap-8 bg-white mt-6">
      <div>
        <h1 className="font-bold text-2xl mb-4 md:text-3xl lg:text-4xl">
          Ready to Make Your Visa?
        </h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit utelit tellus
          <br />
          luctus nec ullamcorper mattis pulvinar dapibus leo luctus nec elit.
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
    </div>
  );
};

export default FooterTop;