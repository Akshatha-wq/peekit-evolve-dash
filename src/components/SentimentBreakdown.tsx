import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { ThumbsUp, ThumbsDown, Check, X } from "lucide-react";

const sentimentData = [
  { name: "Positive", value: 72, color: "#3B82F6" },
  { name: "Neutral", value: 19, color: "#10B981" },
  { name: "Negative", value: 9, color: "#EF4444" },
];

const positivePoints = [
  "Easy to use",
  "Rechargeable battery",
  "Precise cutting",
  "Multiple attachments",
  "Travel-friendly",
];

const negativePoints = [
  "Battery life issues",
  "Noisy operation",
  "Requires frequent maintenance",
  "Blades dull quickly",
  "Not waterproof",
];

export const SentimentBreakdown = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <h2 className="text-2xl font-bold text-foreground">Sentiment Breakdown</h2>

      <Card className="bg-gradient-card border-border/50 p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Audience Voice - Pie Chart */}
          <Card className="bg-card/50 border-border/50 p-6">
            <h3 className="text-lg font-bold text-foreground mb-6 text-center">Audience Voice</h3>
            
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Legend 
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Positive Feedback */}
          <Card className="bg-rising-trend/5 border-rising-trend/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsUp className="h-5 w-5 text-rising-trend" />
              <h3 className="text-lg font-bold text-rising-trend">Positive</h3>
            </div>
            
            <div className="space-y-3">
              {positivePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-rising-trend mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Negative Feedback */}
          <Card className="bg-destructive/5 border-destructive/30 p-6">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsDown className="h-5 w-5 text-destructive" />
              <h3 className="text-lg font-bold text-destructive">Negative</h3>
            </div>
            
            <div className="space-y-3">
              {negativePoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>
    </div>
  );
};
