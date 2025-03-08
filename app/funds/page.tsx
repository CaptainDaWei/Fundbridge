import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Funding Opportunities",
  description: "Browse and apply for available funding",
};

export default function FundsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Funding Opportunities</h1>
      
      <div className="mb-6 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Find Opportunities</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800">
              <option>All Categories</option>
              <option>Environment</option>
              <option>Education</option>
              <option>Health</option>
              <option>Technology</option>
              <option>Arts & Culture</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Grant Size</label>
            <select className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800">
              <option>Any Amount</option>
              <option>Under $10,000</option>
              <option>$10,000 - $50,000</option>
              <option>$50,000 - $100,000</option>
              <option>Over $100,000</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Deadline</label>
            <select className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800">
              <option>Any Time</option>
              <option>Next 30 Days</option>
              <option>Next 3 Months</option>
              <option>Next 6 Months</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
              New
            </span>
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Community Innovation Grant</h3>
            <p className="text-sm text-muted-foreground">
              Funds for local community-based projects
            </p>
          </div>
          <div className="p-6 pt-0 grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Grant Amount:</span>
              <span>$5,000 - $25,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Application Deadline:</span>
              <span>June 30, 2023</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Focus Areas:</span>
              <span>Community, Education</span>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
              Apply Now
            </button>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Environmental Sustainability Fund</h3>
            <p className="text-sm text-muted-foreground">
              Support for projects addressing climate change
            </p>
          </div>
          <div className="p-6 pt-0 grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Grant Amount:</span>
              <span>$10,000 - $50,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Application Deadline:</span>
              <span>July 15, 2023</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Focus Areas:</span>
              <span>Environment, Sustainability</span>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
              Apply Now
            </button>
          </div>
        </div>
        
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Technological Innovation Initiative</h3>
            <p className="text-sm text-muted-foreground">
              For tech-driven solutions to social challenges
            </p>
          </div>
          <div className="p-6 pt-0 grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Grant Amount:</span>
              <span>$15,000 - $75,000</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Application Deadline:</span>
              <span>August 1, 2023</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Focus Areas:</span>
              <span>Technology, Innovation</span>
            </div>
          </div>
          <div className="flex items-center p-6 pt-0">
            <button className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 