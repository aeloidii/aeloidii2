"use client";

import Image from "next/image";
import { useState } from "react";

const ExclusiveEntrance = () => {
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
          E-commerce Platform Development and CI/CD Pipeline to a local server
          {/* <button
            className="rounded-full border border-black bg-transparent py-1.5 px-5 text-black transition-all hover:bg-blue-950 hover:text-white text-center text-sm font-inter ml-5"
            onClick={openModal}
          >
            Watch Demo
          </button> */}
        </h1>
        <h3>
          {" "}
          Web Application (Spring Boot, Angular, MySQL, Docker, Docker compose){" "}
        </h3>
        <h5 className="text-red-500 font-inter">Programming Languages:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The e-commerce platform is developed using Java Spring for the
          backend, Angular for the frontend, and MySQL as the database. Java
          provides a robust server-side environment, while Angular offers a
          dynamic and responsive user interface.
        </p>
        <h5 className="text-red-500 font-inter">Development Environment:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          Development takes place in Visual Studio Code, which provides
          debugging and code management features. Git and GitHub streamline
          version control, ensuring efficient collaboration and code management.
        </p>
        <h5 className="text-red-500 font-inter">Database:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The platform’s data is stored in a MySQL database, supporting
          essential functions such as data creation, reading, updating, and
          deletion.
        </p>
        <h5 className="text-red-500 font-inter">Additional Features:</h5>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          The platform incorporates secure payment processing with Stripe and
          offers key e-commerce functionalities like product search, filtering,
          and shopping cart management. Additionally, the CI/CD pipeline
          automates build, test, and deployment processes to a local server,
          ensuring consistent code quality and reliable deployments.
        </p>
      </div>
      <div className="flex flex-col gap-5 flex-center sm:mx-0 my-6">
        <Image
          src={"/assets/exclusive/245px-Spring_Framework_Logo_2018.svg.png"}
          alt="java"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/exclusive/angular_wordmark_gradient.png"}
          alt="eclipse"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/exclusive/pngwing.com (2).png"}
          alt="mysql"
          width={200}
          height={200}
          className="object-contain"
        />
        <Image
          src={"/assets/exclusive/pngwing.com.png"}
          alt="mysql"
          width={100}
          height={100}
          className="object-contain"
        />
        <Image
          src={"/assets/exclusive/logo-docker-compose-notext.png"}
          alt="mysql"
          width={100}
          height={100}
          className="object-contain"
        />
        <Image
          src={"/assets/exclusive/stripe.png"}
          alt="mysql"
          width={120}
          height={120}
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

export default ExclusiveEntrance;
