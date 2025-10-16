import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Instagram, Youtube, Twitter, TrendingUp } from "lucide-react";
import { useState } from "react";

interface TrendCardProps {
  name: string;
  platforms: ("instagram" | "youtube" | "twitter")[];
  engagement: number;
  category: "hot" | "rising" | "cold";
  insight?: string;
}

const platformIcons = {
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
};

export const TrendCard = ({ name, platforms, engagement, category, insight }: TrendCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryStyles = {
    hot: {
      border: "border-hot-trend/30",
      bg: "bg-hot-trend/10",
      text: "text-hot-trend",
      badge: "bg-hot-trend/20 text-hot-trend border-hot-trend/30",
    },
    rising: {
      border: "border-rising-trend/30",
      bg: "bg-rising-trend/10",
      text: "text-rising-trend",
      badge: "bg-rising-trend/20 text-rising-trend border-rising-trend/30",
    },
    cold: {
      border: "border-cold-trend/30",
      bg: "bg-cold-trend/10",
      text: "text-cold-trend",
      badge: "bg-cold-trend/20 text-cold-trend border-cold-trend/30",
    },
  };

  const styles = categoryStyles[category];

  return (
    <Card 
      className={`${styles.border} ${styles.bg} p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h4 className={`font-bold text-sm mb-2 ${styles.text}`}>{name}</h4>
          <div className="flex items-center gap-2 mb-2">
            {platforms.map((platform) => {
              const Icon = platformIcons[platform];
              return (
                <div key={platform} className="p-1.5 rounded-md bg-background/30">
                  <Icon className="h-3 w-3 text-muted-foreground" />
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-3 w-3 text-muted-foreground" />
            <div className="flex-1 h-1.5 bg-background/30 rounded-full overflow-hidden">
              <div 
                className={`h-full ${styles.bg} transition-all duration-500`}
                style={{ width: `${engagement}%` }}
              />
            </div>
            <span className="text-xs text-muted-foreground">{engagement}%</span>
          </div>
        </div>
        <Badge className={styles.badge} variant="outline">
          {category.toUpperCase()}
        </Badge>
      </div>
      
      {isExpanded && insight && (
        <div className="mt-3 pt-3 border-t border-border/50 animate-fade-in">
          <p className="text-xs text-muted-foreground">{insight}</p>
        </div>
      )}
    </Card>
  );
};
