import { createFileRoute } from "@tanstack/react-router"
import { useState } from "react"
import {
  MessageSquare,
  Users,
  TrendingUp,
  Search,
  MessageCircle,
  ThumbsUp,
  Heart,
  Share2,
  Sparkles,
  Clock,
  Eye,
  Pin,
  Hash,
  ArrowUp,
  ArrowRight,
  Gamepad2,
  Star,
  Shield,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const Route = createFileRoute("/community")({
  component: CommunityPage,
})

const categories = [
  { name: "General Discussion", icon: MessageSquare, posts: 4523, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Game Strategies", icon: Gamepad2, posts: 3218, color: "text-green-500", bg: "bg-green-500/10" },
  { name: "Tournament Talk", icon: Zap, posts: 1892, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { name: "Technical Support", icon: Shield, posts: 2765, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Creative Corner", icon: Sparkles, posts: 1456, color: "text-pink-500", bg: "bg-pink-500/10" },
  { name: "Looking for Group", icon: Users, posts: 3102, color: "text-orange-500", bg: "bg-orange-500/10" },
]

const trendingTopics = [
  { title: "Cyber Strike Season 4 Meta Tier List", replies: 342, views: 12400, category: "Game Strategies" },
  { title: "Fantasy Realms: Best Builds for Patch 3.2", replies: 278, views: 9800, category: "Game Strategies" },
  { title: "Looking for Diamond+ Squad (NA)", replies: 156, views: 5600, category: "Looking for Group" },
  { title: "Summer Game Fest 2025 Discussion Thread", replies: 892, views: 25000, category: "General Discussion" },
  { title: "Keyboard & Mouse vs Controller: The Ultimate Debate", replies: 445, views: 18700, category: "General Discussion" },
]

const posts = [
  {
    id: 1,
    title: "Stuck on Mystery Mansion Chapter 7 - The Library Puzzle",
    author: "PuzzleHunter99",
    avatar: "PH",
    category: "Technical Support",
    content: "I've been trying to decode the ancient text in the library for hours. Has anyone figured out the sequence? The cipher seems to change every playthrough...",
    replies: 23,
    likes: 45,
    time: "2 hours ago",
    pinned: false,
  },
  {
    id: 2,
    title: "Welcome to GameVerse Community! Read this first.",
    author: "GameVerseAdmin",
    avatar: "GV",
    category: "General Discussion",
    content: "Welcome to the official GameVerse community! This is your space to discuss games, share strategies, find teammates, and connect with fellow gamers. Please read our community guidelines before posting.",
    replies: 89,
    likes: 256,
    time: "3 months ago",
    pinned: true,
  },
  {
    id: 3,
    title: "My Cosmic Colony hit 500k population! Base tour inside",
    author: "StarBuilder",
    avatar: "SB",
    category: "Creative Corner",
    content: "After 200+ hours of building, my interstellar colony just reached half a million citizens. I'm sharing a full base tour with screenshots and design tips for new players.",
    replies: 67,
    likes: 189,
    time: "5 hours ago",
    pinned: false,
  },
  {
    id: 4,
    title: "Kingdom Tactics: Turn 1 openings tier list",
    author: "GrandStrategist",
    avatar: "GS",
    category: "Game Strategies",
    content: "After analyzing 500+ high-ELO games, here's my definitive tier list for turn 1 openings in Kingdom Tactics. Includes detailed breakdowns for each faction.",
    replies: 134,
    likes: 312,
    time: "8 hours ago",
    pinned: false,
  },
  {
    id: 5,
    title: "Slam Dunk Legends - Recruiting PG and C for tournament",
    author: "HoopKing22",
    avatar: "HK",
    category: "Looking for Group",
    content: "We're a Diamond team looking for a Point Guard and Center for the upcoming All-Star Cup. Must have comms, be available for practice 3x/week. NA East servers.",
    replies: 15,
    likes: 28,
    time: "1 hour ago",
    pinned: false,
  },
  {
    id: 6,
    title: "Neon Racers: Hidden shortcuts on Skyway Circuit",
    author: "SpeedDemon_X",
    avatar: "SD",
    category: "Game Strategies",
    content: "Found some sneaky shortcuts on the Skyway Circuit track that can shave off 3+ seconds per lap. Video tutorial included with timestamp breakdowns.",
    replies: 56,
    likes: 178,
    time: "12 hours ago",
    pinned: false,
  },
  {
    id: 7,
    title: "What game should I play next? Recommendations needed",
    author: "GameExplorer",
    avatar: "GE",
    category: "General Discussion",
    content: "Just finished Fantasy Realms and looking for my next adventure. I enjoy RPGs with deep storylines and open worlds. Any suggestions from the GameVerse library?",
    replies: 89,
    likes: 112,
    time: "3 hours ago",
    pinned: false,
  },
  {
    id: 8,
    title: "Lost Expedition: All Collectible Locations (100% Guide)",
    author: "CompletionistGuy",
    avatar: "CG",
    category: "Game Strategies",
    content: "Complete guide to finding every collectible in Lost Expedition. Maps, screenshots, and video walkthroughs for all 47 hidden artifacts and journal entries.",
    replies: 42,
    likes: 203,
    time: "1 day ago",
    pinned: false,
  },
]

function CommunityPage() {
  const [search, setSearch] = useState("")

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase()) ||
      p.author.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm mb-4">
                <Users className="size-4 text-primary" />
                <span className="text-muted-foreground">
                  <span className="font-bold text-foreground">28,542</span> members online
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black tracking-tight">Community</h1>
              <p className="mt-2 text-muted-foreground max-w-xl">
                Join the conversation. Discuss games, share strategies, find teammates, and connect with millions of players worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search discussions..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <Button className="gap-2">
                  <MessageSquare className="size-4" />
                  New Discussion
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="latest">
                <div className="flex items-center justify-between mb-6">
                  <TabsList>
                    <TabsTrigger value="latest">Latest</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="latest" className="mt-0 space-y-4">
                  {filteredPosts.length === 0 ? (
                    <div className="text-center py-20">
                      <MessageSquare className="size-16 text-muted-foreground/30 mx-auto" />
                      <h3 className="mt-4 text-lg font-semibold">No discussions found</h3>
                      <p className="text-muted-foreground text-sm">Try a different search term</p>
                    </div>
                  ) : (
                    filteredPosts.map((post) => (
                      <Card
                        key={post.id}
                        className={`border-border/50 hover:shadow-md transition-shadow cursor-pointer ${
                          post.pinned ? "border-primary/20 bg-primary/[0.02]" : ""
                        }`}
                      >
                        <CardHeader className="pb-3">
                          <div className="flex items-start gap-3">
                            <Avatar className="size-10 shrink-0 mt-0.5">
                              <AvatarFallback className="bg-primary/10 text-primary text-sm font-bold">
                                {post.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                {post.pinned && (
                                  <Badge variant="secondary" className="gap-1 text-xs py-0 h-5">
                                    <Pin className="size-3" />
                                    Pinned
                                  </Badge>
                                )}
                                <Badge variant="outline" className="text-xs py-0 h-5">
                                  {post.category}
                                </Badge>
                              </div>
                              <CardTitle className="text-base mt-1.5 leading-snug hover:text-primary transition-colors">
                                {post.title}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                {post.content}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <span className="font-medium text-foreground">{post.author}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="size-3" />
                                {post.time}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <MessageCircle className="size-3" />
                                {post.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart className="size-3" />
                                {post.likes}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </TabsContent>

                <TabsContent value="trending" className="mt-0 space-y-4">
                  {trendingTopics.map((topic, idx) => (
                    <Card
                      key={idx}
                      className="border-border/50 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <CardHeader className="pb-1">
                        <div className="flex items-start gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                            <TrendingUp className="size-5 text-orange-500" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-base hover:text-primary transition-colors">
                              {topic.title}
                            </CardTitle>
                            <div className="flex items-center gap-3 mt-1.5 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs py-0 h-5">{topic.category}</Badge>
                              <span className="flex items-center gap-1">
                                <MessageCircle className="size-3" />
                                {topic.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="size-3" />
                                {topic.views.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="unanswered" className="mt-0">
                  <div className="text-center py-16">
                    <MessageSquare className="size-12 text-muted-foreground/30 mx-auto" />
                    <h3 className="mt-4 font-semibold">No Unanswered Questions</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our community is quick to help! All questions have received responses.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                {[1, 2, 3, 4, 5].map((n) => (
                  <Button
                    key={n}
                    variant={n === 1 ? "default" : "outline"}
                    size="sm"
                  >
                    {n}
                  </Button>
                ))}
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 px-3">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    return (
                      <div
                        key={cat.name}
                        className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-accent cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`flex size-7 items-center justify-center rounded-md ${cat.bg} ${cat.color}`}>
                            <Icon className="size-3.5" />
                          </div>
                          <span className="font-medium text-sm">{cat.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">{cat.posts}</Badge>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Online Stats */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Users className="size-4 text-green-500" />
                    Community Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Total Members", value: "145,892" },
                    { label: "Online Now", value: "28,542" },
                    { label: "Posts Today", value: "1,234" },
                    { label: "Topics Created", value: "52,678" },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-semibold">{stat.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Contributors */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Star className="size-4 text-yellow-500" />
                    Top Contributors
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "GrandStrategist", posts: 2340, badge: "Diamond" },
                    { name: "PuzzleHunter99", posts: 1890, badge: "Platinum" },
                    { name: "SpeedDemon_X", posts: 1567, badge: "Platinum" },
                    { name: "StarBuilder", posts: 1234, badge: "Gold" },
                    { name: "CompletionistGuy", posts: 1098, badge: "Gold" },
                  ].map((user) => (
                    <div key={user.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2.5">
                        <Avatar className="size-7">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary font-bold">
                            {user.name.slice(0, 2)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">{user.posts}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Community Guidelines */}
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Shield className="size-4 text-primary" />
                    Community Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs text-muted-foreground space-y-1.5">
                    <li>Be respectful and kind to others</li>
                    <li>No spoilers without proper tags</li>
                    <li>Keep discussions on-topic</li>
                    <li>Report inappropriate content</li>
                    <li>Have fun and game on!</li>
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
