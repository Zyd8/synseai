'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close menu if clicked outside the drawer
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
    <nav className="w-full bg-[#B11016] px-8 sm:px-14 py-5 relative z-50">
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
          <Link href="/home" className="text-white hover:underline ">
            Home
          </Link>
          <Link href="/about" className="text-white hover:underline ">
            About
          </Link>
          <Link href="/partners" className="text-white hover:underline ">
            Partners
          </Link>
          <Link
            href="/login"
            className="bg-white text-[#B11016] font-bold px-6 py-1.5 border-1 rounded-md text-md hover:bg-[#B11016] hover:text-white hover:border-white transition"
          >
            Login
          </Link>
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
        className={`fixed top-0 right-0 h-full w-3/5 bg-[#B11016] p-6 transform transition-transform duration-300 ease-in-out z-40 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 mt-16">
          <Link href="/home" className="text-white font-bold" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className="text-white font-bold" onClick={closeMenu}>
            About
          </Link>
          <Link href="/partners" className="text-white font-bold" onClick={closeMenu}>
            Partners
          </Link>
          <Link
            href="/login"
            className="bg-white text-[#B11016] font-bold px-4 py-2 rounded-lg text-[1.05rem]"
            onClick={closeMenu}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
