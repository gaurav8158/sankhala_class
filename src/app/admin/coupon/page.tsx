"use client";
import PageHeadDesc from "@/components/admindashboard/pageheaddesc";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import toast from "react-hot-toast";

// Interface for Coupon
interface Coupon {
  id: number;
  schoolName: string;
  couponCode: string;
  discount: string; // Should be a number
  expiry: string;
}

// Yup validation schema
const CouponSchema = Yup.object().shape({
  schoolName: Yup.string().required("School Name is required"),
  couponCode: Yup.string().required("Coupon Code is required"),
  discount: Yup.number()
    .required("Discount is required")
    .min(0, "Discount must be greater than or equal to 0")
    .max(100, "Discount cannot exceed 100"),
  expiry: Yup.string().required("Expiry date is required"),
});

const CouponCodeSection = () => {
  // State for coupons
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCouponId, setCurrentCouponId] = useState<number | null>(null);
  const [editCouponData, setEditCouponData] = useState<Omit<
    Coupon,
    "id"
  > | null>(null);
  // Fetch coupons from API
  const fetchCoupons = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/all-coupon`
      );

      const data = await response.json();
      const fetchedCoupons = data.allCoupon.map((item: any) => ({
        id: item._id,
        schoolName: item.schoolName,
        couponCode: item.couponcode,
        discount: item.discount,
        expiry: item.expiry,
      }));
      setCoupons(fetchedCoupons);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    }
  };

  // useEffect to fetch coupons on page load
  useEffect(() => {
    fetchCoupons();
  }, []);

  // Add new coupon via API
  const addCoupon = async (coupon: Omit<Coupon, "id">) => {
    let url = isEditing
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/updatecoupon/${currentCouponId}`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/add-coupon`;
    try {
      const response = await fetch(
        url, // Dynamic base URL
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            schoolName: coupon.schoolName,
            couponcode: coupon.couponCode,
            discount: coupon.discount,
            expiry: coupon.expiry,
          }),
        }
      );
      const data = await response.json();

      // Refresh the coupon list after addition
      fetchCoupons();
      if (isEditing) toast.success(data.status);
      else {
        if (data.data) {
          toast.success("added successfully");
         
        }
      }
    } catch (error) {
      console.error("Error adding coupon:", error);
    }
  };

  // Edit coupon handler
  const handleEditCoupon = (coupon: Coupon) => {
    console.log(coupon);
    setIsEditing(true);
    setCurrentCouponId(coupon.id);
    const formattedExpiry = new Date(coupon.expiry).toISOString().slice(0, 10); // Convert to YYYY-MM-DD format
    setEditCouponData({
      schoolName: coupon.schoolName,
      couponCode: coupon.couponCode,
      discount: coupon.discount,
      expiry: formattedExpiry,
    });
  };

  // Delete coupon
  const handleDeleteCoupon = async (couponId: any) => {
    console.log(couponId);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/coupon/deletecoupon/${couponId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      fetchCoupons();

      const data = await response.json();

      toast.success(data.message); // Log success message or handle it accordingly

      // Optionally, update your UI state here, e.g., remove the deleted coupon from the list
    } catch (error) {
      console.error("Error deleting coupon:", error);
      // Handle error (e.g., show a notification to the user)
    }
  };
  return (
    <div>
      <PageHeadDesc
        title="Coupon Code Management"
        desc="Discount coupon for school registration"
      />

      <div className="p-8 mx-6 bg-white rounded-lg shadow-md w-full max-w-5xl">
        <Formik
          initialValues={
            editCouponData || {
              schoolName: "",
              couponCode: "",
              discount: "",
              expiry: "",
            }
          }
          validationSchema={CouponSchema}
          onSubmit={(values, { resetForm }) => {
            addCoupon(values);
            resetForm();
            setIsEditing(false);
            setEditCouponData(null); // Reset edit coupon data
          }}
          enableReinitialize // This allows Formik to re-initialize with new initial values
        >
          {({ isSubmitting }) => (
            <Form className="mb-6">
              <div>
                <Field
                  name="schoolName"
                  placeholder="School Name"
                  className="p-2 border border-gray-300 rounded-md mb-2 w-full"
                />
                <ErrorMessage
                  name="schoolName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  name="couponCode"
                  placeholder="Coupon Code"
                  className="p-2 border border-gray-300 rounded-md mb-2 w-full"
                />
                <ErrorMessage
                  name="couponCode"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  name="discount"
                  placeholder="Discount (%)"
                  className="p-2 border border-gray-300 rounded-md mb-2 w-full"
                />
                <ErrorMessage
                  name="discount"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  type="date"
                  className="p-2 border border-gray-300 rounded-md mb-2 w-full"
                />
                <ErrorMessage
                  name="expiry"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-[#0068B4] text-white px-4 py-2 rounded-full mt-2"
                disabled={isSubmitting}
              >
                {isEditing ? "Update Coupon" : "Add Coupon"}
              </button>
            </Form>
          )}
        </Formik>

        {/* List of Coupons */}
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">School Name</th>
              <th className="px-4 py-2">Coupon Code</th>
              <th className="px-4 py-2">Discount</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="border px-4 py-2">{coupon.id}</td>
                <td className="border px-4 py-2">{coupon.schoolName}</td>
                <td className="border px-4 py-2">{coupon.couponCode}</td>
                <td className="border px-4 py-2">{coupon.discount}%</td>
                <td className="border px-4 py-2">
                  {" "}
                  {new Date(coupon.expiry).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </td>
                <td className="border px-4 py-2">
                  <Button
                    className="mr-2 bg-sky-300"
                    onClick={() => handleEditCoupon(coupon)}
                    variant="outline"
                    size="icon"
                  >
                    <Icon icon="akar-icons:edit" className="h-4 w-4" />
                  </Button>
                  <Button
                    className="bg-red-300"
                    onClick={() => handleDeleteCoupon(coupon.id)}
                    variant="outline"
                    size="icon"
                  >
                    <Icon icon="proicons:delete" className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CouponCodeSection;
