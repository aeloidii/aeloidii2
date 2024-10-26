import { useState, useEffect } from "react";
import Card from "@components/Card";

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isMediumDevice, setIsMediumDevice] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth >= 640) {
      setIsMediumDevice(true);
    } else {
      setIsMediumDevice(false);
    }
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
      title:
        "The delivery driver's mobile application",
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
        {startIndex > 0 && (
          <button
            className="absolute sm:block hidden left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-950 hover:text-white font-semibold px-2 py-1 rounded-md"
            onClick={handlePrevious}
          >
            Previous
          </button>
        )}
        {isMediumDevice ? (
          <div className="w-full flex sm:flex-row flex-col gap-5 transition-transform duration-500 ease-in-out transform translate-x-[-calc(33.3333%*${startIndex})]">
            {projects
              .slice(startIndex, startIndex + 3)
              .map((project, index) => (
                <Card
                  key={index}
                  image={project.image}
                  title={project.title}
                  desc={project.desc}
                  link={project.link}
                />
              ))}
          </div>
        ) : (
          <div className="w-full flex flex-col gap-5">
            {projects.map((project, index) => (
              <Card
                key={index}
                image={project.image}
                title={project.title}
                desc={project.desc}
                link={project.link}
              />
            ))}
          </div>
        )}
        {startIndex + 3 < projects.length && (
          <button
            className="absolute sm:block hidden right-[-25px] top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-950 hover:text-white font-semibold px-2 py-1 rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
