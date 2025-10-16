import { Card } from "@/components/ui/card";
import { Youtube } from "lucide-react";

const newsItems = [
  { source: "YouTube", icon: Youtube, text: "Taylor Swift - The Eras Tour breaks streaming records" },
  { source: "Google", text: "Tories will scrap stamp duty on primary residences Kemi Badenoch tells conference" },
  { source: "Google", text: "Bank of England warns of growing risk that AI bubble could burst" },
  { source: "Google", text: "Sir Lenny Henry calls for slavery reparations for all black Brits" },
  { source: "YouTube", icon: Youtube, text: "Gordon Ramsay launches new cooking masterclass series" },
];

export const NewsTicker = () => {
  return (
    <Card className="bg-gradient-card border-border/50 p-4 overflow-hidden">
      <div className="flex items-center gap-6 animate-fade-in">
        {newsItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3 min-w-fit">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
              {item.source === "Google" ? (
                <span className="text-rising-trend font-bold text-xs">G</span>
              ) : (
                <Youtube className="h-3 w-3 text-destructive" />
              )}
              <span className="text-xs font-medium text-muted-foreground">{item.source}</span>
            </div>
            <p className="text-sm text-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
