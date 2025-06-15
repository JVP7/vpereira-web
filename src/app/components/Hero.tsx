import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center justify-center text-center mb-4">
          <Image
            src="/geoM2.gif"
            alt="profile image"
            width={300}
            height={300}
            className="dark:invert-0 invert mb-4"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-3">
          hi, <span className="text-primary">john</span> here.
        </h1>

        <p className="text-[24px] font-medium text-slate-400 text-center">
          I like the thrill of building.
        </p>
        <p className="text-[18px] text-[#8892B0] mt-1 mb-4 max-w-xl mx-auto">
          I’m passionate about building intelligent, scalable tools that bridge
          data and people. Currently focused on software development and machine
          learning, I’m learning by building, and building with purpose.
        </p>

        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="/"
            className="text 3xl text-grey-600 hover:text-primary 
            dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub className="w-7 h-7" />
          </Link>
          <Link
            href="/"
            className="text 3xl text-grey-600 hover:text-primary 
            dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin className="w-7 h-7" />
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Link
            href="/projects"
            className="bg-primary inline-block w-[220px] text-center text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block w-[220px] text-center px-8 py-3 rounded-lg transition-colors
             bg-black text-white hover:bg-gray-800
             dark:bg-[#CCDCF6] dark:text-black dark:hover:bg-gray-300 dark:hover:text-black"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
