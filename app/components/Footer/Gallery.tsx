import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <h3 className="relative text-2xl font-bold pb-1 inline-block">Gallery</h3>
      <div className="h-1 w-12 rounded bg-red-500 mb-4"></div>

      <div className="grid grid-cols-3 gap-2 h-full">
        <Image
          src="/canada.jpg"
          alt="Gallery Image 1"
          width={300}
          height={300}
          objectFit="cover"
          className="w-full h-full"
        />
        <Image
          src="/china.jpg"
          alt="Gallery Image 2"
          width={100}
          height={100}
          objectFit="cover"
          className="w-full h-full"
        />
        <Image
          src="/italy.jpg"
          alt="Gallery Image 3"
          width={100}
          height={100}
          objectFit="cover"
          className="w-full h-full"
        />
        <Image
          src="/russia.jpg"
          alt="Gallery Image 4"
          width={100}
          height={100}
          objectFit="cover"
          className="w-full h-full"
        />
        <Image
          src="/uk.webp"
          alt="Gallery Image 5"
          width={100}
          height={100}
          objectFit="cover"
          className="w-full h-full"
        />
        <Image
          src="/germany.jpg"
          alt="Gallery Image 6"
          width={100}
          height={100}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Gallery;
