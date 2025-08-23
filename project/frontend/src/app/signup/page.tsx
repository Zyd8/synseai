'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SignupPage() {
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'error' | 'success'>('error');

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      setMessage("Please fill in all required fields.");
      setMessageType("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setMessageType("error");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setMessageType("error");
      return;
    }

    try {
      const response = await fetch(`${API}/api/auth/register`, {
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
        setMessage("Server did not return JSON. Check the API endpoint.");
        setMessageType("error");
        return;
      }

      if (!response.ok) {
        setMessage(data.message || "Registration failed.");
        setMessageType("error");
        return;
      }

      if (data.access_token) {
        setMessage("Registration successful! Please log in.");
        setMessageType("success");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setMessage("Registration succeeded, but no token received.");
        setMessageType("error");
      }

    } catch (err: any) {
      console.error("Registration error:", err);
      setMessage(err.message || "An error occurred during registration.");
      setMessageType("error");
    }
  };

  // ✅ Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6 sm:py-8">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-6 sm:mb-8"
      >
        <img src="/logo/main_logo.png" alt="SynseAI" className="h-auto w-32 sm:w-40 md:w-48 mx-auto pt-6" />
      </motion.div>

      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8"
      >
        {/* Banner */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 order-1 lg:order-2">
          <motion.img
            src="/images/loginbanner.png"
            alt="Signup Illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-auto object-contain max-w-md mx-auto lg:max-w-none"
          />
        </motion.div>

        {/* Signup Form */}
        <motion.div
          variants={itemVariants}
          className="w-full lg:w-1/2 max-w-md lg:max-w-lg order-2 lg:order-1 px-6 sm:px-10 lg:px-8 py-2 "
        >
          <motion.div variants={containerVariants} className="space-y-6">
            {/* Message Box */}
            {message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`px-4 py-2 rounded-md text-white text-sm sm:text-base font-medium ${
                  messageType === "error" ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {message}
              </motion.div>
            )}

            {/* First Name and Last Name */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">FIRST NAME</label>
                <div className="relative w-full group">
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base" />
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                  <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
                </div>
              </div>
              <div>
                <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">LAST NAME</label>
                <div className="relative w-full group">
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base" />
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                  <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">EMAIL</label>
              <div className="relative w-full group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">PASSWORD</label>
              <div className="relative w-full group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
              </div>
            </motion.div>

            {/* Confirm Password */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-2">CONFIRM PASSWORD</label>
              <div className="relative w-full group">
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="appearance-none w-full px-0 py-3 border-0 placeholder-gray-400 text-gray-900 bg-transparent focus:outline-none text-sm sm:text-base" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] transition-transform duration-300 ease-in-out origin-center scale-x-0 w-full group-focus-within:scale-x-100" />
              </div>
            </motion.div>

            {/* Signup Button */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 sm:mt-15 w-full flex justify-center py-3 sm:py-3 px-3 border border-transparent rounded-md text-sm font-bold text-white bg-[#B11016] hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out text-base sm:text-lg"
            >
              SIGN UP
            </motion.button>

            {/* Login Link */}
            <motion.div variants={itemVariants} className="text-center pt-0">
              <span className="text-sm sm:text-md text-gray-600">
                Already have an account?{" "}
                <span className="font-medium text-[#B11016] hover:text-red-500 underline cursor-pointer transition-colors duration-200">
                  <Link href="/login">Log In</Link>
                </span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
