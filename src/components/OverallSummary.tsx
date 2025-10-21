import { Card } from "@/components/ui/card";
import { Sparkles, CheckCircle2 } from "lucide-react";

export const OverallSummary = () => {
  const focusPointers = [
    "42% growth momentum driven by Instagram, TikTok, and YouTube platforms with 8.3M total reach from 12.5K analyzed posts",
    "72% positive sentiment with strong user praise for product efficacy and ease of use; battery life and maintenance present minor friction points",
    "High-potential geographic markets: Maharashtra (8.2) and Kerala (8.1) showing strong sentiment and conversion opportunity",
    "Optimal campaign timing: Friday afternoons (3PM-6PM) for peak engagement; Monday morning negativity spikes require customer service focus",
    "Three whitespace growth vectors identified: Sustainable Tech Gadgets (+156%), Home Workout Equipment (+142%), and Organic Adaptogens (+134%)",
    "Influencer partnerships delivering 2.8x ROI with 5.6% engagement rate and 5.8-day post longevity",
    "Predictive modeling shows 93.5% accuracy with actual NPS (45) exceeding predicted (42), indicating improving brand perception",
    "Strategic priorities: capitalize on Friday engagement windows, develop whitespace products, and strengthen presence in high-sentiment markets"
  ];

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            AI-Generated Overall Summary
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Comprehensive insights and recommendations based on your dashboard data
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {focusPointers.map((pointer, index) => (
          <div key={index} className="flex gap-3 bg-card/50 border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-colors">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground leading-relaxed">{pointer}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          This summary was generated using AI analysis of all dashboard metrics, trends, and patterns
        </p>
      </div>
    </Card>
  );
};

