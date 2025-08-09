'use client';
import React, { useState } from 'react';
import Link from "next/link";

export default function SignupPage() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log('Signup attempt:', { firstName, lastName, email, password, confirmPassword });
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
                <label className="block text-sm sm:text-base font-medium text-red-600 mb-2">
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
                  <div className="absolute left-0 bottom-0 h-[2px] bg-red-600 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm sm:text-base font-medium text-red-600 mb-2">
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
                  <div className="absolute left-0 bottom-0 h-[2px] bg-red-600 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-red-600 mb-2">
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
                <div className="absolute left-0 bottom-0 h-[2px] bg-red-600 
                  transition-transform duration-300 ease-in-out 
                  origin-center scale-x-0 w-full 
                  group-focus-within:scale-x-100" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-red-600 mb-2">
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
                <div className="absolute left-0 bottom-0 h-[2px] bg-red-600 
                  transition-transform duration-300 ease-in-out 
                  origin-center scale-x-0 w-full 
                  group-focus-within:scale-x-100" />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-red-600 mb-2">
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
                <div className="absolute left-0 bottom-0 h-[2px] bg-red-600 
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
                <span className="font-medium text-red-600 hover:text-red-500 underline cursor-pointer transition-colors duration-200">
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