'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaBuilding, FaChartLine, FaUsers, FaCheckCircle, FaRobot, FaGlobe, FaSearch, FaStar, FaArrowUp } from "react-icons/fa";
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
    const [loadingStep, setLoadingStep] = useState(0);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [results, setResults] = useState<any[]>([]);

    // Loading steps for trait search
    const loadingSteps = [
        { 
            icon: <FaSearch className="w-5 h-5" />, 
            message: "Searching for companies with matching traits...", 
            duration: 2500,
            description: "Scanning our database"
        },
        { 
            icon: <FaGlobe className="w-5 h-5" />, 
            message: "Scraping company pages and analyzing data...", 
            duration: 3500,
            description: "Gathering latest information"
        },
        { 
            icon: <FaRobot className="w-5 h-5" />, 
            message: "AI analyzing company compatibility...", 
            duration: 3000,
            description: "Processing with machine learning"
        },
        { 
            icon: <FaChartLine className="w-5 h-5" />, 
            message: "Calculating synergy scores...", 
            duration: 2000,
            description: "Computing collaboration potential"
        }
    ];

    // Available traits for search
    const availableTraits = [
        "Innovative", "Sustainable", "Tech-driven", "Global Presence",
        "Startup-friendly", "Environment", "Data Analytics", "AI/ML",
        "Fintech", "E-commerce", "Healthcare", "Education", "Manufacturing",
        "Retail", "Telecommunications", "Banking", "Insurance", "Real Estate"
    ];

    // Enhanced loading animation
    useEffect(() => {
        let stepTimer: NodeJS.Timeout;
        let progressTimer: NodeJS.Timeout;

        if (loading && searchMode === "traits") {
            const runLoadingSequence = (stepIndex: number) => {
                if (stepIndex >= loadingSteps.length) {
                    return;
                }

                setLoadingStep(stepIndex);
                setLoadingProgress(0);

                const stepDuration = loadingSteps[stepIndex].duration;
                const progressInterval = stepDuration / 100;

                progressTimer = setInterval(() => {
                    setLoadingProgress((prev) => {
                        if (prev >= 100) {
                            clearInterval(progressTimer);
                            return 100;
                        }
                        return prev + 2;
                    });
                }, progressInterval);

                stepTimer = setTimeout(() => {
                    runLoadingSequence(stepIndex + 1);
                }, stepDuration);
            };

            runLoadingSequence(0);
        }

        return () => {
            clearTimeout(stepTimer);
            clearInterval(progressTimer);
        };
    }, [loading, searchMode]);

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

    const handleCheckProjects = (companyName: string) => {
        router.push(`/bpifindcollabcompany?company=${encodeURIComponent(companyName)}`);
    };

    const handleSearch = (e: React.FormEvent | React.MouseEvent) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;
        router.push(`/bpifindcollabcompany?company=${encodeURIComponent(searchTerm.trim())}`);
    };

    const parseReasoningText = (text: string) => {
        if (!text) return "";

        return text
            .replace(/\*\*/g, "")          
            .replace(/#+/g, "")          
            .replace(/^\-+\s*/gm, "")    
            .replace(/\s+/g, " ")        
            .trim();
    };

    const handleSearchByTraits = async () => {
        const API = process.env.NEXT_PUBLIC_API_URL;
        const token = sessionStorage.getItem("access_token");
        if (!token || selectedTraits.length === 0) return;

        setLoading(true);
        setLoadingStep(0);
        setLoadingProgress(0);
        setError(null);
        setResults([]);

        try {
            const res = await fetch(`${API}/api/find_company/trait`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ company_traits: selectedTraits }),
            });

            if (!res.ok) throw new Error("Failed to fetch companies");

            const data = await res.json();
            setResults(Array.isArray(data) ? data : []);
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const getSynergyLevel = (score: number) => {
        if (score >= 85) return { label: "Excellent", color: "text-emerald-600", bgColor: "bg-emerald-50", borderColor: "border-emerald-200" };
        if (score >= 70) return { label: "Good", color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" };
        if (score >= 55) return { label: "Fair", color: "text-yellow-600", bgColor: "bg-yellow-50", borderColor: "border-yellow-200" };
        return { label: "Poor", color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" };
    };

    const getProgressColor = (score: number) => {
        if (score >= 85) return "#10b981"; // emerald
        if (score >= 70) return "#3b82f6"; // blue  
        if (score >= 55) return "#f59e0b"; // yellow
        return "#ef4444"; // red
    };

    return (
        <ProtectedRoute allowedRoles={["employee", "admin"]}>
            <div className="flex">
                <Sidebar />

                <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex-1 flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
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
                            className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base group transition-colors"
                        >
                            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            <span className="hidden sm:inline font-medium">Back</span>
                        </button>

                        <div className="text-center w-full">
                            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4">
                                Find Collaborators
                            </h1>
                            <p className="text-sm sm:text-md text-gray-700 mb-4 sm:mb-6 px-4">
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
                            className={`px-6 py-3 rounded-lg font-bold min-w-[50%] sm:w-auto transition-all duration-200 shadow-md hover:shadow-lg ${searchMode === "company"
                                ? "bg-[#B11016] text-white hover:bg-[#8f0d12] transform hover:scale-105"
                                : "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#B11016]"
                                }`}
                        >
                            SEARCH BY COMPANY
                        </button>
                        <button
                            onClick={() => {
                                setSearchMode("traits");
                                setSearchTerm("");
                                setSelectedTraits([]);
                            }}
                            className={`px-6 py-3 rounded-lg font-bold min-w-[50%] sm:w-auto transition-all duration-200 shadow-md hover:shadow-lg ${searchMode === "traits"
                                ? "bg-[#B11016] text-white hover:bg-[#8f0d12] transform hover:scale-105"
                                : "bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#B11016]"
                                }`}
                        >
                            SEARCH BY TRAITS
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="w-full mb-6 px-[19.5%]">
                        <div className="flex items-center bg-white border-2 border-gray-200 rounded-xl px-4 py-3 flex-wrap gap-2 shadow-md hover:shadow-lg transition-shadow focus-within:border-[#B11016]">
                            <div className="relative mr-3">
                                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                                    <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>

                            <input
                                type="text"
                                placeholder={
                                    searchMode === "company"
                                        ? "Enter company name..."
                                        : "Select a trait and click ➤"
                                }
                                className="flex-1 outline-none text-gray-700 placeholder-gray-400"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={(e) => {
                                    if (searchMode === "traits" && e.key === "Enter" && searchTerm.trim()) {
                                        e.preventDefault();
                                        if (!selectedTraits.includes(searchTerm.trim())) {
                                            setSelectedTraits([...selectedTraits, searchTerm.trim()]);
                                        }
                                        setSearchTerm("");
                                    }
                                }}
                            />

                            <button
                                className="text-[#B11016] font-bold text-xl hover:text-[#800b10] transition-colors hover:scale-110 transform"
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (searchMode === "company") {
                                        handleSearch(e);
                                    } else if (searchMode === "traits") {
                                        handleSearchByTraits();
                                    }
                                }}
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
                                        className="bg-gradient-to-r from-[#B11016] to-[#8f0d12] text-white px-4 py-2 rounded-full text-sm flex items-center shadow-md hover:shadow-lg transition-shadow"
                                    >
                                        {trait}
                                        <button
                                            onClick={() => removeTraitFromSearch(trait)}
                                            className="ml-2 text-white hover:text-gray-300 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-xs hover:bg-white/30 transition-colors"
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
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">Select Company Traits:</h3>
                            <div className="flex flex-wrap gap-3">
                                {availableTraits.map((trait, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleTraitClick(trait)}
                                        disabled={selectedTraits.includes(trait)}
                                        className={`px-4 py-2 rounded-lg text-sm border-2 transition-all duration-200 shadow-sm hover:shadow-md ${selectedTraits.includes(trait)
                                            ? "bg-gray-800 text-white border-gray-800 cursor-not-allowed opacity-60"
                                            : "bg-white border-gray-300 text-gray-700 hover:bg-[#B11016] hover:text-white hover:border-[#B11016] cursor-pointer transform hover:scale-105"
                                            }`}
                                    >
                                        {trait}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Enhanced Loading State */}
                    {loading && (
                        <div className="w-full max-w-md mx-auto mb-8">
                            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#B11016] to-[#8f0d12] rounded-xl flex items-center justify-center animate-pulse">
                                        <FaBuilding className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900">Finding Perfect Matches</h3>
                                    <p className="text-sm text-gray-600">Please wait while we analyze companies...</p>
                                </div>

                                {/* Current Step */}
                                <div className="mb-6">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-[#B11016] to-[#8f0d12] rounded-lg flex items-center justify-center text-white animate-bounce">
                                            {loadingSteps[loadingStep]?.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-gray-900 font-medium text-sm">
                                                {loadingSteps[loadingStep]?.message}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {loadingSteps[loadingStep]?.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-[#B11016] to-[#8f0d12] rounded-full transition-all duration-300 ease-out"
                                            style={{ width: `${loadingProgress}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                                        <span>Step {loadingStep + 1} of {loadingSteps.length}</span>
                                        <span>{loadingProgress}%</span>
                                    </div>
                                </div>

                                {/* Mini steps preview */}
                                <div className="flex justify-between">
                                    {loadingSteps.map((step, index) => (
                                        <div 
                                            key={index}
                                            className={`flex flex-col items-center space-y-1 ${
                                                index === loadingStep 
                                                    ? 'text-[#B11016]' 
                                                    : index < loadingStep 
                                                        ? 'text-green-600' 
                                                        : 'text-gray-400'
                                            }`}
                                        >
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                                                index === loadingStep
                                                    ? 'bg-[#B11016] text-white animate-pulse'
                                                    : index < loadingStep
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-gray-200 text-gray-500'
                                            }`}>
                                                {index < loadingStep ? (
                                                    <FaCheckCircle className="w-3 h-3" />
                                                ) : (
                                                    step.icon
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Show error */}
                    {error && (
                        <div className="w-full max-w-md mx-auto mb-6">
                            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 text-center">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <span className="text-red-500 text-xl">⚠️</span>
                                </div>
                                <p className="text-red-800 font-medium">{error}</p>
                            </div>
                        </div>
                    )}

                    {/* Enhanced Company Cards */}
                    <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
                        {!loading && !error && results.length > 0 && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                                        <FaStar className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Companies Found</h3>
                                        <p className="text-sm text-gray-600">{results.length} potential collaborators discovered</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {results.map((company, index) => {
                            const credibility = company.credibility_score || 0;
                            const referential = company.referential_score || 0;
                            const compliance = company.compliance_score || 0;
                            const overallSynergy = Math.round(((credibility + referential + compliance) / 3) * 100);
                            const synergyLevel = getSynergyLevel(overallSynergy);

                            return (
                                <div
                                    key={index}
                                    className={`bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] border-2 ${synergyLevel.borderColor}`}
                                >
                                    {/* Header with company name and synergy badge */}
                                    <div className={`${synergyLevel.bgColor} px-6 py-4 border-b`}>
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <div className="w-10 h-10 bg-gradient-to-r from-[#B11016] to-[#8f0d12] rounded-xl flex items-center justify-center">
                                                        <FaBuilding className="w-5 h-5 text-white" />
                                                    </div>
                                                    <h2 className="text-xl font-bold text-gray-900">
                                                        {company.company_name}
                                                    </h2>
                                                </div>
                                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${synergyLevel.color} ${synergyLevel.bgColor} border ${synergyLevel.borderColor}`}>
                                                    <FaArrowUp className="w-3 h-3 mr-1" />
                                                    {synergyLevel.label} Match
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex justify-between items-start space-x-6">
                                            {/* Company info */}
                                            <div className="flex-1">
                                                <div className="mb-6">
                                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                                                        Project Description
                                                    </h4>
                                                    <p className="text-gray-700 leading-relaxed">
                                                        {parseReasoningText(company.project_description1 || "No description available for this company.")}
                                                    </p>
                                                </div>

                                                {/* Score breakdown */}
                                                <div className="grid grid-cols-3 gap-4 mb-6">
                                                    <div className="text-center">
                                                        <div className="text-lg font-bold text-emerald-600">
                                                            {Math.round(credibility * 100)}%
                                                        </div>
                                                        <div className="text-xs text-gray-500 flex items-center justify-center mt-1">
                                                            <FaCheckCircle className="w-3 h-3 mr-1" />
                                                            Credibility
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-lg font-bold text-blue-600">
                                                            {Math.round(referential * 100)}%
                                                        </div>
                                                        <div className="text-xs text-gray-500 flex items-center justify-center mt-1">
                                                            <FaUsers className="w-3 h-3 mr-1" />
                                                            Referential
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="text-lg font-bold text-purple-600">
                                                            {Math.round(compliance * 100)}%
                                                        </div>
                                                        <div className="text-xs text-gray-500 flex items-center justify-center mt-1">
                                                            <FaChartLine className="w-3 h-3 mr-1" />
                                                            Compliance
                                                        </div>
                                                    </div>
                                                </div>

                                                <button
                                                    className="w-full bg-gradient-to-r from-[#B11016] to-[#8f0d12] text-white px-6 py-3 rounded-xl font-semibold hover:from-[#8f0d12] hover:to-[#B11016] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                                    onClick={() => handleCheckProjects(company.company_name)}
                                                >
                                                    VIEW DETAILED ANALYSIS
                                                </button>
                                            </div>

                                            {/* Enhanced Synergy Score Display */}
                                            <div className="flex flex-col items-center min-w-[140px]">
                                                <div className="text-center mb-3">
                                                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                                                        Overall Synergy
                                                    </h4>
                                                    <div className={`text-2xl font-bold ${synergyLevel.color}`}>
                                                        {overallSynergy}%
                                                    </div>
                                                </div>
                                                
                                                <div className="w-24 h-24 mb-3">
                                                    <CircularProgressbar
                                                        value={overallSynergy}
                                                        text=""
                                                        styles={buildStyles({
                                                            pathColor: getProgressColor(overallSynergy),
                                                            trailColor: "#e5e7eb",
                                                            strokeLinecap: "round"
                                                        })}
                                                        strokeWidth={12}
                                                    />
                                                </div>

                                                <div className={`px-3 py-1 rounded-full text-xs font-medium ${synergyLevel.color} ${synergyLevel.bgColor} border ${synergyLevel.borderColor}`}>
                                                    {synergyLevel.label}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}