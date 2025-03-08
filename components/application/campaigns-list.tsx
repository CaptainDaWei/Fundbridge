"use client";

import { Progress } from "@/components/ui/progress";

const campaigns = [
  {
    id: 1,
    name: "Building Hope",
    goal: 50000,
    raised: 32450,
    endDate: "2023-12-31",
  },
  {
    id: 2,
    name: "Clean Water Initiative",
    goal: 25000,
    raised: 18735,
    endDate: "2023-11-30",
  },
  {
    id: 3,
    name: "Education for All",
    goal: 15000,
    raised: 4280,
    endDate: "2023-12-15",
  },
  {
    id: 4,
    name: "Community Garden",
    goal: 8000,
    raised: 6540,
    endDate: "2023-11-15",
  },
];

export default function CampaignsList() {
  return (
    <div className="space-y-6">
      {campaigns.map((campaign) => {
        const percentage = Math.round((campaign.raised / campaign.goal) * 100);
        
        return (
          <div key={campaign.id} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{campaign.name}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Ends {new Date(campaign.endDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={percentage} className="h-2" />
              <span className="text-sm font-medium">{percentage}%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span>${campaign.raised.toLocaleString()}</span>
              <span className="text-gray-500 dark:text-gray-400">of ${campaign.goal.toLocaleString()}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
} 