export default function LandingPage() {
  return (
    <main className="min-h-screen px-4 py-4">
      <div className="flex flex-col items-center justify-center mt-8 md:mt-10 max-w-4xl mx-auto">
        <img
          src="logo/main_logo.png"
          alt="SynseAI Logo"
          className="mx-auto w-44 h-44 sm:w-60 sm:h-60 md:w-76 md:h-76 object-contain mb-0"
        />
        <h1 className="w-full text-center text-md sm:text-lg md:text-lg lg:text-xl px-4 leading-relaxed mt-1">
          Empowering BPI with <span className="font-bold text-[#B11016]">Smart Synergy</span> and <span className="font-bold text-[#B11016]">Ecosystem Collaboration</span>
        </h1>


        {/* Responsive button layout */}
        <div className="mt-8 md:mt-20 w-full max-w-2xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <button className="w-full cursor-pointer font-bold text-center py-4 px-6 text-white bg-[#B11016] border-2 border-[#B11016] rounded-md hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg">
              BPI Employees
            </button>
            <button className="w-full cursor-pointer font-bold text-center py-4 px-6 text-white bg-[#B11016] border-2 border-[#B11016] rounded-md hover:text-[#B11016] hover:bg-white hover:border-[#B11016] transition-all duration-300 ease-in-out transform hover:scale-105 text-base sm:text-lg">
              Collaborators
            </button>
          </div>
        </div>
        
        <p className="text-center mt-6 text-sm sm:text-base md:text-lg px-4">
          Tap your role to continue.
        </p>
      </div>
    </main>
  )
}