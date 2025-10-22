import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Target } from "lucide-react";

interface Opportunity {
  rank: number;
  title: string;
  mentions: number;
  engagement: number;
  trend: string;
  category: string;
}

const featureOpportunities: Opportunity[] = [
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
];

const ingredientOpportunities: Opportunity[] = [
  {
    rank: 1,
    title: "Organic Adaptogens",
    mentions: 1923,
    engagement: 89,
    trend: "+134%",
    category: "Health",
  },
  {
    rank: 2,
    title: "Plant-Based Collagen",
    mentions: 1654,
    engagement: 82,
    trend: "+118%",
    category: "Beauty",
  },
];

const uspOpportunities: Opportunity[] = [
  {
    rank: 1,
    title: "Carbon Neutral Shipping",
    mentions: 1845,
    engagement: 91,
    trend: "+145%",
    category: "Sustainability",
  },
  {
    rank: 2,
    title: "Lifetime Warranty",
    mentions: 1432,
    engagement: 85,
    trend: "+122%",
    category: "Value",
  },
];

const OpportunityCard = ({ opportunity }: { opportunity: Opportunity }) => {
  return (
    <Card 
      className="bg-card/50 border-border/50 p-6 hover:bg-card/70 transition-colors"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-muted/50 p-3 rounded-lg">
            <Star className="h-5 w-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs">
                RANK #{opportunity.rank}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {opportunity.category}
              </Badge>
            </div>
            <h4 className="font-semibold text-foreground">{opportunity.title}</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="h-3 w-3" />
            <span className="text-xs">Mentions</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{opportunity.mentions.toLocaleString()}</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Target className="h-3 w-3" />
            <span className="text-xs">Engagement</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{opportunity.engagement}%</p>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-1 text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            <span className="text-xs">Growth</span>
          </div>
          <p className="text-lg font-semibold text-foreground">{opportunity.trend}</p>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Opportunity Score</span>
          <span className="font-semibold text-foreground">{(100 - (opportunity.rank - 1) * 5).toFixed(0)}/100</span>
        </div>
        <div className="mt-2 h-2 bg-muted/30 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${100 - (opportunity.rank - 1) * 5}%` }}
          />
        </div>
      </div>
    </Card>
  );
};

export const WhitespaceOpportunities = () => {
  return (
    <div className="space-y-8 animate-fade-in">

      {/* Feature Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Feature
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {featureOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.rank} opportunity={opportunity} />
          ))}
        </div>
      </div>

      {/* Ingredients Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Ingredients
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {ingredientOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.rank} opportunity={opportunity} />
          ))}
        </div>
      </div>

      {/* USP Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          USP
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {uspOpportunities.map((opportunity) => (
            <OpportunityCard key={opportunity.rank} opportunity={opportunity} />
          ))}
        </div>
      </div>

      {/* Key Influencers & Complementary Keywords */}
      <Card className="bg-card/50 border-border/50 p-6">
        <h4 className="text-lg font-semibold mb-6 text-foreground">Key Influencers & Complementary Keywords</h4>
        
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Top Influencers */}
          <div>
            <h5 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="text-purple-400">⭐</span> Top Influencers
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-1 row-span-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 flex items-center justify-center min-h-[160px]">
                <span className="text-white font-semibold text-lg">@TechGuru</span>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-4 flex items-center justify-center">
                <span className="text-white font-semibold">@StyleInfluencer</span>
              </div>
              <div className="bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-2xl p-4 flex items-center justify-center">
                <span className="text-white font-semibold">@LifestyleVlogger</span>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 flex items-center justify-center">
                <span className="text-white font-semibold">@BeautyExpert</span>
              </div>
            </div>
          </div>

          {/* Complementary Keywords */}
          <div>
            <h5 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
              <span className="text-blue-400">🎯</span> Complementary Keywords
            </h5>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-6 flex items-center justify-center min-h-[100px]">
                <span className="text-white font-semibold text-lg">Performance</span>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-4 flex items-center justify-center">
                <span className="text-white font-semibold">Recovery</span>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 flex items-center justify-center">
                <span className="text-white font-semibold">Workout</span>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-4 flex items-center justify-center">
                <span className="text-white font-semibold">Muscle Growth</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
