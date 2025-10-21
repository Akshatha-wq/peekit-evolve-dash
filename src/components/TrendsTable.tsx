import { Card } from "@/components/ui/card";
import { Flame, TrendingUp, Instagram, Youtube } from "lucide-react";
import { SiTiktok, SiGoogle } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

interface TrendData {
  source: string;
  icon: "instagram" | "tiktok" | "x" | "youtube" | "google";
  hot: string;
  rising: string;
}

const trendsData: TrendData[] = [
  {
    source: "Instagram",
    icon: "instagram",
    hot: "Amino Acids for Skin Barrier Repair",
    rising: "The Ordinary Amino Acids Serum Reviews",
  },
  {
    source: "TikTok",
    icon: "tiktok",
    hot: "Building Blocks of Skin Health Explained",
    rising: "Best Amino Acid Serums for Hydration",
  },
  {
    source: "X",
    icon: "x",
    hot: "New Amino Acid Skincare Research",
    rising: "EAA vs BCAA for Skin Health",
  },
  {
    source: "YouTube",
    icon: "youtube",
    hot: "Dermatologist Explains Amino Acids in Skincare",
    rising: "How Amino Acids Improve Skin Texture",
  },
  {
    source: "Google",
    icon: "google",
    hot: "What do amino acids do for skin",
    rising: "Best amino acid serum for face",
  },
];

const iconComponents = {
  instagram: Instagram,
  tiktok: SiTiktok,
  x: FaXTwitter,
  youtube: Youtube,
  google: SiGoogle,
};

const iconColors = {
  instagram: "text-[#E4405F]",
  tiktok: "text-foreground",
  x: "text-foreground",
  youtube: "text-[#FF0000]",
  google: "text-[#4285F4]",
};

export const TrendsTable = () => {
  return (
    <div className="animate-fade-in">
      <Card className="bg-card/50 border-border/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="px-6 py-4 text-left">
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    SOURCE
                  </span>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-hot-trend" />
                    <span className="text-sm font-semibold text-hot-trend uppercase tracking-wider">
                      HOT
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 text-left">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-rising-trend" />
                    <span className="text-sm font-semibold text-rising-trend uppercase tracking-wider">
                      RISING
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {trendsData.map((trend, index) => {
                const IconComponent = iconComponents[trend.icon];
                const iconColor = iconColors[trend.icon];
                
                return (
                  <tr
                    key={index}
                    className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`h-5 w-5 ${iconColor}`} />
                        <span className="font-medium text-foreground">
                          {trend.source}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-foreground">{trend.hot}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-foreground">{trend.rising}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
