"use client";

import { useEffect, useState } from "react";

export default function DonationChart() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return <div className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-md animate-pulse" />;
  
  // Simplified chart implementation using divs instead of recharts
  const data = [
    { name: "Jan", value: 8400 },
    { name: "Feb", value: 9200 },
    { name: "Mar", value: 10100 },
    { name: "Apr", value: 12000 },
    { name: "May", value: 14250 },
    { name: "Jun", value: 15800 },
  ];
  
  const highest = Math.max(...data.map(item => item.value));
  
  return (
    <div className="h-[300px] w-full">
      <div className="flex h-[250px] items-end gap-2">
        {data.map((month, i) => {
          const height = (month.value / highest) * 100;
          return (
            <div key={i} className="flex flex-col items-center flex-1 gap-2">
              <div 
                className="w-full bg-primary/80 hover:bg-primary rounded-t-md transition-all"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-muted-foreground">{month.name}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-4 text-center text-sm text-muted-foreground">
        Monthly donation volume for the past 6 months
      </div>
    </div>
  );
} 