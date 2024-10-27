"use client";

import Image from "next/image";
import { useState } from "react";

const Java = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          HARKTRANS MANAGEMENT SYSTEM
          <button
            className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-blue-950 hover:text-white text-center text-sm font-inter ml-5"
            onClick={openModal}
          >
            Watch Demo
          </button>
        </h1>
        <h3> Application de Bureau (Java Swing) </h3>
        <h5 className="text-red-500 font-inter">Programming Languages:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The desktop application was developed using Java, with a user
          interface created using Java Swing.
        </p>
        <h5 className="text-red-500 font-inter">Development Environment:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The development of the desktop application was carried out in Eclipse,
          a popular Java development environment.
        </p>
        <h5 className="text-red-500 font-inter">Database:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The data for the desktop application is stored in an SQL database,
          with features such as data creation, reading, updating, and deletion.
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-center sm:mx-0 my-4">
        <Image
          src={"/assets/java-project/Java-Logo-500x313.png"}
          alt="java"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/java-project/eclipse_ide_logo.png"}
          alt="eclipse"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/java-project/MySQL-Logo-500x313.png"}
          alt="mysql"
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
            src="/assets/java-project/JAVA APPLICATION.mp4"
            type="video/mp4"
            className="max-w-full sm:max-w-screen-md block"
            controls
          ></video>
        </div>
      )}
    </section>
  );
};

export default Java;
