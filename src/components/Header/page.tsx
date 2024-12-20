"use client";
import React from "react";
import mainlogosankhala from "../../../Public/Homepage/mainlogosankhala.jpg";
import Image from "next/image";
import { MobileDrawer } from "./mobiledrawer";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
const Header: React.FC = () => {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            width={200}
            height={100}
            src={mainlogosankhala}
            alt="sankhala Logo"
            className="h-[70px] w-[74px]"
          />
        </Link>
        <ul className="hidden lg:flex font-semibold items-center text-[#0068B4] space-x-4">
          {/* <li className="relative group  hover:bg-blue-100 py-5 px-3 h-[70px] flex items-center  cursor-pointer ">
            <span className="hover:text-blue-500">Subjects</span>

 
            <ul className="absolute z-50 left-0 mt-52 hidden w-48 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block transition-all duration-300 ease-in-out">
              <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-500 cursor-pointer">
                Physics
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-500 cursor-pointer">
                Chemistry
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-500 cursor-pointer">
                Math
              </li>
              <li className="px-4 py-2 hover:bg-blue-100 hover:text-blue-500 cursor-pointer">
                Biology
              </li>
            </ul>
          </li> */}

          <li className="hover:text-blue-500 hover:bg-blue-100  py-5 px-3  h-[70px] flex items-center  cursor-pointer">
            Courses
          </li>
          <li className="hover:text-blue-500 hover:bg-blue-100  py-5 px-3  h-[70px] flex items-center  cursor-pointer">
            Gallery
          </li>
          <a
            onClick={() => scrollToElement("homepagecontact")}
            className="hover:text-blue-500 hover:bg-blue-100  py-5 px-3  h-[70px] flex items-center  cursor-pointer"
          >
            Contact Us
          </a>
          <li className="hover:text-blue-500 hover:bg-blue-100  py-5 px-3  h-[70px] flex items-center  cursor-pointer">
            Admission
          </li>
        </ul>
      </div>
      <div className="flex space-x-4 items-center">
        <a
          href="/admitcardform"
          className="text-[#0068B4]  hidden sm:flex items-center font-semibold"
        >
          <span>Admit Card</span>
        </a>
        {/* <button className="px-4 py-2 border rounded-3xl text-[#0068B4] border-[#0076BC]">
          Login
        </button>
        <button className="px-4 py-2 bg-[#0068B4] text-white rounded-3xl">
          Sign Up
        </button> */}
        <div className="hidden sm:block ">
          {/* <MainButton
            whitebg={true}
            text="Register/Login"
            // btnicon="gridicons:info-outline"
            onPage="#"
          /> */}

          {/* <MainButton
            text="Login"
            // btnicon="ph:arrow-right-bold"
            onPage="#"
          /> */}
        </div>
      </div>
      <div className="block lg:hidden ">
        <MobileDrawer />
      </div>
    </nav>
  );
};

export default Header;
