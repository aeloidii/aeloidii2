"use client";

import Link from "next/link";
import Image from "next/image";

import About from "@components/About";

import Projects from "@components/Projects";

import Designs from "@components/Designs";

import Contact from "@components/Contact";

import { motion } from "framer-motion";

const Home = () => {
  const downloadCVEnglish = () => {
    const cvUrl = "/assets/CV_abdessamad_el_oidii.pdf";
    window.open(cvUrl, "_blank");
  };
  const downloadCVFrench = () => {
    const cvUrl = "/assets/CVf_abdessamad_el_oidii.pdf";
    window.open(cvUrl, "_blank");
  };
  const title = "Resume";
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
      <div className="flex flex-col gap-2 text-center mt-5">
        <div>
          <motion.h1
            className="text-red-600 text-lg font-poppins"
            initial={{ y: 20, opacity: 1 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            Resume
          </motion.h1>
        </div>
        <div className="flex flex-row gap-2">
          <button className="outline_btn" onClick={downloadCVEnglish}>
            English
          </button>
          <button className="outline_btn" onClick={downloadCVFrench}>
            French
          </button>
        </div>
      </div>
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
