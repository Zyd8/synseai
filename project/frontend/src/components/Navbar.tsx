'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#B11016] px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo/synseai_logo.png"
            alt="SynseAI Logo"
            width={150}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-6">
        <Link href="/home" className="text-white hover:underline font-bold">
          Home
        </Link>
        <Link href="/about" className="text-white hover:underline font-bold">
          About
        </Link>
        <Link href="/partners" className="text-white hover:underline font-bold">
          Partners
        </Link>
        
        {/* Login Button */}
        <Link
          href="/login"
          className="bg-white text-[#B11016] font-bold px-4 py-2 rounded-lg text-[1.05rem] hover:bg-gray-100 transition"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
