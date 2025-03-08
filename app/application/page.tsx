import { Metadata } from "next";
import ApplicationDashboard from "@/components/application/dashboard";

export const metadata: Metadata = {
  title: "Fundbridge Application",
  description: "Your nonprofit fundraising management application",
};

export default function ApplicationPage() {
  return <ApplicationDashboard />;
} 