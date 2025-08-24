"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("role");
    setRole(storedRole);
  }, []);

  // Menus
  const collabMenu = [
    { href: "/dashboard", icon: "/images/Sidebar_home.png", label: "Home" },
    { href: "/collabapproved", icon: "/images/Folder_check.png", label: "Approved" },
    { href: "/collabinprocess", icon: "/images/folder-send.png", label: "In Process" },
    { href: "/collabrejected", icon: "/images/Folder_del.png", label: "Rejected" },
  ];

  const employeeMenu = [
    { href: "/bpidashboard", icon: "/images/Sidebar_home.png", label: "Home" },
    { href: "/bpiapproved", icon: "/images/Folder_check.png", label: "Approved" },
    { href: "/bpiinprocess", icon: "/images/folder-send.png", label: "In Process" },
    { href: "/bpirejected", icon: "/images/Folder_del.png", label: "Rejected" },
    { href: "/bpifilesviewer", icon: "/images/Folder_del.png", label: "FileViewer" },
    { href: "/companylist", icon: "/images/building-03.png", label: "Collaborators" },
    { href: "/bpifindcollab", icon: "/images/peer-to-peer-02.png", label: "Find Collaborators" },
  ];

  const adminMenu = [
    { href: "/admindashboard", icon: "/images/Sidebar_home.png", label: "Home" },
    { href: "/bpiapproved", icon: "/images/Folder_check.png", label: "Approved" },
    { href: "/bpiinprocess", icon: "/images/folder-send.png", label: "In Process" },
    { href: "/bpirejected", icon: "/images/Folder_del.png", label: "Rejected" },
    { href: "/adminfilesviewer", icon: "/images/Folder_del.png", label: "FileViewer" },
    { href: "/companylist", icon: "/images/building-03.png", label: "Collaborators" },
    { href: "/bpifindcollab", icon: "/images/peer-to-peer-02.png", label: "Find Collaborators" },
  ];

  const menuItems =
    role === "user" ? collabMenu : role === "employee" ? employeeMenu : role === "admin" ? adminMenu : [];

  return (
    <motion.aside
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -250, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
      }}
      className="pl-4 group relative bg-white border-r flex flex-col items-center items-start py-4 space-y-6 h-screen w-20 hover:w-56 transition-all duration-300 overflow-hidden"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 pl-1">
        <img src="/logo/synsei_icon.png" alt="Logo" className="w-10" />
        <span className="text-lg font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Synsei
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 w-[92%]">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg transition-all duration-200
              ${pathname === item.href ? "bg-[#FEC2C5]" : "hover:bg-gray-100"}
              px-2 py-2 w-12 group-hover:w-full`}
          >
            <img src={item.icon} alt={item.label} className="w-8 h-8" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </motion.aside>
  );
}
