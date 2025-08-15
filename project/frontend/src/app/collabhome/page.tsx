import { FaProjectDiagram, FaRocket, FaChartLine, FaLeaf, FaLightbulb } from "react-icons/fa";
import ProtectedRoute from "@/components/ProtectedRoute";
import { Link } from "lucide-react";

export default function CollabHome() {

  return (
    <ProtectedRoute>
      <div>
        {/* Hero Section */}
        <div className="mt-8 md:mt-20 w-full max-w-7xl px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-13 items-center">
            {/* Image */}
            <img
              src="/images/chome1.png"
              alt="Collaboration with BPI"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Text + Button */}
            <div className="flex flex-col justify-center gap-4 px-2 sm:px-6">
              <h1 className="text-[#B11016] text-2xl sm:text-3xl font-extrabold leading-tight">
                Partner with BPI to Build the Future of Banking
              </h1>
              <p className="text-base sm:text-lg text-gray-800">
                Let’s create smart, sustainable solutions together across industries, platforms, and people.
              </p>
              <div className="mt-4">
                <button className="w-full bg-[#B11016] text-white font-semibold py-3 rounded-md text-center hover:bg-white hover:text-[#B11016] border border-[#B11016] transition-colors duration-300">
                  EXPLORE PARTNERSHIP
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* About Section - full width red bg */}
        <section className="mt-16 bg-[#B11016] w-full py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">About BPI</h2>
            <p className="text-md text-white text-center max-w-4xl mx-auto leading-relaxed mb-10">
              The Bank of the Philippine Islands (BPI) is committed to driving inclusive and sustainable innovation
              as part of its mission to build a better Philippines—one family, one community at a time.
            </p>

            {/* Bento layout: two equal-width columns that each stack two cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* LEFT COLUMN */}
              <div className="flex flex-col gap-8">
                {/* Tall card (Company Profile) */}
                <article className="bg-white rounded-lg shadow-lg p-8 md:min-h-[250px] overflow-auto">
                  <h3 className="text-lg font-bold text-[#B11016] mb-3">Our Company Profile</h3>
                  <p className="text-md sm:text-base text-black leading-relaxed text-justify">
                    The Bank of the Philippine Islands (BPI) is a leading universal bank committed to empowering
                    Filipinos through innovative, customer-centric financial solutions. With a strong legacy of trust
                    and a forward-looking focus on digital transformation, sustainability, and inclusive growth, BPI
                    continues to shape the future of banking in the Philippines.
                  </p>
                </article>

                {/* Small card (Mission) */}
                <article className="bg-white rounded-lg shadow-lg p-6 md:min-h-[80px] overflow-auto">
                  <h4 className="text-lg font-bold text-[#B11016] mb-2">Our Mission</h4>
                  <p className="text-md text-black leading-relaxed">
                    We are your trusted financial partner, nurturing your future and making life easier.
                  </p>
                </article>
              </div>

              {/* RIGHT COLUMN */}
              <div className="flex flex-col gap-8">
                {/* Small card (Vision) */}
                <article className="bg-white rounded-lg shadow-lg p-6 md:min-h-[80px] overflow-auto">
                  <h4 className="text-lg font-bold text-[#B11016] mb-2">Our Vision</h4>
                  <p className="text-md text-black leading-relaxed">
                    Building a better Philippines—one family, one community at a time.
                  </p>
                </article>

                {/* Tall card (Core Values) */}
                <article className="bg-white rounded-lg shadow-lg p-8 md:min-h-[275px] overflow-auto">
                  <h4 className="text-lg font-bold text-[#B11016] mb-4">Our Core Values</h4>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      { letter: "N", title: "Nurturing", desc: "We are" },
                      { letter: "I", title: "Integrity", desc: "We act with" },
                      { letter: "C", title: "Customer Obsessed", desc: "We are" },
                      { letter: "E", title: "Excellence", desc: "We act with" },
                    ].map((v, i) => (
                      <div key={i} className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 rounded-full bg-[#B11016] text-white flex items-center justify-center font-bold">
                          {v.letter}
                        </div>
                        <p className="mt-3 text-md text-gray-800">
                          <span className="block font-normal">{v.desc}</span>
                          <span className="block font-bold">{v.title}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </article>

              </div>
            </div>
          </div>
        </section>

        {/* Why Collab Section */}
        <div className="bg-white py-8 mt-8">
          <div className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B11016] text-center mb-4">
              Why Collaborate with BPI?
            </h2>
            <p className="text-md text-black text-center max-w-4xl mx-auto leading-relaxed mb-10">
              BPI offers a comprehensive range of solutions designed to empower
              businesses, vendors, and ecosystem partners through innovation, and
              sustainable growth.
            </p>
          </div>

          {/* Card Grid */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Ecosystem Synergy",
                  desc: "Work seamlessly with BPI, Ayala companies, regulators, and fintechs in a connected ecosystem.",
                  icon: <FaProjectDiagram className="w-5 h-5 text-white" />,
                },
                {
                  title: "Faster Onboarding",
                  desc: "Streamlined partner evaluation and compliance processes to get you started quicker.",
                  icon: <FaRocket className="w-5 h-5 text-white" />,
                },
                {
                  title: "Scalable Opportunities",
                  desc: "Unlock growth and impact through shared value and long-term partnerships.",
                  icon: <FaChartLine className="w-5 h-5 text-white" />,
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-white border-t-8 border-[#B11016] rounded-lg shadow-lg p-6 flex flex-col max-w-sm mx-auto"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B11016] flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#B11016] mb-2">{card.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{card.desc}</p>
                </article>
              ))}
            </div>

            {/* Last two cards centered */}
            <div className="flex flex-wrap justify-center gap-8 mt-8 sm:mt-13">
              {[
                {
                  title: "ESG & Sustainability",
                  desc: "Align with BPI’s commitment to responsible and sustainable finance.",
                  icon: <FaLeaf className="w-5 h-5 text-white" />,
                },
                {
                  title: "Innovation-Driven",
                  desc: "Collaborate on AI, digital banking, and cutting-edge financial solutions.",
                  icon: <FaLightbulb className="w-5 h-5 text-white" />,
                },
              ].map((card, i) => (
                <article
                  key={i}
                  className="bg-white border-t-8 border-[#B11016] rounded-lg shadow-lg p-6 flex flex-col max-w-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-[#B11016] flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#B11016] mb-2">{card.title}</h3>
                  <p className="text-black text-sm leading-relaxed">{card.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="  w-full py-10 mb-8">
          <div className="px-8 sm:px-12 lg:px-16 max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#B11016] text-center mb-4">
              Ready to Propose a Collaboration?
            </h2>
            <p className="text-md text-black text-center max-w-4xl mx-auto leading-relaxed mb-10">
              Submit your idea, product, or platform for evaluation by BPI’s partnership team.
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Link href="/companysetup">
            <button className="bg-[#B11016] text-white font-semibold px-30 py-3 rounded-md text-center hover:bg-white hover:text-[#B11016] border border-[#B11016] transition-colors duration-300">
              PROPOSE TO BPI
            </button>
            </Link>
          </div>

        </div>



      </div>
    </ProtectedRoute>
  );
}
