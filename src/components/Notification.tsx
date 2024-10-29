import Link from "next/link";
import React from "react";

const Notification: React.FC = () => {
  return (
    <Link href="ktseform">
      <div className="text-center bg-[#128de6] text-white font-semibold w-full p-3">
        Unlock Your Potential! KTSE Talent Search Exam Test
      </div>
    </Link>
  );
};

export default Notification;
