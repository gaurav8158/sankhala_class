"use client"; // Ensure this is at the top

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ktselogo from "../../../Public/KTSE/ktselogos.jpeg";
import nifaalogo from "../../../Public/KTSE/nifalogo.jpeg";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

const ViewAdmitCard: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  // const { searchParams } = new URL(window.location.href);

  // Get the values from the search parameters
  // const fullName = searchParams.get("fullName") || "";
  // const className = searchParams.get("className") || "";
  // const school = searchParams.get("school") || "";
  // const contact = searchParams.get("contact") || "";
  // const address = searchParams.get("address") || "";
  // const city = searchParams.get("city") || "";
  // const email = searchParams.get("email") || "";
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <div>
      <button
        onClick={() => reactToPrintFn()} // Wrap the function call in an anonymous function
        className="mt-4 flex items-center gap-2 rounded-xl bg-blue-500 text-white p-2 shadow-xl hover:bg-blue-600 hover:shadow-2xl mx-4"
      >
        <Icon icon="humbleicons:print" width="24" />
        Click here to print
      </button>

      <div
        ref={contentRef}
        className="relative max-w-5xl font-inter mx-auto border border-gray-300 p-6 bg-white"
      >
        {/* Watermark Images */}
        <div className="absolute inset-0 flex flex-col gap-10 justify-center items-center opacity-10 pointer-events-none">
          {/* First Logo */}
          <Image
            src={nifaalogo}
            alt="NIFAA Logo"
            layout="fixed"
            width={200}
            height={200}
            className="mx-2 mt-32 w-[300px]"
          />
          {/* Second Logo */}
          <Image
            src={ktselogo}
            alt="KTSE Logo"
            layout="fixed"
            width={200}
            height={200}
            className="mx-2 w-[300px]"
          />
        </div>

        {/* Main content on top of the watermark */}
        <div className="relative z-10">
          <header className="text-center bg-blue-100 py-4">
            <div className="flex justify-between">
              <Image src={ktselogo} alt="KTSE Logo" className="mx-auto w-28" />
              <div>
                <h2 className="text-5xl border-b-2 border-blue-500 font-bold  text-blue-500 mt-2">
                  KTSE 2024
                </h2>

                <p className="text-xs font-semibold text-blue-400">
                  (KARNAL TALENT SEARCH EXAMINATION)
                </p>
                <p className="text-xl mt-2 font-semibold text-blue-500">
                  ADMIT CARD
                </p>
              </div>
              <Image src={nifaalogo} alt="KTSE Logo" className="mx-auto w-28" />{" "}
            </div>
          </header>

          {/* Table structure */}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <tbody>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Student's Roll Number
                  </td>
                  <td className="border px-4 py-2">987654321</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Student Name
                  </td>
                  <td className="border px-4 py-2">Atharv</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Fathers's Name
                  </td>
                  <td className="border px-4 py-2">Jitendra Singh</td>
                </tr>

                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Address
                  </td>
                  <td className="border px-4 py-2">
                    New Delhi, delhi District-delhi, State-New Delhi,
                    Pincode-325200
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Stream
                  </td>
                  <td className="border px-4 py-2">Medical</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Currently Studying Class
                  </td>
                  <td className="border px-4 py-2">Studying in Class 12</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Date of Exam
                  </td>
                  <td className="border px-4 py-2">
                    1st December 2024 (Sunday)
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Timing of Exam
                  </td>
                  <td className="border px-4 py-2">Evening Shift *</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Mode of Test
                  </td>
                  <td className="border px-4 py-2">Offline</td>
                </tr>
                <tr className="border-b">
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Exam Center
                  </td>
                  <td className="border px-4 py-2">Dilshad Garden</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-semibold text-gray-700">
                    Exam Location
                  </td>
                  <td className="border px-4 py-2">
                    Dilshad Garden, Dilshad Garden Main GT Road, Opp. Dilshad
                    Garden Metro Station, Dilshad Garden, Delhi
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 border-t border-gray-300 pt-4 space-y-4">
            <p>
              <span className="font-semibold">Invigilator's Signature:</span>{" "}
              <span className="ml-2">
                ....................................................
              </span>
            </p>
            <p>
              <span className="font-semibold">Signature of Student:</span>{" "}
              <span className="ml-2">
                ....................................................
              </span>
            </p>
          </div>

          <footer className="mt-6 text-center text-sm text-gray-500">
            Corporate Office: SCF-25, Main Market, Sector-13, Karnal | CONTACT
            NO.: 0184-4017775, +91 72064-27775
          </footer>

          <section className="mt-6 border-t pt-4 ">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Instructions for the Students
            </h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
              <li>
                *For 1st of December KTSE exam, please coordinate with the
                school exam coordinator for the exact timing.
              </li>
              <li>
                *For 1st of December KTSE exam, the Morning shift will be 10:30
                AM to 11:30 AM, and the Evening shift will be 4:00 PM to 5:00
                PM.
              </li>
              <li>
                Student will not be allowed to appear in the exam without Admit
                Card.
              </li>
              <li>
                Student should report to the Examination Centre before 30
                minutes.
              </li>
              <li>
                Student will not be allowed to sit in the test after 10 minutes
                of scheduled time of test.
              </li>
              {/* <li>
                Student should bring their own Ball Point Pen (Blue/Black).
              </li>
              <li>
                Student will not be allowed to leave the exam hall before
                scheduled time.
              </li> */}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ViewAdmitCard;
