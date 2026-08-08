import { createFileRoute, Link } from "@tanstack/react-router"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GameCard } from "@/components/GameCard"
import { featuredGames, trendingGames, upcomingGames, categories, latestNews, tournaments } from "@/lib/game-data"
import {
  Search,
  Star,
  TrendingUp,
  Gamepad2,
  ArrowRight,
  Crosshair,
  BookOpen,
  Brain,
  Trophy,
  Puzzle,
  Car,
  Cpu,
  Compass,
  Users,
  Clock,
  Zap,
  Flame,
  Calendar,
  ChevronRight,
} from "lucide-react"

export const Route = createFileRoute("/")({
  component: HomePage,
})

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Crosshair, BookOpen, Brain, Trophy, Puzzle, Car, Cpu, Compass,
}

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="container relative z-10 mx-auto flex flex-col items-center gap-8 px-4 py-20 text-center">
          <Badge variant="secondary" className="mb-2 animate-pulse px-4 py-1.5 text-sm">
            <Zap className="mr-1.5 size-3.5" /> Now in Open Beta
          </Badge>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Your Ultimate{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Gaming
            </span>{" "}
            Destination
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover thousands of games, connect with millions of players, and embark on unforgettable adventures.
          </p>
          <div className="flex w-full max-w-md items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search games, genres, creators..." className="pl-10" />
            </div>
            <Button size="lg">
              Explore <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="mt-6 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="size-4" /> <span className="font-semibold text-foreground">10M+</span> Players
            </div>
            <div className="flex items-center gap-2">
              <Gamepad2 className="size-4" /> <span className="font-semibold text-foreground">5,000+</span> Games
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4" /> <span className="font-semibold text-foreground">4.8</span> Rating
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Browse Categories</h2>
            <p className="mt-1 text-muted-foreground">Find your next adventure</p>
          </div>
          <Link to="/games">
            <Button variant="ghost" className="gap-1">
              View All <ChevronRight className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((cat) => {
            const IconComp = categoryIcons[cat.icon]
            return (
              <Link
                key={cat.id}
                to="/games"
                search={{ category: cat.id }}
                className="group"
              >
                <Card className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
                  {IconComp && <IconComp className="size-8 text-primary transition-transform group-hover:scale-110" />}
                  <h3 className="text-sm font-semibold">{cat.name}</h3>
                  <span className="text-xs text-muted-foreground">{cat.count} games</span>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured Games */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Games</h2>
              <p className="mt-1 text-muted-foreground">Hand-picked by our editors</p>
            </div>
            <Link to="/games">
              <Button variant="ghost" className="gap-1">
                View All <ChevronRight className="size-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Live Tournaments</h2>
          <p className="mt-1 text-muted-foreground">Compete and win prizes</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((t) => (
            <Card key={t.id} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{t.name}</CardTitle>
                    <CardDescription className="mt-1">{t.game}</CardDescription>
                  </div>
                  <Badge variant={t.status === "live" ? "default" : "secondary"}>
                    {t.status === "live" ? (
                      <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-red-500 animate-pulse" /> Live</span>
                    ) : (
                      "Upcoming"
                    )}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="size-3.5" /> {t.date}</span>
                  <span className="flex items-center gap-1"><Trophy className="size-3.5" /> {t.prize}</span>
                  <span className="flex items-center gap-1"><Users className="size-3.5" /> {t.participants}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" size="sm">
                  {t.status === "live" ? "Watch Now" : "Register"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending & Upcoming */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="trending">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold">Discover More</h2>
              <TabsList>
                <TabsTrigger value="trending">
                  <TrendingUp className="mr-1.5 size-4" /> Trending
                </TabsTrigger>
                <TabsTrigger value="upcoming">
                  <Clock className="mr-1.5 size-4" /> Upcoming
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="trending">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {trendingGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="upcoming">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {upcomingGames.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Latest News</h2>
            <p className="mt-1 text-muted-foreground">Stay up to date with gaming</p>
          </div>
          <Link to="/news">
            <Button variant="ghost" className="gap-1">
              All News <ChevronRight className="size-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((n) => (
            <Link key={n.id} to="/news">
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <Badge variant="secondary" className="mb-2 w-fit">{n.category}</Badge>
                  <CardTitle className="line-clamp-2 text-base">{n.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{n.summary}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <span className="text-xs text-muted-foreground">{n.date}</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Ready to Play?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-primary-foreground/80">
            Join millions of players and start your gaming journey today. Free to play, no limits.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/games">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/leaderboard">View Leaderboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
