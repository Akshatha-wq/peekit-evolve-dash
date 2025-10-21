import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = `You are an expert data analyst specializing in social media trends and market intelligence. 
Your task is to analyze dashboard data and provide a concise summary in the form of 8 focused bullet points.
Each point should:
- Be clear, actionable, and data-driven
- Highlight key metrics, trends, or strategic insights
- Be 1-2 sentences maximum
- Focus on insights valuable for marketing and product strategy decisions

Return ONLY the bullet points without numbering, bullets, or extra formatting. Each point should be on a new line.`;

    const userPrompt = `Based on the following dashboard metrics for a product (Amino Acids in skincare/supplements), provide a comprehensive executive summary:

Key Metrics:
- 7 Data Sources (Instagram, YouTube, TikTok, X, Google, Amazon CPC, Google CPC)
- Analysis Period: 6 months
- 12.5K posts analyzed
- 8.3M total reach/views
- 42% growth over 6 months with accelerating momentum

Top Trends:
- Hot: "Amino Acids for Skin Barrier Repair" (Instagram), "Building Blocks of Skin Health Explained" (TikTok)
- Rising: "The Ordinary Amino Acids Serum Reviews", "Best Amino Acid Serums for Hydration"
- Cold: "Amino Acids vs Hyaluronic Acid Debate"

Sentiment Analysis:
- 72% Positive, 19% Neutral, 9% Negative
- Top positive keywords: Easy to use, Rechargeable, Travel-friendly, Precise cutting, Multiple attachments
- Top negative keywords: Battery life, Noisy, Maintenance

Whitespace Opportunities:
- Sustainable Tech Gadgets (2,847 mentions, 94% engagement, +156% trend)
- Home Workout Equipment (2,156 mentions, 87% engagement, +142% trend)
- Organic Adaptogens (1,923 mentions, 89% engagement, +134% trend)

Geographic Insights:
- Top performing regions: Maharashtra (8.2 score), Kerala (8.1), Karnataka (7.9)
- 5 sentiment hotspots with >20% MoM change

Temporal Patterns:
- Peak engagement: Friday 3PM - 6PM
- Peak negativity: Monday 9AM - 11AM
- Average volatility index: 1.15

Influencer Performance:
- Average engagement rate: 5.6%
- Post longevity: 5.8 days
- Average ROI: 2.8x

Predictive Insights:
- Predicted NPS: 42, Actual: 45 (93.5% accuracy)
- 76.3% early detractor detection rate

Please provide 8 focused bullet points highlighting the most important insights and actionable recommendations. Return only the points, no numbering or bullet characters.`;

    console.log('Calling Lovable AI Gateway...');
    
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), 
          { 
            status: 429, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to continue.' }), 
          { 
            status: 402, 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
          }
        );
      }
      
      throw new Error(`AI Gateway responded with status ${response.status}`);
    }

    const data = await response.json();
    const summary = data.choices[0].message.content;

    console.log('Successfully generated summary');

    return new Response(
      JSON.stringify({ summary }), 
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error in generate-dashboard-summary:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
