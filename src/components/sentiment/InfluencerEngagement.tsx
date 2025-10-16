import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Users, Heart, MessageCircle, Share2, DollarSign } from "lucide-react";

const keyMetrics = [
  { label: "Avg Engagement Rate", value: "4.8%", icon: TrendingUp },
  { label: "Total Influencers", value: "234", icon: Users },
  { label: "Total Reach", value: "2.3M", icon: Heart },
  { label: "Avg ROI", value: "3.2x", icon: DollarSign },
];

const topContent = [
  { title: "10 Amazing Ways to Use...", shares: 2340, comments: 456, likes: 8920 },
  { title: "Why Everyone is Talking About...", shares: 1890, comments: 389, likes: 7650 },
  { title: "The Ultimate Guide to...", shares: 1560, comments: 312, likes: 6430 },
];

const brandDiscoveries = [
  { brand: "TechReview Daily", mentions: 145, sentiment: "positive" },
  { brand: "Innovation Hub", mentions: 98, sentiment: "positive" },
  { brand: "Future Trends", mentions: 67, sentiment: "neutral" },
];

const influencersByPlatform = {
  instagram: [
    { name: "@techguru", followers: "234K", engagement: "5.2%", roi: "4.1x" },
    { name: "@innovator_daily", followers: "189K", engagement: "4.8%", roi: "3.8x" },
    { name: "@future_insights", followers: "156K", engagement: "4.5%", roi: "3.5x" },
  ],
  youtube: [
    { name: "Tech Explained", followers: "890K", engagement: "6.8%", roi: "5.2x" },
    { name: "Innovation Channel", followers: "567K", engagement: "5.9%", roi: "4.7x" },
    { name: "Future Tech", followers: "445K", engagement: "5.4%", roi: "4.2x" },
  ],
  tiktok: [
    { name: "@viral_tech", followers: "1.2M", engagement: "8.9%", roi: "6.5x" },
    { name: "@tech_trends", followers: "890K", engagement: "7.8%", roi: "5.8x" },
    { name: "@innovation_now", followers: "678K", engagement: "7.2%", roi: "5.1x" },
  ],
};

export const InfluencerEngagement = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<keyof typeof influencersByPlatform>("instagram");

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Platform Selector */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-foreground">Platform:</span>
        <Select value={selectedPlatform} onValueChange={(value) => setSelectedPlatform(value as keyof typeof influencersByPlatform)}>
          <SelectTrigger className="w-40 bg-background border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-popover z-50">
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="youtube">YouTube</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric) => (
          <Card key={metric.label} className="bg-card/50 border-border/50 p-4">
            <div className="flex items-center gap-2 mb-2">
              <metric.icon className="h-4 w-4 text-primary" />
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{metric.value}</p>
          </Card>
        ))}
      </div>

      {/* Top Performing Content */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Top Performing Content</h4>
        <div className="space-y-3">
          {topContent.map((content, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <span className="text-sm font-medium text-foreground flex-1">{content.title}</span>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Share2 className="h-3 w-3" />
                  {content.shares}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  {content.comments}
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  {content.likes}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Key Influencers and Brand Discoveries */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Key Influencers on {selectedPlatform}</h4>
          <div className="space-y-3">
            {influencersByPlatform[selectedPlatform].map((influencer) => (
              <div key={influencer.name} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">{influencer.name}</p>
                  <p className="text-xs text-muted-foreground">{influencer.followers} followers</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Engagement: {influencer.engagement}</p>
                  <p className="text-xs font-semibold text-primary">ROI: {influencer.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Brand Discoveries</h4>
          <div className="space-y-3">
            {brandDiscoveries.map((brand) => (
              <div key={brand.brand} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">{brand.brand}</p>
                  <p className="text-xs text-muted-foreground">{brand.mentions} mentions</p>
                </div>
                <Badge 
                  variant="outline"
                  className={brand.sentiment === "positive" 
                    ? "bg-primary/10 border-primary/30 text-primary" 
                    : "bg-muted/30 border-muted text-muted-foreground"
                  }
                >
                  {brand.sentiment}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
