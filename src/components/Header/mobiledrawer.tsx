"use client";

import * as React from "react";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import Mainlogo from "../../../Public/Homepage/mainlogosankhala.jpg";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import MainButton from "../ui/Mainbutton";
import { Icon } from "@iconify/react/dist/iconify.js";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function MobileDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <div className="lg:hidden mr-4  cursor-pointer">
          <HamburgerMenuIcon
            width="32"
            height="32"
            className="text-background text-black"
          />
        </div>
      </DrawerTrigger>

      <DrawerPortal>
        <DrawerOverlay className="fixed  inset-0  bg-black/40" />

        <DrawerContent className="bg-[#0068B4]  text-white  rounded-none flex flex-col  h-full w-full mt-24  fixed bottom-0 right-0 left-0">
          <div className="flex flex-col h-full">
            <DrawerHeader className="p-4  border-b border-gray-200 relative">
              <DrawerTitle className="text-lg font-semibold ">
                <Link href="/">
                  <Image
                    src={Mainlogo}
                    alt="main_logo"
                    width={68}
                    height={68}
                    priority
                    className="shadow-2xl rounded-2xl bg-white "
                  />
                </Link>
              </DrawerTitle>
              <DrawerDescription className="text-sm text-gray-600">
                {/* This is a description of what the dialog contains. */}
              </DrawerDescription>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="absolute bg-transparent rounded-xl py-7 shadow-lg top-6 right-4"
                >
                  <Cross1Icon className="text-white w-6 h-6" />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="max-w-md mx-auto">
                <ul className="flex flex-col text-2xl font-semibold  text-gray-100 space-y-6">
                  <li className="  hover:text-blue-500 cursor-pointer">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className="text-2xl font-semibold  text-gray-100">
                          SUBJECTS
                        </AccordionTrigger>
                        <AccordionContent className="text-xl flex flex-col gap-2 font-semibold  text-gray-100">
                          <div className="hover:text-white flex cursor-pointer">
                            <span>Physics</span>
                          </div>
                          <div className="hover:text-white flex cursor-pointer">
                            <span>Chemistry</span>
                          </div>
                          <div className="hover:text-white flex cursor-pointer">
                            <span>Mathematics</span>
                          </div>
                          <div className="hover:text-white flex cursor-pointer">
                            <span>Biology</span>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </li>
                  <li className="hover:text-white   flex cursor-pointer">
                    <span className="hover:underline ">
                      LIVE Online Classes{" "}
                    </span>
                    <Icon icon="fluent-emoji:green-circle" width={12} />
                  </li>
                  {/* <li className="hover:text-blue-500 cursor-pointer">
                    Mentored Learning
                  </li>
                  <li className="hover:text-blue-500 cursor-pointer">
                    Recorded Video Courses
                  </li>
                  <li className="hover:text-blue-500 cursor-pointer">
                    Microcourses
                  </li> */}
                </ul>
                <div className=" flex gap-4 mt-6">
                  <MainButton
                    whitebg={true}
                    text="Sign up"
                    // btnicon="gridicons:info-outline"
                    onPage="#"
                  />

                  <MainButton
                    whitebg={true}
                    text="Login"
                    // btnicon="ph:arrow-right-bold"
                    onPage="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
