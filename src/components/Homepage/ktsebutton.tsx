"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const KtseButton: React.FC = () => {
  return (
    <div className="fixed  bottom-4 z-50 right-4 flex items-center space-x-2">
      <a
        href="/ktseform" // Replace with your WhatsApp number in international format
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#0068B4] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#1486d8] transition-colors"
      >
        <Icon icon="clarity:form-line" width={24} />
        <span className=" text-2xl font-semibold">REGISTER KTSE</span>
      </a>
    </div>
  );
};

export default KtseButton;
