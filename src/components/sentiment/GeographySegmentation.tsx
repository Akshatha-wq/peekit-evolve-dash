import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MapPin, Hash, Users, TrendingUp } from "lucide-react";

const allRegionalSentimentData = [
  { region: "Maharashtra", sentimentScore: 8.2, volume: 2845 },
  { region: "Karnataka", sentimentScore: 7.9, volume: 2134 },
  { region: "Delhi", sentimentScore: 7.5, volume: 1923 },
  { region: "Tamil Nadu", sentimentScore: 8.0, volume: 1678 },
  { region: "West Bengal", sentimentScore: 6.8, volume: 1234 },
  { region: "Gujarat", sentimentScore: 7.8, volume: 1456 },
  { region: "Rajasthan", sentimentScore: 7.2, volume: 987 },
  { region: "Uttar Pradesh", sentimentScore: 6.5, volume: 1567 },
  { region: "Madhya Pradesh", sentimentScore: 7.1, volume: 1123 },
  { region: "Kerala", sentimentScore: 8.1, volume: 934 },
  { region: "Telangana", sentimentScore: 7.7, volume: 1345 },
  { region: "Punjab", sentimentScore: 7.3, volume: 876 },
];

const regionalSentimentData = [...allRegionalSentimentData]
  .sort((a, b) => b.sentimentScore - a.sentimentScore)
  .slice(0, 8);

const getSentimentColor = (score: number) => {
  if (score >= 7.5) return "#10B981";
  if (score >= 6.5) return "#F59E0B";
  return "#EF4444";
};

const customerTypeData = [
  { name: "Transacted Users", value: 68, color: "#3B82F6" },
  { name: "Non-Transacted Users", value: 32, color: "#10B981" },
];

const regionalConversionOpportunity = [
  { region: "Uttar Pradesh", positiveSentiment: 72, transactionRate: 24 },
  { region: "Rajasthan", positiveSentiment: 78, transactionRate: 31 },
  { region: "West Bengal", positiveSentiment: 65, transactionRate: 28 },
];



export const GeographySegmentation = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Regional Sentiment Index (RSI) */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-bold text-foreground">Regional Sentiment Index</h4>
            </div>
            <div className="text-xs text-muted-foreground">Top 8 Regions</div>
          </div>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart 
              data={regionalSentimentData} 
              layout="horizontal" 
              margin={{ top: 10, right: 30, left: 0, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="region" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                domain={[0, 10]} 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                label={{ value: 'Sentiment Score', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                  color: "hsl(var(--foreground))"
                }}
                formatter={(value: number, name: string, props: any) => [
                  <>
                    <div className="font-semibold">Score: {value.toFixed(1)}/10</div>
                    <div className="text-xs text-muted-foreground">Volume: {props.payload.volume.toLocaleString()}</div>
                  </>,
                  ''
                ]}
                labelFormatter={(label) => label}
              />
              <Bar 
                dataKey="sentimentScore" 
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              >
                {regionalSentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getSentimentColor(entry.sentimentScore)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Color Legend */}
          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
              <span className="text-xs text-muted-foreground">High (7.5+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <span className="text-xs text-muted-foreground">Medium (6.5-7.4)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <span className="text-xs text-muted-foreground">Low (&lt;6.5)</span>
            </div>
          </div>
        </Card>

        {/* Volume by Geography */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Hash className="h-5 w-5 text-accent" />
              <h4 className="text-lg font-bold text-foreground">Volume by Geography</h4>
            </div>
            <div className="text-xs text-muted-foreground">Top 8 Regions</div>
          </div>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart 
              data={regionalSentimentData}
              margin={{ top: 10, right: 30, left: 0, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="region" 
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                label={{ value: 'Mentions Volume', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                  color: "hsl(var(--foreground))"
                }}
                formatter={(value: number, name: string, props: any) => [
                  <>
                    <div className="font-semibold">Volume: {value.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Score: {props.payload.sentimentScore.toFixed(1)}/10</div>
                  </>,
                  ''
                ]}
              />
              <Bar 
                dataKey="volume" 
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
              >
                {regionalSentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getSentimentColor(entry.sentimentScore)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Customer-Type Breakdown */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-foreground">Customer-Type Breakdown</h4>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={customerTypeData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${value}%`}
                outerRadius={70}
                fill="#8884d8"
                dataKey="value"
              >
                {customerTypeData.map((entry, index) => (
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

        {/* Regional Conversion Opportunity */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-rising-trend" />
            <h4 className="font-semibold text-foreground">Conversion Opportunities</h4>
          </div>
          <div className="space-y-4">
            {regionalConversionOpportunity.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{item.region}</span>
                  <Badge variant="outline" className="text-xs">
                    {item.positiveSentiment}% positive
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-rising-trend"
                      style={{ width: `${item.transactionRate}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground min-w-[3rem]">{item.transactionRate}% conv.</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
