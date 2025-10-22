import { useState, useEffect } from "react";
import { Search, Filter, Download, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import peekitLogo from "@/assets/peekit-logo.gif";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navigationSections = [
  { id: "trend-overview", label: "Trend Overview", tab: "overview" },
  { id: "trends-table", label: "Hot, Rising & Cold Trends", tab: "overview" },
  { id: "source-mapping", label: "Source Mapping", tab: "overview" },
  { id: "whitespace-opportunities", label: "Whitespace Opportunities", tab: "whitespace" },
  { id: "sentiment-breakdown", label: "Sentiment Breakdown", tab: "sentiment" },
  { id: "temporal-analysis", label: "Temporal Analysis", tab: "temporal" },
  { id: "geography-customer-segmentation", label: "Geography & Customer Segmentation", tab: "temporal" },
  { id: "influencer-engagement-analytics", label: "Influencer & Engagement Analytics", tab: "engagement" },
  { id: "predictive-engagement-nps", label: "Predictive Engagement & NPS", tab: "engagement" },
  { id: "overall-summary", label: "Overall Summary", tab: "engagement" },
];

export const DashboardHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
      
      // Only trigger if scrolled more than 5px to avoid jitter
      if (Math.abs(currentScrollY - lastScrollY) < 5) {
        return;
      }
      
      // Scrolling down - hide header
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavigate = (sectionId: string) => {
    const section = navigationSections.find(s => s.id === sectionId);
    if (section) {
      // First, click the tab to switch to the correct tab
      const tabTrigger = document.querySelector(`[value="${section.tab}"]`) as HTMLElement;
      if (tabTrigger) {
        tabTrigger.click();
      }
      
      // Then scroll to the section after a short delay to allow tab switch
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };
  
  return (
    <header className={`border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50 animate-fade-in transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        {/* Top Section: Brand + Main Heading */}
        <div className="flex items-center justify-between gap-8 mb-6">
          {/* Left: Peekit.ai Branding */}
          <div className="flex items-center gap-3">
            <img 
              src={peekitLogo} 
              alt="Peekit.ai logo" 
              className="h-12 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Peekit.ai
              </h1>
              <p className="text-xs text-muted-foreground">AI-Powered Trend Discovery & Analytics</p>
            </div>
          </div>

          {/* Center: Main Heading */}
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Monitor your product through Social Intelligence
            </h2>
          </div>

          {/* Right: Empty for now */}
          <div className="w-32"></div>
        </div>

        {/* Product Search Section */}
        <div className="bg-card/50 border border-border/50 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Product Search</h3>
          </div>
          
          <div className="flex items-center gap-4">
            <Select defaultValue="tomato">
              <SelectTrigger className="w-80 bg-background border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="tomato">Tomato</SelectItem>
                <SelectItem value="brinjal">Brinjal</SelectItem>
                <SelectItem value="carrots">Carrots</SelectItem>
                <SelectItem value="potato">Potato</SelectItem>
                <SelectItem value="onion">Onion</SelectItem>
                <SelectItem value="cabbage">Cabbage</SelectItem>
                <SelectItem value="cauliflower">Cauliflower</SelectItem>
                <SelectItem value="spinach">Spinach</SelectItem>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="mango">Mango</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="watermelon">Watermelon</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={() => toast({ 
                title: "Coming Soon", 
                description: "PDF download functionality will be available soon." 
              })}
              variant="outline"
              className="gap-2 bg-background border-border/50 ml-auto"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};