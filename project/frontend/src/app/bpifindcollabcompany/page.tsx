"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { FaArrowLeft, FaBuilding, FaChartLine, FaCheckCircle, FaUsers } from "react-icons/fa";

export default function BpiFindCollabCompany() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BpiFindCollabCompanyContent />
    </Suspense>
  );
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-lg font-medium text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

function BpiFindCollabCompanyContent() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get("company");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scoring, setScoring] = useState<{
    credibility_score: number;
    referential_score: number;
    compliance_score: number;
    credibility_reasoning?: string;
    referential_reasoning?: string;
    compliance_reasoning?: string;
  } | null>(null);

  const [projects, setProjects] = useState<
    { title: string; description: string }[]
  >([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      if (!company) return;

      const token = sessionStorage.getItem("access_token");
      if (!token) {
        setError("Unauthorized. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await fetch(`${API}/api/find_company/name`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ company }),
        });

        if (!res.ok) throw new Error("Failed to fetch company data");

        const data = await res.json();

        console.log("Fetched Company Data:", data);
        const companyData = data.company_name_scrape;
        if (!companyData) throw new Error("Invalid data format");

        setScoring({
          credibility_score: Number(companyData.credibility_score) || 0,
          referential_score: Number(companyData.referential_score) || 0,
          compliance_score: Number(companyData.compliance_score) || 0,
          credibility_reasoning: companyData.credibility_reasoning,
          referential_reasoning: companyData.referential_reasoning,
          compliance_reasoning: companyData.compliance_reasoning,
        });

        console.log("Processed Scoring:", {
          credibility_score: Number(data.credibility_score) || 0,
          referential_score: Number(data.referential_score) || 0,
          compliance_score: Number(data.compliance_score) || 0,
        });

        const projectList = [
          { title: companyData.project_title1, description: companyData.project_description1 },
          { title: companyData.project_title2, description: companyData.project_description2 },
          { title: companyData.project_title3, description: companyData.project_description3 },
        ];
        setProjects(projectList);

        console.log("Processed Projects:", projectList);
      } catch (err: any) {
        console.error("Fetch Error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [company, API]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <FaChartLine className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Error Occurred</h3>
            <p className="text-gray-600 mb-6">{error}</p>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaArrowLeft className="mr-2" /> Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const overallSynergy = scoring
    ? Math.round(
      ((scoring.credibility_score +
        scoring.referential_score +
        scoring.compliance_score) / 3) * 100
    )
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4 group"
          >
            <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Search</span>
          </button>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <FaBuilding className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {company}
              </h1>
              <p className="text-gray-600 mt-1">Collaboration Analysis Report</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Synergy Score Overview */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-gray-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
              <FaChartLine className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Overall Assessment</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Synergy Score
            </h2>
            <div className="flex justify-center mb-8">
              <CircularProgress score={overallSynergy} />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This comprehensive score reflects the potential for successful collaboration based on
              credibility, referential strength, and compliance metrics.
            </p>
          </div>

          {/* Score Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ScoreCard
              title="Credibility"
              score={scoring?.credibility_score}
              reasoning={scoring?.credibility_reasoning}
              icon={<FaCheckCircle className="w-6 h-6" />}
              gradient="from-emerald-500 to-emerald-600"
              lightBg="bg-emerald-50"
              textColor="text-emerald-700"
            />
            <ScoreCard
              title="Referential"
              score={scoring?.referential_score}
              reasoning={scoring?.referential_reasoning}
              icon={<FaUsers className="w-6 h-6" />}
              gradient="from-blue-500 to-blue-600"
              lightBg="bg-blue-50"
              textColor="text-blue-700"
            />
            <ScoreCard
              title="Compliance"
              score={scoring?.compliance_score}
              reasoning={scoring?.compliance_reasoning}
              icon={<FaChartLine className="w-6 h-6" />}
              gradient="from-purple-500 to-purple-600"
              lightBg="bg-purple-50"
              textColor="text-purple-700"
            />
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <FaBuilding className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Recommended Projects</h2>
              <p className="text-gray-600">Strategic collaboration opportunities</p>
            </div>
          </div>

          <div className="grid gap-6">
            {projects.map((p, idx) => (
              <ProjectCard key={idx} title={p.title} description={p.description} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CircularProgress({ score }: { score: number }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(score / 100) * circumference} ${circumference}`;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#10b981"; // green
    if (score >= 60) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  return (
    <div className="relative">
      <svg width="220" height="220" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="12"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke={getScoreColor(score)}
          strokeWidth="12"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className="transition-all duration-2000 ease-out"
          style={{
            filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.3))"
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-5xl font-bold text-gray-900">{score}</span>
        <span className="text-xl font-medium text-gray-500">%</span>
      </div>
    </div>
  );
}

function ScoreCard({
  title,
  score,
  reasoning,
  icon,
  gradient,
  lightBg,
  textColor,
}: {
  title: string;
  score?: number;
  reasoning?: string;
  icon: React.ReactNode;
  gradient: string;
  lightBg: string;
  textColor: string;
}) {
  const percentage = score !== undefined ? (score * 100).toFixed(0) : "0";

  // ✅ Split reasoning into bullet points
  const reasoningPoints = reasoning
    ? reasoning.split("•").map(point => point.trim()).filter(Boolean)
    : [];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className={`${lightBg} px-6 py-5`}>
        <div className="flex items-center justify-between mb-3">
          <div className={`w-10 h-10 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-white`}>
            {icon}
          </div>
          <span className="text-3xl font-bold text-gray-900">{percentage}%</span>
        </div>
        <h3 className={`font-bold text-lg ${textColor}`}>{title}</h3>
      </div>

      {/* Content */}
      <div className="p-6">
        {reasoningPoints.length > 0 && (
          <details className="group">
            <summary className={`font-semibold text-sm cursor-pointer ${textColor} hover:opacity-80 transition-opacity flex items-center justify-between`}>
              <span>View Analysis</span>
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 grid gap-4">
              {reasoningPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <p className="text-sm text-gray-700 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, index }: {
  title: string;
  description: string;
  index: number;
}) {
  const gradients = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-emerald-500 to-emerald-600"
  ];

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="flex">
        <div className={`w-2 bg-gradient-to-b ${gradients[index % 3]} flex-shrink-0`}></div>
        <div className="flex-1 p-6">
          <div className="flex items-start space-x-4">
            <div className={`w-10 h-10 bg-gradient-to-r ${gradients[index % 3]} rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-1`}>
              <span className="font-bold text-sm">{index + 1}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}