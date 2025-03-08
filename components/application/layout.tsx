"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

interface ApplicationLayoutProps {
  children: React.ReactNode;
}

export default function ApplicationLayout({ children }: ApplicationLayoutProps) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Wait until mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={theme}>
      <main className="min-h-screen bg-background">
        {children}
        <Toaster />
      </main>
    </div>
  );
} 