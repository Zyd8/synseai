'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function FindCollabPage() {
    const router = useRouter();
    const [searchMode, setSearchMode] = useState("company");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<any[]>([]);


    const overallSynergy = 75;
    // const token = sessionStorage.getItem("access_token");
    // console.log(token)
    // Available traits for search
    const availableTraits = [
        "Innovative", "Sustainable", "Tech-driven", "Global Presence",
        "Startup-friendly", "Environment", "Data Analytics", "AI/ML",
        "Fintech", "E-commerce", "Healthcare", "Education", "Manufacturing",
        "Retail", "Telecommunications", "Banking", "Insurance", "Real Estate"
    ];

    const handleTraitClick = (trait: string) => {
        if (!selectedTraits.includes(trait)) {
            const newTraits = [...selectedTraits, trait];
            setSelectedTraits(newTraits);
            setSearchTerm(newTraits.join(", "));
        }
    };

    const removeTraitFromSearch = (traitToRemove: string) => {
        const newTraits = selectedTraits.filter(trait => trait !== traitToRemove);
        setSelectedTraits(newTraits);
        setSearchTerm(newTraits.join(", "));
    };

    const handleCheckProjects = () => {
        router.push('/bpifindcollabcompany');
    };

    const handleSearch = (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        router.push(`/bpifindcollabcompany?company=${encodeURIComponent(searchTerm.trim())}`);
    };

    const handleSearchByTraits = async () => {
        const API = process.env.NEXT_PUBLIC_API_URL;
        const token = sessionStorage.getItem("access_token");
        if (!token || selectedTraits.length === 0) return;

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${API}/api/find_company_bp/trait`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ company_traits: selectedTraits }),
            });

            if (!res.ok) throw new Error("Failed to fetch companies");

            const data = await res.json();
            setResults(data); 
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };


    return (
        <ProtectedRoute allowedRoles={["employee", "admin"]}>
            <div className="flex">
                <Sidebar />


                <div className="min-h-screen bg-gray-50 flex-1 flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
                    {/* Back Button and Title */}

                    <div className="relative flex items-center w-full mt-2 mb-4">
                        <button
                            onClick={() => {
                                const role = sessionStorage.getItem("role");
                                if (role === "employee") {
                                    router.push("/bpidashboard");
                                } else if (role === "admin") {
                                    router.push("/admindashboard");
                                } else {
                                    router.push("/dashboard");
                                }
                            }}
                            className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base"
                        >
                            <FaArrowLeft className="mr-2" />
                            <span className="hidden sm:inline">Back</span>
                        </button>

                        <div className="text-center w-full">
                            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4">
                                Find Collaborators
                            </h1>
                            <p className="text-sm sm:text-md text-black mb-4 sm:mb-6 px-4">
                                Search by company name or explore by partner traits to find the right match.
                            </p>
                            <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
                        </div>
                    </div>

                    {/* Search Controls */}
                    <div className="flex gap-4 justify-center w-full mb-6 px-[20%]">
                        <button
                            onClick={() => {
                                setSearchMode("company");
                                setSearchTerm("");
                                setSelectedTraits([]);
                            }}
                            className={`px-4 py-2 rounded-sm font-bold min-w-[50%] sm:w-auto ${searchMode === "company"
                                ? "bg-[#B11016] text-white hover:bg-[#8f0d12]"
                                : "border border-gray-400 hover:bg-gray-100"
                                }`}
                        >
                            SEARCH BY COMPANY
                        </button>
                        <button
                            onClick={() => {
                                setSearchMode("traits");
                                setSearchTerm("");
                                setSelectedTraits([]);
                                handleSearchByTraits();
                            }}
                            className={`px-4 py-2 rounded-sm font-bold min-w-[50%] sm:w-auto ${searchMode === "traits"
                                ? "bg-[#B11016] text-white hover:bg-[#8f0d12]"
                                : "border border-gray-400 hover:bg-gray-100"
                                }`}
                        >
                            SEARCH BY TRAITS
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full mb-6 px-[19.5%]">
                        <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 flex-wrap gap-2">
                            {/* Magnifying Glass */}
                            <div className="relative mr-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* Always show input */}
                            <input
                                type="text"
                                placeholder={
                                    searchMode === "company"
                                        ? "Enter company name..."
                                        : "Type a trait and press Enter..."
                                }
                                className="flex-1 outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {
                                    if (searchMode === "traits" && e.key === "Enter" && searchTerm.trim()) {
                                        e.preventDefault();
                                        if (!selectedTraits.includes(searchTerm.trim())) {
                                            setSelectedTraits([...selectedTraits, searchTerm.trim()]);
                                        }
                                        setSearchTerm(""); // Clear input after adding trait
                                    }
                                }}
                            />

                            <button
                                className="text-[#B11016] font-bold"
                                onClick={handleSearch}
                            >
                                ➤
                            </button>
                        </div>

                        {/* Show trait chips when in traits mode */}
                        {searchMode === "traits" && selectedTraits.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {selectedTraits.map((trait, index) => (
                                    <span
                                        key={index}
                                        className="bg-[#B11016] text-white px-3 py-1 rounded-full text-sm flex items-center"
                                    >
                                        {trait}
                                        <button
                                            onClick={() => removeTraitFromSearch(trait)}
                                            className="ml-2 text-white hover:text-gray-300"
                                        >
                                            ×
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}

                    </div>


                    {/* Traits Selection (only show when in traits mode) */}
                    {searchMode === "traits" && (
                        <div className="w-full mb-6 px-[19.5%]">
                            <div className="flex flex-wrap gap-2">
                                {availableTraits.map((trait, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTraitClick(trait)}
                                        disabled={selectedTraits.includes(trait)}
                                        className={`px-3 py-1 rounded-sm text-sm border transition-colors ${selectedTraits.includes(trait)
                                            ? "bg-[#333333] text-whited"
                                            : "bg-white border-gray-300 hover:bg-[#B11016] hover:text-white cursor-pointer"
                                            }`}
                                    >
                                        {trait}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Company Cards */}

                    {/* Show loading state */}
                    {loading && <p className="text-center text-gray-500">Searching...</p>}

                    {/* Show error */}
                    {error && <p className="text-center text-red-600">{error}</p>}

                    {/* Show results */}
                    <div className="w-full flex flex-col gap-4">
                        {results.map((company, index) => (
                            <div
                                key={index}
                                className="bg-white shadow rounded-lg p-4 sm:p-6 flex justify-between items-center border border-gray-400"
                            >
                                <div className="flex-1">
                                    <h2 className="text-lg sm:text-xl font-bold text-[#B11016]">
                                        {company.company_name}
                                    </h2>
                                    <p className="text-sm text-gray-700 mt-1">
                                        {company.project_description1 || "No description"}
                                    </p>

                                    <button
                                        className="mt-3 bg-[#B11016] text-white px-4 py-2 rounded font-semibold hover:bg-[#8f0d12]"
                                        onClick={handleCheckProjects}
                                    >
                                        VIEW DETAILS
                                    </button>
                                </div>

                                <div className="flex flex-col items-center ml-4">
                                    <span className="text-sm font-semibold mb-1">Synergy</span>
                                    <div className="w-20 h-20">
                                        <CircularProgressbar
                                            value={company.credibility_score || 0}
                                            text={`${company.credibility_score || 0}%`}
                                            styles={buildStyles({
                                                textSize: "16px",
                                                textColor: "#111827",
                                                pathColor: "#B11016",
                                                trailColor: "#d1d5db",
                                            })}
                                            strokeWidth={15}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
