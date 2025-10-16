import { Search, Filter, Download, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import peekitLogo from "@/assets/peekit-logo.jpeg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const DashboardHeader = () => {
  return (
    <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-6 py-4">
        {/* Peekit.ai Branding */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <img 
              src={peekitLogo} 
              alt="Peekit.ai" 
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Peekit.ai
              </h1>
              <p className="text-xs text-muted-foreground">AI-Powered Trend Discovery & Analytics</p>
            </div>
          </div>

          <Button 
            onClick={() => toast({ 
              title: "Coming Soon", 
              description: "PDF download functionality will be available soon." 
            })}
            variant="outline"
            className="gap-2 bg-background border-border/50"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Main Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground">
            Monitor your product through Social Intelligence
          </h2>
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

            <Select defaultValue="30days">
              <SelectTrigger className="w-40 bg-background border-border/50">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="7days">Last 7 Days</SelectItem>
                <SelectItem value="30days">Last 30 Days</SelectItem>
                <SelectItem value="90days">Last 90 Days</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all">
              <SelectTrigger className="w-48 bg-background border-border/50">
                <span className="text-sm font-medium mr-2">Sources:</span>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-popover z-50">
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="twitter">Twitter/X</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </header>
  );
};