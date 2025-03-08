import { Metadata } from "next";
import ApplicationLayout from "@/components/application/layout";

export const metadata: Metadata = {
  title: {
    template: "%s | Fundbridge Application",
    default: "Fundbridge Application"
  },
  description: "Your nonprofit fundraising management application",
};

export default function ApplicationRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApplicationLayout>{children}</ApplicationLayout>;
} 