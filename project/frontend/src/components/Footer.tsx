"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white px-6 py-10 md:px-16 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Left - Branding */}
        <div>
          <h1 className="text-2xl font-bold">
            Synse<span className="text-yellow-400">AI</span>
          </h1>
          <p className="text-sm mt-4">
            Copyright (C) 2025. All Rights Reserved.
          </p>
        </div>

        {/* Middle - Tagline */}
        <div>
          <p className="font-semibold">
            SynseAI: Empowering BPI with Smart Synergy and Ecosystem Collaboration
          </p>
          <hr className="my-3 border-gray-300" />
          <p className="italic text-sm">
            An Entry to the BPI DATA Wave 2025 Hackathon
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/partners" className="hover:underline">Partners</Link></li>
            <li><Link href="/synergy" className="hover:underline">Synergy</Link></li>
          </ul>
        </div>

        {/* Socials + CTA */}
        <div>
          <h3 className="font-semibold mb-3">Socials</h3>
          <div className="flex space-x-4 text-xl">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaInstagram /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaYoutube /></Link>
          </div>
          <div className="mt-5">
            <Link 
              href="/partners"
              className="bg-white text-red-700 font-semibold px-6 py-2 rounded-md shadow-md hover:bg-gray-200 transition"
            >
              PARTNER NOW
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
