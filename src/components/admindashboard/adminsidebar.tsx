"use client";
import Image from "next/image";
import Link from "next/link";
import mainlogosankhala from "../../../Public/Homepage/mainlogosankhala.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#0068B4] text-white p-4 space-y-6">
      <nav>
        <Link href="/">
          <Image
            width={200}
            height={100}
            src={mainlogosankhala}
            alt="sankhala Logo"
            className="h-[70px] ml-3 w-[74px]"
          />
        </Link>
        <ul className="space-y-2 mt-10">
          <li>
            <Link
              href="/admin/ktse"
              className="flex items-center gap-2 p-3  rounded-3xl hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              <Icon
                icon="healthicons:i-exam-multiple-choice-outline"
                width="28"
              />
              KTSE
            </Link>
          </li>
          <li>
            <Link
              href="/admin/contact"
              className="flex items-center gap-2 p-3  rounded-3xl hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              <Icon icon="mage:contact-book" width="28" />
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/admin/result"
              className="flex items-center gap-2 p-3  rounded-3xl hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              <Icon icon="stash:search-results-light" width="28" />
              Result
            </Link>
          </li>
          <li>
            <Link
              href="/admin/coupon"
              className="flex items-center gap-2 p-3  rounded-3xl hover:bg-gray-100 hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              <Icon icon="lineicons:offer" width="28" />
              Coupon
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
