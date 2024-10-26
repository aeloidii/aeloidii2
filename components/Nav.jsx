"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex relative gap-2 flex-center">
        <Image
          src={"/assets/images/icon.png"}
          alt="Promptopia Logo"
          width={90}
          height={90}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/" className="black_btn">
            Home
          </Link>
          <Link href="/#about" className="black_btn">
            About me
          </Link>
          <Link href="/#projects" className="black_btn">
            Projects
          </Link>
          <Link href="/#designs" className="black_btn">
            Design
          </Link>
          <Link href="/#contact" className="black_btn">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src={
              toggleDropdown
                ? "/assets/icons/close.svg"
                : "/assets/icons/menu.svg"
            }
            width={37}
            height={37}
            className="rounded-full cursor-pointer transition duration-500 ease-in-out transform hover:scale-110"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                About me
              </Link>
              <Link
                href="/#projects"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Projects
              </Link>
              <Link
                href="/#designs"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Design
              </Link>
              <Link
                href="/#contact"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
