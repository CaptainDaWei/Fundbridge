import { Metadata } from "next";
import { ReactNode } from "react";

interface ApplicationLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: "%s | Fundbridge Application",
    default: "Fundbridge Application"
  },
  description: "Your nonprofit fundraising management application",
};

export default function ApplicationLayout({ children }: ApplicationLayoutProps) {
  return <div className="application-layout">{children}</div>;
} 