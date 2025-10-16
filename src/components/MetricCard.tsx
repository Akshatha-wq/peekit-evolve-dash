import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  subtitle: string;
  gradient?: "primary" | "hot" | "rising";
}

export const MetricCard = ({ icon: Icon, label, value, subtitle, gradient = "primary" }: MetricCardProps) => {
  const gradientClasses = {
    primary: "from-primary/20 to-accent/20",
    hot: "from-hot-trend/20 to-destructive/20",
    rising: "from-rising-trend/20 to-primary/20",
  };

  return (
    <Card className="relative overflow-hidden bg-gradient-card border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-glow animate-fade-in">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]} opacity-50`} />
      <div className="relative p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 rounded-lg bg-background/30">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground font-medium">{label}</p>
          <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">{value}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </Card>
  );
};
