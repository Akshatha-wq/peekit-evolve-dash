import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const regionalData = [
  { region: "North America", score: 8.2, mentions: 3420 },
  { region: "Europe", score: 7.8, mentions: 2890 },
  { region: "Asia Pacific", score: 8.5, mentions: 4120 },
  { region: "Latin America", score: 7.4, mentions: 1560 },
  { region: "Middle East", score: 7.9, mentions: 980 },
];

const customerTypeData = [
  { type: "New Customers", positive: 72, neutral: 20, negative: 8 },
  { type: "Returning", positive: 68, neutral: 24, negative: 8 },
  { type: "Premium", positive: 78, neutral: 18, negative: 4 },
  { type: "Trial Users", positive: 65, neutral: 25, negative: 10 },
];

const hotspots = [
  { location: "California, US", change: "+45%", mentions: 2340 },
  { location: "Tokyo, Japan", change: "+38%", mentions: 1890 },
  { location: "London, UK", change: "-22%", mentions: 1560 },
  { location: "Sydney, Australia", change: "+31%", mentions: 1240 },
];

const conversionData = [
  { segment: "High Intent", score: 8.9, conversion: 34 },
  { segment: "Medium Intent", score: 7.5, conversion: 18 },
  { segment: "Low Intent", score: 6.2, conversion: 7 },
  { segment: "Exploratory", score: 7.1, conversion: 12 },
];

export const GeographySegmentation = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Regional Sentiment */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Regional Sentiment</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regionalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="region" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Legend />
            <Bar dataKey="score" fill="hsl(var(--primary))" />
            <Bar dataKey="mentions" fill="hsl(var(--muted))" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Customer Type Breakdown */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Sentiment by Customer Type</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={customerTypeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="type" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Legend />
            <Bar dataKey="positive" fill="hsl(var(--primary))" stackId="a" />
            <Bar dataKey="neutral" fill="hsl(var(--muted))" stackId="a" />
            <Bar dataKey="negative" fill="hsl(var(--destructive))" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Hotspots and Conversion */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Sentiment Hotspots</h4>
          <div className="space-y-3">
            {hotspots.map((hotspot) => (
              <div key={hotspot.location} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">{hotspot.location}</p>
                  <p className="text-xs text-muted-foreground">{hotspot.mentions} mentions</p>
                </div>
                <span className={`text-sm font-semibold ${hotspot.change.startsWith('+') ? 'text-primary' : 'text-destructive'}`}>
                  {hotspot.change}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Conversion Opportunities</h4>
          <div className="space-y-3">
            {conversionData.map((segment) => (
              <div key={segment.segment} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">{segment.segment}</p>
                  <p className="text-xs text-muted-foreground">Score: {segment.score}/10</p>
                </div>
                <span className="text-sm font-semibold text-primary">{segment.conversion}%</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
