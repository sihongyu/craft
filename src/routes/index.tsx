import { createFileRoute } from "@tanstack/react-router"
import { Link } from "@tanstack/react-router"
import {
  Gamepad2,
  Trophy,
  TrendingUp,
  ArrowRight,
  Star,
  Users,
  Zap,
  Flame,
  Crown,
  ChevronRight,
  Crosshair,
  BookOpen,
  Brain,
  Puzzle,
  Car,
  Cpu,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { GameCard } from "@/components/GameCard"
import { games, gameCategories, leaderboardData, featuredTournaments, newsItems } from "@/lib/game-data"

export const Route = createFileRoute("/")({
  component: HomePage,
})

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Crosshair, BookOpen, Brain, Trophy, Puzzle, Car, Cpu, Compass,
}

function HomePage() {
  const featuredGames = games.filter((g) => g.featured)
  const trendingGames = games.filter((g) => g.trending)
  const newGames = games.filter((g) => g.new)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="max-w-3xl">
              <Badge className="mb-4 text-sm px-3 py-1" variant="secondary">
                <Flame className="size-3 mr-1 text-orange-500" />
                Summer Sale Live - Up to 70% off!
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">
                Discover & Play
                <br />
                <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                  Amazing Games
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Your ultimate platform to discover new games, track your stats,
                compete on leaderboards, and join a community of millions of players.
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-8">
                <Link to="/games">
                  <Button size="lg" className="gap-2">
                    <Gamepad2 className="size-4" />
                    Browse Games
                  </Button>
                </Link>
                <Link to="/leaderboard">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Trophy className="size-4" />
                    View Leaderboard
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-primary" />
                  <span className="font-semibold text-foreground">15M+</span> Players
                </div>
                <div className="flex items-center gap-2">
                  <Gamepad2 className="size-4 text-primary" />
                  <span className="font-semibold text-foreground">200+</span> Games
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="size-4 text-primary" />
                  <span className="font-semibold text-foreground">50+</span> Tournaments
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Game Categories */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Browse Categories</h2>
              <p className="text-muted-foreground mt-1">Find your next favorite game</p>
            </div>
            <Button variant="ghost" className="gap-1 group" asChild>
              <Link to="/games">
                View All
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {gameCategories.map((cat) => {
              const IconComponent = categoryIcons[cat.icon] || Gamepad2
              return (
                <Link
                  key={cat.id}
                  to="/games"
                  className="group"
                >
                  <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer border-border/50">
                    <CardContent className="p-4 flex flex-col items-center text-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="size-6" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{cat.name}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cat.count} games</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </section>

        <Separator />

        {/* Featured Games */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Featured Games</h2>
              <p className="text-muted-foreground mt-1">Our top picks for you</p>
            </div>
            <Button variant="ghost" className="gap-1 group" asChild>
              <Link to="/games">
                View All
                <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* Live Tournaments */}
        <section className="bg-muted/30 border-y">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Live Tournaments</h2>
                <p className="text-muted-foreground mt-1">Compete for glory and prizes</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTournaments.map((tournament) => (
                <Card key={tournament.id} className="overflow-hidden border-border/50">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Trophy className="size-12 text-primary/30" />
                    {tournament.status === "live" && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 animate-pulse">
                        LIVE
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="p-4 pb-1">
                    <CardTitle className="text-base">{tournament.title}</CardTitle>
                    <CardDescription className="text-xs mt-1">{tournament.game}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                      <span className="flex items-center gap-1">
                        <Crown className="size-3 text-yellow-500" />
                        {tournament.prize}
                      </span>
                      <span>{tournament.participants} participants</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Two Column: Trending + Leaderboard */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Trending Games */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <TrendingUp className="size-5 text-orange-500" />
                    Trending Now
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">Most popular games this week</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trendingGames.slice(0, 4).map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>

            {/* Leaderboard Preview */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
                    <Crown className="size-5 text-yellow-500" />
                    Top Players
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">Global rankings</p>
                </div>
                <Link to="/leaderboard">
                  <Button variant="ghost" size="sm" className="gap-1">
                    Full <ChevronRight className="size-3" />
                  </Button>
                </Link>
              </div>
              <Card>
                <CardContent className="p-0">
                  {leaderboardData.slice(0, 5).map((entry, idx) => (
                    <div
                      key={entry.rank}
                      className={`flex items-center gap-3 px-4 py-3 ${
                        idx < leaderboardData.slice(0, 5).length - 1 ? "border-b" : ""
                      }`}
                    >
                      <div className={`flex size-7 items-center justify-center rounded-full text-xs font-bold ${
                        entry.rank === 1 ? "bg-yellow-500 text-white" :
                        entry.rank === 2 ? "bg-gray-300 text-gray-800" :
                        entry.rank === 3 ? "bg-orange-500 text-white" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {entry.rank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{entry.player}</p>
                        <p className="text-xs text-muted-foreground truncate">{entry.game}</p>
                      </div>
                      <div className="text-sm font-semibold">{entry.score.toLocaleString()}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* New Releases */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight flex items-center gap-2">
                <Zap className="size-6 text-primary" />
                New Releases
              </h2>
              <p className="text-muted-foreground mt-1">Fresh games just launched</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="bg-muted/30 border-t">
          <div className="container mx-auto px-4 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Latest News</h2>
                <p className="text-muted-foreground mt-1">Stay updated with gaming news</p>
              </div>
              <Button variant="ghost" className="gap-1 group" asChild>
                <Link to="/news">
                  View All
                  <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {newsItems.slice(0, 4).map((item) => (
                <Card key={item.title} className="hover:shadow-md transition-shadow cursor-pointer border-border/50">
                  <CardHeader className="p-4 pb-2">
                    <Badge variant="outline" className="w-fit text-xs">{item.category}</Badge>
                    <CardTitle className="text-sm mt-2 leading-snug">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-xs text-muted-foreground line-clamp-2">{item.summary}</p>
                    <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black tracking-tight">
              Ready to Start Playing?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Join millions of players and dive into the world of gaming.
              Discover new favorites, compete globally, and have fun!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
              <Link to="/games">
                <Button size="lg" className="gap-2">
                  <Gamepad2 className="size-4" />
                  Browse Games
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button variant="outline" size="lg" className="gap-2">
                  <Trophy className="size-4" />
                  View Leaderboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
