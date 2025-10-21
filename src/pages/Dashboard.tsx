import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricCard } from "@/components/MetricCard";

import { InsightCard } from "@/components/InsightCard";
import { TrendsTable } from "@/components/TrendsTable";
import { SourceMapping } from "@/components/SourceMapping";
import { WhitespaceOpportunities } from "@/components/WhitespaceOpportunities";
import { SentimentCore } from "@/components/sentiment/SentimentCore";
import { TemporalAnalysis } from "@/components/sentiment/TemporalAnalysis";
import { GeographySegmentation } from "@/components/sentiment/GeographySegmentation";
import { InfluencerEngagement } from "@/components/sentiment/InfluencerEngagement";
import { PredictiveNPS } from "@/components/sentiment/PredictiveNPS";
import { OverallSummary } from "@/components/OverallSummary";
import { SectionFeedback } from "@/components/SectionFeedback";
import { CompetitorPriceMonitoring } from "@/components/CompetitorPriceMonitoring";
import { Database, Calendar, FileText, Eye, Sparkles, TrendingUp, Flame, MapPin, Target, Globe, Clock, Users, BarChart3, Lightbulb, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 bg-muted/50 p-1.5 rounded-xl">
            <TabsTrigger value="overview" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Overview & Trends</span>
              <span className="sm:hidden">Overview</span>
            </TabsTrigger>
            <TabsTrigger value="whitespace" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Whitespace</span>
              <span className="sm:hidden">Gaps</span>
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Sentiment</span>
              <span className="sm:hidden">Feel</span>
            </TabsTrigger>
            <TabsTrigger value="temporal" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Temporal & Geo</span>
              <span className="sm:hidden">Geo</span>
            </TabsTrigger>
            <TabsTrigger value="engagement" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Engagement</span>
              <span className="sm:hidden">Engage</span>
            </TabsTrigger>
            <TabsTrigger value="competitor" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <DollarSign className="h-4 w-4" />
              <span className="hidden sm:inline">Competitor Price</span>
              <span className="sm:hidden">Price</span>
            </TabsTrigger>
            <TabsTrigger value="predictive" className="flex items-center gap-2 data-[state=active]:bg-gradient-primary data-[state=active]:text-primary-foreground">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Predictive NPS</span>
              <span className="sm:hidden">NPS</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Overview & Trends */}
          <TabsContent value="overview" className="space-y-8 animate-fade-in">
            <section id="trend-overview" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Trend Overview
                  </h2>
                </div>
                <SectionFeedback sectionName="Trend Overview" />
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            </section>

            <section id="trends-table" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Flame className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Hot, Rising & Cold Trends
                  </h2>
                </div>
                <SectionFeedback sectionName="Hot, Rising & Cold Trends" />
              </div>
              <TrendsTable />
            </section>

            <section id="source-mapping" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Source Mapping
                  </h2>
                </div>
                <SectionFeedback sectionName="Source Mapping" />
              </div>
              <SourceMapping />
            </section>

            <section id="overall-summary" className="scroll-mt-24 space-y-6 mt-8">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Overall Summary
                  </h2>
                </div>
                <SectionFeedback sectionName="Overall Summary" />
              </div>
              <OverallSummary />
            </section>
          </TabsContent>

          {/* Tab 2: Whitespace Opportunities */}
          <TabsContent value="whitespace" className="space-y-8 animate-fade-in">
            <section id="whitespace-opportunities" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Whitespace Opportunities
                  </h2>
                </div>
                <SectionFeedback sectionName="Whitespace Opportunities" />
              </div>
              <WhitespaceOpportunities />
            </section>
          </TabsContent>

          {/* Tab 3: Sentiment & Analysis */}
          <TabsContent value="sentiment" className="space-y-8 animate-fade-in">
            <section id="sentiment-breakdown" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Sparkles className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Sentiment Breakdown
                  </h2>
                </div>
                <SectionFeedback sectionName="Sentiment Breakdown" />
              </div>
              <SentimentCore />
            </section>
          </TabsContent>

          {/* Tab 4: Temporal & Geographic */}
          <TabsContent value="temporal" className="space-y-8 animate-fade-in">
            <section id="temporal-analysis" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Temporal Analysis
                  </h2>
                </div>
                <SectionFeedback sectionName="Temporal Analysis" />
              </div>
              <TemporalAnalysis />
            </section>

            <section id="geography-customer-segmentation" className="scroll-mt-24 space-y-6 mt-8">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Geography & Customer Segmentation
                  </h2>
                </div>
                <SectionFeedback sectionName="Geography & Customer Segmentation" />
              </div>
              <GeographySegmentation />
            </section>
          </TabsContent>

          {/* Tab 5: Engagement */}
          <TabsContent value="engagement" className="space-y-8 animate-fade-in">
            <section id="influencer-engagement-analytics" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Influencer & Engagement Analytics
                  </h2>
                </div>
                <SectionFeedback sectionName="Influencer & Engagement Analytics" />
              </div>
              <InfluencerEngagement />
            </section>
          </TabsContent>

          {/* Tab 6: Competitor Price Monitoring */}
          <TabsContent value="competitor" className="space-y-8 animate-fade-in">
            <section id="competitor-price-monitoring" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Competitor Price Monitoring
                  </h2>
                </div>
                <SectionFeedback sectionName="Competitor Price Monitoring" />
              </div>
              <CompetitorPriceMonitoring />
            </section>
          </TabsContent>

          {/* Tab 7: Predictive NPS */}
          <TabsContent value="predictive" className="space-y-8 animate-fade-in">
            <section id="predictive-engagement-nps" className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between gap-3 pb-3 border-b-2 border-primary/20">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Predictive Engagement & NPS Modeling
                  </h2>
                </div>
                <SectionFeedback sectionName="Predictive Engagement & NPS Modeling" />
              </div>
              <PredictiveNPS />
            </section>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-muted-foreground border-t border-border/50 mt-8">
          Last updated: 2 minutes ago • AI accuracy: 94.3%
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
