import ContactFormCard from "@components/ContactFormCard";

const Contact = () => {
  return (
    <section className="w-full mt-20 flex flex-col relative">
      <div className="flex flex-col items-center">
        <h1 className="text-sm md:mt-3 font-extrabold leading-[1.15] text-gray-400">
          Contact
        </h1>
        <h3 className="mt-2 text-sm font-extrabold leading-[1.15] text-gray-600 sm:text-xl">
          SEND A MESSAGE
        </h3>
      </div>
      <div className="w-full mt-5 flex justify-center">
        <ContactFormCard />
      </div>
    </section>
  );
};

export default Contact;
