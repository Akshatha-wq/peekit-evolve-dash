import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingDown, TrendingUp, AlertCircle, Youtube, Calendar, Eye, ExternalLink, Download } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Mock data for competitors
const competitorMetrics = [
  { label: "Competitors Tracked", value: "12", icon: Eye, change: "+2 this week" },
  { label: "Daily Updates", value: "47", icon: Calendar, change: "Last 24 hours" },
  { label: "Avg Price Change", value: "-3.2%", icon: TrendingDown, change: "↓ vs last week", positive: true },
  { label: "Critical Alerts", value: "3", icon: AlertCircle, change: "Requires attention", critical: true },
];

const competitorInfluencers = [
  {
    name: "Maruti Mandi",
    platform: "YouTube",
    lastPosted: "2 hours ago",
    videoTitle: "Daily Vegetable Pricing Update - March 2025",
    viewCount: "12.5K",
    followers: "245K",
    status: "Active",
    priceData: "₹45/kg tomatoes",
    link: "#"
  },
  {
    name: "Ninja Cart Pricing",
    platform: "YouTube",
    lastPosted: "5 hours ago",
    videoTitle: "Wholesale Market Rates - Fresh Produce",
    viewCount: "8.3K",
    followers: "180K",
    status: "Active",
    priceData: "₹38/kg potatoes",
    link: "#"
  },
  {
    name: "Big Basket Updates",
    platform: "Instagram",
    lastPosted: "1 day ago",
    videoTitle: "Weekly Price Drop Alert",
    viewCount: "15.2K",
    followers: "890K",
    status: "Active",
    priceData: "₹52/kg onions",
    link: "#"
  },
  {
    name: "Local Mandi News",
    platform: "YouTube",
    lastPosted: "3 days ago",
    videoTitle: "Market Trends & Price Analysis",
    viewCount: "4.1K",
    followers: "67K",
    status: "Inactive",
    priceData: "Multiple items",
    link: "#"
  },
];

const pricingTrendsData = [
  { date: "Mon", marutiMandi: 48, ninjaCart: 42, bigBasket: 55, yourPrice: 45 },
  { date: "Tue", marutiMandi: 47, ninjaCart: 40, bigBasket: 54, yourPrice: 44 },
  { date: "Wed", marutiMandi: 46, ninjaCart: 39, bigBasket: 53, yourPrice: 43 },
  { date: "Thu", marutiMandi: 45, ninjaCart: 38, bigBasket: 52, yourPrice: 42 },
  { date: "Fri", marutiMandi: 45, ninjaCart: 38, bigBasket: 52, yourPrice: 41 },
  { date: "Sat", marutiMandi: 44, ninjaCart: 37, bigBasket: 51, yourPrice: 40 },
  { date: "Today", marutiMandi: 45, ninjaCart: 38, bigBasket: 52, yourPrice: 40 },
];

const competitiveComparisons = [
  {
    competitor: "Maruti Mandi",
    category: "Tomatoes",
    currentPrice: "₹45/kg",
    previousPrice: "₹48/kg",
    change: -6.25,
    lastUpdate: "2 hours ago",
    yourPrice: "₹40/kg",
    advantage: true
  },
  {
    competitor: "Ninja Cart",
    category: "Potatoes",
    currentPrice: "₹38/kg",
    previousPrice: "₹42/kg",
    change: -9.52,
    lastUpdate: "5 hours ago",
    yourPrice: "₹41/kg",
    advantage: false
  },
  {
    competitor: "Big Basket",
    category: "Onions",
    currentPrice: "₹52/kg",
    previousPrice: "₹54/kg",
    change: -3.70,
    lastUpdate: "1 day ago",
    yourPrice: "₹48/kg",
    advantage: true
  },
  {
    competitor: "Local Mandi",
    category: "Carrots",
    currentPrice: "₹35/kg",
    previousPrice: "₹35/kg",
    change: 0,
    lastUpdate: "3 days ago",
    yourPrice: "₹37/kg",
    advantage: false
  },
];

const recentAlerts = [
  {
    type: "price_drop",
    competitor: "Ninja Cart",
    message: "Significant price drop in potatoes (-9.5%)",
    time: "5 hours ago",
    severity: "high"
  },
  {
    type: "new_video",
    competitor: "Maruti Mandi",
    message: "New pricing video posted with updated rates",
    time: "2 hours ago",
    severity: "medium"
  },
  {
    type: "missing_data",
    competitor: "Local Mandi",
    message: "No updates for 3 days - possible inactive account",
    time: "12 hours ago",
    severity: "low"
  },
];

