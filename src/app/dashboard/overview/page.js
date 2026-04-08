"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function OverviewPage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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
          setProfile(res.data.profile);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!profile) {
    return <div className="p-8">No Profile Data Found</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* ================= Header ================= */}
      <div className="bg-white rounded-xl shadow-sm border p-6 flex items-center gap-6 mb-8">

        {/* Logo */}
        {profile.businessLogo && (
          <img
            src={`http://localhost:5000${profile.businessLogo}`}
            alt="Business Logo"
            className="h-20 w-20 object-cover rounded-lg border"
          />
        )}

        <div>
          <h1 className="text-2xl font-bold">
            {profile.businessName || ""}
          </h1>
          <p className="text-gray-600">
            Owner: {profile.ownerName || ""}
          </p>
        </div>
      </div>

      {/* ================= Business Details ================= */}
      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">
            Contact Information
          </h3>

          <div className="space-y-2 text-gray-700">
            {profile.email && <p><strong>Email:</strong> {profile.email}</p>}
            {profile.phoneNumber && <p><strong>Phone:</strong> {profile.phoneNumber}</p>}
            {profile.gst && <p><strong>GST:</strong> {profile.gst}</p>}
            {profile.shopCategory && (
              <p><strong>Category:</strong> {profile.shopCategory}</p>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">
            Business Address
          </h3>

          <div className="space-y-2 text-gray-700">
            {profile.address?.street && <p>{profile.address.street}</p>}
            {profile.address?.city && <p>{profile.address.city}</p>}
            {profile.address?.district && <p>{profile.address.district}</p>}
            {profile.address?.state && <p>{profile.address.state}</p>}
            {profile.address?.pincode && <p>{profile.address.pincode}</p>}
          </div>
        </div>

      </div>

    </div>
  );
}