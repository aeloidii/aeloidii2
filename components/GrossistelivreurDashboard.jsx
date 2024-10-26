"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/assets/livreurFlutter/1.jpg",
  "/assets/livreurFlutter/2.jpg",
  "/assets/livreurFlutter/3.jpg",
];

const GrossistelivreurDashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full flex sm:flex-row flex-col sm:text-start text-center">
      <div className="flex flex-col gap-5 mb-8">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">
          Dashboard
        </h1>
        <div className="flex flex-col gap-5 mt-8">
          <h5 className="text-red-500 font-inter">Main Delivery Screen:</h5>
          <p className="text-sm text-gray-600 sm:text-base max-w-xl">
            - After login, delivery personnel can view their assigned deliveries
            with essential details such as delivery ID, quantity, total amount,
            and options to view the invoice and delivery note (BL). Buttons to
            mark deliveries as completed or to view location are useful
            additions for real-time navigation.
          </p>
          <h5 className="text-red-500 font-inter">Location Screen:</h5>
          <p className="text-sm text-gray-600 sm:text-base max-w-xl">
            - Integration of the map to visualize the route is excellent for
            helping delivery personnel efficiently locate delivery destinations.
            This demonstrates practical integration of geolocation technology.
          </p>
          <h5 className="text-red-500 font-inter">
            Profile and Logout Screen:
          </h5>
          <p className="text-sm text-gray-600 sm:text-base max-w-xl">
            - Provides essential company information and offers simple options
            to view location on the map or logout. The interface is clean and
            user-friendly.
          </p>
          <h5 className="text-red-500 font-inter">
            Delivered Orders History Screen:
          </h5>
          <p className="text-sm text-gray-600 sm:text-base max-w-xl">
            - Provides information about orders delivered by the delivery
            personnel.
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-20 items-center justify-center transition-opacity duration-500">
        <Image
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          width={300}
          height={350}
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

export default GrossistelivreurDashboard;
