"use client";

import Image from "next/image";
import { useState } from "react";

const GrossistelivreurLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center mt-10">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          LOGIN PAGE
          <button
            className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-blue-950 hover:text-white text-center text-sm font-inter ml-5"
            onClick={openModal}
          >
            Watch Demo
          </button>
        </h1>
        <h5 className="text-red-500 font-inter">Authentication Process:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-xl">
          - This screen is clear and minimalist, allowing users to quickly log
          in with just their email and password. The password recovery option is
          also visible, which is convenient.
        </p>
      </div>
      <div className="flex flex-col ml-20 flex-center sm:pl-10 p-10">
        <Image
          src={"/assets/livreurFlutter/livreur.jpg"}
          alt="livreur"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <button
            className="absolute top-0 right-0 m-4 text-red-700 font-poppins font-extrabold hover:text-gray-900"
            onClick={closeModal}
          >
            Close
          </button>
          <video
            src="/assets/livreurFlutter/video_2024-06-03_21-47-23.mp4"
            type="video/mp4"
            className="max-w-56 sm:max-w-60 block"
            controls
          ></video>
        </div>
      )}
    </section>
  );
};

export default GrossistelivreurLogin;
