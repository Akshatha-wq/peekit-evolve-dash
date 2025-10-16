import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const sentimentData = [
  { name: "Positive", value: 65, color: "hsl(var(--primary))" },
  { name: "Neutral", value: 23, color: "hsl(var(--muted))" },
  { name: "Negative", value: 12, color: "hsl(var(--destructive))" },
];

const positiveKeywords = [
  { word: "amazing", count: 1247 },
  { word: "love", count: 1089 },
  { word: "excellent", count: 934 },
  { word: "great", count: 876 },
  { word: "perfect", count: 743 },
];

const negativeKeywords = [
  { word: "disappointed", count: 234 },
  { word: "issue", count: 198 },
  { word: "problem", count: 167 },
  { word: "poor", count: 145 },
  { word: "bad", count: 123 },
];

const advancedMetrics = [
  { label: "Sentiment Delta", value: "+12.3%", trend: "up" },
  { label: "Sentiment Score", value: "7.8/10", trend: "stable" },
  { label: "Share of Voice", value: "34.2%", trend: "up" },
  { label: "Sentiment Differential Index", value: "2.4x", trend: "up" },
];

export const SentimentCore = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Overall Sentiment */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Overall Sentiment</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Keyword Analysis */}
        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Keyword Analysis</h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="text-sm font-medium text-muted-foreground mb-2">Top Positive</h5>
              <div className="flex flex-wrap gap-2">
                {positiveKeywords.map((keyword) => (
                  <Badge 
                    key={keyword.word} 
                    variant="outline"
                    className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20"
                  >
                    {keyword.word} ({keyword.count})
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-sm font-medium text-muted-foreground mb-2">Top Negative</h5>
              <div className="flex flex-wrap gap-2">
                {negativeKeywords.map((keyword) => (
                  <Badge 
                    key={keyword.word} 
                    variant="outline"
                    className="bg-destructive/10 border-destructive/30 text-destructive hover:bg-destructive/20"
                  >
                    {keyword.word} ({keyword.count})
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Advanced Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {advancedMetrics.map((metric) => (
          <Card key={metric.label} className="bg-card/50 border-border/50 p-4">
            <p className="text-xs text-muted-foreground mb-1">{metric.label}</p>
            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
