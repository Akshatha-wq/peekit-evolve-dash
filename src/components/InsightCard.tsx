import { Card } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface InsightCardProps {
  title: string;
  description: string;
  type?: "upward" | "prediction" | "peak";
}

export const InsightCard = ({ title, description, type = "upward" }: InsightCardProps) => {
  const [feedback, setFeedback] = useState<"up" | "down" | null>(null);

  const handleFeedback = (type: "up" | "down") => {
    setFeedback(type);
    toast.success(`Thanks for your feedback! This helps improve AI accuracy.`);
  };

  const typeColors = {
    upward: "text-primary",
    prediction: "text-accent",
    peak: "text-hot-trend",
  };

  const typeBorders = {
    upward: "border-primary/30",
    prediction: "border-accent/30",
    peak: "border-hot-trend/30",
  };

  return (
    <Card className={`bg-card/50 backdrop-blur-sm ${typeBorders[type]} p-4 transition-all duration-300 hover:shadow-md animate-fade-in`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className={`h-4 w-4 ${typeColors[type]}`} />
            <h4 className={`font-bold text-sm ${typeColors[type]}`}>{title}</h4>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            className={`h-7 w-7 p-0 ${feedback === "up" ? "text-primary" : "text-muted-foreground"}`}
            onClick={() => handleFeedback("up")}
          >
            <ThumbsUp className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className={`h-7 w-7 p-0 ${feedback === "down" ? "text-destructive" : "text-muted-foreground"}`}
            onClick={() => handleFeedback("down")}
          >
            <ThumbsDown className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
