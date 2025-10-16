import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";
import { GrowthChart } from "@/components/GrowthChart";
import { InsightCard } from "@/components/InsightCard";
import { TrendsTable } from "@/components/TrendsTable";
import { SourceMapping } from "@/components/SourceMapping";
import { WhitespaceOpportunities } from "@/components/WhitespaceOpportunities";
import { SentimentBreakdown } from "@/components/SentimentBreakdown";
import { OverallSummary } from "@/components/OverallSummary";
import { Database, Calendar, FileText, Eye, Sparkles, TrendingUp, Flame, MapPin, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const SectionHeader = ({ id, title, icon: Icon }: { id: string; title: string; icon?: any }) => (
  <div id={id} className="scroll-mt-24 mb-6">
    <div className="flex items-center gap-3 pb-3 border-b-2 border-primary/20">
      {Icon && <Icon className="h-6 w-6 text-primary" />}
      <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        {title}
      </h2>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Trend Overview Section */}
        <section id="trend-overview" className="scroll-mt-24">
          <SectionHeader id="trend-overview-header" title="Trend Overview" icon={TrendingUp} />
          
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              icon={Database}
              label="Data Sources"
              value="7"
              subtitle="Platforms"
              gradient="primary"
            />
            <MetricCard
              icon={Calendar}
              label="Analysis Period"
              value="6"
              subtitle="Months"
              gradient="primary"
            />
            <MetricCard
              icon={FileText}
              label="Content Analyzed"
              value="12.5K"
              subtitle="Posts"
              gradient="rising"
            />
            <MetricCard
              icon={Eye}
              label="Total Reach"
              value="8.3M"
              subtitle="Views"
              gradient="hot"
            />
          </div>

          {/* Growth Chart and Insights */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <GrowthChart />
            </div>
            
            <Card className="bg-gradient-card border-border/50 p-6 animate-slide-up">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <h3 className="text-lg font-bold text-foreground">Key Insights</h3>
              </div>
              <div className="space-y-3">
                <InsightCard
                  type="upward"
                  title="Strong upward trend"
                  description="42% growth over 6 months with accelerating momentum"
                />
                <InsightCard
                  type="prediction"
                  title="AI predicts"
                  description="6-8% additional growth expected next month based on trajectory"
                />
                <InsightCard
                  type="peak"
                  title="Peak performance"
                  description="October shows highest engagement, ideal for campaigns"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Trends Table */}
        <section id="trends-table" className="scroll-mt-24">
          <SectionHeader id="trends-table-header" title="Hot, Rising & Cold Trends" icon={Flame} />
          <TrendsTable />
        </section>

        {/* Source Mapping */}
        <section id="source-mapping" className="scroll-mt-24">
          <SectionHeader id="source-mapping-header" title="Source Mapping" icon={MapPin} />
          <SourceMapping />
        </section>

        {/* Whitespace Opportunities */}
        <section id="whitespace-opportunities" className="scroll-mt-24">
          <SectionHeader id="whitespace-opportunities-header" title="Whitespace Opportunities" icon={Target} />
          <WhitespaceOpportunities />
        </section>

        {/* Sentiment Breakdown */}
        <section id="sentiment-breakdown" className="scroll-mt-24">
          <SectionHeader id="sentiment-breakdown-header" title="Sentiment Breakdown" icon={Sparkles} />
          <SentimentBreakdown />
        </section>

        {/* Overall Summary */}
        <section id="overall-summary" className="scroll-mt-24">
          <SectionHeader id="overall-summary-header" title="Overall Summary" icon={Sparkles} />
          <OverallSummary />
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-muted-foreground border-t border-border/50">
          Last updated: 2 minutes ago • AI accuracy: 94.3%
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
