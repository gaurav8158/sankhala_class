import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 bg-white text-gray-700">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        <span className="border-l-4 border-[#0068B4] pl-2">
          Privacy Policy
        </span>
      </h1>

      <p className="mb-4">
        All transactions are processed through a gateway provider and are not
        stored or processed on our servers. So, in any case, we do not store any
        of the payer’s payment or transaction information. When you visit the
        institute Official Website, the following information may be collected
        from you, either voluntarily or involuntarily:
      </p>

      <ul className="list-none space-y-4 pl-6">
        <li className="flex items-start">
          <span className="mr-2 border-l-4 border-[#0068B4] pl-2">
            1. Your computer or network IP address, which must be validated in
            order for you to access the Sankhala Classes Official Website;
          </span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 border-l-4 border-[#0068B4] pl-2">
            2. Your e-mail address and message when you communicate
            electronically with us;
          </span>
        </li>
      </ul>

      <p className="mt-6 font-semibold">
        <span className="text-gray-900">Note:</span> By submitting a payment
        through the online-payments site you are agreeing to these terms and
        conditions including any updated changes in terms and conditions from
        time to time through our website.
      </p>
    </section>
  );
};

export default PrivacyPolicy;
