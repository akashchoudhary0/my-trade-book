"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function AccountSetup() {
  const router = useRouter();

  const [vendorId, setVendorId] = useState(null);

  // ⭐ Load vendor data from localStorage
  useEffect(() => {
    const vendorData = JSON.parse(localStorage.getItem("vendor"));
    if (!vendorData) {
      alert("No vendor session found! Please signup again.");
      router.push("/signup");
      return;
    }
    setVendorId(vendorData.vendorId);
  }, []);

  const [formData, setFormData] = useState({
    businessName: "",
    phoneNumber: "",
    gst: "",
    shopCategory: "",
    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
    logo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setFormData({ ...formData, logo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!vendorId) {
      alert("Vendor ID missing! Please try again.");
      return;
    }

    try {
      // Payload for backend
      const payload = {
        businessName: formData.businessName,
        businessLogo: formData.logo ? formData.logo.name : "",
        gst: formData.gst,
        phoneNumber: formData.phoneNumber,
        shopCategory: formData.shopCategory,
        vendorId: vendorId,
        address: {
          street: formData.street,
          city: formData.city,
          district: formData.district,
          state: formData.state,
          pincode: formData.pincode,
        },
      };

      const res = await axios.post("http://localhost:5000/api/business-profiles", payload);
      
      const businessProfile = res.data.businessProfile;

      localStorage.setItem("businessProfile", JSON.stringify({
        businessProfileId: businessProfile._id
      }));


      alert("Business profile created successfully!");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error creating business profile:", error.response?.data);
      alert("Failed to create business profile.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
            Business Setup
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Business Name */}
            <div>
              <label className="block mb-1 font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                placeholder="Enter business name"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-1 font-medium">Contact Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Enter contact number"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* GST Number */}
            <div>
              <label className="block mb-1 font-medium">GST Number (Optional)</label>
              <input
                type="text"
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                placeholder="Enter GST number"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Shop Category */}
            <div>
              <label className="block mb-1 font-medium">Shop Category</label>
              <input
                type="text"
                name="shopCategory"
                value={formData.shopCategory}
                onChange={handleChange}
                required
                placeholder="Grocery, Retail, Hardware etc."
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            {/* Address */}
            <div className="grid md:grid-cols-2 gap-4">
              {["street", "city", "district", "state", "pincode"].map((field) => (
                <div key={field}>
                  <label className="block mb-1 font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    placeholder={`Enter ${field}`}
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
              ))}
            </div>

            {/* Logo */}
            <div>
              <label className="block mb-1 font-medium">Business Logo</label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              Submit
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
