import React from "react";
import ExamForm from "./ktsforms";
import KTSEinfo from "./whyktse";
import Header from "@/components/Header/page";
import Notification from "@/components/Notification";
import { Footer } from "@/components/Footer/page";

const page = () => {
  return (
    <div>
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <Notification />
        <Header />
      </div>
      <div className="mt-40 ">
        <KTSEinfo />
        <ExamForm />
      </div>
      <Footer />
    </div>
  );
};

export default page;
