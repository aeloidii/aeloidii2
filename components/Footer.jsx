import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mt-5 py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-sm text-gray-600">
        &copy; 2024{" "}
        <a
          href="https://www.linkedin.com/in/abdessamad-el-oidii-95b1ba212/"
          className="text-blue-950 font-extrabold font-inter"
        >
          EL OIDII ABDESSAMAD
        </a>
        . All rights reserved.
      </div>
      <div className="flex space-x-4 mt-4 sm:mt-0">
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
      </div>
    </footer>
  );
};

export default Footer;
