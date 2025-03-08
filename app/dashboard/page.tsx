import { Metadata } from "next";
import { FallbackImage } from "@/components/fallback-image";
import Link from "next/link";
import { 
  HomeIcon, 
  DocumentTextIcon, 
  InboxIcon, 
  CurrencyDollarIcon,
  ClipboardDocumentCheckIcon,
  UserCircleIcon,
  ChartPieIcon,
  CalendarIcon,
  BanknotesIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "FundBridge dashboard overview",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-2">Welcome to FundBridge</h1>
          <p className="text-gray-600 dark:text-gray-400">Your nonprofit fundraising management platform</p>
        </header>
        
        {/* Quick Start Section */}
        <section id="quick-start" className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Quick Start</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link 
              href="/application"
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow duration-200"
            >
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <DocumentTextIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Center</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">
                Create and manage your funding applications all in one place.
              </p>
              <span className="text-primary font-medium text-sm flex items-center">
                Go to Applications
                <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            
            <Link 
              href="/funds"
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow duration-200"
            >
              <div className="rounded-full bg-green-500/10 w-12 h-12 flex items-center justify-center mb-4">
                <CurrencyDollarIcon className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Funding Opportunities</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">
                Discover grants and funding opportunities for your nonprofit.
              </p>
              <span className="text-green-500 font-medium text-sm flex items-center">
                Browse Opportunities
                <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            
            <Link 
              href="/inbox"
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow duration-200"
            >
              <div className="rounded-full bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-4">
                <InboxIcon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Messages</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">
                Stay in touch with funders and collaborators through our messaging system.
              </p>
              <span className="text-blue-500 font-medium text-sm flex items-center">
                Check Inbox
                <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/reports"
              className="flex flex-col rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800 hover:shadow-md transition-shadow duration-200"
            >
              <div className="rounded-full bg-purple-500/10 w-12 h-12 flex items-center justify-center mb-4">
                <ChartPieIcon className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analytics & Reports</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex-grow">
                Track your fundraising success with detailed analytics and reports.
              </p>
              <span className="text-purple-500 font-medium text-sm flex items-center">
                View Analytics
                <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
        
        {/* Status and Overview Section */}
        <section className="mb-10">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-6">Application Status</h2>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Project Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Funding
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          Community Garden Project
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            Under Review
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          $12,500
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <Link href="/application#overview" className="text-primary hover:text-primary/80">
                            View Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          Educational Initiative
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                            Approved
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          $8,750
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <Link href="/application#overview" className="text-primary hover:text-primary/80">
                            View Details
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                          Tech Innovation Program
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                            Pending
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          $35,000
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm">
                          <Link href="/application#overview" className="text-primary hover:text-primary/80">
                            View Details
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 h-full">
                <h2 className="text-xl font-semibold mb-6">Application Stats</h2>
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Drafts</span>
                      <span className="font-medium">2</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gray-400 dark:bg-gray-500 h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Submitted</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Approved</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Rejected</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Upcoming Deadlines */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Upcoming Deadlines</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex gap-4 items-start">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3">
                  <CalendarIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <p className="font-medium">Community Innovation Fund</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Due in 5 days (June 30, 2023)</p>
                  <Link href="/funds" className="text-sm text-primary font-medium">
                    Complete Application
                  </Link>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3">
                  <CalendarIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                <div>
                  <p className="font-medium">Sustainability Action Grant</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Due in 2 weeks (July 15, 2023)</p>
                  <Link href="/funds" className="text-sm text-primary font-medium">
                    Complete Application
                  </Link>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
                  <CalendarIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="font-medium">Digital Inclusion Initiative</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Due in 1 month (August 5, 2023)</p>
                  <Link href="/funds" className="text-sm text-primary font-medium">
                    Start Application
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Activity & Unread Messages */}
        <div className="grid gap-6 md:grid-cols-2 mb-10">
          <section>
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-2 mt-1">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium">Application submitted</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Community Garden Project - 2 days ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-2 mt-1">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="font-medium">Funding approved</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Educational Initiative - 1 week ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-2 mt-1">
                    <InboxIcon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">New message received</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">From Community Development Fund - 1 week ago</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-full p-2 mt-1">
                    <LightBulbIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium">Application under review</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tech Innovation Program - 2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-6">Unread Messages</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="border-b dark:border-gray-700 p-4 flex justify-between items-center">
                <h3 className="font-medium">Inbox</h3>
                <span className="bg-primary text-white px-2 py-0.5 rounded-full text-xs">3 new</span>
              </div>
              
              <div className="divide-y dark:divide-gray-700">
                <Link href="/inbox" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Community Development Fund</h4>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We've reviewed your application and have a few questions about...
                  </p>
                </Link>
                
                <Link href="/inbox" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Environmental Sustainability Grant</h4>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your application has been moved to the second round of review...
                  </p>
                </Link>
                
                <Link href="/inbox" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700 bg-blue-50/50 dark:bg-blue-900/20">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Tech Innovation Fund</h4>
                    <span className="text-xs text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Congratulations! We're pleased to inform you that your application...
                  </p>
                </Link>
                
                <Link href="/inbox" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="flex justify-between mb-1">
                    <h4 className="font-medium">Community Arts Program</h4>
                    <span className="text-xs text-gray-500">1 week ago</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Thank you for your submission. Our team will review your application...
                  </p>
                </Link>
              </div>
              
              <div className="p-4 border-t dark:border-gray-700">
                <Link href="/inbox" className="text-primary text-sm font-medium flex items-center justify-center">
                  View All Messages
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
        
        {/* Pricing Section */}
        <section id="pricing" className="mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Unlock Pro Features</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Upgrade to FundBridge Pro to access powerful tools and take your fundraising to the next level.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-1 rounded-xl bg-gradient-to-br from-primary to-purple-600">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Application Builder</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Create professional funding applications with our AI-powered application builder.
                  </p>
                </div>
                <Link 
                  href="/application#application-builder" 
                  className="text-primary text-sm font-medium flex items-center"
                >
                  Learn More
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="p-1 rounded-xl bg-gradient-to-br from-primary to-purple-600">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Review Applications</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Streamline your application review process with powerful collaboration tools.
                  </p>
                </div>
                <Link 
                  href="/application#review" 
                  className="text-primary text-sm font-medium flex items-center"
                >
                  Learn More
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="p-1 rounded-xl bg-gradient-to-br from-primary to-purple-600">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-full">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">Analytics & Reports</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Gain deeper insights into your funding applications with powerful analytics.
                  </p>
                </div>
                <Link 
                  href="/application#analytics" 
                  className="text-primary text-sm font-medium flex items-center"
                >
                  Learn More
                  <svg className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-6 bg-black text-white rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">Get FundBridge Pro</h3>
                <p className="text-gray-300 mb-4 max-w-lg">
                  Unlock all premium features and take your fundraising to the next level with advanced tools, analytics, and priority support.
                </p>
                <div className="flex items-center">
                  <span className="text-3xl font-bold">$50</span>
                  <span className="text-gray-300 ml-2">/ month</span>
                </div>
              </div>
              
              <button className="w-full md:w-auto py-3 px-6 rounded-lg bg-white text-black text-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 