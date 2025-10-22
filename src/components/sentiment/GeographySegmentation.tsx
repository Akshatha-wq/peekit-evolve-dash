import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { MapPin, Users, TrendingUp, ChevronLeft } from "lucide-react";
import { useState } from "react";

const allRegionalSentimentData = [
  { region: "Maharashtra", sentimentScore: 8.2, volume: 2845 },
  { region: "Karnataka", sentimentScore: 7.9, volume: 2134 },
  { region: "Delhi", sentimentScore: 7.5, volume: 1923 },
  { region: "Tamil Nadu", sentimentScore: 8.0, volume: 1678 },
  { region: "West Bengal", sentimentScore: 6.8, volume: 1234 },
  { region: "Gujarat", sentimentScore: 7.8, volume: 1456 },
  { region: "Rajasthan", sentimentScore: 7.2, volume: 987 },
  { region: "Uttar Pradesh", sentimentScore: 6.5, volume: 1567 },
  { region: "Madhya Pradesh", sentimentScore: 7.1, volume: 1123 },
  { region: "Kerala", sentimentScore: 8.1, volume: 934 },
  { region: "Telangana", sentimentScore: 7.7, volume: 1345 },
  { region: "Punjab", sentimentScore: 7.3, volume: 876 },
];

const regionalSentimentData = [...allRegionalSentimentData]
  .sort((a, b) => b.sentimentScore - a.sentimentScore)
  .slice(0, 8);

const getSentimentColor = (score: number) => {
  if (score >= 7.5) return "#10B981";
  if (score >= 6.5) return "#F59E0B";
  return "#EF4444";
};

const customerTypeData = [
  { name: "Transacted Users", value: 68, color: "#3B82F6" },
  { name: "Non-Transacted Users", value: 32, color: "#10B981" },
];

const regionalConversionOpportunity = [
  { region: "Uttar Pradesh", positiveSentiment: 72, transactionRate: 24 },
  { region: "Rajasthan", positiveSentiment: 78, transactionRate: 31 },
  { region: "West Bengal", positiveSentiment: 65, transactionRate: 28 },
];

// District-level data for each state
const districtData: Record<string, Array<{ district: string; sentimentScore: number; volume: number }>> = {
  "Maharashtra": [
    { district: "Mumbai", sentimentScore: 8.5, volume: 945 },
    { district: "Pune", sentimentScore: 8.3, volume: 678 },
    { district: "Nagpur", sentimentScore: 7.9, volume: 456 },
    { district: "Nashik", sentimentScore: 7.8, volume: 389 },
    { district: "Thane", sentimentScore: 8.1, volume: 377 },
  ],
  "Karnataka": [
    { district: "Bangalore Urban", sentimentScore: 8.2, volume: 823 },
    { district: "Mysore", sentimentScore: 7.8, volume: 445 },
    { district: "Mangalore", sentimentScore: 7.7, volume: 356 },
    { district: "Hubli", sentimentScore: 7.6, volume: 298 },
    { district: "Belgaum", sentimentScore: 7.9, volume: 212 },
  ],
  "Delhi": [
    { district: "Central Delhi", sentimentScore: 7.8, volume: 534 },
    { district: "South Delhi", sentimentScore: 7.6, volume: 487 },
    { district: "West Delhi", sentimentScore: 7.4, volume: 398 },
    { district: "East Delhi", sentimentScore: 7.2, volume: 312 },
    { district: "North Delhi", sentimentScore: 7.5, volume: 192 },
  ],
  "Tamil Nadu": [
    { district: "Chennai", sentimentScore: 8.3, volume: 623 },
    { district: "Coimbatore", sentimentScore: 7.9, volume: 434 },
    { district: "Madurai", sentimentScore: 7.8, volume: 321 },
    { district: "Tiruchirappalli", sentimentScore: 7.7, volume: 178 },
    { district: "Salem", sentimentScore: 8.0, volume: 122 },
  ],
  "West Bengal": [
    { district: "Kolkata", sentimentScore: 7.2, volume: 456 },
    { district: "Howrah", sentimentScore: 6.8, volume: 298 },
    { district: "Darjeeling", sentimentScore: 6.5, volume: 198 },
    { district: "Siliguri", sentimentScore: 6.7, volume: 167 },
    { district: "Durgapur", sentimentScore: 6.6, volume: 115 },
  ],
  "Gujarat": [
    { district: "Ahmedabad", sentimentScore: 8.1, volume: 567 },
    { district: "Surat", sentimentScore: 7.9, volume: 423 },
    { district: "Vadodara", sentimentScore: 7.7, volume: 256 },
    { district: "Rajkot", sentimentScore: 7.6, volume: 145 },
    { district: "Gandhinagar", sentimentScore: 7.8, volume: 65 },
  ],
  "Rajasthan": [
    { district: "Jaipur", sentimentScore: 7.5, volume: 378 },
    { district: "Jodhpur", sentimentScore: 7.2, volume: 234 },
    { district: "Udaipur", sentimentScore: 7.1, volume: 187 },
    { district: "Kota", sentimentScore: 7.0, volume: 123 },
    { district: "Ajmer", sentimentScore: 7.3, volume: 65 },
  ],
  "Uttar Pradesh": [
    { district: "Lucknow", sentimentScore: 6.8, volume: 467 },
    { district: "Noida", sentimentScore: 6.7, volume: 398 },
    { district: "Kanpur", sentimentScore: 6.5, volume: 312 },
    { district: "Varanasi", sentimentScore: 6.4, volume: 234 },
    { district: "Agra", sentimentScore: 6.3, volume: 156 },
  ],
  "Madhya Pradesh": [
    { district: "Indore", sentimentScore: 7.4, volume: 423 },
    { district: "Bhopal", sentimentScore: 7.2, volume: 356 },
    { district: "Jabalpur", sentimentScore: 7.0, volume: 189 },
    { district: "Gwalior", sentimentScore: 6.9, volume: 98 },
    { district: "Ujjain", sentimentScore: 7.1, volume: 57 },
  ],
  "Kerala": [
    { district: "Thiruvananthapuram", sentimentScore: 8.3, volume: 298 },
    { district: "Kochi", sentimentScore: 8.2, volume: 267 },
    { district: "Kozhikode", sentimentScore: 8.0, volume: 189 },
    { district: "Thrissur", sentimentScore: 7.9, volume: 123 },
    { district: "Kannur", sentimentScore: 8.1, volume: 57 },
  ],
  "Telangana": [
    { district: "Hyderabad", sentimentScore: 7.9, volume: 823 },
    { district: "Warangal", sentimentScore: 7.6, volume: 234 },
    { district: "Nizamabad", sentimentScore: 7.5, volume: 156 },
    { district: "Khammam", sentimentScore: 7.7, volume: 89 },
    { district: "Karimnagar", sentimentScore: 7.4, volume: 43 },
  ],
  "Punjab": [
    { district: "Ludhiana", sentimentScore: 7.5, volume: 298 },
    { district: "Amritsar", sentimentScore: 7.4, volume: 234 },
    { district: "Jalandhar", sentimentScore: 7.2, volume: 167 },
    { district: "Patiala", sentimentScore: 7.1, volume: 112 },
    { district: "Bathinda", sentimentScore: 7.3, volume: 65 },
  ],
};


