"use client";

import { useState } from "react";

export default function SimpleDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Fundbridge Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Here's an overview of your fundraising performance.
        </p>
      </header>

      <div className="mb-6">
        <div className="flex space-x-4 border-b mb-4">
          <button 
            onClick={() => setActiveTab("overview")}
            className={`pb-2 ${activeTab === "overview" ? 
              "border-b-2 border-primary font-medium" : 
              "text-gray-500"}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab("campaigns")}
            className={`pb-2 ${activeTab === "campaigns" ? 
              "border-b-2 border-primary font-medium" : 
              "text-gray-500"}`}
          >
            Campaigns
          </button>
          <button 
            onClick={() => setActiveTab("donations")}
            className={`pb-2 ${activeTab === "donations" ? 
              "border-b-2 border-primary font-medium" : 
              "text-gray-500"}`}
          >
            Donations
          </button>
        </div>

        {activeTab === "overview" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Overview Content</h2>
            <p>Your fundraising metrics and key performance indicators</p>
          </div>
        )}
        
        {activeTab === "campaigns" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Campaign Management</h2>
            <p>Create and manage your fundraising campaigns</p>
          </div>
        )}
        
        {activeTab === "donations" && (
          <div>
            <h2 className="text-xl font-bold mb-4">Donation History</h2>
            <p>Track and analyze your incoming donations</p>
          </div>
        )}
      </div>
    </div>
  );
} 