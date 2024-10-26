import Image from "next/image";

const ExclusiveInfo = () => {
  return (
    <section className="w-full flex-center flex-col mt-10 gap-6">
        <h1 className="text-3xl md:mt-3 font-extrabold text-blue-950">Automated build, test, and deployment processes using CI/CD</h1>
        <Image
          src={"/assets/exclusive/screenshots/exclusive-v2.jpg"}
          alt="java"
          width={2000}
          height={800}
          className="object-contain"
        />
    </section>
  );
};

export default ExclusiveInfo;
