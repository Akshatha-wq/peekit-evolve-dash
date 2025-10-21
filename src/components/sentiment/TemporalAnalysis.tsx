import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Clock, Calendar } from "lucide-react";

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

    </div>
  );
};
