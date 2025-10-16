import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const OverallSummary = () => {
  const summary = `The Amino Acids market demonstrates exceptional growth momentum with a 42% increase over the past six months, driven primarily by strong performance across Instagram, TikTok, and YouTube platforms. The 8.3M total reach from 12.5K analyzed posts indicates robust organic engagement, particularly around skin barrier repair and health education content. The sentiment analysis reveals overwhelmingly positive reception (72%), with users consistently praising product efficacy and ease of use, though battery life and maintenance concerns present minor friction points.

Geographic analysis highlights significant regional opportunities, particularly in Maharashtra (8.2 sentiment score) and Kerala (8.1), both showing strong positive sentiment and high conversion potential. The temporal patterns suggest optimal campaign timing during Friday afternoons (3PM-6PM), while Monday morning negativity spikes should inform customer service resource allocation. The 5.8-day post longevity and 5.6% average engagement rate demonstrate sustained audience interest beyond initial posting.

Whitespace analysis identifies three high-potential growth vectors: Sustainable Tech Gadgets (+156% trend, 94% engagement), Home Workout Equipment (+142% trend), and Organic Adaptogens (+134% trend). These categories align well with current consumer wellness trends and offer strategic product expansion opportunities. The influencer landscape shows healthy ROI (2.8x average) with strong consistency metrics, suggesting partnership programs are delivering measurable value.

Predictive modeling accuracy of 93.5% and 76.3% early detractor detection rate provide confidence in forecasting capabilities. The actual NPS of 45 exceeding predicted 42 indicates improving brand perception. Strategic recommendations include: capitalizing on the Friday engagement window for major campaigns, developing products addressing the identified whitespace opportunities, and strengthening presence in high-sentiment geographic markets while addressing conversion gaps in regions showing positive sentiment but lower transaction rates.`;

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

      <div className="prose prose-sm max-w-none">
        <div className="bg-card/50 border border-border/50 rounded-lg p-6 text-foreground leading-relaxed whitespace-pre-wrap">
          {summary}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-xs text-muted-foreground text-center">
          This summary was generated using AI analysis of all dashboard metrics, trends, and patterns
        </p>
      </div>
    </Card>
  );
};

