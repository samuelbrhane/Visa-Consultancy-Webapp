"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { links } from "../../../utils/links";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  });

  return (
    <section className="z-50">
      <header className="flex w-full items-center justify-between bg-[#ffffff] px-[16px] py-[10px] shadow">
        <div>
          <Image
            src="/images.png"
            alt="logo"
            width={100}
            height={100}
            className="w-16 h-[70px] lg:w-24 lg:h-[100px]"
          />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-3xl">
            <FaBars />
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-16">
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="font-bold">{link.name}</p>
            </Link>
          ))}
        </div>
        <div className="hidden lg:block py-2 px-4 text-white">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            SUBMIT REQUEST NOW
          </button>
        </div>
      </header>
      <div
        className={`fixed z-10 top-0 right-0 h-full w-52 flex-col items-center bg-[#08030a] transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl text-white mt-4 mr-4 self-end"
        >
          <FaTimes />
        </button>

        <div className="pt-10">
          {links.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="block py-2 px-4 text-white hover:bg-gray-200">
                {link.name}
              </p>
            </Link>
          ))}
          <div className="block py-2 px-4 text-white hover:bg-gray-200">
          <a href="https://iglobalvisa.com/apply" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              APPLY NOW
            </button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
