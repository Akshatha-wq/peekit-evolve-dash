import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Target } from "lucide-react";

const opportunities = [
  {
    rank: 1,
    title: "Sustainable Tech Gadgets",
    mentions: 2847,
    engagement: 94,
    trend: "+156%",
    category: "Technology",
  },
  {
    rank: 2,
    title: "Home Workout Equipment",
    mentions: 2156,
    engagement: 87,
    trend: "+142%",
    category: "Fitness",
  },
  {
    rank: 3,
    title: "Plant-Based Protein",
    mentions: 1923,
    engagement: 82,
    trend: "+128%",
    category: "Health",
  },
  {
    rank: 4,
    title: "Remote Work Tools",
    mentions: 1654,
    engagement: 78,
    trend: "+115%",
    category: "Business",
  },
];

export const WhitespaceOpportunities = () => {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">WHITESPACE OPPORTUNITIES</h2>
        <p className="text-muted-foreground">
          White spaces are opportunities for brands to action on. They are ranked by Number of Mention and Engagement
        </p>
      </div>

      <div className="mb-4">
        <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
          Feature
        </Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {opportunities.map((opportunity) => (
          <Card 
            key={opportunity.rank}
            className="bg-gradient-card border-border/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <Star className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">
                      RANK #{opportunity.rank}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {opportunity.category}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{opportunity.title}</h4>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span className="text-xs">Mentions</span>
                </div>
                <p className="text-lg font-bold text-foreground">{opportunity.mentions.toLocaleString()}</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Target className="h-3 w-3" />
                  <span className="text-xs">Engagement</span>
                </div>
                <p className="text-lg font-bold text-rising-trend">{opportunity.engagement}%</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  <span className="text-xs">Growth</span>
                </div>
                <p className="text-lg font-bold text-hot-trend">{opportunity.trend}</p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Opportunity Score</span>
                <span className="font-bold text-primary">{(100 - (opportunity.rank - 1) * 5).toFixed(0)}/100</span>
              </div>
              <div className="mt-2 h-2 bg-background/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-primary transition-all duration-500"
                  style={{ width: `${100 - (opportunity.rank - 1) * 5}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
