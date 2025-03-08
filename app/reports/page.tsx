import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports & Impact",
  description: "Track your funding and application analytics",
};

export default function ReportsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Reports & Impact Tracking</h1>
      
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2">Application Success Rate</h2>
          <div className="aspect-square flex items-center justify-center">
            <div className="relative h-32 w-32">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  className="text-gray-200 dark:text-gray-700"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                />
                <circle
                  className="text-primary"
                  strokeWidth="10"
                  strokeDasharray={2 * Math.PI * 45}
                  strokeDashoffset={2 * Math.PI * 45 * (1 - 0.65)}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="45"
                  cx="50"
                  cy="50"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                65%
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            13 of 20 applications funded
          </p>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2">Total Funding Received</h2>
          <div className="text-3xl font-bold mb-2">$326,750</div>
          <div className="flex items-center gap-1 text-green-500 text-sm">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>+28% from last year</span>
          </div>
          <div className="mt-4 h-12 flex items-end space-x-1">
            {[30, 45, 25, 60, 75, 40, 50, 80, 65, 75, 95, 80].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Jan</span>
            <span>Dec</span>
          </div>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-2">Impact Metrics</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Beneficiaries Reached</span>
                <span className="font-medium">15,230</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2 w-[85%] rounded-full bg-blue-500"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Programs Launched</span>
                <span className="font-medium">24</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2 w-[70%] rounded-full bg-green-500"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Communities Served</span>
                <span className="font-medium">42</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2 w-[60%] rounded-full bg-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-4">Application Performance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Application</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Success Rate</th>
                  <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">Avg. Response Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-3 py-3 text-sm">Community Grants</td>
                  <td className="px-3 py-3 text-sm text-green-500">72%</td>
                  <td className="px-3 py-3 text-sm">18 days</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-sm">Innovation Fund</td>
                  <td className="px-3 py-3 text-sm text-yellow-500">48%</td>
                  <td className="px-3 py-3 text-sm">24 days</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-sm">Sustainability Projects</td>
                  <td className="px-3 py-3 text-sm text-green-500">80%</td>
                  <td className="px-3 py-3 text-sm">21 days</td>
                </tr>
                <tr>
                  <td className="px-3 py-3 text-sm">Emergency Relief</td>
                  <td className="px-3 py-3 text-sm text-green-500">90%</td>
                  <td className="px-3 py-3 text-sm">7 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-lg font-semibold mb-4">Funding Distribution</h2>
          <div className="relative h-[220px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-40 w-40">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth="20"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.35)}
                    transform="rotate(-90 50 50)"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="20"
                    strokeDasharray={2 * Math.PI * 40}
                    transform="rotate(-90 50 50)"
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.35) - 2 * Math.PI * 40 * 0.25}
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="20"
                    strokeDasharray={2 * Math.PI * 40}
                    transform="rotate(-90 50 50)"
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.35 - 0.25) - 2 * Math.PI * 40 * 0.20}
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="20"
                    strokeDasharray={2 * Math.PI * 40}
                    transform="rotate(-90 50 50)"
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.35 - 0.25 - 0.20) - 2 * Math.PI * 40 * 0.20}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  2023
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
              <span>Education (35%)</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span>Environment (25%)</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-orange-500 mr-2"></div>
              <span>Health (20%)</span>
            </div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
              <span>Community (20%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 