"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CompanyProtectedRoute({ children }: { children: React.ReactNode }) {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkCompany = async () => {
      const token = sessionStorage.getItem("access_token");
      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const res = await fetch(`${API}/api/company`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          console.warn("Company fetch failed with status:", res.status);
          router.replace("/collabhome");
          return;
        }

        const data = await res.json().catch(() => null);
        if (!data || !data.id) {
          router.replace("/collabhome");
          return;
        }

        setChecking(false);

      } catch (err: any) {
        console.error("Fetch error:", err.message);
        router.replace("/collabhome");
      } finally {
        setChecking(false); 
      }
    };

    if (API) {
      console.log("API env:", API);
      console.log("Company URL:", `${API}/api/company`);
      checkCompany();
    } else {
      console.error("NEXT_PUBLIC_API_URL is not defined");
    }
  }, [API, router]);

  return <>{children}</>;
}
