import { Card } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, Calendar, Activity, AlertCircle, Zap } from "lucide-react";

const sentimentByHour = [
  { hour: "12AM", sentiment: 6.8 },
  { hour: "3AM", sentiment: 7.2 },
  { hour: "6AM", sentiment: 6.5 },
  { hour: "9AM", sentiment: 6.2 },
  { hour: "12PM", sentiment: 7.5 },
  { hour: "3PM", sentiment: 8.1 },
  { hour: "6PM", sentiment: 7.8 },
  { hour: "9PM", sentiment: 7.4 },
];

const sentimentByDay = [
  { day: "Mon", sentiment: 6.5, posts: 1234 },
  { day: "Tue", sentiment: 7.2, posts: 1456 },
  { day: "Wed", sentiment: 7.8, posts: 1589 },
  { day: "Thu", sentiment: 7.5, posts: 1423 },
  { day: "Fri", sentiment: 8.1, posts: 1678 },
  { day: "Sat", sentiment: 7.9, posts: 1234 },
  { day: "Sun", sentiment: 7.3, posts: 1089 },
];

const sentimentVolatilityData = [
  { date: "Week 1", sentiment: 7.2, volatility: 0.8 },
  { date: "Week 2", sentiment: 6.8, volatility: 1.5 },
  { date: "Week 3", sentiment: 7.5, volatility: 1.2 },
  { date: "Week 4", sentiment: 7.8, volatility: 0.9 },
];

const volatilityIndex = 1.15;
const peakNegativityWindow = "Monday 9AM - 11AM";
const campaignTimingEffectiveness = 32.5;
const optimalPostingWindow = "Friday 3PM - 6PM";

export const TemporalAnalysis = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Time-based Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Sentiment by Hour */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <h4 className="text-lg font-bold text-foreground">Sentiment by Hour (24h Cycle)</h4>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={sentimentByHour}>
              <defs>
                <linearGradient id="sentimentGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="hour" 
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
                formatter={(value: number) => [value.toFixed(1), 'Sentiment']}
              />
              <Area 
                type="monotone" 
                dataKey="sentiment" 
                stroke="#3B82F6" 
                strokeWidth={2}
                fill="url(#sentimentGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Mean sentiment across 24-hour periods
          </p>
        </Card>

        {/* Sentiment by Day */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-5 w-5 text-accent" />
            <h4 className="text-lg font-bold text-foreground">Sentiment by Day (7-day Cycle)</h4>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={sentimentByDay}>
              <defs>
                <linearGradient id="dayGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="day" 
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
                    <div className="font-semibold">Sentiment: {value.toFixed(1)}/10</div>
                    <div className="text-xs text-muted-foreground">Posts: {props.payload.posts.toLocaleString()}</div>
                  </>,
                  ''
                ]}
              />
              <Area 
                type="monotone" 
                dataKey="sentiment" 
                stroke="#10B981" 
                strokeWidth={2}
                fill="url(#dayGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Mean sentiment across weekly patterns
          </p>
        </Card>
      </div>

      {/* Volatility Chart */}
      <Card className="bg-card/50 border-border/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="h-5 w-5 text-warning" />
          <h4 className="text-lg font-bold text-foreground">Sentiment Volatility Index</h4>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={sentimentVolatilityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 12 }}
            />
            <YAxis 
              yAxisId="left"
              domain={[0, 10]} 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 12 }}
              label={{ value: 'Sentiment', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              domain={[0, 2]} 
              stroke="hsl(var(--muted-foreground))"
              tick={{ fontSize: 12 }}
              label={{ value: 'Volatility', angle: 90, position: 'insideRight', style: { fill: 'hsl(var(--muted-foreground))' } }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--popover))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
                color: "hsl(var(--foreground))"
              }}
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="sentiment" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Sentiment"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="volatility" 
              stroke="#F59E0B" 
              strokeWidth={2}
              strokeDasharray="5 5"
              name="Volatility"
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          Volatility measures the degree of sentiment fluctuation
        </p>
      </Card>

      {/* Temporal Insights Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card/50 border-border/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-5 w-5 text-warning" />
            <h4 className="font-semibold text-foreground">Volatility Index</h4>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-3xl font-bold text-warning">{volatilityIndex}</span>
            <span className="text-sm text-muted-foreground">/ 2.0</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Average volatility score</p>
        </Card>

        <Card className="bg-card/50 border-border/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h4 className="font-semibold text-foreground">Peak Negativity</h4>
          </div>
          <div className="mt-3">
            <span className="text-sm font-bold text-destructive">{peakNegativityWindow}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Monitor closely during this window</p>
        </Card>

        <Card className="bg-card/50 border-border/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="h-5 w-5 text-primary" />
            <h4 className="font-semibold text-foreground">Campaign Timing</h4>
          </div>
          <div className="flex items-baseline gap-2 mt-3">
            <span className="text-3xl font-bold text-primary">+{campaignTimingEffectiveness}%</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Engagement uplift at optimal times</p>
        </Card>

        <Card className="bg-card/50 border-border/50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-rising-trend" />
            <h4 className="font-semibold text-foreground">Optimal Posting</h4>
          </div>
          <div className="mt-3">
            <span className="text-sm font-bold text-rising-trend">{optimalPostingWindow}</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Best engagement window</p>
        </Card>
      </div>
    </div>
  );
};
