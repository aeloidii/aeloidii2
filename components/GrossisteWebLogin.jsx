"use client";

import { useState } from "react";
import Image from "next/image";

const GrossisteWebLogin = () => {
  const images = [
    "/assets/webFlutter/login.jpg",
    "/assets/webFlutter/insc-1.jpg",
    "/assets/webFlutter/insc-2.jpg",
    "/assets/webFlutter/insc-3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full flex flex-col sm:text-start text-center mt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          LOGIN PAGE
        </h1>
        <h5 className="text-red-500 font-inter">Authentication:</h5>
        <p className="text-sm text-gray-600 sm:text-base">
          - The initial page of our application serves as an access portal for
          various users in the pharmaceutical distribution ecosystem.
          Administrators can log in using specific credentials (email and
          password) provided by the developers to manage and supervise the
          system. New users, such as pharmacies and laboratories, have an option
          to sign up via a dedicated button on this page.
        </p>
        <h5 className="text-red-500 font-inter">Registration Process:</h5>
        <p className="text-sm text-gray-600 sm:text-base">
          - <strong>Step 1:</strong> Users enter their order number for
          verification. - <strong>Step 2:</strong> After verification, users
          provide essential information such as the pharmacy’s slogan, address,
          and other specific details. - <strong>Step 3:</strong> Users finalize
          their registration by providing the pharmacy name, email address, and
          password, including an option to upload a logo.
        </p>
        <h5 className="text-red-500 font-inter">Security:</h5>
        <p className="text-sm text-gray-600 sm:text-base">
          - An email verification process is conducted to confirm account
          authenticity. - This secures future access and management within the
          application.
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-center sm:pl-10 p-10">
        <Image
          src={images[currentIndex]}
          alt="interface images"
          width={1250}
          height={850}
          className="object-contain"
        />
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-950" : "bg-gray-300"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrossisteWebLogin;
