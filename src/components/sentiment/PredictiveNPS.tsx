import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const npsComparisonData = [
  { month: "Jan", predicted: 38, actual: 40 },
  { month: "Feb", predicted: 41, actual: 42 },
  { month: "Mar", predicted: 43, actual: 44 },
  { month: "Apr", predicted: 42, actual: 45 },
  { month: "May", predicted: 45, actual: 46 },
  { month: "Jun", predicted: 44, actual: 43 },
];

const npsSegmentData = [
  { segment: "Promoters", predicted: 58, actual: 62, color: "#10B981" },
  { segment: "Passives", predicted: 28, actual: 25, color: "#F59E0B" },
  { segment: "Detractors", predicted: 14, actual: 13, color: "#EF4444" },
];

const detectorMetrics = {
  totalDetractors: 248,
  flaggedPreSurvey: 189,
  accurateFlags: 176,
  falsePositives: 13,
};

const predictionAccuracy = 93.5;


const npsAccuracy = 94.3;

export const PredictiveNPS = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* NPS Prediction vs Actual */}
      <Card className="bg-card/50 border-border/50 p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-foreground">NPS: Predicted vs Actual</h4>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">Prediction Accuracy</p>
            <p className="text-lg font-bold text-primary">{predictionAccuracy}%</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={npsComparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
            <Legend />
            <Line type="monotone" dataKey="predicted" stroke="hsl(var(--primary))" strokeWidth={2} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* NPS Segment Distribution and Early Detector */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">NPS Segment Distribution</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={npsSegmentData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="segment" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="predicted" fill="#3B82F6" name="Predicted" />
              <Bar dataKey="actual" fill="#10B981" name="Actual" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Early Detractor Detection</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Total Detractors</p>
              <p className="text-2xl font-bold text-foreground">{detectorMetrics.totalDetractors}</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Flagged Pre-Survey</p>
              <p className="text-2xl font-bold text-primary">{detectorMetrics.flaggedPreSurvey}</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Accurate Flags</p>
              <p className="text-2xl font-bold text-rising-trend">{detectorMetrics.accurateFlags}</p>
            </div>
            <div className="p-3 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">False Positives</p>
              <p className="text-2xl font-bold text-warning">{detectorMetrics.falsePositives}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
