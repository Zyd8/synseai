"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = sessionStorage.getItem("access_token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const res = await fetch(`${API}/api/auth/protected`, {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          localStorage.removeItem("access_token");
          router.push("/login");
          return;
        }

        // Optional: You can store user data in state/context
        // const data = await res.json();
        // console.log("Authenticated user:", data.user);

        setLoading(false);
      } catch (error) {
        console.error("Error verifying token:", error);
        localStorage.removeItem("access_token");
        router.push("/login");
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div className="p-4 text-center">Checking authentication...</div>;
  }

  return <>{children}</>;
}
