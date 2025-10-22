import { Card } from "@/components/ui/card";
import { Sparkles, CheckCircle2, TrendingUp, Database, Target, BarChart3 } from "lucide-react";

export const OverallSummary = () => {
  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Sparkles className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          AI Generated Summary
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Growth Metrics */}
        <Card className="bg-card/50 border-blue-500/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
              <TrendingUp className="h-5 w-5 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Growth Metrics</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">+42%</strong> total growth over 12 months</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span>Predicted <strong className="text-foreground">+2-4%</strong> growth next month</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span>Peak engagement expected in <strong className="text-foreground">July 2025</strong></span>
            </li>
          </ul>
        </Card>

        {/* Data Coverage */}
        <Card className="bg-card/50 border-purple-500/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30">
              <Database className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Data Coverage</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">7 platforms</strong> analyzed (Instagram, TikTok, X, YouTube, Google, Amazon CPC, Google CPC)</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">24.8K posts</strong> and <strong className="text-foreground">16.5M views</strong> tracked</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">12-month</strong> comprehensive trend analysis</span>
            </li>
          </ul>
        </Card>

        {/* Top Performing Platforms */}
        <Card className="bg-card/50 border-green-500/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/30">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Top Performing Platforms</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">TikTok</strong> leads with 90% engagement rate</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">Instagram</strong> shows 92% reach potential</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">YouTube</strong> maintains 85% reach with high retention</span>
            </li>
          </ul>
        </Card>

        {/* Sentiment Analysis */}
        <Card className="bg-card/50 border-orange-500/30 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30">
              <BarChart3 className="h-5 w-5 text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Sentiment Analysis</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">76%</strong> positive sentiment across all platforms</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span><strong className="text-foreground">15%</strong> neutral and <strong className="text-foreground">9%</strong> negative feedback</span>
            </li>
            <li className="flex gap-2 text-sm text-muted-foreground">
              <span>•</span>
              <span>Top positive attributes drive brand loyalty</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Strategic Recommendations - Full Width */}
      <Card className="bg-card/50 border-pink-500/30 p-6 mt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/30">
            <Sparkles className="h-5 w-5 text-pink-400" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Strategic Recommendations</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex gap-2 text-sm text-muted-foreground">
            <span>•</span>
            <span>Focus on <strong className="text-foreground">micro-influencer collaborations</strong> for authentic UGC content showcasing real transformations</span>
          </li>
          <li className="flex gap-2 text-sm text-muted-foreground">
            <span>•</span>
            <span>Amplify product benefits through <strong className="text-foreground">social proof</strong> and tutorial content to boost conversion rates</span>
          </li>
          <li className="flex gap-2 text-sm text-muted-foreground">
            <span>•</span>
            <span>Track emerging keywords and provide rapid response to audience questions for increased share of voice</span>
          </li>
          <li className="flex gap-2 text-sm text-muted-foreground">
            <span>•</span>
            <span>Address top negative feedback points through targeted content and product innovation</span>
          </li>
        </ul>
      </Card>
    </Card>
  );
};
