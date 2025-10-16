import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from "recharts";

const hourlyData = [
  { hour: "00:00", positive: 45, neutral: 30, negative: 15 },
  { hour: "04:00", positive: 35, neutral: 25, negative: 12 },
  { hour: "08:00", positive: 65, neutral: 35, negative: 18 },
  { hour: "12:00", positive: 85, neutral: 45, negative: 22 },
  { hour: "16:00", positive: 75, neutral: 40, negative: 20 },
  { hour: "20:00", positive: 90, neutral: 50, negative: 25 },
];

const dailyData = [
  { day: "Mon", positive: 450, neutral: 230, negative: 120 },
  { day: "Tue", positive: 520, neutral: 280, negative: 140 },
  { day: "Wed", positive: 480, neutral: 250, negative: 130 },
  { day: "Thu", positive: 560, neutral: 290, negative: 150 },
  { day: "Fri", positive: 620, neutral: 310, negative: 160 },
  { day: "Sat", positive: 580, neutral: 300, negative: 155 },
  { day: "Sun", positive: 540, neutral: 285, negative: 145 },
];

const volatilityData = [
  { month: "Jun", volatility: 15 },
  { month: "Jul", volatility: 22 },
  { month: "Aug", volatility: 18 },
  { month: "Sep", volatility: 28 },
  { month: "Oct", volatility: 32 },
  { month: "Nov", volatility: 25 },
];

export const TemporalAnalysis = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hour Analysis */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Sentiment by Hour</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={hourlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Legend />
            <Bar dataKey="positive" fill="hsl(var(--primary))" stackId="a" />
            <Bar dataKey="neutral" fill="hsl(var(--muted))" stackId="a" />
            <Bar dataKey="negative" fill="hsl(var(--destructive))" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Day Analysis */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Sentiment by Day</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Legend />
            <Bar dataKey="positive" fill="hsl(var(--primary))" stackId="a" />
            <Bar dataKey="neutral" fill="hsl(var(--muted))" stackId="a" />
            <Bar dataKey="negative" fill="hsl(var(--destructive))" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Volatility and Timing */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Sentiment Volatility</h4>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={volatilityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Area type="monotone" dataKey="volatility" stroke="hsl(var(--primary))" fill="hsl(var(--primary)/0.3)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Optimal Posting Windows</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-medium text-foreground">Peak Engagement</span>
              <span className="text-sm text-muted-foreground">8:00 PM - 10:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-medium text-foreground">Best Sentiment</span>
              <span className="text-sm text-muted-foreground">12:00 PM - 2:00 PM</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-medium text-foreground">Avoid Posting</span>
              <span className="text-sm text-muted-foreground">2:00 AM - 6:00 AM</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
