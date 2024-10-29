import React from "react";

const CancellationAndRefund: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Cancellation & <span className="border-b-4 border-[#0068B4]">Refund Policy</span>
        </h1>

        {/* Cancellation Policy */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Cancellation Policy</h2>
          <p className="text-gray-700">
            At Sankhala Classes, we understand that there may be circumstances where you may need to cancel your enrollment or purchase.
            Please review the following guidelines regarding cancellations:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>
              Cancellation requests must be submitted within 7 days of enrollment to be eligible for a refund.
            </li>
            <li>
              No cancellations will be accepted after 7 days from the date of enrollment.
            </li>
            <li>
              Cancellations must be requested via email at{" "}
              <span className="text-[#0068B4]">sankhala.classes@gmail.com, onlinesankhalaclasses@gmail.com</span>.
            </li>
            <li>
              Once your cancellation request is approved, you will receive a confirmation email.
            </li>
          </ul>

          {/* Refund Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Refund Policy</h2>
            <p className="text-gray-700 mt-2">
              If your cancellation request is approved within the eligible timeframe, we will process your refund as per the following guidelines:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>
                Refunds will be processed within 10-15 business days from the date of cancellation approval.
              </li>
              <li>
                If payment was made via credit/debit card, refunds will be credited to the original payment method.
              </li>
              <li>
                In the case of cash payments, refunds will be processed via bank transfer. Please provide your bank details when requesting a refund.
              </li>
              <li>
                Any applicable processing fees or taxes will be deducted from the refund amount.
              </li>
            </ul>
          </div>

          {/* Non-Refundable Conditions */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Non-Refundable Situations</h3>
            <p className="text-gray-700 mt-2">
              Please note that the following situations are not eligible for refunds:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4">
              <li>Courses already completed or in progress.</li>
              <li>Digital study materials that have been accessed or downloaded.</li>
              <li>Special discounted courses and promotional offers.</li>
            </ul>
          </div>

          {/* Refund for Course Cancellations by Us */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Course Cancellations by Sankhala Classes</h3>
            <p className="text-gray-700 mt-2">
              In the unlikely event that a course is canceled by Sankhala Classes due to unforeseen circumstances, 
              students will be eligible for a full refund of the course fee. Refunds will be processed within 10-15 business days.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-white p-6 shadow-md rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us for Cancellation & Refund Queries</h2>
            <p className="text-gray-700 mt-4">
              For any queries regarding our cancellation and refund policy, please feel free to contact us at:
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

export default CancellationAndRefund;
