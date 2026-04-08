"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Overview() {
  const router = useRouter();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      router.push("/login"); // protect dashboard
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
    return <p className="text-gray-500">Loading profile...</p>;
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome, {profile?.ownerName}
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">
          {profile?.businessName}
        </h2>

        <p><strong>Email:</strong> {profile?.email}</p>
        <p><strong>Phone:</strong> {profile?.phoneNumber}</p>
        <p><strong>Category:</strong> {profile?.shopCategory}</p>
        <p><strong>GST:</strong> {profile?.gst || "Not Provided"}</p>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Address</h3>
        <p>
          {profile?.address?.street}, {profile?.address?.city}
        </p>
        <p>
          {profile?.address?.district}, {profile?.address?.state}
        </p>
        <p>Pincode: {profile?.address?.pincode}</p>

        <hr className="my-4" />

        <p><strong>Invoice Limit:</strong> {profile?.invoiceLimit}</p>
        <p><strong>Total Invoices:</strong> {profile?.totalInvoice}</p>
      </div>
    </div>
  );
}