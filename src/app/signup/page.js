"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import {
  User,
  Mail,
  Lock,
  Building2,
  Phone,
  MapPin,
  ImagePlus,
  ArrowRight,
} from "lucide-react";

export default function Signup() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    password: "",
    confirmPassword: "",

    businessName: "",
    gst: "",
    phoneNumber: "",
    shopCategory: "",

    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const [logo, setLogo] = useState(null);

  // Handle Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Logo Upload
  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // FormData for Multer
      const data = new FormData();

      data.append("ownerName", formData.ownerName);
      data.append("email", formData.email);
      data.append("password", formData.password);

      data.append("businessName", formData.businessName);
      data.append("gst", formData.gst);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("shopCategory", formData.shopCategory);

      data.append("street", formData.street);
      data.append("city", formData.city);
      data.append("district", formData.district);
      data.append("state", formData.state);
      data.append("pincode", formData.pincode);

      // Logo File
      if (logo) {
        data.append("businessLogo", logo);
      }

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.success) {
        localStorage.setItem("userId", res.data.userId);

        router.push("/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="flex-1 py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-gray-100">
        <div className="max-w-5xl mx-auto">
          {/* Card */}
          <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl overflow-hidden">
            
            {/* Header */}
            <div className="bg-blue-600 px-8 py-10 text-center">
              <h1 className="text-4xl font-bold text-white mb-3">
                Create Your Business Profile
              </h1>

              <p className="text-blue-100 text-lg">
                Start managing billing, invoices & inventory smarter
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 space-y-10"
            >
              {/* Owner Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Owner Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Owner Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Owner Name
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                      <input
                        type="text"
                        name="ownerName"
                        placeholder="Enter owner name"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>

                    <div className="relative">
                      <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>

                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                      <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Details */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Business Details
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Name
                    </label>

                    <div className="relative">
                      <Building2 className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                      <input
                        type="text"
                        name="businessName"
                        placeholder="Enter business name"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                        className="input pl-12"
                      />
                    </div>
                  </div>

                  {/* GST */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      GST Number
                    </label>

                    <input
                      type="text"
                      name="gst"
                      placeholder="GST Number (Optional)"
                      value={formData.gst}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Shop Category
                    </label>

                    <input
                      type="text"
                      name="shopCategory"
                      placeholder="Grocery, Medical, Fashion..."
                      value={formData.shopCategory}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>

                  {/* Logo Upload */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Business Logo
                    </label>

                    <label className="flex items-center gap-3 border-2 border-dashed border-gray-300 rounded-2xl p-6 cursor-pointer hover:border-blue-500 transition bg-gray-50">
                      <ImagePlus className="h-6 w-6 text-blue-600" />

                      <div>
                        <p className="font-medium text-gray-800">
                          Upload Business Logo
                        </p>

                        <p className="text-sm text-gray-500">
                          PNG, JPG or JPEG
                        </p>
                      </div>

                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="hidden"
                      />
                    </label>

                    {logo && (
                      <p className="text-sm text-green-600 mt-2">
                        Selected: {logo.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  Business Address
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="street"
                    placeholder="Street Address"
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

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Business Profile"}
                {!loading && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />

      {/* Input Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #d1d5db;
          border-radius: 14px;
          outline: none;
          background: white;
          color: #111827;
          transition: all 0.2s ease;
        }

        .input:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
        }

        .input::placeholder {
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}