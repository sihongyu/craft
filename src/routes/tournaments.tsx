import { createFileRoute, Link } from "@tanstack/react-router"
import { useState } from "react"
import {
  Trophy,
  Calendar,
  Users,
  Clock,
  Search,
  ArrowRight,
  Flame,
  Timer,
  DollarSign,
  Swords,
  Medal,
  Gamepad2,
  ChevronRight,
  Filter,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const Route = createFileRoute("/tournaments")({
  component: TournamentsPage,
})

const tournaments = [
  {
    id: "t1",
    title: "Cyber Strike Global Championship 2025",
    game: "Cyber Strike",
    prize: "$2,500,000",
    participants: 128,
    registered: 112,
    startDate: "2025-09-15",
    endDate: "2025-09-30",
    status: "upcoming" as const,
    format: "5v5",
    region: "Global",
    description: "The biggest Cyber Strike tournament of the year. Teams from six continents compete for the ultimate title and a record-breaking $2.5M prize pool.",
  },
  {
    id: "t2",
    title: "Fantasy Realms World Cup",
    game: "Fantasy Realms",
    prize: "$1,800,000",
    participants: 64,
    registered: 64,
    startDate: "2025-08-20",
    endDate: "2025-09-10",
    status: "live" as const,
    format: "3v3",
    region: "Global",
    description: "The premier Fantasy Realms PvP event. Elite teams battle through group stages and knockout rounds for world champion status.",
  },
  {
    id: "t3",
    title: "Neon Racers Speed Circuit Finals",
    game: "Neon Racers",
    prize: "$500,000",
    participants: 256,
    registered: 200,
    startDate: "2025-10-01",
    endDate: "2025-10-08",
    status: "upcoming" as const,
    format: "Solo",
    region: "Europe",
    description: "High-speed anti-gravity racing at its finest. Racers compete across 12 tracks for speed circuit supremacy.",
  },
  {
    id: "t4",
    title: "Slam Dunk Legends All-Star Cup",
    game: "Slam Dunk Legends",
    prize: "$750,000",
    participants: 32,
    registered: 32,
    startDate: "2025-08-15",
    endDate: "2025-08-22",
    status: "live" as const,
    format: "5v5",
    region: "North America",
    description: "The top 32 teams in Slam Dunk Legends face off in an electrifying knockout tournament.",
  },
  {
    id: "t5",
    title: "Kingdom Tactics Masters League",
    game: "Kingdom Tactics",
    prize: "$300,000",
    participants: 48,
    registered: 30,
    startDate: "2025-10-15",
    endDate: "2025-10-30",
    status: "upcoming" as const,
    format: "1v1",
    region: "Asia",
    description: "Strategic brilliance on display as the best Kingdom Tactics players compete in the Masters League.",
  },
  {
    id: "t6",
    title: "Cosmic Colony Builder Challenge",
    game: "Cosmic Colony",
    prize: "$150,000",
    participants: 96,
    registered: 96,
    startDate: "2025-08-25",
    endDate: "2025-09-05",
    status: "live" as const,
    format: "Solo",
    region: "Global",
    description: "Build the most efficient interstellar colony under time pressure. Creativity meets resource management.",
  },
  {
    id: "t7",
    title: "Mystery Mansion Speed Run Cup",
    game: "Mystery Mansion",
    prize: "$100,000",
    participants: 200,
    registered: 180,
    startDate: "2025-11-01",
    endDate: "2025-11-03",
    status: "upcoming" as const,
    format: "Solo",
    region: "Global",
    description: "How fast can you solve the mansion? Speed runners race through puzzles for the fastest completion time.",
  },
  {
    id: "t8",
    title: "Lost Expedition Explorer's Gauntlet",
    game: "Lost Expedition",
    prize: "$200,000",
    participants: 64,
    registered: 64,
    startDate: "2025-09-01",
    endDate: "2025-09-14",
    status: "live" as const,
    format: "2v2",
    region: "Global",
    description: "Team up and navigate treacherous terrain. Complete challenges and reach the lost city first to win.",
  },
]

const pastTournaments = [
  {
    title: "Cyber Strike Spring Invitational 2025",
    game: "Cyber Strike",
    winner: "Team Nexus",
    prize: "$1,000,000",
    date: "March 2025",
    participants: 64,
  },
  {
    title: "Fantasy Realms Arena Championship",
    game: "Fantasy Realms",
    winner: "DragonSlayers",
    prize: "$750,000",
    date: "May 2025",
    participants: 32,
  },
  {
    title: "Neon Racers Velocity Cup",
    game: "Neon Racers",
    winner: "SpeedPhantom",
    prize: "$250,000",
    date: "June 2025",
    participants: 128,
  },
  {
    title: "Kingdom Tactics War Council",
    game: "Kingdom Tactics",
    winner: "GrandStrategist",
    prize: "$200,000",
    date: "April 2025",
    participants: 48,
  },
]

function TournamentsPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("upcoming")

  const filtered = tournaments.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()) ||
    t.game.toLowerCase().includes(search.toLowerCase())
  )

  const liveTournaments = filtered.filter((t) => t.status === "live")
  const upcomingTournaments = filtered.filter((t) => t.status === "upcoming")

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="border-b bg-gradient-to-br from-primary/5 via-background to-yellow-500/5">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full border bg-background px-4 py-1.5 text-sm mb-6">
                <Flame className="size-4 text-orange-500" />
                <span className="text-muted-foreground">
                  <span className="font-bold text-foreground">{liveTournaments.length}</span> tournaments live now
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight">
                Tournaments &
                <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent"> Competitions</span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
                Compete in official tournaments across all your favorite games. Win prizes, earn glory, and climb the global rankings.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
                <div className="relative w-full sm:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    placeholder="Search tournaments or games..."
                    className="pl-9"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-2xl mx-auto">
              {[
                { label: "Total Prize Pool", value: "$6.3M+", icon: DollarSign },
                { label: "Tournaments", value: "50+", icon: Trophy },
                { label: "Players Competing", value: "15K+", icon: Users },
                { label: "Games Featured", value: "12", icon: Gamepad2 },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <Card key={s.label} className="text-center">
                    <CardContent className="p-3">
                      <Icon className="size-4 text-primary mx-auto mb-1" />
                      <p className="text-lg font-bold">{s.value}</p>
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tournament Tabs */}
        <section className="container mx-auto px-4 py-12">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <TabsList>
                <TabsTrigger value="upcoming">
                  <Calendar className="size-4 mr-1.5" />
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="live">
                  <Flame className="size-4 mr-1.5 text-red-500" />
                  Live Now
                </TabsTrigger>
                <TabsTrigger value="past">
                  <Medal className="size-4 mr-1.5" />
                  Past Events
                </TabsTrigger>
              </TabsList>
              <Button variant="outline" size="sm" className="gap-1.5">
                <Filter className="size-3.5" />
                Filters
              </Button>
            </div>

            {/* Upcoming */}
            <TabsContent value="upcoming" className="mt-0">
              {upcomingTournaments.length === 0 ? (
                <div className="text-center py-20">
                  <Trophy className="size-16 text-muted-foreground/30 mx-auto" />
                  <h3 className="mt-4 text-lg font-semibold">No upcoming tournaments</h3>
                  <p className="text-muted-foreground text-sm mt-1">Try adjusting your search criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {upcomingTournaments.map((t) => (
                    <Card key={t.id} className="overflow-hidden border-border/50 hover:shadow-md transition-shadow group">
                      <div className="relative aspect-video bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center">
                        <Trophy className="size-16 text-primary/20" />
                        <div className="absolute top-4 left-4 right-4 flex justify-between">
                          <Badge className="bg-orange-500 hover:bg-orange-600">{t.format}</Badge>
                          <Badge variant="outline" className="bg-background/80">{t.region}</Badge>
                        </div>
                      </div>
                      <CardHeader className="p-5 pb-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Gamepad2 className="size-3" />
                          <span>{t.game}</span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {t.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">{t.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-5 pt-0">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">Registration</span>
                            <span className="font-medium">{t.registered}/{t.participants} slots</span>
                          </div>
                          <Progress value={(t.registered / t.participants) * 100} className="h-2" />
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="size-3" />
                                {t.startDate}
                              </span>
                              <span className="flex items-center gap-1 font-medium text-yellow-500">
                                <DollarSign className="size-3" />
                                {t.prize}
                              </span>
                            </div>
                            <Button size="sm" className="gap-1.5">
                              Register
                              <ChevronRight className="size-3.5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Live */}
            <TabsContent value="live" className="mt-0">
              {liveTournaments.length === 0 ? (
                <div className="text-center py-20">
                  <Flame className="size-16 text-muted-foreground/30 mx-auto" />
                  <h3 className="mt-4 text-lg font-semibold">No live tournaments</h3>
                  <p className="text-muted-foreground text-sm mt-1">Check back soon for live events</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {liveTournaments.map((t) => (
                    <Card key={t.id} className="overflow-hidden border-red-500/30 hover:shadow-md transition-shadow group">
                      <div className="relative aspect-video bg-gradient-to-br from-red-500/10 via-background to-orange-500/10 flex items-center justify-center">
                        <Swords className="size-16 text-red-500/20" />
                        <div className="absolute top-4 left-4 right-4 flex justify-between">
                          <Badge className="bg-red-500 hover:bg-red-600 animate-pulse">LIVE</Badge>
                          <div className="flex items-center gap-1.5 text-sm font-medium text-red-500">
                            <Timer className="size-4" />
                            <span>{t.format}</span>
                          </div>
                        </div>
                      </div>
                      <CardHeader className="p-5 pb-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                          <Gamepad2 className="size-3" />
                          <span>{t.game}</span>
                          <Badge variant="outline" className="text-xs ml-1">{t.region}</Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {t.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-2 mt-1">{t.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-5 pt-0">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Users className="size-3" />
                              {t.participants} participants
                            </span>
                            <span className="flex items-center gap-1 font-medium text-yellow-500">
                              <DollarSign className="size-3" />
                              {t.prize}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="size-3" />
                              {t.startDate} - {t.endDate}
                            </span>
                          </div>
                          <div className="flex gap-2 pt-2">
                            <Button size="sm" variant="default" className="gap-1.5 flex-1">
                              <Flame className="size-3.5" />
                              Watch Live
                            </Button>
                            <Button size="sm" variant="outline" className="gap-1.5">
                              Bracket
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Past */}
            <TabsContent value="past" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pastTournaments.map((t) => (
                  <Card key={t.title} className="border-border/50 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="secondary" className="text-xs">{t.game}</Badge>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="size-3" />
                          {t.date}
                        </span>
                      </div>
                      <CardTitle className="text-base">{t.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Medal className="size-4 text-yellow-500" />
                          <span className="font-medium">{t.winner}</span>
                        </div>
                        <span className="flex items-center gap-1 text-xs text-yellow-500 font-medium">
                          <DollarSign className="size-3" />
                          {t.prize}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Users className="size-3" />
                          {t.participants} participants
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* CTA */}
        <section className="border-t bg-muted/30">
          <div className="container mx-auto px-4 py-16 text-center">
            <Trophy className="size-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">Ready to Compete?</h2>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              Create your team, register for tournaments, and start climbing the ranks today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <Button size="lg" className="gap-2">
                <Swords className="size-4" />
                Create Team
              </Button>
              <Link to="/leaderboard">
                <Button variant="outline" size="lg" className="gap-2">
                  <Medal className="size-4" />
                  View Rankings
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
