import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Users, Heart, MessageCircle, Share2, DollarSign, Star, Target } from "lucide-react";

const keyMetrics = [
  { label: "Avg Engagement Rate", value: "4.8%", icon: TrendingUp },
  { label: "Total Influencers", value: "234", icon: Users },
  { label: "Total Reach", value: "2.3M", icon: Heart },
  { label: "Avg ROI", value: "3.2x", icon: DollarSign },
];

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

const influencerData = [
  { name: "@TechGuru", followers: 245000, likes: 12340, comments: 890, shares: 567, posts: 8, conversions: 342, cost: 15000 },
  { name: "@StyleInfluencer", followers: 189000, likes: 9870, comments: 654, shares: 423, posts: 6, conversions: 289, cost: 12000 },
  { name: "@LifestyleVlogger", followers: 312000, likes: 15600, comments: 1120, shares: 789, posts: 10, conversions: 456, cost: 18000 },
  { name: "@BeautyExpert", followers: 156000, likes: 8230, comments: 567, shares: 345, posts: 7, conversions: 234, cost: 10000 },
];

const platforms = ["All Platforms", "Instagram", "YouTube", "Twitter", "TikTok", "LinkedIn"];

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

      {/* Key Influencers & Complementary Keywords */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-xl font-bold text-foreground mb-6">Key Influencers & Complementary Keywords</h4>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Influencers */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-primary" />
              <h5 className="text-lg font-semibold text-foreground">Top Influencers</h5>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                @TechGuru
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                @StyleInfluencer
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                @LifestyleVlogger
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                @BeautyExpert
              </div>
            </div>
          </div>

          {/* Complementary Keywords */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h5 className="text-lg font-semibold text-foreground">Complementary Keywords</h5>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-6 rounded-lg bg-gradient-to-br from-pink-400 to-pink-600 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                BCAA Supplements
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                Amino Acids
              </div>
              <div className="p-6 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                Recovery Tips
              </div>
              <div className="col-span-2 p-6 rounded-lg bg-gradient-to-br from-pink-400 to-pink-500 text-white font-semibold text-center flex items-center justify-center min-h-[100px]">
                Workout Nutrition
              </div>
            </div>
          </div>
        </div>
      </Card>

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
