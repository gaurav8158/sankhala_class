"use client";

// import Image from "next/image";
// import React from "react";
// import herochild from "../../../Public/Homepage/herochild.webp";
// const Hero: React.FC = () => {
//   return (
//     <div className="relative bg-gray-100 py-6 ">
//       {/* Left Section with Image */}
//       <div className="flex relative h-[300px] justify-between items-center">
//         <div className="w-full lg:w-1/2 h-full">
//           <Image
//             src={herochild}
//             alt="Student Image"
//             width={2000}
//             height={2000}
//             className="object-cover h-full w-full"
//             placeholder="empty" // Disables blur effect
//           />
//         </div>

//         {/* Right Section with Text */}
//         <div className="lg:clip-shape bg-[#0068B4] w-full bg-opacity-[70%] lg:bg-opacity-[100%] lg:w-[64%] h-full flex justify-center lg:justify-end items-center right-0 absolute text-white px-8 py-12 ">
//           <div className="text-start">
//             <h1 className="text-4xl font-bold">Best Online Classes Ever</h1>
//             <h2 className="text-2xl mt-2">IIT JEE + CBSE + NEET</h2>
//             <p className="text-lg mt-4">
//               PHYSICS, MATH, CHEMISTRY, BIOLOGY MADE EASY!
//             </p>
//             <p className="text-lg mt-4 text-[#dffe60] font-semibold">
//               Learn from India&apos;s Best Teachers
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Image from "next/image";
import React, { useEffect, useState } from "react";
import herochild1 from "../../../Public/Homepage/herochild.webp";

import herochild3 from "../../../Public/rankcard/rankcard2.png";
import herochild2 from "../../../Public/rankcard/rankcard1.png";
import herochild4 from "../../../Public/KTSE/prizetop30.png";
const Hero: React.FC = () => {
  const images = [herochild1, herochild2, herochild3, herochild4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [images.length]);

  return (
    <div className="relative bg-gray-100 py-6 ">
      {/* Left Section with Image Slider */}
      <div className="flex relative h-[300px] justify-between items-center">
        <div className="w-full lg:w-1/2 h-full relative overflow-hidden">
          <Image
            src={images[currentImageIndex]}
            alt={`Student Image ${currentImageIndex + 1}`}
            width={2000}
            height={2000}
            className="object-cover h-full w-full transition-opacity duration-1000"
            placeholder="empty" // Disables blur effect
          />
        </div>

        {/* Right Section with Text */}
        <div className=" lg:w-1/2 bg-[#0068B4] w-full bg-opacity-[70%] lg:bg-opacity-[100%]  h-full flex justify-center lg:justify-end items-center right-0 absolute text-white px-8 py-12 ">
          <div className="text-start">
            <h1 className="text-4xl font-bold">Best Online Classes Ever</h1>
            <h2 className="text-2xl mt-2">IIT JEE + CBSE + NEET</h2>
            <p className="text-lg mt-4">
              PHYSICS, MATH, CHEMISTRY, BIOLOGY MADE EASY!
            </p>
            <p className="text-lg mt-4 text-[#dffe60] font-semibold">
              Learn from India&apos;s Best Teachers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// lg:clip-shape
// lg:w-[64%]
