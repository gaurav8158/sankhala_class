import React from "react";
import Image from "next/image";
import ktselogo from "../../../Public/KTSE/ktselogos.jpeg";
import nifaalogo from "../../../Public/KTSE/nifalogo.jpeg";
const KtseFooter = () => {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-300 flex justify-center">
      <div className="flex flex-col  md:flex-row  justify-between md:items-center">
        {/* QR Code Section */}
        <div className="flex lg:w-[20%] justify-start ">
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg">
            <Image
              src={nifaalogo}
              alt="nifa logo"
              width={100}
              height={100}
              className="p-2 border-2 border-cyan-700 rounded-2xl"
            />
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-4 rounded-lg">
            <Image
              src={ktselogo}
              alt="ktse logo"
              width={100}
              height={100}
              className="p-2 border-2 border-cyan-700 rounded-2xl"
            />
          </div>
        </div>
        {/* Info Section */}
        <div className="grid lg:w-[80%] md::grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Contact Information */}
          <div className="bg-sky-100 p-4 rounded-md">
            <h3 className="text-[#0068B4] font-bold">Contact No.</h3>
            <a href="tel:+91844017775" className="text-gray-700 block">
              0184-4017775
            </a>
            <a href="tel:+917206427775" className="text-gray-700 block">
              +91 72064-27775
            </a>
          </div>
          {/* Address */}
          <div className="bg-sky-100 p-4 rounded-md">
            <h3 className="text-[#0068B4] font-bold">Address</h3>
            <a
              href="https://maps.app.goo.gl/xTj39N5UBWbEsAfVA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700"
            >
              HO: SCF-25, Main Market, Sector-13, Karnal
            </a>
          </div>
          {/* Website */}
          <div className="bg-sky-100 p-4 rounded-md">
            <h3 className="text-[#0068B4] font-bold">Website</h3>
            <a
              href="https://sankhalaclasses.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700"
            >
              sankhalaclasses.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default KtseFooter;
