import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Application Review",
  description: "Review funding applications",
};

export default function ReviewPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Application Review</h1>
      
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Applications Awaiting Review</h2>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Organization
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Project Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Amount Requested
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Submitted
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Green Earth Initiative
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Urban Garden Revitalization
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      $18,500
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      May 14, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80 mr-4">Review</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Tech for All
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Digital Literacy for Seniors
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      $12,750
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      May 12, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80 mr-4">Review</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Application Details: Urban Garden Revitalization</h2>
          <div className="flex gap-2">
            <button className="rounded-lg border border-green-500 px-3 py-1.5 text-sm text-green-600 hover:bg-green-50 dark:text-green-400 dark:hover:bg-green-900/20">
              Approve
            </button>
            <button className="rounded-lg border border-red-500 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20">
              Reject
            </button>
            <button className="rounded-lg border border-blue-500 px-3 py-1.5 text-sm text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20">
              Request Info
            </button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="font-medium mb-2">Project Summary</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Green Earth Initiative proposes to revitalize abandoned urban spaces into community gardens, 
              providing fresh produce for local food banks and educational opportunities for school children.
              The project aims to transform 5 vacant lots over the course of 12 months.
            </p>
            
            <h3 className="font-medium mt-4 mb-2">Budget Breakdown</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
              <li>Site preparation: $4,000</li>
              <li>Garden supplies and tools: $7,500</li>
              <li>Educational materials: $3,000</li>
              <li>Staff coordination: $4,000</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Internal Notes</h3>
            <textarea 
              className="w-full rounded-md border border-gray-300 p-3 text-sm dark:border-gray-600 dark:bg-gray-800" 
              rows={4}
              placeholder="Add notes for other reviewers..."
            ></textarea>
            <button className="mt-2 rounded-lg bg-gray-100 px-3 py-1.5 text-sm dark:bg-gray-700">
              Save Notes
            </button>
            
            <h3 className="font-medium mt-4 mb-2">Review Criteria</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm">
                  <span>Community Impact</span>
                  <span>4/5</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-2 w-4/5 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Feasibility</span>
                  <span>3/5</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-2 w-3/5 rounded-full bg-blue-500"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm">
                  <span>Budget Appropriateness</span>
                  <span>4/5</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-2 w-4/5 rounded-full bg-blue-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 