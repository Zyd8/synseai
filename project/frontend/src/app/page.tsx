"use client"
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen px-4 py-4">
      <div className="flex flex-col items-center justify-center mt-8 md:mt-10 max-w-4xl mx-auto">

        {/* Animated Logo */}
        <motion.img
          src="logo/main_logo.png"
          alt="SynseAI Logo"
          className="mx-auto w-44 h-44 sm:w-60 sm:h-60 md:w-76 md:h-76 object-contain mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Animated Title */}
        <motion.h1
          className="w-full text-center text-md sm:text-lg md:text-lg lg:text-xl px-4 leading-relaxed mt-1"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Empowering BPI with <span className="font-bold text-[#B11016]">Smart Synergy</span> and <span className="font-bold text-[#B11016]">Ecosystem Collaboration</span>
        </motion.h1>

        {/* Animated Buttons */}
        <div className="mt-8 md:mt-20 w-full max-w-2xl px-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: [0.25, 0.1, 0.25, 1] } }
            }}
          >
            <motion.button
              className="w-full cursor-pointer font-bold text-center py-4 px-6 text-white bg-[#B11016] border-2 border-[#B11016] rounded-md hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
              onClick={() => router.push("/login")}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              BPI Employees
            </motion.button>

            <motion.button
              className="w-full cursor-pointer font-bold text-center py-4 px-6 text-white bg-[#B11016] border-2 border-[#B11016] rounded-md hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
              onClick={() => router.push("/collabhome")}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              Collaborators
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Footer Text */}
        <motion.p
          className="text-center mt-6 text-sm sm:text-base md:text-lg px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Tap your role to continue.
        </motion.p>
      </div>
    </main>
  )
}
