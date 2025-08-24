'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Replace with your actual API base URL
  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  // Check authentication status by validating token with server
  const checkAuthStatus = async () => {
    const token = sessionStorage.getItem("access_token");
    if (!token) {
      setIsLoggedIn(false);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/protected`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsLoggedIn(true);
      } else {
        // Mark as logged out, but keep token until CompanyProtectedRoute checks
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      // On error, assume not logged in and remove potentially invalid token
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial auth check
  useEffect(() => {
    checkAuthStatus();
  }, [API]);

  // Listen for storage changes (when user logs in/out in another tab)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'access_token') {
        checkAuthStatus();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Listen for focus events (when user returns to tab after logging in)
  useEffect(() => {
    const handleFocus = () => {
      checkAuthStatus();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  // Check auth status periodically (every 30 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      const token = sessionStorage.getItem("access_token");
      if (token) {
        checkAuthStatus();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("access_token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-[#B11016] px-8 sm:px-14 py-5 sticky top-0 z-50 shadow-xl">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center mt-1">
          <Image
            src="/logo/synseai_logo.png"
            alt="SynseAI Logo"
            width={100}
            height={20}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-md">
          <Link href="/" className="text-white hover:underline ">
            Home
          </Link>
          <button
            onClick={() => {
              const role = sessionStorage.getItem("role");
              if (role === "employee") {
                router.push("/bpidashboard");
              } else if (role === "admin") {
                router.push("/admindashboard");
              } else {
                router.push("/dashboard");
              }
            }}
            className="text-white hover:underline"
          >
            Dashboard
          </button>

          {/* Conditional Login/Logout with loading state */}
          {isLoading ? (
            <div className="bg-white text-[#B11016] font-bold px-6 py-1.5 rounded-md text-md opacity-50">
              Loading
            </div>
          ) : isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-[#B11016] font-bold px-6 py-1.5 rounded-md text-md hover:bg-[#B11016] hover:text-white hover:border-white transition"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-white text-[#B11016] font-bold px-6 py-1.5 rounded-md text-md hover:bg-[#B11016] hover:text-white hover:border-white transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Click-outside area */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden" aria-hidden="true" />
      )}

      {/* Slide-out Drawer */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 h-full w-3/5 bg-[#B11016] p-6 transform transition-transform duration-300 ease-in-out z-40 shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col gap-6 mt-16">
          <Link href="/" className="text-white font-bold" onClick={closeMenu}>
            Home
          </Link>
          <button
            onClick={() => {
              const role = sessionStorage.getItem("role");
              if (role === "employee") {
                router.push("/bpidashboard");
              } else if (role === "admin") {
                router.push("/admindashboard");
              } else {
                router.push("/dashboard");
              }
              closeMenu();
            }}
            className="text-white font-bold"
          >
            Dashboard
          </button>

          {/* Conditional Login/Logout in mobile menu with loading state */}
          {isLoading ? (
            <div className="bg-white text-[#B11016] font-bold px-4 py-2 rounded-lg text-[1.05rem] opacity-50">
              Loading
            </div>
          ) : isLoggedIn ? (
            <button
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="bg-white text-[#B11016] font-bold px-4 py-2 rounded-lg text-[1.05rem]"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-white text-[#B11016] font-bold px-4 py-2 rounded-lg text-[1.05rem]"
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}