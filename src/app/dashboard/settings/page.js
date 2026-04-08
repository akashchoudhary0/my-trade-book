"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    businessName: "Urban Threads",
    gstEnabled: true,
    invoicePrefix: "INV-2025-",
    currency: "INR ₹",
    showLogo: true,
    footerText: "Thank you for your purchase!",
    emailNotifications: true,
    lowStockAlert: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-8"
      >
        {/* General Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            General Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={settings.businessName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="gstEnabled"
                checked={settings.gstEnabled}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label>Enable GST Billing</label>
            </div>

            <div>
              <label className="block font-medium">Invoice Prefix</label>
              <input
                type="text"
                name="invoicePrefix"
                value={settings.invoicePrefix}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="block font-medium">Currency</label>
              <select
                name="currency"
                value={settings.currency}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option>INR ₹</option>
                <option>USD $</option>
                <option>EUR €</option>
              </select>
            </div>
          </div>
        </section>

        {/* Invoice Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Invoice Settings
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="showLogo"
                checked={settings.showLogo}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label>Show business logo on invoice</label>
            </div>

            <div>
              <label className="block font-medium">Invoice Footer Text</label>
              <input
                type="text"
                name="footerText"
                value={settings.footerText}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Notifications
          </h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label>Send invoice copy to customer via email</label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="lowStockAlert"
                checked={settings.lowStockAlert}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label>Enable low stock alert</label>
            </div>
          </div>
        </section>

        {/* Security */}
        <section>
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">
            Security
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Change Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full border rounded-lg px-4 py-2"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}
