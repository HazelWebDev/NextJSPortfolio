import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border border-top border-primary rounded-lg text-dark mt-12">
      <div className="grid grid-cols-2 sm:justify-items-center px-3 py-3">
        <Image
          className=""
          src="/FlowerLogo3.png"
          alt="FlowerLogo"
          width={75}
          height={75}
        />

        <p className="text-zinc-400 m-3 text-sm">
          Created by Kristen Roggero using Next.JS and TailwindCSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
