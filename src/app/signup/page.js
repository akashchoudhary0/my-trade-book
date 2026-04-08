"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",

    businessName: "",
    businessLogo: "",
    gst: "",
    phoneNumber: "",
    shopCategory: "",

    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          ownerName: formData.ownerName,
          email: formData.email,
          password: formData.password,

          businessName: formData.businessName,
          businessLogo: formData.businessLogo,
          gst: formData.gst,
          phoneNumber: formData.phoneNumber,
          shopCategory: formData.shopCategory,

          address: {
            street: formData.street,
            city: formData.city,
            district: formData.district,
            state: formData.state,
            pincode: formData.pincode,
          },
        }
      );

      if (res.data.success) {
        // Save userId in localStorage
        localStorage.setItem("userId", res.data.userId);

        // Redirect to dashboard
        router.push("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Create Your Business Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* 🔐 Owner Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Owner Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="ownerName"
                placeholder="Owner Name"
                value={formData.ownerName}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="input"
                required
              />
            </div>
          </div>

          {/* 🏢 Business Details */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Business Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="businessName"
                placeholder="Business Name"
                value={formData.businessName}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                type="text"
                name="phoneNumber"
                placeholder="Business Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                type="text"
                name="gst"
                placeholder="GST Number (Optional)"
                value={formData.gst}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="shopCategory"
                placeholder="Shop Category (e.g. Grocery, Medical)"
                value={formData.shopCategory}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                type="text"
                name="businessLogo"
                placeholder="Business Logo URL (Optional)"
                value={formData.businessLogo}
                onChange={handleChange}
                className="input md:col-span-2"
              />
            </div>
          </div>

          {/* 📍 Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Business Address
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                className="input"
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="input md:col-span-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            Create Business Profile
          </button>

        </form>
      </div>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #ddd;
          border-radius: 10px;
          outline: none;
        }

        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }
      `}</style>
    </div>
  );
}
