"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[]; // e.g. ["user", "employee"]
}

export default function ProtectedRoute({ children, allowedRoles }: ProtectedRouteProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("access_token");
    const role = sessionStorage.getItem("role");

    if (!token || !role) {
      router.push("/login");
      return;
    }

    if (!allowedRoles.includes(role)) {
      router.push("/"); // redirect if role not allowed
      return;
    }

    setLoading(false);
  }, [router, allowedRoles]);

  if (loading) {
    return <div className="p-4 text-center">Checking authentication...</div>;
  }

  return <>{children}</>;
}

