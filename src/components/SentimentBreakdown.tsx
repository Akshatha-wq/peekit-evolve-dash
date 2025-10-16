import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { ThumbsUp, ThumbsDown, Check, X, TrendingUp, Scale, Users, GitCompare, Hash, Clock, MapPin, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const sentimentData = [
  { name: "Positive", value: 72, color: "#3B82F6" },
  { name: "Neutral", value: 19, color: "#10B981" },
  { name: "Negative", value: 9, color: "#EF4444" },
];

const positiveKeywords = [
  { keyword: "Easy to use", frequency: 245 },
  { keyword: "Rechargeable", frequency: 198 },
  { keyword: "Travel-friendly", frequency: 167 },
  { keyword: "Precise cutting", frequency: 134 },
  { keyword: "Multiple attachments", frequency: 112 },
];

const negativeKeywords = [
  { keyword: "Battery life", frequency: 156 },
  { keyword: "Noisy", frequency: 89 },
  { keyword: "Maintenance", frequency: 67 },
  { keyword: "Blades dull", frequency: 54 },
  { keyword: "Not waterproof", frequency: 41 },
];

// New metrics data
const sentimentDelta = 12.5; // % change over time
const sentimentScore = 7.8; // weighted average (0-10 scale)
const shareOfVoice = 34.2; // % of total market mentions
const sentimentDifferentialIndex = { ourBrand: 7.8, competitor: 6.2 }; // comparison
const responseTimeToNegativity = 4.2; // average hours

// Geography & Customer Segmentation data
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

// Get top 8 regions sorted by sentiment score (highest to lowest)
const regionalSentimentData = [...allRegionalSentimentData]
  .sort((a, b) => b.sentimentScore - a.sentimentScore)
  .slice(0, 8);

// Function to get color based on sentiment score
const getSentimentColor = (score: number) => {
  if (score >= 7.5) return "#10B981"; // Green for high sentiment
  if (score >= 6.5) return "#F59E0B"; // Amber for medium sentiment
  return "#EF4444"; // Red for low sentiment
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

const hotspotCount = 5; // regions with >20% sentiment change MoM

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
              {positiveKeywords.map((item, index) => (
                <div key={index} className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <Check className="h-4 w-4 text-rising-trend mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.keyword}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-rising-trend"
                        style={{ width: `${(item.frequency / 250) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-rising-trend min-w-[2.5rem] text-right">{item.frequency}</span>
                  </div>
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
              {negativeKeywords.map((item, index) => (
                <div key={index} className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3 flex-1">
                    <X className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.keyword}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-destructive"
                        style={{ width: `${(item.frequency / 160) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-destructive min-w-[2.5rem] text-right">{item.frequency}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Card>

      {/* Advanced Sentiment Metrics */}
      <Card className="bg-gradient-card border-border/50 p-6">
        <h3 className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2">
          <span className="h-px w-8 bg-border"></span>
          Advanced Metrics
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Sentiment Delta */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-rising-trend" />
                <h4 className="font-semibold text-foreground">Sentiment Delta</h4>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-rising-trend">+{sentimentDelta}%</span>
              <span className="text-sm text-muted-foreground">vs. last period</span>
            </div>
          </Card>

          {/* Sentiment Score */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <h4 className="font-semibold text-foreground">Sentiment Score</h4>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">{sentimentScore}</span>
              <span className="text-sm text-muted-foreground">/ 10</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Weighted average</p>
          </Card>

          {/* Share of Voice */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <h4 className="font-semibold text-foreground">Share of Voice</h4>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-accent">{shareOfVoice}%</span>
              <span className="text-sm text-muted-foreground">market share</span>
            </div>
          </Card>

          {/* Sentiment Differential Index */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <GitCompare className="h-5 w-5 text-secondary" />
                <h4 className="font-semibold text-foreground">Sentiment Differential</h4>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Our Brand</span>
                <span className="text-lg font-bold text-rising-trend">{sentimentDifferentialIndex.ourBrand}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Competitor</span>
                <span className="text-lg font-bold text-muted-foreground">{sentimentDifferentialIndex.competitor}</span>
              </div>
              <div className="pt-2 border-t border-border/50">
                <span className="text-xs font-semibold text-rising-trend">
                  +{(sentimentDifferentialIndex.ourBrand - sentimentDifferentialIndex.competitor).toFixed(1)} advantage
                </span>
              </div>
            </div>
          </Card>

          {/* Response Time to Negativity */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-warning" />
                <h4 className="font-semibold text-foreground">Response Time</h4>
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">{responseTimeToNegativity}</span>
              <span className="text-sm text-muted-foreground">hours avg.</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">To negative mentions</p>
          </Card>
        </div>
      </Card>

      {/* Geography & Customer Segmentation */}
      <Card className="bg-gradient-card border-border/50 p-6">
        <h3 className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2">
          <span className="h-px w-8 bg-border"></span>
          Geography & Customer Segmentation
        </h3>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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

          {/* Hotspot Count */}
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="h-5 w-5 text-warning" />
              <h4 className="font-semibold text-foreground">Sentiment Hotspots</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-4">
              <span className="text-4xl font-bold text-warning">{hotspotCount}</span>
              <span className="text-sm text-muted-foreground">regions</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Showing &gt;20% sentiment change MoM
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
};
