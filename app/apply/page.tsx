import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Builder",
  description: "Create and submit funding applications",
};

export default function ApplicationBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Application Builder</h1>
      
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Create New Application</h2>
          <button className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
            Save as Draft
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Application Progress</h3>
            <span className="text-sm text-gray-500">Step 1 of 5</span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-2 w-1/5 rounded-full bg-primary"></div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Organization Name</label>
            <input 
              type="text" 
              className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
              placeholder="Enter your organization name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Project Title</label>
            <input 
              type="text" 
              className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
              placeholder="Enter your project title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Funding Amount Requested</label>
            <input 
              type="text" 
              className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
              placeholder="$"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Project Description</label>
            <textarea 
              className="w-full rounded-md border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-800" 
              rows={4}
              placeholder="Describe your project and its goals"
            ></textarea>
            <p className="mt-1 text-xs text-gray-500">AI Assistant: Try to be specific about the impact you expect to achieve</p>
          </div>
          
          <div className="pt-4 flex justify-end space-x-3">
            <button className="rounded-lg border border-gray-300 px-4 py-2 dark:border-gray-600">
              Previous
            </button>
            <button className="rounded-lg bg-primary px-4 py-2 text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 