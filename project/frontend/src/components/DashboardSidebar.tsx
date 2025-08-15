"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-20 bg-white border-r flex flex-col items-center py-4 space-y-6 h-screen">
      {/* Logo */}
      <img src="/logo/synsei_icon.png" alt="Logo" className="w-10" />

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        <button
          className={`p-2 rounded-lg ${
            pathname === "/dashboard" ? "bg-[#FEC2C5]" : ""
          }`}
        >
          <img src="/images/Sidebar_home.png" alt="Home" className="w-8 h-8" />
        </button>

        <button
          className={`p-2 rounded-lg ${
            pathname === "/approvedpage" ? "bg-[#FEC2C5]" : ""
          }`}
        >
          <img
            src="/images/Folder_check.png"
            alt="Proposals"
            className="w-8 h-8"
          />
        </button>

        <button className="p-2 rounded-lg">
          <img
            src="/images/Folder_del.png"
            alt="Deleted"
            className="w-8 h-8"
          />
        </button>
      </nav>
    </aside>
  );
}
