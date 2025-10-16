import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const npsComparisonData = [
  { month: "Jun", predicted: 45, actual: 42 },
  { month: "Jul", predicted: 48, actual: 47 },
  { month: "Aug", predicted: 52, actual: 50 },
  { month: "Sep", predicted: 55, actual: 54 },
  { month: "Oct", predicted: 58, actual: 57 },
  { month: "Nov", predicted: 62, actual: null },
];

const npsSegmentData = [
  { segment: "Promoters", value: 65, color: "hsl(var(--primary))" },
  { segment: "Passives", value: 23, color: "hsl(var(--muted))" },
  { segment: "Detractors", value: 12, color: "hsl(var(--destructive))" },
];

const earlyDetectorMetrics = [
  { label: "At-Risk Users", value: "234", change: "-12%" },
  { label: "Churn Probability", value: "18%", change: "+3%" },
  { label: "Recovery Rate", value: "67%", change: "+8%" },
  { label: "Intervention Success", value: "72%", change: "+15%" },
];

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
            <p className="text-lg font-bold text-primary">{npsAccuracy}%</p>
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
              <Bar dataKey="value" fill="hsl(var(--primary))">
                {npsSegmentData.map((entry, index) => (
                  <rect key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="bg-card/50 border-border/50 p-6">
          <h4 className="text-lg font-semibold mb-4 text-foreground">Early Detractor Detection</h4>
          <div className="space-y-3">
            {earlyDetectorMetrics.map((metric) => (
              <div key={metric.label} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-foreground">{metric.label}</p>
                  <p className="text-xs text-muted-foreground">vs last period</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-foreground">{metric.value}</p>
                  <p className={`text-xs font-semibold ${metric.change.startsWith('+') && metric.label.includes('Success') ? 'text-primary' : metric.change.startsWith('-') ? 'text-primary' : 'text-destructive'}`}>
                    {metric.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
