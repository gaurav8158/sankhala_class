"use client";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Image from "next/image";
import * as Yup from "yup";

interface FormValues {
  name: string;
  class: string;
  school: string;
  address: string;
  gender: string;
  fatherName: string;
  whatsappNumber: string;
  upiTransactionID: string;
  transactionImg?: "";
  // discountCoupan?: string;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  class: Yup.string().required("Class is required"),
  school: Yup.string().required("School is required"),
  address: Yup.string().required("Address is required"),
  gender: Yup.string().required("Gender is required"),
  fatherName: Yup.string().required("Father's name is required"),
  whatsappNumber: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid WhatsApp number")
    .required("WhatsApp number is required"),
  transactionImg: Yup.mixed().required("A file is required"),
  // .test("fileType", "Only JPG, PNG, and PDF files are allowed", (value) => {
  //   return (
  //     value &&
  //     (value.type === "image/jpeg" ||
  //       value.type === "image/png" ||
  //       value.type === "application/pdf")
  //   );
  // })
  // .test("fileSize", "File size should not exceed 2MB", (value) => {
  //   return value && value.size <= 2 * 1024 * 1024; // 2MB
  // }),
});

export default function ExamForm() {
  const initialValues: FormValues = {
    name: "",
    class: "",
    school: "",
    address: "",
    gender: "",
    fatherName: "",
    whatsappNumber: "",
    upiTransactionID: "",
    transactionImg: "",
    // discountCoupan: "",
  };

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    // try {
    //   const response = await fetch("http://localhost:3000/api/game/new-game", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Something went wrong");
    //   }

    //   alert("Form submitted successfully!");
    // } catch (error) {
    //   alert((error as Error).message);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-400 lg:pt-10 sm:pb-10">
      <div className="w-full max-w-3xl p-8 py-12 border border-gray-300 shadow-lg lg:rounded-2xl bg-white transform transition duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#0068B4] mb-6">
          KTSE 2024 ONLINE REGISTRATION FORM
        </h2>

        {/* UPI Scanner */}
        <div className="flex flex-col  mb-6">
          <div className="w-36 h-36 bg-gray-200 p-2 rounded-2xl  shadow-lg">
            <Image
              src="https://b2024479.smushcdn.com/2024479/wp-content/uploads/2020/05/HelloTech-qr-code-300x300.jpg?lossy=1&strip=1&webp=1"
              alt="UPI Scanner"
              className="w-full h-full"
              width={200}
              height={200}
            />
          </div>
          <div className="flex h-10 mt-4">
            <input
              id="transactionImg"
              name="transactionImg"
              type="text"
              placeholder="Discount Coupan"
              className="w-full rounded-l-3xl  max-w-[200px] p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            />
            <Button className="h-full rounded-r-3xl bg-[#0068B4] hover:bg-[#0c7ccc] text-white font-semibold">
              Apply
            </Button>
          </div>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Name */}
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold"
                >
                  Name
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Class */}
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="class"
                  className="block text-gray-700 font-semibold"
                >
                  Class
                </label>
                <Field
                  id="class"
                  name="class"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <ErrorMessage
                  name="class"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* School */}
              <div className="col-span-2">
                <label
                  htmlFor="school"
                  className="block text-gray-700 font-semibold"
                >
                  School
                </label>
                <Field
                  id="school"
                  name="school"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <ErrorMessage
                  name="school"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Address */}
              <div className="col-span-2">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-semibold"
                >
                  Address
                </label>
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <ErrorMessage
                  name="address"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Gender */}
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-semibold"
                >
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Father Name */}
              <div className="col-span-2 lg:col-span-1">
                <label
                  htmlFor="fatherName"
                  className="block text-gray-700 font-semibold"
                >
                  Father Name
                </label>
                <Field
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <ErrorMessage
                  name="fatherName"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* WhatsApp Number */}
              <div className="col-span-2">
                <label
                  htmlFor="whatsappNumber"
                  className="block text-gray-700 font-semibold"
                >
                  WhatsApp Number
                </label>
                <Field
                  id="whatsappNumber"
                  name="whatsappNumber"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
                <ErrorMessage
                  name="whatsappNumber"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Discount Coupon */}
              <div className="col-span-2">
                <label
                  htmlFor="transactionImg"
                  className="block text-gray-700 font-semibold"
                >
                  Transaction Image
                </label>
                <Field
                  id="transactionImg"
                  name="transactionImg"
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0068B4] text-white font-semibold rounded-md hover:bg-[#0876c4] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
