'use client';
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function SignupPage() {
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'error' | 'success'>('error');

  // ✅ Success Modal states
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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
        // ✅ Show modal instead of inline message
        setModalMessage("Registration successful! Redirecting you to login...");
        setShowSuccessModal(true);

        setTimeout(() => router.push("/login"), 2500);
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

  const handleCloseModal = () => setShowSuccessModal(false);

  // ✅ Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6 sm:py-8">
      {/* Logo */}
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-6 sm:mb-8">
        <img src="/logo/main_logo.png" alt="SynseAI" className="h-auto w-32 sm:w-40 md:w-48 mx-auto pt-6" />
      </motion.div>

      {/* Main content */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
        {/* Banner */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 order-1 lg:order-2">
          <motion.img src="/images/loginbanner.png" alt="Signup Illustration" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="w-full h-auto object-contain max-w-md mx-auto lg:max-w-none" />
        </motion.div>

        {/* Signup Form */}
        <motion.div variants={itemVariants} className="w-full lg:w-1/2 max-w-md lg:max-w-lg order-2 lg:order-1 px-6 sm:px-10 lg:px-8 py-2 ">
          <motion.div variants={containerVariants} className="space-y-6">
            {/* Error Message only (success handled in modal) */}
            {message && messageType === "error" && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="px-4 py-2 rounded-md text-white text-sm sm:text-base font-medium bg-red-500">
                {message}
              </motion.div>
            )}

            {/* First + Last Name */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#B11016] mb-2">FIRST NAME</label>
                <div className="relative w-full group">
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter first name" className="w-full py-3 placeholder-gray-400 text-gray-900 focus:outline-none" />
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                  <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#B11016] mb-2">LAST NAME</label>
                <div className="relative w-full group">
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter last name" className="w-full py-3 placeholder-gray-400 text-gray-900 focus:outline-none" />
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                  <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#B11016] mb-2">EMAIL</label>
              <div className="relative w-full group">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full py-3 placeholder-gray-400 text-gray-900 focus:outline-none" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#B11016] mb-2">PASSWORD</label>
              <div className="relative w-full group">
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full py-3 placeholder-gray-400 text-gray-900 focus:outline-none" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Confirm Password */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-medium text-[#B11016] mb-2">CONFIRM PASSWORD</label>
              <div className="relative w-full group">
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm your password" className="w-full py-3 placeholder-gray-400 text-gray-900 focus:outline-none" />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#B11016] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Signup Button */}
            <motion.button type="button" onClick={handleSubmit} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8 w-full py-3 rounded-md font-bold text-white bg-[#B11016] hover:bg-white hover:text-[#B11016] hover:border-[#B11016] border transition-all">
              SIGN UP
            </motion.button>

            {/* Login Link */}
            <motion.div variants={itemVariants} className="text-center pt-0">
              <span className="text-sm text-gray-600">
                Already have an account?{" "}
                <span className="font-medium text-[#B11016] hover:text-red-500 underline cursor-pointer">
                  <Link href="/login">Log In</Link>
                </span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ✅ Success Modal with Confetti */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Confetti show={showSuccessModal} />
            <motion.div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleCloseModal} />
            <motion.div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}>
              <div className="p-8 text-center">
                <div className="relative mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <motion.div className="absolute inset-0 bg-green-200 rounded-full" animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }} />
                  <motion.div className="absolute inset-0 bg-green-200 rounded-full" animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }} />
                  <FaCheckCircle className="text-green-600 text-2xl relative z-10" />
                </div>
                <motion.h3 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</motion.h3>
                <motion.p className="text-gray-600 mb-8">{modalMessage}</motion.p>
                <motion.div>
                  <button onClick={handleCloseModal} className="w-full bg-[#B11016] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#800b10]">Continue</button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ✅ Reuse the same Confetti component from Login */
type Particle = {
  id: number;
  x: number;
  rotation: number;
  color: string;
  size: number;
  drift: number;
};

const Confetti = ({ show }: { show: boolean }) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (show) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        rotation: Math.random() * 360,
        color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#a29bfe', '#fd79a8', '#00b894', '#e84393'][Math.floor(Math.random() * 9)],
        size: Math.random() * 8 + 4,
        drift: (Math.random() - 0.5) * 2,
      }));
      setParticles(newParticles);

      const timer = setTimeout(() => setParticles([]), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {particles.map((p) => (
        <motion.div key={p.id} className="absolute rounded-sm" style={{ backgroundColor: p.color, width: `${p.size}px`, height: `${p.size}px`, left: `${p.x}%` }}
          initial={{ y: -20, opacity: 1 }}
          animate={{ y: window.innerHeight + 100, x: p.drift * 100, rotate: 720, opacity: 0 }}
          transition={{ duration: 3, ease: "easeOut", delay: Math.random() * 0.5 }}
        />
      ))}
    </div>
  );
};
