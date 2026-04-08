"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: "",
    email: "",
    businessName: "",
    phoneNumber: "",
    gst: "",
    shopCategory: "",
    businessLogo: null,

    street: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  });

  const [preview, setPreview] = useState(null);

  // ==========================
  // Fetch Profile
  // ==========================
  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/auth/${userId}`
        );

        if (res.data.success) {
          const profile = res.data.profile;

          setFormData({
            ownerName: profile.ownerName || "",
            email: profile.email || "",
            businessName: profile.businessName || "",
            phoneNumber: profile.phoneNumber || "",
            gst: profile.gst || "",
            shopCategory: profile.shopCategory || "",
            businessLogo: null,

            street: profile.address?.street || "",
            city: profile.address?.city || "",
            district: profile.address?.district || "",
            state: profile.address?.state || "",
            pincode: profile.address?.pincode || "",
          });

          if (profile.businessLogo) {
            setPreview(
              `http://localhost:5000${profile.businessLogo}`
            );
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  // ==========================
  // Handle Change
  // ==========================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFormData({
        ...formData,
        businessLogo: file,
      });

      setPreview(URL.createObjectURL(file));
    }
  };

  // ==========================
  // Update Profile
  // ==========================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    if (!userId) return;

    const form = new FormData();

    form.append("ownerName", formData.ownerName);
    form.append("email", formData.email);
    form.append("businessName", formData.businessName);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("gst", formData.gst);
    form.append("shopCategory", formData.shopCategory);

    form.append(
      "address",
      JSON.stringify({
        street: formData.street,
        city: formData.city,
        district: formData.district,
        state: formData.state,
        pincode: formData.pincode,
      })
    );

    if (formData.businessLogo) {
      form.append("businessLogo", formData.businessLogo);
    }

    try {
      setSaving(true);

      const res = await axios.put(
        `http://localhost:5000/api/auth/${userId}`,
        form
      );

      if (res.data.success) {
        router.push("/dashboard/overview");
      } else {
        alert("Update failed");
      }

    } catch (error) {
      console.log(error);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        Edit Business Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        {preview && (
          <img
            src={preview}
            alt="Logo"
            className="h-24 rounded border"
          />
        )}

        <input type="file" onChange={handleLogoChange} />

        <div className="grid md:grid-cols-2 gap-4">
          <input name="ownerName" value={formData.ownerName} onChange={handleChange} placeholder="Owner Name" className="input"/>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input"/>
          <input name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business Name" className="input"/>
          <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="input"/>
          <input name="gst" value={formData.gst} onChange={handleChange} placeholder="GST" className="input"/>
          <input name="shopCategory" value={formData.shopCategory} onChange={handleChange} placeholder="Shop Category" className="input"/>

          <input name="street" value={formData.street} onChange={handleChange} placeholder="Street" className="input"/>
          <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="input"/>
          <input name="district" value={formData.district} onChange={handleChange} placeholder="District" className="input"/>
          <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="input"/>
          <input name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="input md:col-span-2"/>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          {saving ? "Updating..." : "Update Profile"}
        </button>
      </form>

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}