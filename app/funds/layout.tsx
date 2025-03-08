import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Funding Opportunities",
  description: "Browse and apply for available funding",
};

export default function FundsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
} 