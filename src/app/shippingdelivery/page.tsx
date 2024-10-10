import React from "react";
import Header from "@/components/Header/page";
import Notification from "@/components/Notification";
import { Footer } from "@/components/Footer/page";
import ShippingAndDelivery from "./shippingdelivery";

const page = () => {
  return (
    <div>
      <div className="w-full fixed top-0 left-0 right-0 z-50">
        <Notification />
        <Header />
      </div>
      <div className="mt-40 ">
        <ShippingAndDelivery/>
      </div>
      <Footer />
    </div>
  );
};

export default page;
