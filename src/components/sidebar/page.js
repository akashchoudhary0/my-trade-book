"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const pathname = usePathname();

  const menu = [
    { name: "Overview", path: "/dashboard/overview" },
    { name: "Create Invoice", path: "/dashboard/invoice" },
    { name: "Add Product", path: "/dashboard/add-product" },
    { name: "View Sales", path: "/dashboard/sales" },
    { name: "Profile", path: "/dashboard/profile" },
    { name: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">My TradeBook</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white md:hidden"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="p-6 flex flex-col gap-2">
          {menu.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => {
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className={`block px-4 py-2 rounded-lg ${
                pathname === item.path
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Sign Out */}
        <div className="px-6 mt-auto pb-6">
          <button className="w-full py-2 bg-red-500 rounded-lg hover:bg-red-600">
            Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
