import React from "react";

const CoursesSection = () => {
  return (
    <div className="container mx-auto flex xl:grid  flex-col-reverse grid-cols-1 xl:grid-cols-2 justify-between items-start gap-20 p-8 sm:py-20 mt-10">
      {/* Left Column (Cards) */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-10 mb-20 xl:mb-0">
        <div className="p-6 group xl:py-16 xl:-mt-10 xl:mb-10 bg-gray-100 hover:bg-[#0068B4] hover:text-white transition-all delay-150 shadow-md flex flex-col items-center">
          <div className=" text-6xl group-hover:scale-75 transition-all delay-150 mb-4">
            🩺
          </div>
          <h3 className="text-2xl font-bold">NEET (UG)</h3>
          <p className="text-sm mt-2 text-center">
            Leading Name With the Historic Achievement of 35 first Ranks.
          </p>
        </div>
        <div className="p-6 group xl:py-16 bg-[#0068B4] text-white hover:bg-gray-100 hover:text-black transition-all delay-150  shadow-md flex flex-col items-center">
          <div className="text-6xl group-hover:scale-75 transition-all delay-150 mb-4">
            ⚙️
          </div>
          <h3 className="text-2xl font-bold">IIT-JEE</h3>
          <p className="text-sm mt-2 text-center">
            Experienced, energetic team with updated study Material.
          </p>
        </div>
        <div className="p-6 group xl:py-16 bg-[#0068B4] text-white hover:bg-gray-100 hover:text-black transition-all delay-150 shadow-md flex flex-col items-center">
          <div className="text-6xl group-hover:scale-75 transition-all delay-150 mb-4">
            🏅
          </div>
          <h3 className="text-2xl font-bold">OLYMPIADS</h3>
          <p className="text-sm mt-2 text-center">
            Prepping for Olympiads Glory: Aim High, Achieve Higher.
          </p>
        </div>
        <div className="p-6 group xl:py-16 bg-gray-100 xl:mt-10 xl:-mb-10 hover:bg-[#0068B4] hover:text-white transition-all delay-150 shadow-md flex flex-col items-center">
          <div className="text-6xl group-hover:scale-75 transition-all delay-150 mb-4">
            🛡️
          </div>
          <h3 className="text-2xl font-bold">NDA</h3>
          <p className="text-sm mt-2 text-center">
            One of the best NDA Academies, where Dreams Transform into
            Commanding Realities.
          </p>
        </div>
      </div>

      {/* Right Column (Classroom Courses & Fee Section) */}
      <div>
        <h2 className="text-xl text-gray-700 font-bold mb-8">
          LEARN NEW SKILLS
          <span className="block text-4xl font-bold text-[#0068B4]">
            Classroom Courses & Fee
          </span>
        </h2>
        <p className=" text-gray-700 mb-4">
          Explore a world of academic enrichment at CLC Institute through our
          extensive array of classroom courses. Designed to cater to diverse
          educational needs, our offerings encompass NEET/JEE Foundation &
          Target Courses, equipping students with a solid foundation for success
          in competitive exams.
        </p>
        <p className=" text-gray-700 mb-4">
          For students in grades 6th to 10th, our Pre-Foundation Course provides
          a nurturing environment, fostering holistic development.
        </p>
        <p className=" text-gray-700 mb-4">
          Prepare for a career in the armed forces with our specialized NDA
          coaching. Additionally, our Olympiads Training ensures students can
          excel in national and international competitions, fostering a spirit
          of excellence.
        </p>
        <p className=" text-gray-700 mb-4">
          For those seeking a strong academic foundation, our RBSE/CBSE
          Schooling courses provide a rigorous yet supportive learning
          experience.
        </p>
        <p className="text-sm text-gray-700">
          At CLC Institute, we believe in creating an immersive and dynamic
          classroom environment where students can thrive academically. Join us
          in shaping a brighter future through quality education and
          personalized learning.
        </p>
      </div>
    </div>
  );
};

export default CoursesSection;
