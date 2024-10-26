"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/mobile-project/6.png",
  "/assets/mobile-project/7.png",
  "/assets/mobile-project/8.png",
  "/assets/mobile-project/9.png",
  "/assets/mobile-project/10.png",
  "/assets/mobile-project/11.png",
];

const JavaDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full flex flex-col items-center text-center">
      <div className="flex flex-col gap-5 mb-8">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          Dashboard
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center transition-opacity duration-500">
        <Image
          src={images[activeIndex]}
          alt={`java image ${activeIndex + 1}`}
          width={4000}
          height={2225}
          className="transition-opacity duration-500"
        />
        <div className="flex gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-950" : "bg-gray-300"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JavaDashboard;
