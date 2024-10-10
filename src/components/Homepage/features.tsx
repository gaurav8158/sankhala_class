"use client";
import React from "react";
import { Icon } from "@iconify/react";
const features = [
  {
    icon: "material-symbols-light:live-tv-outline", // replace with actual icon path
    title: "LIVE",
    description: "Online Classes",
  },
  {
    icon: "icon-park-outline:concept-sharing", // replace with actual icon path
    title: "CONCEPT",
    description: "Video Lectures",
  },
  {
    icon: "mdi:paper-edit-outline", // replace with actual icon path
    title: "SOLVED",
    description: "Video Examples",
  },
  {
    icon: "material-symbols:computer-outline", // replace with actual icon path
    title: "SMART",
    description: "Practice Tests",
  },
  {
    icon: "mage:light-bulb", // replace with actual icon path
    title: "INSTANT",
    description: "Doubt Clearing",
  },
  {
    icon: "emojione-monotone:handshake", // replace with actual icon path
    title: "PERSONALISED",
    description: "Mentor Support",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 sm:px-0 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Key Features of
        </h2>
        <h3 className="text-xl font-bold text-gray-900 mb-8">
          Online IIT JEE + CBSE + NEET Classes
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative justify-between mt-6 items-center font-semibold py-2 rounded-3xl overflow-hidden border border-[#82bcdd] bg-white px-3 text-[#0068B4] shadow-2xl transition-all hover:shadow-lg hover:text-white"
            >
              <div className="absolute inset-0 w-0 bg-[#0068B4] transition-all duration-500 z-0 group-hover:w-full"></div>

              <Icon
                icon={feature.icon}
                className="mx-auto mb-4 z-10 relative group-hover:text-white transition-colors duration-500"
                width="50"
                height="50"
              />
              <h4 className="text-lg font-semibold z-10 relative transition-colors duration-500">
                {feature.title}
              </h4>
              <p className="text-gray-800 group-hover:text-white z-10 relative transition-colors duration-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
