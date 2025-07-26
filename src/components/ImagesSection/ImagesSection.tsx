"use client";

import React, { useState } from "react";
import Image from "next/image";

const ImagesSection = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const images = [
    "/CultureLoopLarge/cultureLoop1.avif",
    "/CultureLoopLarge/cultureLoop2.avif",
    "/CultureLoopLarge/cultureLoop3.avif",
    "/CultureLoopLarge/cultureLoop4.avif",
    "/CultureLoopLarge/cultureLoop5.avif",
    "/CultureLoopLarge/cultureLoop6.avif",
  ];

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Main displayed image */}
      <div className="absolute inset-0 transition-opacity duration-500">
        <Image
          src={images[activeImage]}
          alt={`Gallery image ${activeImage + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hover trigger sections - equal width for 6 sections */}
      <div className="hidden absolute inset-0 md:flex z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className="h-screen w-1/6 transition-colors duration-300"
            onMouseEnter={() => setActiveImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesSection;
