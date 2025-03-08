import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "FundBridge dashboard overview",
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Application Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Submitted</span>
              <span className="font-medium">3</span>
            </div>
            <div className="flex justify-between">
              <span>Pending</span>
              <span className="font-medium">2</span>
            </div>
            <div className="flex justify-between">
              <span>Approved</span>
              <span className="font-medium">1</span>
            </div>
            <div className="flex justify-between">
              <span>Rejected</span>
              <span className="font-medium">0</span>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <button className="w-full rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90">
              Start New Application
            </button>
            <button className="w-full rounded-lg border border-gray-200 px-4 py-2 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
              View Upcoming Deadlines
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-8 rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Application Tracker</h2>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Application
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                      Status
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
                      Community Innovation Grant
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        Under Review
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      May 12, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Sustainability Project Fund
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        Approved
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      April 3, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-primary hover:text-primary/80">View</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 