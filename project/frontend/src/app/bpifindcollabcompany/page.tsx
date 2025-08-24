"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function BpiFindCollabCompany() {
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

  return (
    <div className="max-w-6xl mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="flex items-center mb-4 text-blue-600 hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Collaboration Details for {company}</h1>

      {/* Scoring Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Synergy Scoring</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ScoreCard title="Credibility" score={scoring?.credibility_score} />
          <ScoreCard title="Referential" score={scoring?.referential_score} />
          <ScoreCard title="Compliance" score={scoring?.compliance_score} />
        </div>

        {/* Reasonings */}
        <div className="mt-6">
          <ReasoningBlock title="Credibility Reasoning" text={scoring?.credibility_reasoning} />
          <ReasoningBlock title="Referential Reasoning" text={scoring?.referential_reasoning} />
          <ReasoningBlock title="Compliance Reasoning" text={scoring?.compliance_reasoning} />
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

function ScoreCard({ title, score }: { title: string; score: number }) {
  const percentage = (score * 100).toFixed(0);
  return (
    <div className="bg-white p-4 rounded-lg shadow text-center">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">{percentage}%</p>
    </div>
  );
}

function ReasoningBlock({ title, text }: { title: string; text: string }) {
  return (
    <details className="mb-4 bg-gray-50 p-4 rounded-lg">
      <summary className="font-semibold cursor-pointer">{title}</summary>
      <p className="mt-2 whitespace-pre-line text-gray-700">{text}</p>
    </details>
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
