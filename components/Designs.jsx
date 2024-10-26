import Image from "next/image";
import React from "react";

const Designs = () => {
  const imageList = [
    {
      src: "/assets/designs/folio-12.jpg",
      alt: "Design example",
      title:
        "Just me playing music to chill 🎶 To die by ur side is such a heavenly way to die  ❤",
    },
    {
      src: "/assets/designs/folio-2.jpeg",
      alt: "Design example",
      title: "Revenge:ATTACK ON TITAN",
    },
    {
      src: "/assets/designs/folio-3.jpeg",
      alt: "Design example",
      title:
        "BAC first January 2021:To sum up in this year like everyone who's hoping and praying for a better year, better memories, more experiences, I designed this photo to express our suffering that was this year to get that diploma and to conclude this period bravely and motivated to achieve strictly our goals in the future incha Allah.",
    },
    {
      src: "/assets/designs/folio-4.png",
      alt: "Design example",
      title: "IDK",
    },
    {
      src: "/assets/designs/folio-5.jpeg",
      alt: "Design example",
      title: "Memories",
    },
    {
      src: "/assets/designs/folio-9.jpg",
      alt: "Design example",
      title: "Keep falling in love until u're drown",
    },
    {
      src: "/assets/designs/folio-6.jpg",
      alt: "Design example",
      title: "Let's fucking burn it",
    },
    {
      src: "/assets/designs/folio-6-1.png",
      alt: "Design example",
      title: "Let's fucking burn it V2",
    },
    {
      src: "/assets/designs/folio-10.jpg",
      alt: "Design example",
      title: "BULLET .",
    },
    {
      src: "/assets/designs/folio-7.jpg",
      alt: "Design example",
      title: "SIMPLE AND PERFECT GOALS FOR ME",
    },
    {
      src: "/assets/designs/folio-11.png",
      alt: "Design example",
      title: "SAUDADE.",
    },
    {
      src: "/assets/designs/folio-14.jpg",
      alt: "Design example",
      title: "Orphic , irenic , etc. ❤",
    },
    {
      src: "/assets/designs/folio-1.png",
      alt: "Design example",
      title: "Strange felling",
    },
    {
      src: "/assets/designs/folio-13.jpg",
      alt: "Design example",
      title: "Time flies ☄",
    },
    {
      src: "/assets/designs/folio-8.jpg",
      alt: "Design example",
      title: "Pour a cup of my problems out and I smoke a zip of my regrets 💫",
    },
  ];

  const handleMouseEnter = (event, title) => {
    event.target.setAttribute("data-title", title);
  };

  const handleMouseLeave = (event) => {
    event.target.removeAttribute("data-title");
  };

  return (
    <section className="w-full mt-20 flex flex-col relative">
      <div className="flex flex-col items-center">
        <h1 className="text-sm md:mt-3 font-extrabold leading-[1.15] text-gray-400">
          Portfolio
        </h1>
        <h3 className="mt-2 text-sm font-extrabold leading-[1.15] text-gray-600 sm:text-xl">
          Check My Wonderful Works
        </h3>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {imageList.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={200}
              className="object-contain"
              onMouseEnter={(e) => handleMouseEnter(e, image.title)}
              onMouseLeave={handleMouseLeave}
            />
            {image.title.startsWith("BAC") ? (
              <div className="absolute inset-0 flex items-center justify-center text-black text-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-transparent rounded-lg opacity-90"></div>
                <p className="text-lg font-medium font-oswald relative z-10">
                  {image.title}
                </p>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-white text-center rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-medium font-oswald">{image.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
