import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Inbox",
  description: "Messages and status updates for your applications",
};

export default function InboxPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Application Inbox</h1>
      
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="rounded-xl bg-white shadow-sm dark:bg-gray-800">
          <div className="p-4 border-b dark:border-gray-700">
            <h2 className="font-semibold">Messages</h2>
          </div>
          <div className="divide-y dark:divide-gray-700">
            <div className="p-4 bg-primary/5 border-l-4 border-primary">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Community Innovation Grant</h3>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-1">
                We've reviewed your application and have a few questions...
              </p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Sustainability Project Fund</h3>
                <span className="text-xs text-gray-500">May 15</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-1">
                Congratulations! Your application has been approved...
              </p>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">Tech Innovation Fund</h3>
                <span className="text-xs text-gray-500">May 10</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-1">
                Thank you for submitting your application. We'll review it shortly...
              </p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl bg-white shadow-sm dark:bg-gray-800">
          <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
            <h2 className="font-semibold">Community Innovation Grant</h2>
            <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              Under Review
            </span>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg dark:bg-gray-700">
              <div className="flex justify-between mb-2">
                <span className="font-medium">FundBridge Team</span>
                <span className="text-xs text-gray-500">May 14, 2023 at 10:30 AM</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We've reviewed your application and have a few questions about your budget breakdown. Could you provide more details about the allocation for community outreach activities?
              </p>
            </div>
            
            <div className="space-y-4">
              <textarea 
                className="w-full rounded-md border border-gray-300 p-3 dark:border-gray-600 dark:bg-gray-800" 
                rows={4}
                placeholder="Type your reply here..."
              ></textarea>
              <div className="flex justify-between">
                <button className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm dark:border-gray-600">
                  Attach File
                </button>
                <button className="rounded-lg bg-primary px-4 py-1.5 text-sm text-white">
                  Send Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 