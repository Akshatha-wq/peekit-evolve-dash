import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Users, Heart, MessageCircle, Share2, DollarSign } from "lucide-react";

const topContent = [
  { 
    title: "BCAA vs EAA - What You Need to Know",
    platform: "TikTok",
    views: "6.4M",
    metric: { label: "shares", value: "187K", icon: Share2 },
  },
  { 
    title: "Best Amino Acid Supplements for Athletes",
    platform: "YouTube",
    views: "3.9M",
    metric: { label: "comments", value: "24.6K", icon: MessageCircle },
  },
  { 
    title: "How Amino Acids Changed My Recovery",
    platform: "Instagram",
    views: "5.7M",
    metric: { label: "likes", value: "2.8M", icon: Heart },
  }
];

const brandDiscoveries = [
  {
    brand: "Optimum Nutrition BCAA Review",
    description: "Testing the gold standard of amino acids",
    platform: "YouTube",
    views: "1.9M"
  },
  {
    brand: "Xtend Elite BCAA",
    description: "Premium amino acids for serious athletes",
    platform: "Instagram",
    views: "1.3M"
  },
  {
    brand: "Scivation Xtend Original BCAA",
    description: "Most popular flavored amino acid powder",
    platform: "TikTok",
    views: "1.1M"
  },
  {
    brand: "Kaged Muscle Fermented BCAAs",
    description: "Plant-based amino acids that actually work",
    platform: "YouTube",
    views: "892K"
  }
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

      {/* Top Content */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
          <span className="text-2xl">📄</span> Top Content
        </h4>
        <div className="grid lg:grid-cols-3 gap-6">
          {topContent.map((content, index) => {
            const categoryName = index === 0 ? "Most Shared" : index === 1 ? "Most Comments" : "Most Likes";
            const iconColor = index === 0 ? "text-blue-400" : index === 1 ? "text-green-400" : "text-pink-400";
            const metricColor = index === 0 ? "text-blue-400" : index === 1 ? "text-green-400" : "text-pink-400";
            
            return (
              <Card key={index} className="bg-gradient-to-br from-card/80 to-card/40 border-border/30 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <content.metric.icon className={`h-5 w-5 ${iconColor}`} />
                  <h5 className="text-sm font-semibold text-foreground">{categoryName}</h5>
                </div>
                
                {/* Video Placeholder */}
                <div className="bg-background/80 rounded-lg aspect-video flex items-center justify-center mb-3 border border-border/20">
                  <svg className="w-16 h-16 text-muted-foreground/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                
                {/* Content Details */}
                <p className="text-sm font-medium text-foreground mb-2">{content.title}</p>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">{content.platform}</Badge>
                  <span className="text-xs text-muted-foreground">{content.views} views</span>
                </div>
                
                {/* Metric */}
                <div className="flex items-center gap-2">
                  <content.metric.icon className={`h-4 w-4 ${iconColor}`} />
                  <span className={`text-sm font-semibold ${metricColor}`}>
                    {content.metric.value} {content.metric.label}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </Card>


      {/* Brand Discoveries */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-4 text-foreground">Brand Discoveries</h4>
        <div className="space-y-3">
          {brandDiscoveries.map((brand) => (
            <div key={brand.brand} className="p-3 bg-muted/30 rounded-lg">
              <p className="text-sm font-medium text-foreground mb-1">{brand.brand}</p>
              <p className="text-xs text-muted-foreground mb-2">{brand.description}</p>
              <div className="flex items-center justify-between text-xs">
                <Badge variant="outline">{brand.platform}</Badge>
                <span className="text-muted-foreground">{brand.views} views</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
