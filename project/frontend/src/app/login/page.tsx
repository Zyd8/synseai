'use client';
import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('Login attempt:', { username, password });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Logo Centered on Top */}
      <div className="mb-8">
        <img
          src="/logo/full_logo.png"
          alt="SynseAI"
          className="h-auto w-48 mx-auto"
        />
      </div>

      {/* Main content below the logo */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left - Login Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <form className="space-y-6">
            {/* Username */}
            <div>
              <label className="block text-base font-medium text-red-600">
                USERNAME
              </label>
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="appearance-none w-full px-0 py-3 border-0 
               placeholder-gray-400 text-gray-900 bg-transparent 
               focus:outline-none"
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
              <label className="block text-base font-medium text-red-600">
                PASSWORD
              </label>
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="appearance-none w-full px-0 py-3 border-0 
               placeholder-gray-400 text-gray-900 bg-transparent 
               focus:outline-none"
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

            {/* Forgot Password */}
            <div className="text-left">
              <a className="text-sm text-red-600 hover:text-red-500 font-medium cursor-pointer">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <div
              onClick={handleSubmit}
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md text-sm font-bold text-white bg-red-700 hover:bg-red-800 cursor-pointer"
            >
              LOGIN
            </div>

            {/* Register Link */}
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?{' '}
                <span className="font-medium text-red-600 hover:text-red-500 underline cursor-pointer">
                  Register now
                </span>
              </span>
            </div>
          </form>
        </div>

        {/* Right - Banner */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/loginbanner.png"
            alt="Login Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
