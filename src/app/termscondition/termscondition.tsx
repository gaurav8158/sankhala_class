import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6 bg-white text-gray-700">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        <span className="border-b-4 border-[#0068B4]">Terms and Conditions</span>
      </h1>

      {/* Main Content */}
      <div className="space-y-6">
        {/* Terms List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="border-l-4 border-[#0068B4] pl-2">
              Terms and Conditions
            </span>
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Sankhala Classes reserves the right to deny any admission without giving any reason whatsoever it may be.</li>
            <li>Confirm your age, eligibility conditions & start next coming NEET JEE exam. Sankhala Classes will not be responsible for any matter regarding age, eligibility & domicile.</li>
            <li>If original receipt is lost, a duplicate receipt can be issued on depositing Rs. 100/- only for NEET JEE.</li>
            <li>Sankhala Classes reserves the right to make any change in Study hours, time table, batch size, etc.</li>
            <li>Any information given by candidates found incorrect or false, their admission will be cancelled without any refund.</li>
            <li>Use of mobile phones or tabs in Sankhala Classes Campus is strictly prohibited. The student shall be imposed monetary punishment, disbarment from classes or termination.</li>
          </ul>
        </div>

        {/* Refund Rules */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            <span className="border-l-4 border-[#0068B4] pl-2">
              Refund Rules (Only for Offline Classroom Courses)
            </span>
          </h2>
          <p className="mb-4">
            Refund of any amount if payable shall be refunded by cheque only after deducting the following amount + GST on it.
          </p>

          {/* Refund Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 text-left text-sm">
              <thead>
                <tr className="bg-[#0068B4] text-white">
                  <th className="border border-gray-300 px-4 py-2">S.No.</th>
                  <th className="border border-gray-300 px-4 py-2">Days After Admission</th>
                  <th className="border border-gray-300 px-4 py-2">Deducted ₹ (NEET JEE - NDA)</th>
                  <th className="border border-gray-300 px-4 py-2">Deducted ₹ (Pre-Foundation)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">A</td>
                  <td className="border border-gray-300 px-4 py-2">Upto 7 Days</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 6000 + GST</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 3000 + GST</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">B</td>
                  <td className="border border-gray-300 px-4 py-2">Upto 14 Days</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 12000 + GST</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 6000 + GST</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">C</td>
                  <td className="border border-gray-300 px-4 py-2">Upto 21 Days</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 18000 + GST</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 9000 + GST</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">D</td>
                  <td className="border border-gray-300 px-4 py-2">Upto 28 Days</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 24000 + GST</td>
                  <td className="border border-gray-300 px-4 py-2">Rs. 12000 + GST</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Refund Notes */}
          <p className="mt-4">
            After 30 days of admission, there will be no refund.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The course has to be refunded on the only period of seat refund eligible to take the amount and the amount will be paid through Cheque.</li>
            <li>Medical IIT College may refund 50% of the amount deducted deducting GST even after 30 days on producing the following:</li>
            <li>Copy of the fee receipt of original admission done.</li>
            <li>Copy of College admission letter.</li>
          </ul>
        </div>

        {/* Footer Notes */}
        <p className="mt-6 font-semibold">
          <span className="text-gray-900">Note:</span> There will be no refund for complete payment of the final installment if it has not been made at the time of admission.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
