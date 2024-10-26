"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/webFlutter/1-1.jpg",
  "/assets/webFlutter/2-2.jpg",
  "/assets/webFlutter/3-3.jpg",
  "/assets/webFlutter/4-4.jpg",
  "/assets/webFlutter/5-5.jpg",
  "/assets/webFlutter/6-6.jpg",
  "/assets/webFlutter/7-7.jpg",
  "/assets/webFlutter/8-8.jpg",
  "/assets/webFlutter/9-9.jpg",
  "/assets/webFlutter/10-10.jpg",
  "/assets/webFlutter/12-12.jpg",
  "/assets/webFlutter/13-13.jpg",
  "/assets/webFlutter/14-14.jpg",
];

const GrossisteWebDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
          alt={`Image ${activeIndex + 1}`}
          width={4000}
          height={2225}
          className="transition-opacity duration-500"
        />
        <div className="flex gap-2 mt-4">
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-300 text-blue-950 rounded-lg hover:bg-gray-400 transition-colors"
            aria-label="Previous image"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-300 text-blue-950 rounded-lg hover:bg-gray-400 transition-colors"
            aria-label="Next image"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrossisteWebDashboard;
