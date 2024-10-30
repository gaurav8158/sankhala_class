"use client";
import { Button } from "@/components/ui/button";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import mainlogo from "../../../Public/mainlogosankhala.jpg";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
interface FormValues {
  name: string;
  class: string;
  school: string;
  address: string;
  gender: string;
  fatherName: string;
  whatsappNumber: string;
  upiTransactionID?: string;
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
});
interface SchoolData {
  _id: string;
  schoolName: string;
  couponcode: string;
  discount: number;
  expiry: string; // You can also use Date if you prefer
  __v: number;
}

export default function ExamForm() {
  const [couponcode, setCouponcode] = useState("");
  const [havecouponcode, setHaveCouponcode] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [schoolsdata, setSchoolsdata] = useState<SchoolData[]>([]);
  const [isOther, setIsOther] = useState(false);
  const initialValues: FormValues = {
    name: "",
    class: "",
    school: "",
    address: "",
    gender: "",
    fatherName: "",
    whatsappNumber: "",
    upiTransactionID: "",
  };
  const fetchCoupons = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/all-coupon`
      );

      const data = await response.json();
      console.log(data.allCoupon);
      setSchoolsdata(data.allCoupon);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    }
  };

  // useEffect to fetch coupons on page load
  useEffect(() => {
    fetchCoupons();
  }, []);
  const handleCoupon = () => {
    setHaveCouponcode((prev) => !prev);
  };

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    if (values.school) return;
    try {
      // Get Razorpay key from the backend or use the hardcoded key
      const key = "rzp_test_pnu9bjSGQqyuGf";

      // Create an order on the backend

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment`,
        {
          amount: 200,
          ...values,
        }
      );
      const { order } = data;

      // Razorpay options
      const options = {
        key, // Razorpay key fetched from backend or hardcoded above
        amount: order.amount, // Amount from the created order
        currency: "INR",
        name: "Ktse exam form fee",
        description: "sankhala classes",
        image: mainlogo,
        order_id: order.id, // Razorpay order ID
        // callback_url: "http://localhost:3000/api/paymentverification",
        prefill: {
          name: "Gaurav soni",
          email: "gaurav.soni@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#0068B4",
        },
        handler: function (response: any) {
          console.log(response, "ddddddddd");
          // This function will get executed after the payment is successful

          toast.success("Payment Successful");
          // console.log(response.razorpay_payment_id);
          // console.log(response.razorpay_order_id);
          // console.log(response.razorpay_signature);

          // You can also send this data to your backend for further processing
        },
      };

      // Type casting 'window.Razorpay' as any to avoid TypeScript error
      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error in Razorpay setup:", error);
    }
  };
  const verifyCouponCode = async (couponcode: any) => {
    if (!couponcode) {
      toast.error("Please apply coupon code");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/manually/verifycouponcode`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ couponcode }), // Matches the backend expectation
        }
      );

      const data = await response.json();
      console.log(data);

      toast.success(data.message);
      if (data.message === "Coupon code not found") return;

      setDiscount(data.discount);

      return data;
    } catch (error) {
      console.error("Error verifying coupon code:", error);
      return null;
    }
  };
  const handleSchoolChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ) => {
    const selectedSchool = e.target.value;
    setIsOther(selectedSchool === "Other");
    setFieldValue("school", selectedSchool);
  };
  return (
    <div className="min-h-screen flex items-center justify-center  lg:pt-10 sm:pb-10">
      <div className="w-full max-w-3xl p-8 py-12 border border-gray-300 shadow-lg lg:rounded-2xl bg-white transform transition duration-500 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#0068B4] mb-6">
          KTSE 2024 ONLINE REGISTRATION FORM
        </h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
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
                  as="select"
                  id="class"
                  name="class"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                >
                  <option value="">Select a class</option>
                  <option value="6th">6th</option>
                  <option value="7th">7th</option>
                  <option value="8th">8th</option>
                  <option value="9th">9th</option>
                  <option value="10th">10th</option>
                  <option value="11th Medical">11th Medical</option>
                  <option value="11th Non medical">11th Non medical</option>
                  <option value="12th Medical">12th Medical</option>
                  <option value="12th Non medical">12th Non medical</option>
                </Field>
                <ErrorMessage
                  name="class"
                  component="p"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* School Selection */}
              <div className="col-span-2">
                <label
                  htmlFor="school"
                  className="block text-gray-700 font-semibold"
                >
                  School
                </label>
                <Field
                  as="select"
                  id="school"
                  name="school"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                  onChange={(e:any) => {
                    const selectedSchool = e.target.value;

                    // Find the school object that matches the selected school name
                    const selectedSchoolData = schoolsdata.find(
                      (school) => school.schoolName === selectedSchool
                    );

                    setIsOther(selectedSchool === "Other");
                    setFieldValue("school", selectedSchool);

                    // Check if selectedSchoolData is defined to avoid potential errors
                    if (selectedSchoolData) {
                      if (new Date() > new Date(selectedSchoolData.expiry)) {
                        return;
                      }
                      // Set the discount if the school exists and is not expired
                      setDiscount(selectedSchoolData.discount);
                    } else {
                      setDiscount(0); // Reset discount if no school is selected
                    }
                  }}
                >
                  <option value="">Select your school</option>
                  {schoolsdata?.map((school) => (
                    <option key={school._id} value={school.schoolName}>
                      {school.schoolName}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage
                  name="school"
                  component="p"
                  className="text-red-500 text-sm"
                />

                {/* Conditionally render text input for "Other" school option */}
                {isOther && (
                  <Field
                    id="school"
                    name="school"
                    type="text"
                    placeholder="Enter your school name"
                    className="w-full mt-3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                  />
                )}
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
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
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
              {/* UPI Scanner */}

              {havecouponcode ? (
                <div>
                  <div className="flex flex-col  mb-6">
                    <div className="flex h-10 mt-4">
                      <input
                        id="transactionImg"
                        name="transactionImg"
                        type="text"
                        onChange={(e) => setCouponcode(e.target.value)}
                        placeholder="Discount Coupon"
                        className="w-full rounded-l-3xl max-w-[200px] p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                      />
                      <Button
                        onClick={() => verifyCouponCode(couponcode)}
                        className="h-full rounded-r-3xl bg-[#0068B4] hover:bg-[#0c7ccc] text-white font-semibold"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <span
                  onClick={handleCoupon}
                  className="text-[#0068B4] cursor-pointer font-bold "
                >
                  Do you have any coupan code ?
                </span>
              )}
              <br />
              {discount !== 0 && (
                <p className="text-green-500 w-full font-bold">
                  you will get {discount} % discount
                </p>
              )}
              {/* Submit Button */}
              <div className="col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0068B4] text-white font-semibold rounded-md hover:bg-[#0876c4] transition-all duration-300 transform hover:-translate-y-1"
                >
                  Pay {200 - (200 * discount) / 100}rs
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
