"use client";
import React, { useState } from "react";
import Link from "next/link";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const navLinks = [
  {
    title: "Resume",
    path: "/resume",
  },
  {
    title: "About",
    path: "/about",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-l1 bg-opacity-90 border-b-4 border-primary">
      <div className="flex items-center justify-around">
        <Image
          className=""
          src="/FlowerLogo3.png"
          alt="FlowerLogo"
          width={75}
          height={75}
        />

        <Link href="/" className="text-dark font-bold ">
          <h3 className="font-bold text-2xl items-center">
            Kristen&apos;s Portfolio
          </h3>
        </Link>
        <div className=" mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2  text-primary"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2  text-primary"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="p-4 justify-between md:p-0 md:flex-row md:space-x-8 mt-0 text-dark">
            <Link
              href={"/resume"}
              className="text-dark font-semibold sm:text-xl md:p-0 hover:text-primary hover:border-b border-primary"
            >
              Resume
            </Link>
            <Link
              href={"/about"}
              className=" text-dark font-semibold sm:text-xl md:p-0 hover:text-primary hover:border-b border-primary"
            >
              About Me
            </Link>
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <ul className="flex flex-col py-4 items-center">
          <li>
            <Link
              href={"/resume"}
              className="block text-dark font-semibold sm:text-xl md:p-0 hover:text-primary hover:border-b border-primary"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="block pt-2 text-dark font-semibold sm:text-xl md:p-0 hover:text-primary hover:border-b border-primary"
            >
              About Me
            </Link>
          </li>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
