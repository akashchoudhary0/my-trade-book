"use client";

import { useState } from "react";
import { Users, FileText, BarChart3, PlusCircle, Settings, Home } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="px-6 py-4 border-b">
          <h1 className="text-2xl font-bold text-blue-600">My Trade Book</h1>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-3">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left transition ${
              activeTab === "dashboard"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Home className="w-5 h-5" /> Dashboard
          </button>
          <button
            onClick={() => setActiveTab("customers")}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left transition ${
              activeTab === "customers"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Users className="w-5 h-5" /> Customers
          </button>
          <button
            onClick={() => setActiveTab("invoices")}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left transition ${
              activeTab === "invoices"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <FileText className="w-5 h-5" /> Invoices
          </button>
          <button
            onClick={() => setActiveTab("reports")}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left transition ${
              activeTab === "reports"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="w-5 h-5" /> Reports
          </button>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center gap-3 px-4 py-2 rounded-xl w-full text-left transition ${
              activeTab === "settings"
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>
        <div className="p-4 border-t">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {/* Stats Section */}
        <div className="grid gap-6 md:grid-cols-4 mb-10">
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center">
            <Users className="w-10 h-10 text-blue-600 mr-4" />
            <div>
              <p className="text-gray-500">Customers</p>
              <h2 className="text-2xl font-bold">120</h2>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center">
            <FileText className="w-10 h-10 text-green-600 mr-4" />
            <div>
              <p className="text-gray-500">Invoices</p>
              <h2 className="text-2xl font-bold">85</h2>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center">
            <BarChart3 className="w-10 h-10 text-purple-600 mr-4" />
            <div>
              <p className="text-gray-500">Revenue</p>
              <h2 className="text-2xl font-bold">₹2,45,000</h2>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 flex items-center">
            <PlusCircle className="w-10 h-10 text-orange-600 mr-4" />
            <div>
              <p className="text-gray-500">Pending</p>
              <h2 className="text-2xl font-bold">12</h2>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-4 mb-10">
          <a href="/invoice" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 flex items-center gap-2">
            <PlusCircle className="w-5 h-5" /> New Invoice
          </a>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 flex items-center gap-2">
            <Users className="w-5 h-5" /> Add Customer
          </button>
        </div>

        {/* Recent Invoices */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Recent Invoices</h2>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              View All
            </button>
          </div>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-3 text-gray-600">Invoice ID</th>
                <th className="p-3 text-gray-600">Customer</th>
                <th className="p-3 text-gray-600">Amount</th>
                <th className="p-3 text-gray-600">Status</th>
                <th className="p-3 text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">#INV-1001</td>
                <td className="p-3">Amit Sharma</td>
                <td className="p-3">₹15,000</td>
                <td className="p-3 text-green-600">Paid</td>
                <td className="p-3">Aug 20, 2025</td>
              </tr>
              <tr className="border-b hover:bg-gray-50">
                <td className="p-3">#INV-1002</td>
                <td className="p-3">Priya Verma</td>
                <td className="p-3">₹8,500</td>
                <td className="p-3 text-yellow-600">Pending</td>
                <td className="p-3">Aug 18, 2025</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-3">#INV-1003</td>
                <td className="p-3">Rohan Mehta</td>
                <td className="p-3">₹22,000</td>
                <td className="p-3 text-red-600">Overdue</td>
                <td className="p-3">Aug 15, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