export const CompetitorPriceMonitoring = () => {
  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {competitorMetrics.map((metric, index) => (
          <Card key={index} className="bg-card/50 border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className={`text-2xl font-bold mt-1 ${metric.positive ? 'text-green-500' : metric.critical ? 'text-destructive' : ''}`}>
                    {metric.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.change}</p>
                </div>
                <metric.icon className={`h-8 w-8 ${metric.positive ? 'text-green-500' : metric.critical ? 'text-destructive' : 'text-muted-foreground'}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Competitor Influencer Tracker */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Youtube className="h-5 w-5 text-primary" />
              <CardTitle>Competitor Influencer Tracker</CardTitle>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">Filter</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {competitorInfluencers.map((influencer, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Youtube className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{influencer.name}</h4>
                      <Badge variant={influencer.status === "Active" ? "default" : "secondary"} className="text-xs">
                        {influencer.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">{influencer.platform}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{influencer.videoTitle}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {influencer.viewCount} views
                      </span>
                      <span>{influencer.followers} followers</span>
                      <span>{influencer.lastPosted}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{influencer.priceData}</p>
                    <Button variant="ghost" size="sm" className="mt-2">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pricing Trends Chart */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5 text-primary" />
              <CardTitle>Weekly Pricing Trends Comparison</CardTitle>
            </div>
            <Button variant="outline" size="sm">Last 7 Days</Button>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={pricingTrendsData}>
              <defs>
                <linearGradient id="marutiMandi" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="ninjaCart" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="bigBasket" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="yourPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="date" className="text-xs" />
              <YAxis className="text-xs" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="marutiMandi" stroke="#ef4444" fillOpacity={1} fill="url(#marutiMandi)" name="Maruti Mandi" />
              <Area type="monotone" dataKey="ninjaCart" stroke="#f59e0b" fillOpacity={1} fill="url(#ninjaCart)" name="Ninja Cart" />
              <Area type="monotone" dataKey="bigBasket" stroke="#8b5cf6" fillOpacity={1} fill="url(#bigBasket)" name="Big Basket" />
              <Area type="monotone" dataKey="yourPrice" stroke="#10b981" fillOpacity={1} fill="url(#yourPrice)" name="Your Price" strokeWidth={2} />
              <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>

    {/* Competitive Comparison Table */}
    <Card className="bg-card/50 border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <CardTitle>Competitive Positioning Analysis</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">Competitor</th>
                <th className="text-left py-3 px-4">Category</th>
                <th className="text-left py-3 px-4">Current Price</th>
                <th className="text-left py-3 px-4">Previous Price</th>
                <th className="text-left py-3 px-4">Change</th>
                <th className="text-left py-3 px-4">Your Price</th>
                <th className="text-left py-3 px-4">Position</th>
                <th className="text-left py-3 px-4">Last Update</th>
              </tr>
            </thead>
            <tbody>
              {competitiveComparisons.map((item, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-background/50 transition-colors">
                  <td className="py-3 px-4 font-medium">{item.competitor}</td>
                  <td className="py-3 px-4">{item.category}</td>
                  <td className="py-3 px-4 font-semibold">{item.currentPrice}</td>
                  <td className="py-3 px-4 text-muted-foreground">{item.previousPrice}</td>
                  <td className="py-3 px-4">
                    <div className={`flex items-center gap-1 ${item.change < 0 ? 'text-green-500' : item.change > 0 ? 'text-red-500' : 'text-muted-foreground'}`}>
                      {item.change < 0 ? <TrendingDown className="h-4 w-4" /> : item.change > 0 ? <TrendingUp className="h-4 w-4" /> : null}
                      {item.change !== 0 ? `${item.change.toFixed(1)}%` : 'No change'}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-semibold text-primary">{item.yourPrice}</td>
                  <td className="py-3 px-4">
                    <Badge variant={item.advantage ? "default" : "secondary"}>
                      {item.advantage ? "Advantage" : "Higher"}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{item.lastUpdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>

    {/* Recent Alerts */}
    <Card className="bg-card/50 border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-primary" />
          <CardTitle>Recent Price Alerts (24 Hours)</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentAlerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border ${
              alert.severity === 'high' ? 'border-red-500/50 bg-red-500/5' :
              alert.severity === 'medium' ? 'border-yellow-500/50 bg-yellow-500/5' :
              'border-border/50 bg-background/50'
            }`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <AlertCircle className={`h-5 w-5 mt-0.5 ${
                    alert.severity === 'high' ? 'text-red-500' :
                    alert.severity === 'medium' ? 'text-yellow-500' :
                    'text-muted-foreground'
                  }`} />
                  <div>
                    <p className="font-medium">{alert.competitor}</p>
                    <p className="text-sm text-muted-foreground mt-1">{alert.message}</p>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
  );
};