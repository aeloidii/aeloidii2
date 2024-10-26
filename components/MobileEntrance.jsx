"use client";

import Image from "next/image";
import { useState } from "react";

const java = () => {
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
          {/* <button
            className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-blue-950 hover:text-white text-center text-sm font-inter ml-5"
            onClick={openModal}
          >
            Watch Demo
          </button> */}
        </h1>
        <h3> Application Mobile (React Native) </h3>
        <h5 className="text-red-500 font-inter">Programming Languages:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The mobile application was developed using React Native, which
          primarily uses JavaScript and JSX for user interface development.
        </p>
        <h5 className="text-red-500 font-inter">Development Environment:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          Development was carried out in Visual Studio Code (VSCode), a commonly
          used integrated development environment for React Native development.
        </p>
        <h5 className="text-red-500 font-inter">Database:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The mobile application's data is stored in a Firebase Realtime
          Database, a real-time NoSQL database service provided by Firebase.
        </p>
        <h5 className="text-red-500 font-inter">Target Platforms:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The mobile application was developed for both Android and iOS
          platforms, allowing it to reach a wide audience of smartphone users.
        </p>
      </div>
      <div className="flex flex-col gap-5 pl-10 flex-center sm:mx-0 my-4 ">
        <Image
          src={"/assets/mobile-project/React.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src={"/assets/mobile-project/vs-code.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src={"/assets/mobile-project/firebase_logo_icon_168209.png"}
          alt="java"
          width={150}
          height={150}
          className="object-contain"
        />
        <Image
          src={"/assets/mobile-project/android_ios.png"}
          alt="java"
          width={150}
          height={150}
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
            src="/assets/mobile-project/HARK TRANS REACT NATIVE.mp4"
            type="video/mp4"
            className="max-w-56 sm:max-w-60 block"
            controls
          ></video>
        </div>
      )}
    </section>
  );
};

export default java;
