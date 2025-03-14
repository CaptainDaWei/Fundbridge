"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { Shield, BarChart, Rss } from "lucide-react";

// Value proposition data with expanded content
const valueProps = [
  {
    title: "Building Bridges to Better Giving",
    description: "Our platform connects donors directly to your cause with transparent impact tracking.",
    icon: <Shield className="size-6" />,
    color: "var(--color-one)",
    benefits: [
      "Real-time donation tracking",
      "Direct donor communication",
      "Transparency metrics for trust",
      "Impact visualization tools"
    ],
    cta: "Explore Impact Tracking",
    stats: {
      figure: "94%",
      description: "of donors say transparency increases their likelihood to give again"
    }
  },
  {
    title: "Fundraising Reimagined",
    description: "Leverage AI-powered insights to understand donor behavior and optimize your campaigns.",
    icon: <BarChart className="size-6" />,
    color: "var(--color-two)",
    benefits: [
      "Predictive donor analytics",
      "Campaign optimization tools",
      "Personalized outreach",
      "Data-driven decision making"
    ],
    cta: "See Analytics Demo",
    stats: {
      figure: "237%",
      description: "average increase in donation size with optimized campaigns"
    }
  },
  {
    title: "Impact Amplified",
    description: "Turn your mission into measurable results with our comprehensive engagement tools.",
    icon: <Rss className="size-6" />,
    color: "var(--color-one)",
    benefits: [
      "Multi-channel engagement",
      "Automated donor journeys",
      "Engagement performance metrics",
      "Supporter relationship building"
    ],
    cta: "View Engagement Tools",
    stats: {
      figure: "3.2×",
      description: "higher retention rate with automated engagement"
    }
  }
];

export default function CallToActionSection() {
  return (
    <section className="pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Value proposition cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{prop.title}</h3>
                <p className="text-gray-300 mb-6">{prop.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1">{prop.stats.figure}</div>
                  <p className="text-sm text-gray-400">{prop.stats.description}</p>
                </div>
                <Link 
                  href="/signin" 
                  className="inline-block text-white font-medium hover:underline"
                >
                  {prop.cta} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA section */}
        <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl text-center py-12 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-50"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center mb-6 bg-amber-500/10 p-2 rounded-full">
              <Zap className="h-6 w-6 text-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to transform your fundraising?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join hundreds of nonprofits who have increased their donations by an average of 63% 
              in their first year with Fundbridge.
            </p>
            <Link href="/signin">
              <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-lg font-medium inline-flex items-center">
                Get Started Today <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
