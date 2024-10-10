import React from "react";

const ShippingAndDelivery: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Shipping & <span className="border-b-4 border-[#0068B4]">Delivery</span>
        </h1>

        {/* Shipping Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">General Shipping Information</h2>
          <p className="text-gray-700">
            At Sankhala Classes, we strive to ensure that all study materials and course-related items are delivered to you
            in a timely and efficient manner. Below are the details regarding our shipping process and delivery times.
          </p>

          {/* Delivery Time */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Delivery Timeframes</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Orders are typically processed within 2-3 business days.</li>
              <li>Standard shipping within India usually takes 7-10 business days after the order has been processed.</li>
              <li>Expedited shipping options are available for faster delivery. Charges may apply.</li>
              <li>International delivery may take 15-20 business days depending on location.</li>
            </ul>
          </div>

          {/* Shipping Charges */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Shipping Charges</h3>
            <p className="text-gray-700 mt-2">
              We offer the following shipping options:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2">
              <li>Standard Shipping: Free for all orders within India.</li>
              <li>Expedited Shipping: ₹299 for orders within India.</li>
              <li>International Shipping: ₹1499 for all orders outside India.</li>
            </ul>
          </div>

          {/* Tracking */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Tracking Your Order</h3>
            <p className="text-gray-700 mt-2">
              Once your order has been shipped, you will receive a confirmation email with the tracking number and a link to track your shipment. 
              If you do not receive your tracking information within 3 business days, please contact us at{" "}
              <span className="text-[#0068B4]">sankhala.classes@gmail.com, onlinesankhalaclasses@gmail.com</span>.
            </p>
          </div>

          {/* Delivery Issues */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">What If I Haven’t Received My Order?</h3>
            <p className="text-gray-700 mt-2">
              If you have not received your order within the expected timeframe, please check your tracking number first. 
              If the issue persists, contact our customer support team, and we’ll resolve the matter as quickly as possible.
            </p>
          </div>

          {/* Shipping Restrictions */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Shipping Restrictions</h3>
            <p className="text-gray-700 mt-2">
              Please note that we currently do not ship to P.O. Boxes or APO/FPO addresses. Additionally, 
              orders to remote areas may take longer than the standard delivery timeframe.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 shadow-md rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us for Shipping Queries</h2>
            <p className="text-gray-700 mt-4">
              If you have any further questions about our shipping and delivery policies, please reach out to our team at:
            </p>
            <p className="text-gray-700 mt-2">
              Email: <span className="text-[#0068B4]">sankhala.classes@gmail.com, onlinesankhalaclasses@gmail.com</span>
            </p>
            <p className="text-gray-700 mt-2">Phone: 72064-27775, 94163-22655</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAndDelivery;
