import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, ThumbsUp, MessageCircle, Calendar } from "lucide-react";

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  likes: string;
  comments: string;
  postedDate: string;
  platform: string;
}

interface CompetitorData {
  name: string;
  logo: string;
  color: string;
  videos: VideoData[];
}

const competitors: CompetitorData[] = [
  {
    name: "Ninjacart",
    logo: "🥷",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    videos: [
      {
        id: "nc1",
        title: "Farm to Fork: Direct Supply Chain",
        thumbnail: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=300&h=200&fit=crop",
        views: "45.2K",
        likes: "2.1K",
        comments: "234",
        postedDate: "Today",
        platform: "YouTube"
      },
      {
        id: "nc2",
        title: "Empowering Farmers with Technology",
        thumbnail: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=300&h=200&fit=crop",
        views: "32.8K",
        likes: "1.8K",
        comments: "156",
        postedDate: "Yesterday",
        platform: "Instagram"
      }
    ]
  },
  {
    name: "FarMart",
    logo: "🌾",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    videos: [
      {
        id: "fm1",
        title: "B2B Agri Commerce Revolution",
        thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=200&fit=crop",
        views: "28.5K",
        likes: "1.5K",
        comments: "189",
        postedDate: "Today",
        platform: "YouTube"
      },
      {
        id: "fm2",
        title: "Farmer Success Stories - Series",
        thumbnail: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=300&h=200&fit=crop",
        views: "19.2K",
        likes: "982",
        comments: "98",
        postedDate: "2 days ago",
        platform: "Facebook"
      }
    ]
  },
  {
    name: "DeHaat",
    logo: "🚜",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    videos: [
      {
        id: "dh1",
        title: "Full-Stack Agri Services Platform",
        thumbnail: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=300&h=200&fit=crop",
        views: "52.1K",
        likes: "3.2K",
        comments: "312",
        postedDate: "Today",
        platform: "YouTube"
      },
      {
        id: "dh2",
        title: "Crop Advisory & Input Distribution",
        thumbnail: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=300&h=200&fit=crop",
        views: "38.7K",
        likes: "2.4K",
        comments: "245",
        postedDate: "Yesterday",
        platform: "Instagram"
      }
    ]
  },
  {
    name: "BigHaat",
    logo: "🌱",
    color: "bg-green-500/10 text-green-600 border-green-500/20",
    videos: [
      {
        id: "bh1",
        title: "Digital Agriculture Marketplace",
        thumbnail: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=300&h=200&fit=crop",
        views: "22.3K",
        likes: "1.2K",
        comments: "134",
        postedDate: "Today",
        platform: "YouTube"
      },
      {
        id: "bh2",
        title: "Farmer Training & Education",
        thumbnail: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
        views: "15.8K",
        likes: "856",
        comments: "87",
        postedDate: "3 days ago",
        platform: "Facebook"
      }
    ]
  }
];

const VideoCard = ({ video }: { video: VideoData }) => (
  <div className="group relative bg-card rounded-lg overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
    <div className="relative aspect-video">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
          <Play className="h-5 w-5 text-primary-foreground ml-1" />
        </div>
      </div>
      <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">
        {video.platform}
      </Badge>
    </div>
    <div className="p-3 space-y-2">
      <h4 className="font-medium text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors">
        {video.title}
      </h4>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Eye className="h-3 w-3" />
          {video.views}
        </span>
        <span className="flex items-center gap-1">
          <ThumbsUp className="h-3 w-3" />
          {video.likes}
        </span>
        <span className="flex items-center gap-1">
          <MessageCircle className="h-3 w-3" />
          {video.comments}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Calendar className="h-3 w-3" />
        {video.postedDate}
      </div>
    </div>
  </div>
);

export const CompetitorContentAnalysis = () => {
  return (
    <div className="space-y-6">
      {competitors.map((competitor) => (
        <Card key={competitor.name} className="overflow-hidden">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3">
              <span className="text-2xl">{competitor.logo}</span>
              <span className="text-lg font-semibold">{competitor.name}</span>
              <Badge variant="outline" className={competitor.color}>
                {competitor.videos.length} videos this week
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {competitor.videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
