"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/exclusive/screenshots/login.png",
  "/assets/exclusive/screenshots/home.png",
  "/assets/exclusive/screenshots/home 2.png",
  "/assets/exclusive/screenshots/account.png",
  "/assets/exclusive/screenshots/buyproduct.png",
  "/assets/exclusive/screenshots/cart.png",
  "/assets/exclusive/screenshots/checkout.png",
  "/assets/exclusive/screenshots/consoles.png",
  "/assets/exclusive/screenshots/contact.png",
  "/assets/exclusive/screenshots/about.png",
  "/assets/exclusive/screenshots/myorders.png",
];


const ExclusiveApp = () => {
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
    )
}

export default ExclusiveApp;