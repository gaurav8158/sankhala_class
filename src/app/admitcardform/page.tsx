"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ktselogo from "../../../Public/KTSE/ktselogos.jpeg";
import nifaalogo from "../../../Public/KTSE/nifalogo.jpeg";
import Image from "next/image";
const AdmitCardForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    className: "",
    school: "",
    contact: "",
    dob: "", // Added Date of Birth field to the state
  });

  const router = useRouter();

  // Update form data on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission and redirect with query parameters
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const queryString = new URLSearchParams(
      formData as Record<string, string>
    ).toString();
    router.push(`/view-admit-card?${queryString}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-auto space-y-6"
      >
        <div className="absolute inset-0 flex flex-col gap-10 justify-center items-center opacity-10 pointer-events-none">
          {/* First Logo */}
          <Image
            src={nifaalogo}
            alt="NIFAA Logo"
            layout="fixed"
            width={200}
            height={200}
            className="mx-2  w-[150px]"
          />
          {/* Second Logo */}
          <Image
            src={ktselogo}
            alt="KTSE Logo"
            layout="fixed"
            width={200}
            height={200}
            className="mx-2 w-[150px]"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Find KTSE Admit Card
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Enter your details to retrieve your KTSE Admit Card.
        </p>

        <div className="space-y-4">
          <input
            name="fullName"
            onChange={handleChange}
            value={formData.fullName}
            placeholder="Full Name"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          />
          <select
            name="className"
            onChange={handleChange}
            value={formData.className}
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
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

          <input
            name="school"
            onChange={handleChange}
            value={formData.school}
            placeholder="School Name"
            required
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          />
          <input
            name="contact"
            onChange={handleChange}
            value={formData.contact}
            placeholder="Contact Number"
            required
            type="tel"
            pattern="[0-9]{10}" // Only allows a 10-digit contact number
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          />
          <input
            name="dob"
            onChange={handleChange}
            value={formData.dob}
            placeholder="Date of Birth"
            required
            type="date"
            className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg transition-colors duration-200"
        >
          Get Admit Card
        </button>
      </form>
    </div>
  );
};

export default AdmitCardForm;
