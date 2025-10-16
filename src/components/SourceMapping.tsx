import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { useState } from "react";
import { Instagram, Youtube } from "lucide-react";

const data = [
  { week: "Week 1", Instagram: 55, YouTube: 52, TikTok: 48, X: 45, Google: 0, AmazonCPC: 0, GoogleCPC: 0 },
  { week: "Week 2", Instagram: 58, YouTube: 55, TikTok: 50, X: 48, Google: 0, AmazonCPC: 0, GoogleCPC: 0 },
  { week: "Week 3", Instagram: 68, YouTube: 65, TikTok: 62, X: 52, Google: 38, AmazonCPC: 35, GoogleCPC: 40 },
  { week: "Week 4", Instagram: 72, YouTube: 68, TikTok: 65, X: 52, Google: 42, AmazonCPC: 40, GoogleCPC: 45 },
  { week: "Week 5", Instagram: 88, YouTube: 85, TikTok: 82, X: 62, Google: 58, AmazonCPC: 55, GoogleCPC: 60 },
  { week: "Week 6", Instagram: 95, YouTube: 92, TikTok: 88, X: 68, Google: 75, AmazonCPC: 65, GoogleCPC: 72 },
];

const sources = [
  { id: "all", name: "All Sources", color: "#ffffff", icon: null },
  { id: "Instagram", name: "Instagram", color: "#E1306C", icon: Instagram },
  { id: "YouTube", name: "YouTube", color: "#FF0000", icon: Youtube },
  { id: "TikTok", name: "TikTok", color: "#00F2EA", icon: null },
  { id: "X", name: "X (Twitter)", color: "#1DA1F2", icon: null },
  { id: "Google", name: "Google", color: "#10B981", icon: null },
  { id: "AmazonCPC", name: "Amazon CPC", color: "#FF9500", icon: null },
  { id: "GoogleCPC", name: "Google CPC", color: "#34D399", icon: null },
];

export const SourceMapping = () => {
  const [selectedSources, setSelectedSources] = useState<string[]>(sources.map(s => s.id));

  const toggleSource = (sourceId: string) => {
    if (sourceId === "all") {
      if (selectedSources.length === sources.length) {
        setSelectedSources([]);
      } else {
        setSelectedSources(sources.map(s => s.id));
      }
    } else {
      setSelectedSources(prev => 
        prev.includes(sourceId) 
          ? prev.filter(id => id !== sourceId && id !== "all")
          : [...prev.filter(id => id !== "all"), sourceId]
      );
    }
  };

  return (
    <Card className="bg-card/50 border-border/50 p-6 animate-fade-in">
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="week" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                  color: "hsl(var(--foreground))"
                }}
              />
              <Legend />
              {selectedSources.includes("Instagram") && (
                <Line 
                  type="monotone" 
                  dataKey="Instagram" 
                  stroke="#E1306C" 
                  strokeWidth={2.5}
                  dot={{ fill: "#E1306C", r: 4 }}
                />
              )}
              {selectedSources.includes("YouTube") && (
                <Line 
                  type="monotone" 
                  dataKey="YouTube" 
                  stroke="#FF0000" 
                  strokeWidth={2.5}
                  dot={{ fill: "#FF0000", r: 4 }}
                />
              )}
              {selectedSources.includes("TikTok") && (
                <Line 
                  type="monotone" 
                  dataKey="TikTok" 
                  stroke="#00F2EA" 
                  strokeWidth={2.5}
                  dot={{ fill: "#00F2EA", r: 4 }}
                />
              )}
              {selectedSources.includes("X") && (
                <Line 
                  type="monotone" 
                  dataKey="X" 
                  stroke="#1DA1F2" 
                  strokeWidth={2.5}
                  dot={{ fill: "#1DA1F2", r: 4 }}
                />
              )}
              {selectedSources.includes("Google") && (
                <Line 
                  type="monotone" 
                  dataKey="Google" 
                  stroke="#10B981" 
                  strokeWidth={2.5}
                  dot={{ fill: "#10B981", r: 4 }}
                />
              )}
              {selectedSources.includes("AmazonCPC") && (
                <Line 
                  type="monotone" 
                  dataKey="AmazonCPC" 
                  stroke="#FF9500" 
                  strokeWidth={2.5}
                  dot={{ fill: "#FF9500", r: 4 }}
                />
              )}
              {selectedSources.includes("GoogleCPC") && (
                <Line 
                  type="monotone" 
                  dataKey="GoogleCPC" 
                  stroke="#34D399" 
                  strokeWidth={2.5}
                  dot={{ fill: "#34D399", r: 4 }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Card className="bg-card/50 border-border/50 p-4 h-fit">
          <h4 className="font-bold text-foreground mb-4">Sources</h4>
          <div className="space-y-3">
            {sources.map((source) => {
              const Icon = source.icon;
              return (
                <div key={source.id} className="flex items-center gap-3">
                  <Checkbox 
                    checked={selectedSources.includes(source.id)}
                    onCheckedChange={() => toggleSource(source.id)}
                    className="data-[state=checked]:bg-primary"
                  />
                  <div className="flex items-center gap-2">
                    {Icon ? (
                      <Icon className="h-4 w-4" style={{ color: source.color }} />
                    ) : source.id !== "all" && (
                      <span className="font-bold text-xs" style={{ color: source.color }}>
                        {source.id === "Google" ? "G" : source.id === "AmazonCPC" ? "A" : source.id === "GoogleCPC" ? "G" : source.name[0]}
                      </span>
                    )}
                    <span className="text-sm text-foreground">{source.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </Card>
  );
};
