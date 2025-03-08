"use client";

import Link from "next/link";
import { Shield, BarChart, Rss, ArrowRight } from "lucide-react";

// Value proposition data with expanded content
const valueProps = [
  {
    title: "Building Bridges to Better Giving",
    description: "Our platform connects donors directly to your cause with transparent impact tracking.",
    icon: <Shield className="size-6" />,
    color: "#4F46E5",
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
    color: "#8B5CF6",
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
    color: "#EC4899",
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

export default function ValuePropsSection() {
  return (
    <section className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{prop.title}</h3>
                <p className="text-gray-300 mb-6">{prop.description}</p>
                <div className="mb-6">
                  <div className="text-3xl font-bold mb-1 text-white">{prop.stats.figure}</div>
                  <p className="text-sm text-gray-400">{prop.stats.description}</p>
                </div>
                <Link 
                  href="/signin" 
                  className="inline-block text-white font-medium hover:underline"
                >
                  {prop.cta} <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 