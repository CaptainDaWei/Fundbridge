"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  BarChart3, LineChart, CircleDollarSign, Users, 
  Calendar, Bell, Settings, HelpCircle, UserCircle,
  Search, Menu, ChevronDown, LogOut 
} from "lucide-react";
import DonationChart from "./donation-chart";
import CampaignsList from "./campaigns-list";
import MetricCard from "./metric-card";

export default function ApplicationDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white px-4 dark:bg-gray-800 dark:border-gray-700 md:px-6">
        <div className="flex items-center gap-2">
          <button 
            className="block md:hidden p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Fundbridge</span>
          </Link>
        </div>
        
        <div className="hidden md:flex relative max-w-md grow mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="h-9 w-full rounded-md border border-gray-200 bg-white pl-8 text-sm outline-none dark:border-gray-700 dark:bg-gray-800"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <HelpCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
          
          <div className="relative">
            <button className="flex items-center gap-2 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700">
              <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
                <span className="text-sm font-medium">JD</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500 dark:text-gray-400 hidden md:block" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-64 border-r bg-white dark:bg-gray-800 dark:border-gray-700 flex-shrink-0`}>
          <nav className="flex flex-col gap-1 p-4">
            <button 
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "overview" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <BarChart3 className="h-5 w-5" />
              Overview
            </button>
            <button 
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "campaigns" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("campaigns")}
            >
              <LineChart className="h-5 w-5" />
              Campaigns
            </button>
            <button 
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "donations" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("donations")}
            >
              <CircleDollarSign className="h-5 w-5" />
              Donations
            </button>
            <button 
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "donors" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("donors")}
            >
              <Users className="h-5 w-5" />
              Donors
            </button>
            <button 
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "events" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("events")}
            >
              <Calendar className="h-5 w-5" />
              Events
            </button>
            
            <div className="my-4 border-t dark:border-gray-700"></div>
            
            <button 
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                activeTab === "profile" 
                  ? "bg-primary text-white" 
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveTab("profile")}
            >
              <UserCircle className="h-5 w-5" />
              Profile
            </button>
            <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Welcome back! Here's an overview of your fundraising performance.
                  </p>
                </div>
                <div className="hidden md:block">
                  <button className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white">
                    Create Campaign
                  </button>
                </div>
              </div>
              
              {/* Summary Metrics */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <MetricCard 
                  title="Total Donations" 
                  value="$24,628" 
                  change="+12.5%" 
                  trend="up"
                  icon={<CircleDollarSign className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Donors" 
                  value="1,429" 
                  change="+3.2%" 
                  trend="up"
                  icon={<Users className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Avg. Donation" 
                  value="$87.23" 
                  change="+5.4%" 
                  trend="up"
                  icon={<BarChart3 className="h-5 w-5" />}
                />
                <MetricCard 
                  title="Campaigns" 
                  value="8" 
                  change="+2" 
                  trend="up"
                  icon={<LineChart className="h-5 w-5" />}
                />
              </div>

              {/* Charts */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                  <h2 className="text-lg font-semibold mb-4">Donation Trends</h2>
                  <DonationChart />
                </div>
                <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                  <h2 className="text-lg font-semibold mb-4">Active Campaigns</h2>
                  <CampaignsList />
                </div>
              </div>
              
              {/* Recent Activity */}
              <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 border rounded-lg dark:border-gray-700">
                    <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
                      <CircleDollarSign className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-semibold">New donation received</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">John Smith donated $250 to your "Building Hope" campaign</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border rounded-lg dark:border-gray-700">
                    <div className="rounded-full bg-blue-100 p-2 dark:bg-blue-900">
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold">New donor registered</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Sarah Miller created an account and subscribed to updates</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 border rounded-lg dark:border-gray-700">
                    <div className="rounded-full bg-purple-100 p-2 dark:bg-purple-900">
                      <Calendar className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-semibold">Event reminder</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Virtual fundraiser "Community Connections" starts tomorrow</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">8 hours ago</p>
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-md border border-gray-200 py-2 text-sm font-medium dark:border-gray-700">
                  View All Activity
                </button>
              </div>
            </div>
          )}
          
          {activeTab === "campaigns" && (
            <div>
              <h1 className="text-2xl font-bold mb-6 md:text-3xl">Campaign Management</h1>
              <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Create, edit, and track your fundraising campaigns</p>
                <div className="flex justify-center items-center h-40">
                  <p className="text-gray-400">Campaign content would go here</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "donations" && (
            <div>
              <h1 className="text-2xl font-bold mb-6 md:text-3xl">Donation Management</h1>
              <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Track and analyze incoming donations</p>
                <div className="flex justify-center items-center h-40">
                  <p className="text-gray-400">Donation content would go here</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "donors" && (
            <div>
              <h1 className="text-2xl font-bold mb-6 md:text-3xl">Donor Management</h1>
              <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Manage your donor relationships</p>
                <div className="flex justify-center items-center h-40">
                  <p className="text-gray-400">Donor content would go here</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "events" && (
            <div>
              <h1 className="text-2xl font-bold mb-6 md:text-3xl">Event Management</h1>
              <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Plan and manage your fundraising events</p>
                <div className="flex justify-center items-center h-40">
                  <p className="text-gray-400">Event content would go here</p>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === "profile" && (
            <div>
              <h1 className="text-2xl font-bold mb-6 md:text-3xl">Profile Settings</h1>
              <div className="rounded-xl border bg-white p-6 dark:bg-gray-800 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences</p>
                <div className="flex justify-center items-center h-40">
                  <p className="text-gray-400">Profile content would go here</p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
} 