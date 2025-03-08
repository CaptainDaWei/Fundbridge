import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
}

export default function MetricCard({ title, value, change, trend, icon }: MetricCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        <div className="text-gray-400 dark:text-gray-500">{icon}</div>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center mt-2 text-xs">
        {trend === "up" ? (
          <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
        ) : (
          <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
        )}
        <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
          {change}
        </span>
        <span className="text-gray-500 ml-1">from last month</span>
      </div>
    </Card>
  );
} 