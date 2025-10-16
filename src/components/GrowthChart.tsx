import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "May", actual: 60, predicted: 62 },
  { month: "Jun", actual: 70, predicted: 71 },
  { month: "Jul", actual: 75, predicted: 78 },
  { month: "Aug", actual: 82, predicted: 86 },
  { month: "Sep", actual: 87, predicted: 92 },
  { month: "Oct", actual: 90, predicted: 97 },
];

export const GrowthChart = () => {
  return (
    <Card className="bg-gradient-card border-border/50 p-6 animate-slide-up">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">Growth Trajectory & AI Predictions</h3>
        <div className="flex gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-primary font-medium">Actual Growth Index</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rising-trend" />
            <span className="text-rising-trend font-medium">AI Predicted Index</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            label={{ value: "Growth Index", angle: -90, position: "insideLeft", fill: "hsl(var(--muted-foreground))" }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--popover))", 
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
              color: "hsl(var(--foreground))"
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="actual" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", r: 5 }}
            name="Actual Growth Index"
          />
          <Line 
            type="monotone" 
            dataKey="predicted" 
            stroke="hsl(var(--rising-trend))" 
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={{ fill: "hsl(var(--rising-trend))", r: 5 }}
            name="AI Predicted Index"
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <Card className="bg-primary/10 border-primary/30 p-4">
          <p className="text-sm text-muted-foreground mb-1">6-Month Growth</p>
          <p className="text-3xl font-bold text-primary">+42%</p>
        </Card>
        <Card className="bg-rising-trend/10 border-rising-trend/30 p-4">
          <p className="text-sm text-muted-foreground mb-1">Predicted Next Month</p>
          <p className="text-3xl font-bold text-rising-trend">+6-8%</p>
        </Card>
      </div>
    </Card>
  );
};
