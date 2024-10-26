"use client";

import Link from "next/link";
import Image from "next/image";

import About from "@components/About";

import Projects from "@components/Projects";

import Designs from "@components/Designs";

import Contact from "@components/Contact";

const Home = () => {
  const downloadCV = () => {
    const cvUrl = "/assets/CV.pdf";
    window.open(cvUrl, "_blank");
  };
  return (
    <section className="w-full flex-center flex-col mt-10">
      <h1 className="head_text text-center">
        Hey, I'm
        <br />
        <span className="text-blue-950  text-center"> EL OIDII ABDESSAMAD</span>
      </h1>
      <p className="desc text-center">
        {" "}
        Graphic Designer and An a Network and Telecommunications Engineering
        Student Who Loves to Work and Share Content.
      </p>
      <button className="outline_btn mt-10" onClick={downloadCV}>
        Download CV
      </button>
      <div className="w-full flex-center justify-between mt-4">
        <Link
          href="https://www.behance.net/abdessaeloidi"
          className="flex gap-2 flex-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Image
            src={"/assets/images/behance.png"}
            alt="behance"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://www.instagram.com/aeloidii/"
          className="flex gap-2 flex-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Image
            src={"/assets/images/instagram.png"}
            alt="instagram"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdessamad-el-oidii-95b1ba212/"
          className="flex gap-2 flex-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <Image
            src={"/assets/images/linkdin.png"}
            alt="linkdin"
            width={30}
            height={30}
            className="object-contain"
          />
        </Link>
      </div>
      <div id="about" className="mt-8">
        <About />
      </div>
      <div id="projects" className="mt-8">
        <Projects />
      </div>
      <div id="designs" className="mt-8">
        <Designs />
      </div>
      <div id="contact" className="mt-8">
        <Contact />
      </div>
    </section>
  );
};

export default Home;
