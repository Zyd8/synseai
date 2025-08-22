'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function LoginPage() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'error' | 'success'>('error');

  const router = useRouter();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Validate empty fields
    if (!email.trim() || !password.trim()) {
      setMessage("Please fill in all required fields.");
      setMessageType("error");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.access_token) {
        // ✅ Store access token
        sessionStorage.setItem("access_token", data.access_token);

        // ✅ Store complete user data
        if (data.user) {
          sessionStorage.setItem("user", JSON.stringify(data.user));
          sessionStorage.setItem("user_id", data.user.id.toString());

          if (data.user.department_id !== null && data.user.department_id !== undefined) {
            sessionStorage.setItem("department_id", data.user.department_id.toString());
          }
        }

        const role = data.user?.role;

        if (role) {
          sessionStorage.setItem("role", role);
          setMessage("Login successful!");
          setMessageType("success");

          // ✅ Check company info before redirecting
          const token = data.access_token;
          const companyRes = await fetch(`${API}/api/company`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (!companyRes.ok) {
            console.warn("Company fetch failed with status:", companyRes.status);
            router.replace("/collabhome"); 
            return;
          }

          setTimeout(() => {
            if (role === "user") router.push("/dashboard");
            else if (role === "employee") router.push("/bpidashboard");
            else router.push("/collabhome");
          }, 800);
        } else {
          setMessage("No role found, redirecting...");
          setMessageType("error");
          setTimeout(() => router.push("/collabhome"), 1000);
        }
      } else {
        setMessage(data.message || "Login failed. Please check your credentials.");
        setMessageType("error");
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setMessage(err.message || "An error occurred during login.");
      setMessageType("error");
    }
  };


  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <img
          src="/logo/main_logo.png"
          alt="SynseAI"
          className="h-auto w-32 sm:w-40 md:w-48 mx-auto pt-6"
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">

        {/* Banner */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src="/images/loginbanner.png"
            alt="Login Illustration"
            className="w-full h-auto object-contain max-w-md mx-auto lg:max-w-none"
          />
        </div>

        {/* Login Form */}
        <div className="w-full lg:w-1/2 max-w-md lg:max-w-lg order-2 lg:order-1 px-6 sm:px-10 lg:px-8 py-2 ">
          <div className="space-y-6">

            {/* Message Box */}
            {message && (
              <div
                className={`px-4 py-2 rounded-md text-white text-sm sm:text-base font-medium ${messageType === "error" ? "bg-red-500" : "bg-green-500"
                  }`}
              >
                {message}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">
                EMAIL
              </label>
              <div className="relative w-full group">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base"
                />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base"
                />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
              </div>
            </div>

            {/* Forgot Password */}
            <div className="text-left mt-0">
              <a className="text-sm sm:text-md text-[#B11016] hover:text-red-500 font-medium cursor-pointer transition-colors duration-200">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="mt-8 sm:mt-15 w-full flex justify-center py-3 sm:py-3 px-3 border border-transparent rounded-md text-sm font-bold text-white bg-[#B11016] hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg"
            >
              LOGIN
            </button>

            {/* Register Link */}
            <div className="text-center pt-0">
              <span className="text-sm sm:text-md text-gray-600">
                Don't have an account?{' '}
                <span className="font-medium text-[#B11016] hover:text-red-500 underline cursor-pointer transition-colors duration-200">
                  <Link href="/signup">Register now</Link>
                </span>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