export const GeographySegmentation = () => {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  
  const displayData = selectedState 
    ? districtData[selectedState] || []
    : regionalSentimentData;
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid gap-6">
        {/* Regional Sentiment Index (RSI) */}
        <Card className="bg-card/50 border-border/50 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-bold text-foreground">
                {selectedState ? `${selectedState} - District Level` : 'Regional Sentiment Index'}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              {selectedState && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setSelectedState(null)}
                  className="gap-1"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back to States
                </Button>
              )}
              <div className="text-xs text-muted-foreground">
                {selectedState ? 'Top 5 Districts' : 'Top 8 Regions'}
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={360}>
            <BarChart 
              data={displayData} 
              layout="horizontal" 
              margin={{ top: 10, right: 30, left: 0, bottom: 60 }}
              onClick={(data) => {
                if (data && data.activeLabel && !selectedState) {
                  setSelectedState(data.activeLabel);
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey={selectedState ? "district" : "region"}
                angle={-45} 
                textAnchor="end" 
                height={100}
                interval={0}
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                style={{ cursor: selectedState ? 'default' : 'pointer' }}
              />
              <YAxis 
                domain={[0, 10]} 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fontSize: 12 }}
                label={{ value: 'Sentiment Score', angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--popover))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "0.5rem",
                  color: "hsl(var(--foreground))"
                }}
                formatter={(value: number, name: string, props: any) => [
                  <>
                    <div className="font-semibold">Score: {value.toFixed(1)}/10</div>
                    <div className="text-xs text-muted-foreground">Volume: {props.payload.volume.toLocaleString()}</div>
                  </>,
                  ''
                ]}
                labelFormatter={(label) => label}
              />
              <Bar 
                dataKey="sentimentScore" 
                radius={[4, 4, 0, 0]}
                maxBarSize={60}
                style={{ cursor: selectedState ? 'default' : 'pointer' }}
              >
                {displayData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getSentimentColor(entry.sentimentScore)}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          
          {/* Color Legend */}
          <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
              <span className="text-xs text-muted-foreground">High (7.5+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
              <span className="text-xs text-muted-foreground">Medium (6.5-7.4)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
              <span className="text-xs text-muted-foreground">Low (&lt;6.5)</span>
            </div>
          </div>
          {!selectedState && (
            <div className="mt-4 p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-xs text-muted-foreground text-center">
                💡 Click on any state bar to view district-level breakdown
              </p>
            </div>
          )}
        </Card>
      </div>

      {/* Regional Conversion Opportunity */}
      <Card className="bg-card/50 border-border/50 p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-rising-trend" />
          <h4 className="font-semibold text-foreground">Regional Conversion Opportunity Index</h4>
        </div>
        <div className="space-y-4">
          {regionalConversionOpportunity.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{item.region}</span>
                <Badge variant="outline" className="text-xs">
                  {item.positiveSentiment}% positive
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-rising-trend"
                    style={{ width: `${item.transactionRate}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground min-w-[3rem]">{item.transactionRate}% conv.</span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
