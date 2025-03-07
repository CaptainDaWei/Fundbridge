"use client";

import { Shield, BarChart, Rss, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function FeatureCards() {
  return (
    <section className="py-20 w-full flex justify-center">
      <div className="max-w-7xl w-full px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1: Building Bridges */}
          <motion.div 
            className="bg-black rounded-xl p-6 h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-orange-500/20">
              <Shield className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Building Bridges to Better Giving</h3>
            <p className="text-gray-400 mb-6">
              Our platform connects donors directly to your cause with transparent impact tracking.
            </p>
            
            <div className="space-y-2 mb-8">
              {["Real-time donation tracking", "Direct donor communication", "Transparency metrics for trust", "Impact visualization tools"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Stats - This div needs to have a fixed/minimum height to align all cards */}
            <div className="mt-auto mb-6 h-24 flex flex-col justify-center">
              <div className="text-4xl font-bold text-orange-500">94%</div>
              <div className="text-sm text-gray-400">of donors say transparency increases their likelihood to give again</div>
            </div>
            
            <Link
              href="#"
              className="inline-flex items-center text-sm text-orange-500 hover:text-orange-400 transition-colors"
            >
              Explore Impact Tracking
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
          
          {/* Card 2: Fundraising Reimagined */}
          <motion.div 
            className="bg-black rounded-xl p-6 h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-fuchsia-500/20">
              <BarChart className="h-6 w-6 text-fuchsia-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Fundraising Reimagined</h3>
            <p className="text-gray-400 mb-6">
              Leverage AI-powered insights to understand donor behavior and optimize your campaigns.
            </p>
            
            <div className="space-y-2 mb-8">
              {["Predictive donor analytics", "Campaign optimization tools", "Personalized outreach", "Data-driven decision making"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Stats - Same height as other cards */}
            <div className="mt-auto mb-6 h-24 flex flex-col justify-center">
              <div className="text-4xl font-bold text-fuchsia-500">237%</div>
              <div className="text-sm text-gray-400">average increase in donation size with optimized campaigns</div>
            </div>
            
            <Link
              href="#"
              className="inline-flex items-center text-sm text-fuchsia-500 hover:text-fuchsia-400 transition-colors"
            >
              See Analytics Demo
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
          
          {/* Card 3: Impact Amplified */}
          <motion.div 
            className="bg-black rounded-xl p-6 h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-teal-500/20">
              <Rss className="h-6 w-6 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Impact Amplified</h3>
            <p className="text-gray-400 mb-6">
              Turn your mission into measurable results with our comprehensive engagement tools.
            </p>
            
            <div className="space-y-2 mb-8">
              {["Multi-channel engagement", "Automated donor journeys", "Engagement performance metrics", "Supporter relationship building"].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-5 h-5 mr-2 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Stats - Same height as other cards */}
            <div className="mt-auto mb-6 h-24 flex flex-col justify-center">
              <div className="text-4xl font-bold text-teal-500">3.2×</div>
              <div className="text-sm text-gray-400">higher retention rate with automated engagement</div>
            </div>
            
            <Link
              href="#"
              className="inline-flex items-center text-sm text-teal-500 hover:text-teal-400 transition-colors"
            >
              View Engagement Tools
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 