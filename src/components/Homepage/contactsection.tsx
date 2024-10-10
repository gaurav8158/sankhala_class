"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { ChangeEvent, FormEvent, useState } from "react";
interface FormData {
  firstName: string;
  lastName: string;
  mobile: string;
  stream: string;
  class: string;
  center: string;
  email: string;
  city: string;
  schoolName: string;
  course: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    mobile: "",
    stream: "",
    class: "",
    center: "",
    email: "",
    city: "",
    schoolName: "",
    course: "",
  });

  // Handle input change
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // You can add further form submission logic here (API calls, etc.)
  };

  return (
    <div className="flex  flex-col lg:flex-row  container mx-auto sm:my-20">
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
              CLC sparks creativity and fosters innovation, igniting a culture
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
              Experience flawless preparation with CLC’s error-free test series,
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
              The excellence of CLC is proved every year with high success
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
  <a href="tel:7206427775" className="flex items-center gap-1">
    <Icon icon="fluent:call-24-regular" />{" "}
    <span>Call now for free</span>
  </a>
</div>
          <p className="text-center">or</p>
          <p className="text-center font-semibold mb-4">Request a call back</p>

          <div className="grid grid-cols-2 gap-4">
  <input
    type="text"
    name="firstName"
    value={formData.firstName}
    onChange={handleInputChange}
    placeholder="First Name"
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  />
  <input
    type="text"
    name="lastName"
    value={formData.lastName}
    onChange={handleInputChange}
    placeholder="Last Name"
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  />
</div>

<div className="mt-4">
  <input
    type="text"
    name="mobile"
    value={formData.mobile}
    onChange={handleInputChange}
    placeholder="Mobile No."
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  />
</div>

<div className="mt-4">
  <select
    name="stream"
    value={formData.stream}
    onChange={handleInputChange}
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  >
    <option value="">Select Stream</option>
    <option value="Science">Science</option>
    <option value="Commerce">Commerce</option>
    <option value="Arts">Arts</option>
  </select>
</div>

<div className="mt-4">
  <select
    name="class"
    value={formData.class}
    onChange={handleInputChange}
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  >
    <option value="">Select Class</option>
    <option value="10">10th</option>
    <option value="11">11th</option>
    <option value="12">12th</option>
  </select>
</div>

<div className="mt-4">
  <input
    type="text"
    name="center"
    value={formData.center}
    onChange={handleInputChange}
    placeholder="Center"
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
    placeholder="Email Id"
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
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
    type="text"
    name="schoolName"
    value={formData.schoolName}
    onChange={handleInputChange}
    placeholder="School Name"
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  />
</div>

<div className="mt-4">
  <select
    name="course"
    value={formData.course}
    onChange={handleInputChange}
    className="border p-2 w-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    required
  >
    <option value="">Select Course</option>
    <option value="NEET">NEET (UG)</option>
    <option value="JEE Main">JEE (Main)</option>
    <option value="JEE Advanced">JEE (Advanced)</option>
  </select>
</div>

<div className="mt-4">
  <label className="flex items-start space-x-2">
    <input type="checkbox" className="mt-1" required />
    <span>
      By submitting this form, I agree to the terms and privacy policy.
    </span>
  </label>
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

// <form className="space-y-4">
// <input
//   type="text"
//   name="name"
//   placeholder="Name"
//   required
//   className="w-full p-2 border border-gray-300 rounded"
// />
// <input
//   type="email"
//   name="email"
//   placeholder="Email Address"
//   required
//   className="w-full p-2 border border-gray-300 rounded"
// />
// <input
//   type="text"
//   name="whatsapp"
//   placeholder="Mobile Number"
//   required
//   className="w-full p-2 border border-gray-300 rounded"
// />
// <input
//   type="text"
//   name="state"
//   placeholder="State"
//   required
//   className="w-full p-2 border border-gray-300 rounded"
// />
// <input
//   type="text"
//   name="city"
//   placeholder="City"
//   required
//   className="w-full p-2 border border-gray-300 rounded"
// />
// <input
//   type="text"
//   name="schoolName"
//   placeholder="School Name"
//   className="w-full p-2 border border-gray-300 rounded"
// />
// <select
//   name="courses"
//   required
//   className="w-full p-2 border border-gray-300 rounded"
// >
//   <option value="NEET(UG)">NEET(UG)</option>
//   <option value="JEE(Main)">JEE(Main)</option>
//   <option value="JEE(Advanced)">JEE(Advanced)</option>

// </select>
// <button
//   type="submit"
//   className="w-full p-2  bg-[#0068B4] text-white border border-white rounded"
// >
//   Submit
// </button>
// </form>
