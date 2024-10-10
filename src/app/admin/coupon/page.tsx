"use client";
import PageHeadDesc from "@/components/admindashboard/pageheaddesc";
import { useState } from "react";

interface Coupon {
  id: number;
  code: string;
  discount: string; // Ensure discount is a number
  expiryDate: string;
}

const CouponCodeSection = () => {
  // State for coupons and the form data
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    id: 0,
    code: "",
    discount: "",
    expiryDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  // Add or Update Coupon
  const handleSaveCoupon = () => {
    // Ensure the discount is a number
    const updatedCoupon = {
      ...newCoupon,
      discount: newCoupon.discount, // Convert discount to a number
    };

    if (isEditing) {
      setCoupons(
        coupons.map((coupon) =>
          coupon.id === newCoupon.id ? updatedCoupon : coupon
        )
      );
      setIsEditing(false);
    } else {
      setCoupons([...coupons, { ...updatedCoupon, id: Date.now() }]);
    }
    setNewCoupon({ id: 0, code: "", discount: "", expiryDate: "" });
  };

  // Edit a Coupon
  const handleEditCoupon = (coupon: Coupon) => {
    setNewCoupon(coupon);
    setIsEditing(true);
  };

  // Delete a Coupon
  const handleDeleteCoupon = (id: number) => {
    setCoupons(coupons.filter((coupon) => coupon.id !== id));
  };

  return (
    <div>
      <PageHeadDesc
        title="Coupon Code Management"
        desc="Discount coupan for ktse form registration"
      />

      <div className="p-8 mx-6 bg-white rounded-lg shadow-md w-full max-w-5xl ">
        {/* Form to Add/Update Coupon */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Coupon Code"
            value={newCoupon.code}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, code: e.target.value })
            }
            className="p-2 border border-gray-300 rounded-md mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Discount (%)"
            value={newCoupon.discount}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, discount: e.target.value })
            } // Convert to number here
            className="p-2 border border-gray-300 rounded-md mb-2 w-full"
          />
          <input
            type="date"
            placeholder="Expiry Date"
            value={newCoupon.expiryDate}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, expiryDate: e.target.value })
            }
            className="p-2 border border-gray-300 rounded-md mb-2 w-full"
          />
          <button
            onClick={handleSaveCoupon}
            className="bg-[#0068B4]  text-white px-4 py-2 rounded-full mt-2"
          >
            {isEditing ? "Update Coupon" : "Add Coupon"}
          </button>
        </div>

        {/* List of Coupons */}
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Discount</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="border px-4 py-2">{coupon.id}</td>
                <td className="border px-4 py-2">{coupon.code}</td>
                <td className="border px-4 py-2">{coupon.discount}%</td>
                <td className="border px-4 py-2">{coupon.expiryDate}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleEditCoupon(coupon)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCoupon(coupon.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
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
