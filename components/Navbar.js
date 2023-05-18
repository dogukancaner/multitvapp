import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/assets/tv.png" width={60} height={20} />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Haber</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Belgesel
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Çizgi Film
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Müzik</li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70 " : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75] sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="/../public/assets/tv.png" width={60} height={20} />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90] py-4">
                Sınırsız Televizyonun Keyfi
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Haber</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Belgesel</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Çizgi Film</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Müzik</li>
              </Link>
            </ul>
          </div>
          <div className="pt-40">
            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn size={25} />
              </div>
              <div className="rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub size={25} />
              </div>
              <div className="rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaInstagram size={25} />
              </div>
              <div className="rounded-full shadow-lg shadow-fray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaTwitter size={25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
