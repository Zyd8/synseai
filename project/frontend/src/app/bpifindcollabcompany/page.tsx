"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { Suspense } from "react";

export default function BpiFindCollabCompany() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BpiFindCollabCompanyContent />
    </Suspense>
  );
}

function BpiFindCollabCompanyContent() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const searchParams = useSearchParams();
  const router = useRouter();
  const company = searchParams.get("company");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scoring, setScoring] = useState<any>(null);
  const [projects, setProjects] = useState<any>(null);

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
        setScoring(data.scoring);
        setProjects(data.project_recommendations);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [company]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg font-semibold">Loading company details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  // Calculate overall synergy score (average of the three scores)
  const overallSynergy = scoring ? 
    ((scoring.credibility_score + scoring.referential_score + scoring.compliance_score) / 3 * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="flex items-center mb-4 text-blue-600 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Collaboration Details for {company}</h1>

      {/* Synergy Scoring Section */}
      <section className="mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-red-600 mb-6">Synergy Score</h2>
          <div className="flex justify-center mb-8">
            <CircularProgress score={Math.round(overallSynergy)} />
          </div>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ScoreCard 
            title="Credibility" 
            score={scoring?.credibility_score}
            reasoning={scoring?.credibility_reasoning}
            color="bg-red-600"
          />
          <ScoreCard 
            title="Referential" 
            score={scoring?.referential_score}
            reasoning={scoring?.referential_reasoning}
            color="bg-red-500"
          />
          <ScoreCard 
            title="Compliance" 
            score={scoring?.compliance_score}
            reasoning={scoring?.compliance_reasoning}
            color="bg-red-700"
          />
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Recommended Projects</h2>
        <div className="grid gap-4">
          {projects && (
            <>
              <ProjectCard title={projects.title1} description={projects.description1} />
              <ProjectCard title={projects.title2} description={projects.description2} />
              <ProjectCard title={projects.title3} description={projects.description3} />
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function CircularProgress({ score }: { score: number }) {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(score / 100) * circumference} ${circumference}`;

  return (
    <div className="relative">
      <svg width="200" height="200" className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="20"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="100"
          cy="100"
          r={radius}
          stroke="#dc2626"
          strokeWidth="20"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">{score}%</span>
      </div>
    </div>
  );
}

function ScoreCard({ title, score, reasoning, color }: { 
  title: string; 
  score: number; 
  reasoning: string;
  color: string;
}) {
  const percentage = (score * 100).toFixed(0);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="text-center py-4 border-b-2 border-gray-200">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-4xl font-bold text-gray-800 mt-2">{percentage}%</p>
      </div>
      
      {/* Content */}
      <div className={`${color} text-white p-4 space-y-4`}>
        <div>
          <h4 className="font-semibold text-sm mb-2">Market Leadership:</h4>
          <p className="text-xs leading-relaxed">
            GCash is the leading e-wallet in the Philippines with over 90M users, establishing it as a trusted financial platform.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-2">Strong Backing:</h4>
          <p className="text-xs leading-relaxed">
            Operated by Mynt, a partnership between Globe Telecom, Ayala Corporation, and Ant Group (Alibaba).
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-2">Track Record:</h4>
          <p className="text-xs leading-relaxed">
            Recognized by the Bangko Sentral ng Pilipinas (BSP) and awarded for innovation in financial inclusion.
          </p>
        </div>
        
        {/* Reasoning Details */}
        {reasoning && (
          <details className="mt-4">
            <summary className="font-semibold text-sm cursor-pointer hover:text-gray-200">
              View Detailed Analysis
            </summary>
            <p className="mt-2 text-xs leading-relaxed whitespace-pre-line border-t border-red-400 pt-2">
              {reasoning}
            </p>
          </details>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}