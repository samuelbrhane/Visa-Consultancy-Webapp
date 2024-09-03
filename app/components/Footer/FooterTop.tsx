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
        <motion.button
          ref={buttonRef}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          initial={{ scale: 0 }}
          animate={buttonInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          SUBMIT YOUR REQUEST NOW
        </motion.button>
      </div>
    </div>
  );
};

export default FooterTop;
