"use client";
import React from "react";
import mainlogo from "../../../Public/Homepage/mainlogosankhala.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0068B4] text-white py-10">
      {/* Upper Section */}
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-2">
        {/* About SANKHALA */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About SANKHALA</h2>
          <ul>
            <li>SANKHALA History</li>
            <li>System & Administration</li>
            <li>How to Apply</li>
            <li>Brochure</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Courses</h2>
          <ul>
            <li>NEET (UG)</li>
            <li>IIT-JEE</li>
            <li>Pre-Foundation</li>
            <li>Distance Learning Programme</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
          <ul>
            <li>
              <Link href="shippingdelivery">shipping and delivery</Link>
            </li>
            <li>
              <Link href="contactus">Contact Us</Link>
            </li>
            <li>
              <Link href="cancellationrefund">
                Cancellation & Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Websites */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Websites</h2>
          <ul>
            <li>Sankhala Classes</li>
          </ul>
        </div>

        {/* Our Branches */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Branches</h2>
          <ul>
            <li>Karnal</li>
            <li>Delhi</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-8"></div>

      {/* Lower Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 px-2">
        {/* SANKHALA Logo and Address */}
        <div className="flex items-center justify-start w-52 md:w-full">
          <Image
            src={mainlogo}
            alt="SANKHALA Logo"
            width={100}
            height={100}
            className="mx-auto md:mx-0"
          />
        </div>
        {/* Location Section */}
        <div className="flex items-center gap-4 text-left">
          <Icon icon="tdesign:location" width={40} />
          <div>
            VISIT OUR LOCATION
            <br />
            <div>
              <p className="font-semibold">Head Office:</p>
              <a
                href="https://maps.app.goo.gl/xTj39N5UBWbEsAfVA"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCF-27, 2nd & 3rd Floor, Main Market, Sec- 13, Karnal
              </a>
            </div>
            <p className="font-semibold">Branch Office:</p>
            <a
              href="https://maps.app.goo.gl/xTj39N5UBWbEsAfVA"
              target="_blank"
              rel="noopener noreferrer"
            >
              167, Narsi Village, Sec- 32, Karnal
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex items-center gap-4 xl:mx-auto">
          <Icon width={40} icon="fluent:call-32-regular" />
          <div>
            <h3 className="text-lg font-semibold">GIVE US A CALL</h3>
            <p>
              <a href="tel:7206427775" className="hover:underline">
                72064-27775
              </a>
              ,{" "}
              <a href="tel:9416322655" className="hover:underline">
                94163-22655
              </a>
            </p>
            <p>(08:00 AM to 08:00 PM)</p>
          </div>
        </div>

        {/* Email Section */}
        <div className="flex items-center gap-4 text-left xl:text-right">
          <Icon icon="fluent:mail-32-regular" width={40} />
          <div>
            <h3 className="text-lg font-semibold">SEND US A MESSAGE</h3>
            <p>
              <a
                href="mailto:sankhala.classes@gmail.com"
                className="hover:underline"
              >
                sankhala.classes@gmail.com
              </a>
            </p>
            <p>
              <a
                href="mailto:onlinesankhalaclasses@gmail.com"
                className="hover:underline"
              >
                onlinesankhalaclasses@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 my-8"></div>

      {/* Footer Bottom */}
      <div className="container mx-auto flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between sm:items-center px-2">
        <div className="flex flex-col">
          <p>© 2024 SANKHALA Classes. All Rights Reserved.</p>
          <p>
            Crafted by{" "}
            <a href="https://softwaregiant.in" className="font-bold">
              SoftwareGiant
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4">
            <Link href="privacypolicy">Privacy Policy</Link>
            <Link href="termscondition">Terms & Conditions</Link>
          </div>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a
              href="#"
              className="text-white bg-sky-500 rounded-full p-2 hover:bg-sky-600 transition-colors"
            >
              <Icon icon="mage:facebook" />
            </a>

            <a
              href="#"
              className="text-white bg-sky-500 rounded-full p-2 hover:bg-sky-600 transition-colors"
            >
              <Icon icon="prime:twitter" />
            </a>

            <a
              href="#"
              className="text-white bg-sky-500 rounded-full p-2 hover:bg-sky-600 transition-colors"
            >
              <Icon icon="akar-icons:instagram-fill" />
            </a>

            <a
              href="#"
              className="text-white bg-sky-500 rounded-full p-2 hover:bg-sky-600 transition-colors"
            >
              <Icon icon="formkit:youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
