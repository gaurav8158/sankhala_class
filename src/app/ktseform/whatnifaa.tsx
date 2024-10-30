import React from "react";
import nifalogo from "../../../Public/KTSE/nifalogo.jpeg";
import Image from "next/image";
const NIFAAinfo: React.FC = () => {
  return (
    <div className="container font-inter shadow-xl  bg-[#F6F6F6] mt-10  rounded-3xl  mx-auto  p-4 lg:p-10 py-10 flex gap-10 items-center ">
      <div className="flex-1 pr-30">
        <h2 className="text-3xl text-[#0068B4] font-bold mb-10">
          What is NIFAA
        </h2>
        <p >
          <strong>
            The National Integrated Forum of Artists and Activists (NIFAA){" "}
          </strong>{" "}
          stands as a prominent organization in India, committed to empowering
          youth, raising social awareness, supporting underprivileged
          communities, and promoting Indian art and culture. Honored with the
          National Youth Award by the Government of India, NIFAA has also
          achieved six Guinness World Records and two World Book of Records
          recognitions. Celebrating
          <strong> 25 years</strong> of impactful work, NIFAA is expanding its
          mission by introducing various award categories to recognize the
          exemplary contributions of social workers, individuals with
          disabilities, and others driving social change. NIFAA’s focus on youth
          development is reflected in its efforts to nurture the next generation
          with strong values and academic excellence. Through the “Desh Ki Baat”
          program, NIFAA has already reached over{" "}
          <strong> 7,00,000 students</strong> across the country.
        </p>
      </div>

      <div>
        {/* Replace with actual image URL */}
        <Image
          src={nifalogo}
          width="200"
          height="200"
          alt="KTSE Illustration"
          className="hidden lg:block w-40 h-40 object-cover "
        />
      </div>
    </div>
  );
};

export default NIFAAinfo;
