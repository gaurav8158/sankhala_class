"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface MainButtonProps {
  text?: string;
  btnicon?: string;
  onPage?: string;
  whitebg?: boolean;
}

const MainButton: React.FC<MainButtonProps> = ({
  text,
  btnicon,
  onPage,
  whitebg,
}) => {
  return (
    <a
      href={onPage ? onPage : "#"}
      className={`relative inline-flex  items-center px-6 lg:px-12 py-2 lg:py-3 overflow-hidden text-xm lg:text-lg font-semibold  rounded-full border-2 group ${
        whitebg
          ? "  border-white text-white bg-[#0068B4] hover:border-[#0068B4]  hover:text-[#0068B4] hover:bg-white "
          : "text-[#0068B4]  border-[#0068B4] hover:text-white  hover:bg-gray-50"
      }  `}
    >
      <span
        className={`absolute left-0 block w-full h-0 transition-all ${
          whitebg ? "bg-white" : "bg-[#0068B4]"
        }  opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease`}
      ></span>
      {btnicon && (
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
          <Icon icon={btnicon} />
        </span>
      )}
      <span className="relative">{text}</span>
    </a>
  );
};

export default MainButton;
