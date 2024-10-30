import React from "react";
import whyktse from "../../../Public/KTSE/ktseprize.jpeg";
import Image from "next/image";
const KTSEinfo: React.FC = () => {
  return (
    <div className="container bg-[#F6F6F6] shadow-xl  rounded-3xl  mx-auto  p-4 lg:p-10 py-10 flex gap-10 items-center ">
      <div className="flex-1 pr-30">
        <h2 className="text-3xl text-[#0068B4] font-bold mb-10">
          What is KTSE
        </h2>
        <p>
          <strong>Karnal Talent Search Examination (KTSE)</strong> is a
          prestigious scholarship exam organized by <strong>NIFAA</strong>. This
          exam is designed to identify and honor the brightest minds in Karnal,
          providing students a platform to showcase their academic abilities.
        </p>

        <p>
          KTSE aims to encourage excellence among students by rewarding those
          who demonstrate exceptional performance. The top achievers in this
          exam will be awarded an exciting range of prizes, including laptops,
          smartwatches, cycles, gadgets, and more. In addition to these, winners
          will also receive medals and certificates, recognizing their hard work
          and dedication.
        </p>

        <p>
          This initiative is not just about competition, but also about
          celebrating the talent and potential of students in our community. We
          encourage all eligible students to participate and make the most of
          this golden opportunity.
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
