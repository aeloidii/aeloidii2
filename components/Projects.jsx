"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "@components/Card";
import { Navigation, EffectCoverflow } from "swiper/modules";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMediumDevice, setIsMediumDevice] = useState(false);

  const checkScreenSize = () => {
    setIsMediumDevice(window.innerWidth >= 640);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleNext = () => {
    if (startIndex + 3 < projects.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const projects = [
    {
      image: "/assets/images/LOGO.png",
      title: "Exclusive : Develop and Deploy Full-Stack E-commerce Application to a local server",
      desc: "Spring Boot, Angular, MySQL, Docker, Docker compose",
      link: "/exclusive",
    },
    {
      image: "/assets/images/header.png",
      title: "RysaSoft : HR management System",
      desc: "Next js, MongoDB",
      link: "/rysaSoft",
    },
    {
      image: "/assets/images/1.png",
      title: "HARK TRANS : Desktop Application",
      desc: "JAVA, MySQL, Java Swing",
      link: "/java-project",
    },
    {
      image: "/assets/images/1.png",
      title: "HARK TRANS : Mobile Application",
      desc: "React Native , NoSql (Firebase)",
      link: "/mobile-project",
    },
    {
      image: "/assets/images/grossiste.png",
      title:
        "Intermediate Application for Wholesale Distributors of Medical Products",
      desc: "Flutter, Dart, Firebase",
      link: "/web-grossiste",
    },
    {
      image: "/assets/images/grossiste.png",
      title: "The delivery driver's mobile application",
      desc: "Flutter, Dart, Firebase",
      link: "/livreur-grossiste",
    },
  ];

  return (
    <section className="w-full mt-20 flex flex-col relative">
      <div className="flex flex-col flex-center">
        <h1 className="text-sm md:mt-3 font-extrabold leading-[1.15] text-gray-400">
          My Blogs
        </h1>
        <h3 className="mt-2 text-sm font-extrabold leading-[1.15] text-gray-600 sm:text-xl">
          My Latest Projects
        </h3>
      </div>

      <div className="w-full mt-5 relative">
        <Swiper
          spaceBetween={2}
          slidesPerView={isMediumDevice ? 3 : 1}
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          navigation
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Card
                image={project.image}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx>{`
        :global(.swiper) {
          padding: 3rem 0;
          width: 60vw !important;
        }

        :global(.swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default Projects;
