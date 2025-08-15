'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { access } from 'fs';

export default function SignupPage() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      const rawText = await response.text();

      let data;
      try {
        data = JSON.parse(rawText);
      } catch {
        console.error("Non-JSON response received:", rawText);
        throw new Error("Server did not return JSON. Check the API endpoint.");
      }

      if (!response.ok) {
        throw new Error(data.message || "Registration failed.");
      }

      if (data.access_token) {
        sessionStorage.setItem("access_token", data.access_token);
        alert("Registration successful!");
      } else {
        alert("Registration succeeded, but no token received.");
      }

    } catch (err: any) {
      console.error("Registration error:", err);
      alert(err.message || "An error occurred during registration.");
    }



  };




  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6 sm:py-8">
      {/* Logo Centered on Top */}
      <div className="mb-6 sm:mb-8">
        <img
          src="/logo/main_logo.png"
          alt="SynseAI"
          className="h-auto w-32 sm:w-40 md:w-48 mx-auto pt-6"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">

        {/* Banner - Shows above form on mobile, right side on desktop */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src="/images/loginbanner.png"
            alt="Signup Illustration"
            className="w-full h-auto object-contain max-w-md mx-auto lg:max-w-none"
          />
        </div>

        {/* Signup Form - Shows below banner on mobile, left side on desktop */}
        <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg order-2 lg:order-1 px-6 sm:px-10 lg:px-8 py-2 ">
          <div className="space-y-6">

            {/* First Name and Last Name in one row */}
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                  FIRST NAME
                </label>
                <div className="relative w-full group">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="appearance-none w-full px-0 py-3 border-0 
                      placeholder-gray-400 text-gray-900 bg-transparent 
                      focus:outline-none text-sm sm:text-base"
                  />

                  {/* Base underline */}
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                  {/* Red animated underline */}
                  <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                  LAST NAME
                </label>
                <div className="relative w-full group">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="appearance-none w-full px-0 py-3 border-0 
                      placeholder-gray-400 text-gray-900 bg-transparent 
                      focus:outline-none text-sm sm:text-base"
                  />

                  {/* Base underline */}
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                  {/* Red animated underline */}
                  <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                EMAIL
              </label>
              <div className="relative w-full group">
                <input
                  type="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="appearance-none w-full px-0 py-3 border-0 
                    placeholder-gray-400 text-gray-900 bg-transparent 
                    focus:outline-none text-sm sm:text-base"
                />

                {/* Base underline */}
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                {/* Red animated underline */}
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                  transition-transform duration-300 ease-in-out 
                  origin-center scale-x-0 w-full 
                  group-focus-within:scale-x-100" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                PASSWORD
              </label>
              <div className="relative w-full group">
                <input
                  type="password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="appearance-none w-full px-0 py-3 border-0 
                    placeholder-gray-400 text-gray-900 bg-transparent 
                    focus:outline-none text-sm sm:text-base"
                />

                {/* Base underline */}
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                {/* Red animated underline */}
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                  transition-transform duration-300 ease-in-out 
                  origin-center scale-x-0 w-full 
                  group-focus-within:scale-x-100" />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                CONFIRM PASSWORD
              </label>
              <div className="relative w-full group">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="appearance-none w-full px-0 py-3 border-0 
                    placeholder-gray-400 text-gray-900 bg-transparent 
                    focus:outline-none text-sm sm:text-base"
                />

                {/* Base underline */}
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />

                {/* Red animated underline */}
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] 
                  transition-transform duration-300 ease-in-out 
                  origin-center scale-x-0 w-full 
                  group-focus-within:scale-x-100" />
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 sm:mt-15 w-full flex justify-center py-3 sm:py-3 px-3 border border-transparent 
                rounded-md text-sm font-bold text-white bg-[#B11016] hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg"
            >
              SIGN UP
            </button>

            {/* Login Link */}
            <div className="text-center pt-0">
              <span className="text-sm sm:text-md text-gray-600">
                Already have an account?{' '}
                <span className="font-medium text-[#B11016] hover:text-red-500 underline cursor-pointer transition-colors duration-200">
                  <Link href="/login">Log In</Link>
                </span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}