'use client';
import React, { useState, useEffect, MouseEvent } from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

export default function LoginPage() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'error' | 'success'>('error');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [userRole, setUserRole] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
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

    try {
      const response = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.access_token) {
        sessionStorage.setItem("access_token", data.access_token);

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
          setUserRole(role);
          
          // Show success modal instead of immediate message
          setModalMessage("Login successful! Welcome back!");
          setShowSuccessModal(true);

          const token = data.access_token;
          const companyRes = await fetch(`${API}/api/company`, {
            headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
          });

          // Handle navigation after modal closes
          setTimeout(() => {
            if (!companyRes.ok) {
              router.replace("/collabhome");
              return;
            }

            if (role === "user") router.push("/dashboard");
            else if (role === "employee") router.push("/bpidashboard");
            else if (role === "admin") router.push("/admindashboard");
            else router.push("/collabhome");
          }, 2500); // Slightly longer delay for modal experience
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

  // Handle modal close
  const handleCloseModal = () => {
    setShowSuccessModal(false);
    // Navigation will happen from the setTimeout in handleSubmit
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], } }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-6 sm:py-8">
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], }}
        className="mb-6 sm:mb-8"
      >
        <img
          src="/logo/main_logo.png"
          alt="SynseAI"
          className="h-auto w-32 sm:w-40 md:w-48 mx-auto pt-6"
        />
      </motion.div>

      {/* Content */}
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
            alt="Login Illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], }}
            className="w-full h-auto object-contain max-w-md mx-auto lg:max-w-none"
          />
        </motion.div>

        {/* Login Form */}
        <motion.div 
          variants={itemVariants}
          className="w-full lg:w-1/2 max-w-md lg:max-w-lg order-2 lg:order-1 px-6 sm:px-10 lg:px-8 py-2"
        >
          <motion.div variants={containerVariants} className="space-y-6">
            {/* Error Message (only show error messages here, success will be in modal) */}
            {message && messageType === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-4 py-2 rounded-md text-white text-sm sm:text-base font-medium bg-red-500"
              >
                {message}
              </motion.div>
            )}

            {/* Email */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* Password */}
            <motion.div variants={itemVariants}>
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
            </motion.div>

            {/* Forgot Password */}
            <motion.div variants={itemVariants} className="text-left mt-0">
              <a className="text-sm sm:text-md text-[#B11016] hover:text-red-500 font-medium cursor-pointer transition-colors duration-200">
                Forgot password?
              </a>
            </motion.div>

            {/* Login Button */}
            <motion.button
              type="button"
              onClick={handleSubmit}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 sm:mt-15 w-full flex justify-center py-3 sm:py-3 px-3 border border-transparent rounded-md text-sm font-bold text-white bg-[#B11016] hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out text-base sm:text-lg"
            >
              LOGIN
            </motion.button>

            {/* Register */}
            <motion.div variants={itemVariants} className="text-center pt-0">
              <span className="text-sm sm:text-md text-gray-600">
                Don't have an account?{" "}
                <span className="font-medium text-[#B11016] hover:text-red-500 underline cursor-pointer transition-colors duration-200">
                  <Link href="/signup">Register now</Link>
                </span>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Confetti */}
            <Confetti show={showSuccessModal} />

            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={handleCloseModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Modal */}
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
             

              {/* Modal Content */}
              <div className="p-8 text-center">
                {/* Success Icon with Pulse */}
                <div className="relative mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  {/* Pulse Rings */}
                  <motion.div
                    className="absolute inset-0 bg-green-200 rounded-full"
                    animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-green-200 rounded-full"
                    animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  />
                  <FaCheckCircle className="text-green-600 text-2xl relative z-10" />
                </div>

                {/* Success Title */}
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  Login Successful!
                </motion.h3>

                {/* Success Message */}
                <motion.p
                  className="text-gray-600 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {modalMessage}
                </motion.p>

                

                {/* Action Button */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <button
                    onClick={handleCloseModal}
                    className="w-full bg-[#B11016] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#800b10] transition-colors transform hover:scale-105 active:scale-95"
                  >
                    Continue to Dashboard
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
        color: [
          '#ff6b6b', '#4ecdc4', '#45b7d1',
          '#f9ca24', '#6c5ce7', '#a29bfe',
          '#fd79a8', '#00b894', '#e84393'
        ][Math.floor(Math.random() * 9)],
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
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-sm"
          style={{
            backgroundColor: particle.color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
          }}
          initial={{ y: -20, opacity: 1 }}
          animate={{
            y: window.innerHeight + 100,
            x: particle.drift * 100,
            rotate: 720,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};