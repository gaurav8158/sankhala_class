"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import ktselogo from "../../../Public/KTSE/ktselogos.jpeg";
import whyktse from "../../../Public/KTSE/ktseprize.jpeg";
import Image from "next/image";
import Link from "next/link";
import celibration from "../../../Public/Homepage/celibrationbg.png";
import { Icon } from "@iconify/react/dist/iconify.js";
export function AlertDialogDemo() {
  return (
    <AlertDialog defaultOpen>
      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent className="bg-white p-0 ">
        <AlertDialogHeader className="m-0 p-0 ">
          <div className="relative  w-full  mx-auto bg-gradient-to-b from-purple-100 to-white p-6 rounded-lg shadow-lg">
            <div className="absolute inset-0 flex flex-col gap-10 justify-center items-center opacity-50 pointer-events-none">
              {/* First Logo */}
              <Image
                src={celibration}
                alt="NIFAA Logo"
                layout="fixed"
                width={200}
                height={200}
                className="mx-2  w-[400px]"
              />
            </div>
            {/* Close Icon */}
            <AlertDialogCancel className="absolute top-2 p-2 rounded-xl bg-gradient-to-b from-purple-100 to-white right-2 text-gray-400 hover:text-gray-600">
              {" "}
              <Icon icon="charm:cross" width={24} />
            </AlertDialogCancel>

            {/* Logo and Title */}
            <div className="flex  items-center space-x-3">
              <div className="bg-[#0068B4] text-white p-1 rounded">
                <Link href="/">
                  <Image
                    width={200}
                    height={100}
                    src={ktselogo}
                    alt="ktse Logo"
                    className="h-[60px] w-[60px]"
                  />
                </Link>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#0068B4]">KTSE</h1>
                <p className="text-xs text-gray-500">
                  KARNAL TALENT SEARCH EXAMINATION
                </p>
              </div>
            </div>

            {/* Scholarship Info */}
            <div className="mt-4">
              <p className="text-gray-700 text-lg">
                A golden chance to win up to a{" "}
                <strong className="text-black">100% scholarship</strong>
              </p>
            </div>

            {/* Class Range */}

            {/* Graduation Cap Icon */}
            <div className="flex  flex-col lg:flex-row justify-between mt-4">
              <div className="mt-4 bg-[#0068B4] h-12 text-white text-xl max-w-[200px] flex items-center rounded-r-full px-4 ">
                For classes 6-12
              </div>
              <div className="flex justify-end">
                <Image
                  src={whyktse}
                  width="200"
                  height="200"
                  alt="KTSE Illustration"
                  className=" w-50 h-44 "
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-6">
              <Link href="/ktseform">
                <button className="bg-[#0068B4] animate-pulse  text-white text-lg w-full py-3 rounded-full hover:bg-[#217aba] transition">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
