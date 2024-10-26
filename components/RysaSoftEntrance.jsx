"use client";

import Image from "next/image";
import { useState } from "react";

const rysaSoftEntrance = () => {
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
          HR management System
          {/* <button
            className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-blue-950 hover:text-white text-center text-sm font-inter ml-5"
            onClick={openModal}
          >
            Watch Demo
          </button> */}
        </h1>
        <h3> Web Application (Next js, MongoDB) </h3>
        <h5 className="text-red-500 font-inter">Programming Languages:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          Next.js applications are written in JavaScript, but TypeScript is
          commonly used to add static typing for safer, more scalable code.
        </p>
        <h5 className="text-red-500 font-inter">Development Environment:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          Le développement se fait dans VSCode,elle offre des fonctionnalités de
          débogage et de gestion de code. La gestion de versions est facilitée
          par Git et GitHub.
        </p>
        <h5 className="text-red-500 font-inter">Database:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
        The data for the web application is stored in a MongoDB database, providing features such as data creation, reading, updating, and deletion.
        </p>
      </div>
      <div className="flex flex-col gap-0 flex-center sm:mx-0 my-0">
        <Image
          src={"/assets/rysasoft/Nextjs.png"}
          alt="java"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/rysasoft/vs-code.png"}
          alt="eclipse"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/rysasoft/mongoDB.png"}
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

export default rysaSoftEntrance;
