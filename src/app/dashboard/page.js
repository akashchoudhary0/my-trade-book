"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";


import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Receipt,
  FileText,
  TrendingUp,
  Wallet,
  Users,
  Plus,
  ArrowUpRight,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

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
    return (
      <div className="h-screen flex justify-center items-center bg-slate-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              TradeBook Dashboard
            </h1>
            <p className="text-slate-500">
              Welcome back, {profile?.ownerName}
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl flex items-center gap-2 font-medium shadow">
            <Plus size={18} />
            Create Invoice
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Business Banner */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-28 h-28 rounded-3xl bg-white flex justify-center items-center overflow-hidden shadow-lg">
              {profile?.businessLogo ? (
                <img
                  src={`http://localhost:5000${profile.businessLogo}`}
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Building2 className="w-14 h-14 text-slate-400" />
              )}
            </div>

            <div>
              <h2 className="text-4xl font-bold">
                {profile?.businessName}
              </h2>

              <p className="mt-2 text-blue-100">
                {profile?.shopCategory}
              </p>

              <div className="flex gap-3 mt-4 flex-wrap">
                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">
                  GST: {profile?.gst || "Not Available"}
                </span>

                <span className="bg-green-500 px-4 py-1 rounded-full text-sm">
                  Active Business
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <Receipt className="text-blue-600" size={30} />
              <ArrowUpRight className="text-green-500" />
            </div>

            <h3 className="text-slate-500 mt-4">Total Invoices</h3>

            <p className="text-3xl font-bold text-slate-900 mt-2">
              {profile?.totalInvoice}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <FileText className="text-green-600" size={30} />
              <ArrowUpRight className="text-green-500" />
            </div>

            <h3 className="text-slate-500 mt-4">Invoice Limit</h3>

            <p className="text-3xl font-bold text-slate-900 mt-2">
              {profile?.invoiceLimit}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <Wallet className="text-purple-600" size={30} />
              <ArrowUpRight className="text-green-500" />
            </div>

            <h3 className="text-slate-500 mt-4">Revenue</h3>

            <p className="text-3xl font-bold text-slate-900 mt-2">
              ₹0
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <TrendingUp className="text-orange-600" size={30} />
              <ArrowUpRight className="text-green-500" />
            </div>

            <h3 className="text-slate-500 mt-4">Growth</h3>

            <p className="text-3xl font-bold text-slate-900 mt-2">
              0%
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Business Details */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Business Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Mail className="text-blue-600 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Email</p>
                  <p className="font-medium text-slate-900">
                    {profile?.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="text-green-600 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Phone</p>
                  <p className="font-medium text-slate-900">
                    {profile?.phoneNumber}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Building2 className="text-purple-600 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">Category</p>
                  <p className="font-medium text-slate-900">
                    {profile?.shopCategory}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Receipt className="text-orange-600 mt-1" />
                <div>
                  <p className="text-slate-500 text-sm">GST Number</p>
                  <p className="font-medium text-slate-900">
                    {profile?.gst || "Not Available"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex gap-3">
                <MapPin className="text-red-500 mt-1" />

                <div>
                  <p className="text-slate-500 text-sm mb-1">
                    Business Address
                  </p>

                  <p className="text-slate-900">
                    {profile?.address?.street}
                  </p>

                  <p className="text-slate-900">
                    {profile?.address?.city},{" "}
                    {profile?.address?.district}
                  </p>

                  <p className="text-slate-900">
                    {profile?.address?.state} -{" "}
                    {profile?.address?.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">
              Quick Actions
            </h2>
<div className="space-y-4">

  <Link
    href="/invoice/create"
    className="block w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl font-medium transition"
  >
    ➕ Create New Invoice
  </Link>

  <Link
    href="/dashboard/inventory"
    className="block w-full bg-green-600 hover:bg-green-700 text-white p-4 rounded-2xl font-medium transition"
  >
    📦 Manage Inventory
  </Link>

  <Link
    href="/dashboard/reports"
    className="block w-full bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-2xl font-medium transition"
  >
    📊 View Reports
  </Link>

  <Link
    href="/dashboard/settings"
    className="block w-full bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-2xl font-medium transition"
  >
    ⚙️ Business Settings
  </Link>

</div>

            <div className="mt-8 bg-slate-50 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="text-blue-600" size={20} />
                <h3 className="font-semibold">
                  Subscription Status
                </h3>
              </div>

              <p className="text-sm text-slate-600">
                Free Plan Active
              </p>

              <div className="mt-3 w-full h-3 bg-slate-200 rounded-full">
                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{
                    width: `${
                      profile?.invoiceLimit
                        ? (profile.totalInvoice /
                            profile.invoiceLimit) *
                          100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <p className="text-xs text-slate-500 mt-2">
                {profile?.totalInvoice}/{profile?.invoiceLimit} invoices used
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}