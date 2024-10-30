import React from "react";
import ExamForm from "./ktsforms";
import KTSEinfo from "./whyktse";
import Header from "@/components/Header/page";
import Notification from "@/components/Notification";
import { Footer } from "@/components/Footer/page";
import prizetop30 from "../../../Public/KTSE/prizetop30.png";
import KtseFooter from "./ktsefooter";
import NIFAAinfo from "./whatnifaa";
import KtseFAQ from "./faqktse";
const page = () => {
  return (
    <div>
      {/* <div className="w-full fixed top-0 left-0 right-0 z-50">
        <Notification />
        <Header />
      </div> */}
      <div className=" min-h-screen ktsebackground py-10">
        <KTSEinfo />
        <NIFAAinfo/>
        <ExamForm />
        <KtseFAQ/>
      </div>

      <KtseFooter />
    </div>
  );
};

export default page;
