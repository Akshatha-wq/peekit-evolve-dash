import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export const OverallSummary = () => {
  const [summary, setSummary] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const generateSummary = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-dashboard-summary');
      
      if (error) {
        console.error('Error generating summary:', error);
        toast({
          title: "Error",
          description: "Failed to generate summary. Please try again.",
          variant: "destructive"
        });
        return;
      }

      if (data?.summary) {
        setSummary(data.summary);
      }
    } catch (err) {
      console.error('Error:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
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
        
        <Button 
          onClick={generateSummary} 
          disabled={isLoading}
          className="gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : summary ? (
            <>
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Generate Summary
            </>
          )}
        </Button>
      </div>

      {summary ? (
        <div className="prose prose-sm max-w-none">
          <div className="bg-card/50 border border-border/50 rounded-lg p-6 text-foreground leading-relaxed whitespace-pre-wrap">
            {summary}
          </div>
        </div>
      ) : (
        <div className="bg-card/30 border border-dashed border-border/50 rounded-lg p-12 text-center">
          <Sparkles className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">
            No summary generated yet. Click the button above to generate an AI-powered analysis.
          </p>
          <p className="text-xs text-muted-foreground">
            The AI will analyze all dashboard metrics, trends, sentiment data, and opportunities to provide actionable insights.
          </p>
        </div>
      )}
    </Card>
  );
};
