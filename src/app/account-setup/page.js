"use client";

import { useState } from "react";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import { Button } from "@/components/ui/button";

export default function AccountSetup() {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    contactNumber: "",
    gstNumber: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Business Data:", formData);
    // TODO: Save to DB & redirect to Pricing Page
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gray-50 px-6">
        <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6 text-center">Business Setup</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block mb-1 font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Business Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">GST Number (Optional)</label>
              <input
                type="text"
                name="gstNumber"
                value={formData.gstNumber}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

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
              Continue to Subscription
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
