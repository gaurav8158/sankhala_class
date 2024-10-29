import React from "react";
import whyktse from "../../../Public/KTSE/whykstp.svg";
import Image from "next/image";
const KTSEinfo: React.FC = () => {
  return (
    <div className="container  mx-auto p-4 lg:p-20 py-10 my-6 flex items-center bg-gray-100">
      <div className="flex-1 pr-30">
        <h2 className="text-3xl text-[#0068B4] font-bold mb-10">
          What is KTSE
        </h2>
        <p className="text-lg">
          KTSE stands for Sankhala Classes Talent Search Exam Test and is
          conducted once a year. Sankhala Classes has created this scholarship
          test to identify and nurture talented students who aspire to pursue
          careers in Medical and Engineering domains.
        </p>
      </div>
      <div>
        {/* Replace with actual image URL */}
        <Image
          src={whyktse}
          width="200"
          height="200"
          alt="KTSE Illustration"
          className="hidden lg:block w-full h-full object-cover "
        />
      </div>
    </div>
  );
};

export default KTSEinfo;
