import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line, Area, AreaChart } from "recharts";
import { ThumbsUp, ThumbsDown, Check, X, TrendingUp, Scale, Users, GitCompare, Hash, Clock, MapPin, TrendingDown, Calendar, Activity, AlertCircle, Zap, DollarSign, Share2, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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

// Temporal Analysis Data
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

const volatilityIndex = 1.15; // Average volatility score
const peakNegativityWindow = "Monday 9AM - 11AM";
const campaignTimingEffectiveness = 32.5; // % engagement uplift
const optimalPostingWindow = "Friday 3PM - 6PM";

// Influencer & Engagement Analytics Data
const influencerData = [
  { name: "@TechGuru", followers: 245000, likes: 12340, comments: 890, shares: 567, posts: 8, conversions: 342, cost: 15000 },
  { name: "@StyleInfluencer", followers: 189000, likes: 9870, comments: 654, shares: 423, posts: 6, conversions: 289, cost: 12000 },
  { name: "@LifestyleVlogger", followers: 312000, likes: 15600, comments: 1120, shares: 789, posts: 10, conversions: 456, cost: 18000 },
  { name: "@BeautyExpert", followers: 156000, likes: 8230, comments: 567, shares: 345, posts: 7, conversions: 234, cost: 10000 },
];

const postLongevity = 5.8; // average days engagement continues
const avgEngagementRate = 5.6; // average ER across all influencers
const avgConsistencyIndex = 7.75; // average posts per month per influencer
const avgInfluencerROI = 2.8; // average ROI

const platforms = ["All Platforms", "Instagram", "YouTube", "Twitter", "TikTok", "LinkedIn"];

// Predictive Engagement & NPS Modeling Data
const predictedNPS = 42;
const actualNPS = 45;
const predictionAccuracy = 93.5; // percentage
const engagementNPSCorrelation = 0.87; // correlation coefficient (r)
const earlyDetectorDetectionRate = 76.3; // percentage

const npsComparisonData = [
  { month: "Jan", predicted: 38, actual: 40 },
  { month: "Feb", predicted: 41, actual: 42 },
  { month: "Mar", predicted: 43, actual: 44 },
  { month: "Apr", predicted: 42, actual: 45 },
  { month: "May", predicted: 45, actual: 46 },
  { month: "Jun", predicted: 44, actual: 43 },
];

const npsSegmentData = [
  { segment: "Promoters", predicted: 58, actual: 62, color: "#10B981" },
  { segment: "Passives", predicted: 28, actual: 25, color: "#F59E0B" },
  { segment: "Detractors", predicted: 14, actual: 13, color: "#EF4444" },
];

const detectorMetrics = {
  totalDetractors: 248,
  flaggedPreSurvey: 189,
  accurateFlags: 176,
  falsePositives: 13,
};


export const SentimentBreakdown = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platforms");

  // Calculate influencer metrics
  const calculateEngagementRate = (influencer: typeof influencerData[0]) => {
    return (((influencer.likes + influencer.comments + influencer.shares) / influencer.followers) * 100).toFixed(2);
  };

  const calculateROI = (influencer: typeof influencerData[0]) => {
    return (influencer.conversions / influencer.cost).toFixed(2);
  };

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

      {/* Temporal Analysis Section */}
      <Card className="bg-gradient-card border-border/50 p-6">
        <h3 className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2">
          <span className="h-px w-8 bg-border"></span>
          Temporal Analysis
        </h3>

        {/* Time-based Charts */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
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
        <div className="mb-6">
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
                <Legend 
                  verticalAlign="top"
                  height={36}
                />
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="sentiment" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Sentiment Score"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="volatility" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                  name="Volatility Index"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Frequency and amplitude of sentiment spikes over time
            </p>
          </Card>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Volatility Index */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-5 w-5 text-warning" />
              <h4 className="font-semibold text-foreground">Avg. Volatility</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-warning">{volatilityIndex}</span>
              <span className="text-sm text-muted-foreground">index</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Sentiment fluctuation score
            </p>
          </Card>

          {/* Peak Negativity Window */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <h4 className="font-semibold text-foreground">Peak Negativity</h4>
            </div>
            <div className="mt-3">
              <span className="text-lg font-bold text-destructive">{peakNegativityWindow}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              When negative posts peak
            </p>
          </Card>

          {/* Campaign Timing */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-5 w-5 text-rising-trend" />
              <h4 className="font-semibold text-foreground">Campaign Uplift</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-rising-trend">+{campaignTimingEffectiveness}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Engagement in optimal windows
            </p>
          </Card>

          {/* Optimal Posting Window */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">Best Time to Post</h4>
            </div>
            <div className="mt-3">
              <span className="text-lg font-bold text-primary">{optimalPostingWindow}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Highest engagement window
            </p>
          </Card>
        </div>
      </Card>

      {/* Influencer & Engagement Analytics Section */}
      <Card className="bg-gradient-card border-border/50 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
            <span className="h-px w-8 bg-border"></span>
            Influencer & Engagement Analytics
          </h3>
          
          {/* Platform Selector Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Platform:</span>
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="w-[180px] bg-card">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                {platforms.map((platform) => (
                  <SelectItem key={platform} value={platform}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Key Metrics Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Average Engagement Rate */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">Avg. Engagement Rate</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-primary">{avgEngagementRate}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              (Likes + Comments + Shares) ÷ Followers
            </p>
          </Card>

          {/* Post Longevity */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-accent" />
              <h4 className="font-semibold text-foreground">Post Longevity</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-accent">{postLongevity}</span>
              <span className="text-sm text-muted-foreground">days</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Average days engagement continues
            </p>
          </Card>

          {/* Consistency Index */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-rising-trend" />
              <h4 className="font-semibold text-foreground">Consistency Index</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-rising-trend">{avgConsistencyIndex}</span>
              <span className="text-sm text-muted-foreground">posts/mo</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Average posts per month per influencer
            </p>
          </Card>

          {/* Average ROI */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-warning" />
              <h4 className="font-semibold text-foreground">Avg. Influencer ROI</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-warning">{avgInfluencerROI}x</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Conversions ÷ Cost
            </p>
          </Card>
        </div>

        {/* Influencer Performance Table */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Share2 className="h-5 w-5 text-primary" />
            <h4 className="text-lg font-bold text-foreground">Influencer Performance Breakdown</h4>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-2 text-sm font-semibold text-muted-foreground">Influencer</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground">Followers</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground">Engagement Rate</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground">Posts/Month</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground">Conversions</th>
                  <th className="text-right py-3 px-2 text-sm font-semibold text-muted-foreground">ROI</th>
                </tr>
              </thead>
              <tbody>
                {influencerData.map((influencer, index) => (
                  <tr key={index} className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                    <td className="py-3 px-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{influencer.name}</span>
                      </div>
                    </td>
                    <td className="text-right py-3 px-2 text-foreground">{influencer.followers.toLocaleString()}</td>
                    <td className="text-right py-3 px-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                        {calculateEngagementRate(influencer)}%
                      </Badge>
                    </td>
                    <td className="text-right py-3 px-2 text-foreground">{influencer.posts}</td>
                    <td className="text-right py-3 px-2 text-foreground">{influencer.conversions}</td>
                    <td className="text-right py-3 px-2">
                      <Badge variant="outline" className="bg-rising-trend/10 text-rising-trend border-rising-trend/30">
                        {calculateROI(influencer)}x
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Data source: {selectedPlatform} • Updated in real-time
            </p>
          </div>
        </Card>
      </Card>

      {/* Predictive Engagement & NPS Modeling Section */}
      <Card className="bg-gradient-card border-border/50 p-6">
        <h3 className="text-lg font-semibold text-muted-foreground mb-6 flex items-center gap-2">
          <span className="h-px w-8 bg-border"></span>
          Predictive Engagement & NPS Modeling
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Forecast brand promoters/detractors using engagement data from social platforms
        </p>

        {/* Key Metrics Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Predicted NPS vs Actual */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground">NPS Score</h4>
            </div>
            <div className="space-y-2 mt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Predicted:</span>
                <span className="text-2xl font-bold text-primary">{predictedNPS}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Actual:</span>
                <span className="text-2xl font-bold text-accent">{actualNPS}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Modelled vs actual NPS
            </p>
          </Card>

          {/* Prediction Accuracy */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="h-5 w-5 text-rising-trend" />
              <h4 className="font-semibold text-foreground">Prediction Accuracy</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-rising-trend">{predictionAccuracy}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Model accuracy rate
            </p>
          </Card>

          {/* Engagement-NPS Correlation */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <GitCompare className="h-5 w-5 text-accent" />
              <h4 className="font-semibold text-foreground">Correlation (r)</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-accent">{engagementNPSCorrelation}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Engagement-NPS correlation
            </p>
          </Card>

          {/* Early Detractor Detection Rate */}
          <Card className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              <h4 className="font-semibold text-foreground">Detractor Detection</h4>
            </div>
            <div className="flex items-baseline gap-2 mt-3">
              <span className="text-3xl font-bold text-warning">{earlyDetectorDetectionRate}%</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Flagged pre-survey ÷ total detractors
            </p>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* NPS Prediction vs Actual Trend */}
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-bold text-foreground">NPS Prediction vs Actual</h4>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={npsComparisonData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="month" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  domain={[30, 50]}
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                  label={{ value: 'NPS Score', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Legend 
                  verticalAlign="top"
                  height={36}
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                  name="Predicted NPS"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  name="Actual NPS"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              6-month prediction accuracy tracking
            </p>
          </Card>

          {/* NPS Segment Distribution */}
          <Card className="bg-card/50 border-border/50 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-accent" />
              <h4 className="text-lg font-bold text-foreground">Promoter/Detractor Prediction</h4>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={npsSegmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis 
                  dataKey="segment" 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  tick={{ fontSize: 12 }}
                  label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--popover))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                    color: "hsl(var(--foreground))"
                  }}
                />
                <Legend 
                  verticalAlign="top"
                  height={36}
                />
                <Bar dataKey="predicted" name="Predicted %" radius={[4, 4, 0, 0]} maxBarSize={60}>
                  {npsSegmentData.map((entry, index) => (
                    <Cell key={`cell-predicted-${index}`} fill={entry.color} opacity={0.6} />
                  ))}
                </Bar>
                <Bar dataKey="actual" name="Actual %" radius={[4, 4, 0, 0]} maxBarSize={60}>
                  {npsSegmentData.map((entry, index) => (
                    <Cell key={`cell-actual-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Predicted vs actual segment distribution
            </p>
          </Card>
        </div>

        {/* Detractor Detection Breakdown */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="h-5 w-5 text-destructive" />
            <h4 className="text-lg font-bold text-foreground">Early Detractor Detection Metrics</h4>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-card rounded-lg border border-border/50">
              <p className="text-sm text-muted-foreground mb-2">Total Detractors</p>
              <p className="text-3xl font-bold text-foreground">{detectorMetrics.totalDetractors}</p>
            </div>
            <div className="text-center p-4 bg-warning/5 rounded-lg border border-warning/30">
              <p className="text-sm text-muted-foreground mb-2">Flagged Pre-Survey</p>
              <p className="text-3xl font-bold text-warning">{detectorMetrics.flaggedPreSurvey}</p>
            </div>
            <div className="text-center p-4 bg-rising-trend/5 rounded-lg border border-rising-trend/30">
              <p className="text-sm text-muted-foreground mb-2">Accurate Flags</p>
              <p className="text-3xl font-bold text-rising-trend">{detectorMetrics.accurateFlags}</p>
            </div>
            <div className="text-center p-4 bg-destructive/5 rounded-lg border border-destructive/30">
              <p className="text-sm text-muted-foreground mb-2">False Positives</p>
              <p className="text-3xl font-bold text-destructive">{detectorMetrics.falsePositives}</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50">
            <p className="text-xs text-muted-foreground text-center">
              Detection powered by social engagement patterns and sentiment analysis
            </p>
          </div>
        </Card>
      </Card>
    </div>
  );
};
