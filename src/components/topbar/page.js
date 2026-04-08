"use client";
import { useEffect, useState } from "react";

export default function Topbar({ toggleSidebar }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("businessProfile"));
    if (data) setProfile(data);
  }, []);

  return (
    <header className="bg-white shadow px-6 py-3 flex justify-between">
      <button onClick={toggleSidebar} className="md:hidden">☰</button>

      <div>
        <h2 className="font-semibold">{profile?.businessName}</h2>
        <p className="text-sm text-gray-500">Billing Dashboard</p>
      </div>

      <div>Welcome, <span className="text-blue-600">{profile?.ownerName}</span></div>
    </header>
  );
}
