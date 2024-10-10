import React from "react";

interface HeadingAllProps {
  head?: string;
  desc?: string;
}

const HeadingAll: React.FC<HeadingAllProps> = ({ head, desc }) => {
  return (
    <div className="container mx-auto flex flex-col gap-3  w-full my-6">
      <p className="font-semibold text-center text-3xl">{head}</p>
      <p className="text-gray-600 text-center ">{desc}</p>
    </div>
  );
};

export default HeadingAll;
