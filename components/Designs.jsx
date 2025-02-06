import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

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

  return (
    <section className="w-full mt-10 flex flex-col items-center overflow-x-hidden">
      <h1 className="text-sm md:mt-3 font-extrabold text-gray-400">
        Portfolio
      </h1>
      <h3 className="mt-2 text-sm font-extrabold text-gray-600 sm:text-xl text-center">
        Check My Wonderful Works
      </h3>

      <div className="w-full mt-5">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={1.5}
          loop
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          className="w-full"
        >
          {imageList.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="rounded-lg shadow-lg object-contain"
                  priority={index === 0}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm md:text-base lg:text-lg font-medium px-2">
                    {image.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        :global(.swiper) {
          padding: 3rem 0;
          width: 80vw !important;
        }

        :global(.swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        :global(.swiper-button-prev),
        :global(.swiper-button-next) {
          color: white;
          background-color: rgba(0, 0, 0, 0.5);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }

        :global(.swiper-button-prev) {
          left: 20px;
        }

        :global(.swiper-button-next) {
          right: 20px;
        }

        :global(.swiper-button-prev:after),
        :global(.swiper-button-next:after) {
          font-size: 24px;
        }

        :global(.swiper-button-disabled) {
          opacity: 0.3 !important;
        }
      `}</style>
    </section>
  );
};

export default Designs;