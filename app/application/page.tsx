import { SidebarNavigation } from "@/components/sidebar-navigation";
import { FallbackImage } from "@/components/fallback-image";

export default function ApplicationPage() {
  return (
    <div className="min-h-screen">
      <SidebarNavigation />
      
      <div className="md:ml-64 p-4 md:p-8">
        <section id="overview" className="mb-10 scroll-mt-8">
          <h1 className="text-3xl font-bold mb-6">Application Dashboard</h1>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-4">Quick Start</h2>
              <div className="space-y-4">
                <button className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
                  Create New Application
                </button>
                <button className="w-full rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
                  Browse Funding Opportunities
                </button>
              </div>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Application submitted</p>
                    <p className="text-xs text-gray-500">Community Garden Project - 2 days ago</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Funding approved</p>
                    <p className="text-xs text-gray-500">Educational Initiative - 1 week ago</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
                  <div>
                    <p className="font-medium text-sm">Application under review</p>
                    <p className="text-xs text-gray-500">Tech Innovation Program - 2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
              <h2 className="text-xl font-semibold mb-4">Application Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Drafts</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span>Submitted</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="flex justify-between">
                  <span>Approved</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span>Rejected</span>
                  <span className="font-medium">1</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="application-builder" className="mb-10 scroll-mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Application Builder</h2>
            <span className="text-sm text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full font-medium">
              PRO Feature
            </span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-gray-800">
            <div className="text-center py-10">
              <FallbackImage 
                src="/placeholder-app-builder.png" 
                alt="Application Builder" 
                className="h-48 mx-auto mb-4 opacity-30"
              />
              <h3 className="text-xl font-medium mb-2">Advanced Application Builder</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-4">
                Craft professional funding applications with our AI-powered application builder. 
                Create templates, save drafts, and get real-time feedback.
              </p>
              <a 
                href="/dashboard#pricing" 
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-medium"
              >
                Upgrade to Access
              </a>
            </div>
          </div>
        </section>
        
        <section id="messages" className="mb-10 scroll-mt-8">
          <h2 className="text-2xl font-bold mb-6">Messages</h2>
          
          <div className="bg-white rounded-xl shadow-sm dark:bg-gray-800 overflow-hidden">
            <div className="border-b dark:border-gray-700 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Inbox</h3>
                <span className="bg-primary text-white px-2 py-0.5 rounded-full text-xs">3 new</span>
              </div>
            </div>
            
            <div className="divide-y dark:divide-gray-700">
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-blue-50/50 dark:bg-blue-900/20">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Community Development Fund</h4>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We've reviewed your application and have a few questions about...
                </p>
              </div>
              
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-blue-50/50 dark:bg-blue-900/20">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Environmental Sustainability Grant</h4>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Your application has been moved to the second round of review...
                </p>
              </div>
              
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer bg-blue-50/50 dark:bg-blue-900/20">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Tech Innovation Fund</h4>
                  <span className="text-xs text-gray-500">2 days ago</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Congratulations! We're pleased to inform you that your application...
                </p>
              </div>
              
              <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Community Arts Program</h4>
                  <span className="text-xs text-gray-500">1 week ago</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Thank you for your submission. Our team will review your application...
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="opportunities" className="mb-10 scroll-mt-8">
          <h2 className="text-2xl font-bold mb-6">Funding Opportunities</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Community Innovation Fund</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Open
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Supporting innovative community-based projects with grants up to $25,000.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Deadline:</span>
                    <span className="font-medium">June 30, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Grant Range:</span>
                    <span className="font-medium">$5,000 - $25,000</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                <button className="w-full py-2 bg-primary text-white rounded-md text-sm font-medium">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Sustainability Action Grant</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Open
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Funding for projects addressing environmental sustainability and climate action.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Deadline:</span>
                    <span className="font-medium">July 15, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Grant Range:</span>
                    <span className="font-medium">$10,000 - $50,000</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                <button className="w-full py-2 bg-primary text-white rounded-md text-sm font-medium">
                  Apply Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">Digital Inclusion Initiative</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Open
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Bridging the digital divide through technology access and education programs.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Deadline:</span>
                    <span className="font-medium">August 5, 2023</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Grant Range:</span>
                    <span className="font-medium">$15,000 - $75,000</span>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 dark:bg-gray-700">
                <button className="w-full py-2 bg-primary text-white rounded-md text-sm font-medium">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section id="review" className="mb-10 scroll-mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Review Applications</h2>
            <span className="text-sm text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full font-medium">
              PRO Feature
            </span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-gray-800">
            <div className="text-center py-10">
              <FallbackImage 
                src="/placeholder-review.png" 
                alt="Application Review" 
                className="h-48 mx-auto mb-4 opacity-30"
              />
              <h3 className="text-xl font-medium mb-2">Advanced Review Tools</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-4">
                Streamline your application review process with powerful collaboration tools, 
                scoring systems, and automated workflows.
              </p>
              <a 
                href="/dashboard#pricing" 
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-medium"
              >
                Upgrade to Access
              </a>
            </div>
          </div>
        </section>
        
        <section id="profile" className="mb-10 scroll-mt-8">
          <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-gray-800">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">JS</span>
                  </div>
                  <h3 className="text-lg font-medium">John Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Green Earth Initiative</p>
                  <button className="w-full py-2 bg-gray-100 text-gray-800 rounded-md text-sm font-medium dark:bg-gray-700 dark:text-gray-200">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 dark:bg-gray-800">
                <h3 className="font-medium mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name</label>
                      <input 
                        type="text" 
                        className="w-full border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600" 
                        value="John" 
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600" 
                        value="Smith" 
                        readOnly
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      className="w-full border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600" 
                      value="john.smith@example.com" 
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Organization</label>
                    <input 
                      type="text" 
                      className="w-full border-gray-300 rounded-md p-2 dark:bg-gray-700 dark:border-gray-600" 
                      value="Green Earth Initiative" 
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="analytics" className="mb-10 scroll-mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Analytics & Reports</h2>
            <span className="text-sm text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full font-medium">
              PRO Feature
            </span>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm dark:bg-gray-800">
            <div className="text-center py-10">
              <FallbackImage 
                src="/placeholder-analytics.png" 
                alt="Analytics & Reports" 
                className="h-48 mx-auto mb-4 opacity-30"
              />
              <h3 className="text-xl font-medium mb-2">Advanced Analytics</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-4">
                Gain deeper insights into your funding applications with powerful analytics and 
                customizable reports to measure impact and improve success rates.
              </p>
              <a 
                href="/dashboard#pricing" 
                className="inline-block bg-primary text-white px-4 py-2 rounded-lg font-medium"
              >
                Upgrade to Access
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 