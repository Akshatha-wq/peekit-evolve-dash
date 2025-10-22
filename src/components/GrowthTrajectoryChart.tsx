import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Sparkles } from "lucide-react";

const data = [
  { month: "Nov 2024", actual: 45, predicted: 47 },
  { month: "Dec 2024", actual: 48, predicted: 51 },
  { month: "Jan 2025", actual: 52, predicted: 55 },
  { month: "Feb 2025", actual: 57, predicted: 59 },
  { month: "Mar 2025", actual: 61, predicted: 63 },
  { month: "Apr 2025", actual: 65, predicted: 67 },
  { month: "May 2025", actual: 69, predicted: 71 },
  { month: "Jun 2025", actual: 73, predicted: 75 },
  { month: "Jul 2025", actual: 77, predicted: 79 },
  { month: "Aug 2025", actual: 82, predicted: 84 },
  { month: "Sep 2025", actual: 87, predicted: 90 },
  { month: "Oct 2025", actual: 93, predicted: 95 },
];

const keyInsights = [
  "Emerging trend: 42% growth over 12 months with building momentum",
  "AI predicts: 2-4% growth next month, steady upward trajectory",
  "Peak performance: July 2025 shows strongest engagement window",
];

export const GrowthTrajectoryChart = () => {
  return (
    <div className="grid lg:grid-cols-[1fr_400px] gap-6">
      <Card className="p-6 bg-card/50 border-border/50">
        <h3 className="text-lg font-semibold mb-6 text-foreground">
          Growth Trajectory & AI Predictions (12 Months)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickLine={{ stroke: 'hsl(var(--border))' }}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fill: 'hsl(var(--muted-foreground))' }}
              tickLine={{ stroke: 'hsl(var(--border))' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--foreground))'
              }}
            />
            <Legend 
              wrapperStyle={{ color: 'hsl(var(--foreground))' }}
              iconType="line"
            />
            <Line 
              type="monotone" 
              dataKey="actual" 
              name="Actual Growth"
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ fill: '#3b82f6', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="predicted" 
              name="AI Predicted"
              stroke="#10b981" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#10b981', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-card/50 border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Key Insights</h3>
        </div>
        <div className="space-y-4">
          {keyInsights.map((insight, index) => (
            <div key={index} className="flex gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">{insight}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
