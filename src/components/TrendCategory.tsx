import { Card } from "@/components/ui/card";
import { TrendCard } from "./TrendCard";
import { Flame, TrendingUp, Snowflake } from "lucide-react";

interface TrendCategoryProps {
  type: "hot" | "rising" | "cold";
}

const categoryData = {
  hot: {
    icon: Flame,
    title: "Hot Trends",
    trends: [
      {
        name: "#AIRevolution",
        platforms: ["instagram" as const, "youtube" as const, "twitter" as const],
        engagement: 92,
        insight: "Trending due to major tech announcements and influencer coverage across platforms",
      },
      {
        name: "Sustainable Fashion",
        platforms: ["instagram" as const, "youtube" as const],
        engagement: 85,
        insight: "High engagement from eco-conscious demographics, particularly Gen Z",
      },
      {
        name: "Web3 Gaming",
        platforms: ["twitter" as const, "youtube" as const],
        engagement: 78,
        insight: "Gaming influencers driving conversations about blockchain integration",
      },
    ],
  },
  rising: {
    icon: TrendingUp,
    title: "Rising Trends",
    trends: [
      {
        name: "Micro-Learning",
        platforms: ["instagram" as const, "youtube" as const],
        engagement: 68,
        insight: "Short-form educational content showing accelerating growth week-over-week",
      },
      {
        name: "#DigitalDetox",
        platforms: ["twitter" as const, "instagram" as const],
        engagement: 62,
        insight: "Wellness creators leading the conversation with mindfulness content",
      },
      {
        name: "Home Automation",
        platforms: ["youtube" as const, "twitter" as const],
        engagement: 55,
        insight: "Tech reviewers showcasing smart home setups gaining traction",
      },
    ],
  },
  cold: {
    icon: Snowflake,
    title: "Cold Trends",
    trends: [
      {
        name: "Metaverse Real Estate",
        platforms: ["twitter" as const],
        engagement: 28,
        insight: "Interest declining after initial hype, limited new content creation",
      },
      {
        name: "#NFTArt",
        platforms: ["instagram" as const, "twitter" as const],
        engagement: 22,
        insight: "Decreased engagement as market cooled, fewer new projects launching",
      },
      {
        name: "Crypto Mining",
        platforms: ["youtube" as const],
        engagement: 18,
        insight: "Fading interest due to energy concerns and market conditions",
      },
    ],
  },
};

export const TrendCategory = ({ type }: TrendCategoryProps) => {
  const data = categoryData[type];
  const Icon = data.icon;

  const iconStyles = {
    hot: "text-hot-trend",
    rising: "text-rising-trend",
    cold: "text-cold-trend",
  };

  return (
    <div className="space-y-4 animate-slide-up">
      <div className="flex items-center gap-2">
        <Icon className={`h-5 w-5 ${iconStyles[type]}`} />
        <h3 className="text-lg font-bold text-foreground">{data.title}</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.trends.map((trend, index) => (
          <TrendCard
            key={index}
            name={trend.name}
            platforms={trend.platforms}
            engagement={trend.engagement}
            category={type}
            insight={trend.insight}
          />
        ))}
      </div>
    </div>
  );
};
