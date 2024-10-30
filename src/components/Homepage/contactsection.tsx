"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { ChangeEvent, FormEvent, useState } from "react";
interface FormData {
  fullName: string;
  class: string;
  school: string;
  contactNumber1: string;
  address: string;
  contactNumber2: string;
  city: string;
  email: string;
}
const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    class: "",
    school: "",
    contactNumber1: "",
    address: "",
    contactNumber2: "",
    city: "",
    email: "",
  });

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/add-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log("Enquiry added:", data);
    } catch (error) {
      console.error("Error adding enquiry:", error);
    }
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      id="homepagecontact"
      className="flex  flex-col lg:flex-row  container mx-auto sm:my-20"
    >
      {/* Left Section - Features */}
      <div className=" lg:w-1/2 p-8 rounded-l-xl bg-gray-100">
        <div className="flex gap-4 items-center mb-8">
          <div className="w-8">
            <Icon icon="carbon:time" width="32" />{" "}
          </div>
          <div>
            <h3 className="font-bold text-lg">Well-Scheduled Classes</h3>
            <p>
              Syllabus is completed well in time without any burden of extra
              classes.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8">
            <Icon icon="arcticons:boost" width="32" />
          </div>

          <div>
            <h3 className="font-bold text-lg">Boost up for student</h3>
            <p>
              Students receive personalized support to boost their confidence
              and academic performance.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-8">
          <div className="w-8">
            <Icon icon="streamline:ai-generate-variation-spark" width="32" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Generator of New Ideas</h3>
            <p>
              Sankhala Class sparks creativity and fosters innovation, igniting a culture
              of fresh ideas for success.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-8">
          <div className="w-8">
            <Icon icon="et:search" width="32" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Errorless Test Series</h3>
            <p>
              Experience flawless preparation with Sankhala Class’s error-free test series,
              ensuring accuracy and confidence.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-8">
          <div className="w-8">
            <Icon icon="carbon:result" width="32" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Outstanding Results</h3>
            <p>
              The excellence of Sankhala Classes is proved every year with high success
              ratios and top ranks.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-8">
          <div className="w-8">
            <Icon icon="solar:hand-stars-linear" className="w-8 h-8 mr-4" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Home-like Atmosphere</h3>
            <p>
              Round-the-clock parental care ensures students remain stress-free
              in a home-like environment.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="lg:w-1/2 p-8 rounded-r-xl bg-gray-100 border">
        <form onSubmit={handleSubmit} className="p-4 max-w-[600px] mx-auto">
          <h2 className="text-center text-[#0068B4] text-xl font-semibold mb-4">
            Talk to our Expert
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 flex hover:shadow-lg justify-center items-center gap-1 w-full max-w-[200px] mx-auto py-2 text-white rounded-2xl mb-2">
            <a
              href="tel:7206427775"
              className="flex animate-pulse items-center gap-1"
            >
              <Icon icon="fluent:call-24-regular" />{" "}
              <span>Call now for free</span>
            </a>
          </div>
          <p className="text-center">or</p>
          <p className="text-center font-semibold mb-4">Request a call back</p>

          <div className="mt-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <select
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a class</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th Medical">11th Medical</option>
              <option value="11th Non medical">11th Non medical</option>
              <option value="12th Medical">12th Medical</option>
              <option value="12th Non medical">12th Non medical</option>
            </select>
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
              placeholder="School"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="contactNumber1"
              value={formData.contactNumber1}
              onChange={handleInputChange}
              placeholder="Contact Number 1"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="contactNumber2"
              value={formData.contactNumber2}
              onChange={handleInputChange}
              placeholder="Contact Number 2"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="City"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="E-Mail"
              className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#0068B4] w-full py-2 text-white rounded-xl mt-4"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
