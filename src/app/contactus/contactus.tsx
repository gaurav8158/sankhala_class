"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white hover:bg-sky-500 hover:text-white transition-all ease-in-out delay-75 hover:scale-105 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="bg-slate-200 p-3 rounded-full">
                <Icon
                  icon="tdesign:location"
                  width={24}
                  className="text-black"
                />
              </div>
              <h3 className="ml-2 text-xl font-bold">VISIT OUR LOCATION</h3>
            </div>
            <div>
              <div>
                <p className="font-semibold">Head Office:</p>
                <p>SCF-27, 2nd & 3rd Floor, Main Market, Sec- 13, Karnal </p>
              </div>
              <p className="font-semibold">Branch Office:</p>
              <p>167, Narsi Village, Sec- 32, Karnal</p>
            </div>
          </div>

          <div className="bg-white hover:bg-sky-500 hover:text-white transition-all ease-in-out delay-75 hover:scale-105 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="bg-orange-200 p-3 rounded-full">
                <Icon
                  icon="mingcute:phone-call-line"
                  width={24}
                  className="text-black"
                />
              </div>
              <h3 className="ml-2 text-xl font-bold">Phone Number</h3>
            </div>
            <div>
              <p>72064-27775, 94163-22655</p>
              <p>(08:00 AM to 08:00 PM)</p>
            </div>
          </div>

          <div className="bg-white hover:bg-sky-500 hover:text-white transition-all ease-in-out delay-75 hover:scale-105 rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center gap-4 mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Icon icon="formkit:email" width={24} className="text-black" />
              </div>
              <h3 className="ml-2 text-xl font-bold">Email Address</h3>
            </div>

            <div >
              {" "}
              <p>sankhala.classes@gmail.com</p>
              <p>onlinesankhalaclasses@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
