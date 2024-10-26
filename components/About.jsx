import Image from "next/image";

const About = () => {
  return (
    <section className="w-full mt-20 flex sm:flex-row flex-col relative">
      <div className="flex gap-5 flex-center">
        <Image
          src={"/assets/images/me.jpg"}
          alt="my photo"
          width={250}
          height={250}
          className="object-contain border-double border-4 border-gray-500"
        />
      </div>
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-3xl md:mt-3 font-extrabold text-gray-600">
          EL OIDII ABDESSAMAD
        </h1>
        <h3> Graphic Designer - Enginner student </h3>
        <p className="text-sm text-gray-600 sm:text-base max-w-4xl">
          As a creative person, I have a gift for channeling my imagination into
          spiritual designs. I use some of my artistic skills to bring to life
          the mystical and otherwordly concepts that exist within my mind My
          designs are a reflection of my inner world, they are a testament of my
          artistic vision and a source of inspiration for me firstly who
          appreciate the power of imagination. In this website you fill find
          also some of my coding projects based in artistic design as I said. I
          hope u like them, peace.
        </p>
      </div>
    </section>
  );
};

export default About;
