import { createFileRoute } from "@tanstack/react-router"
import { User, Settings, Clock, Star, TrendingUp, Gamepad2, Edit3, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Profile Header */}
        <section className="border-b bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Avatar className="size-20 text-xl">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">GV</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold">GameVersePlayer</h1>
                  <Badge variant="secondary">Pro Member</Badge>
                </div>
                <p className="text-muted-foreground mt-1">Joined March 2025</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Passionate gamer and community contributor.
                </p>
              </div>
              <div className="flex items-center gap-2 mt-4 sm:mt-0">
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Edit3 className="size-3.5" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm" className="gap-1.5">
                  <Settings className="size-3.5" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {[
                { label: "Games Played", value: "47", icon: Gamepad2 },
                { label: "Hours Played", value: "1,234", icon: Clock },
                { label: "Achievements", value: "156", icon: Star },
                { label: "Win Rate", value: "62%", icon: TrendingUp },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <Card key={stat.label} className="text-center">
                    <CardContent className="p-4">
                      <Icon className="size-5 text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="container mx-auto px-4 py-12">
          <Tabs defaultValue="library">
            <TabsList className="w-full sm:w-auto">
              <TabsTrigger value="library">Game Library</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="history">Play History</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>

            {/* Library */}
            <TabsContent value="library" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Cyber Strike", hours: 345, lastPlayed: "2 hours ago", progress: 78 },
                  { title: "Fantasy Realms", hours: 289, lastPlayed: "1 day ago", progress: 92 },
                  { title: "Mystery Mansion", hours: 45, lastPlayed: "3 days ago", progress: 34 },
                  { title: "Slam Dunk Legends", hours: 178, lastPlayed: "5 hours ago", progress: 65 },
                  { title: "Cosmic Colony", hours: 112, lastPlayed: "1 week ago", progress: 45 },
                  { title: "Kingdom Tactics", hours: 267, lastPlayed: "Yesterday", progress: 88 },
                ].map((game) => (
                  <Card key={game.title} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{game.title}</CardTitle>
                        <Badge variant="secondary" className="text-xs">{game.hours}h</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>Progress</span>
                          <span>{game.progress}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all"
                            style={{ width: `${game.progress}%` }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Last played: {game.lastPlayed}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Achievements */}
            <TabsContent value="achievements" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "First Victory", description: "Win your first match", game: "Cyber Strike", unlocked: true, date: "Mar 15, 2025" },
                  { name: "Speed Demon", description: "Complete a race in under 2 minutes", game: "Neon Racers", unlocked: true, date: "Apr 2, 2025" },
                  { name: "Master Builder", description: "Build 100 structures", game: "Cosmic Colony", unlocked: true, date: "May 20, 2025" },
                  { name: "Dragon Slayer", description: "Defeat the ancient dragon boss", game: "Fantasy Realms", unlocked: false, date: null },
                  { name: "Puzzle Master", description: "Solve 50 puzzles", game: "Mystery Mansion", unlocked: false, date: null },
                  { name: "Legendary Rank", description: "Reach Legendary rank in ranked mode", game: "Cyber Strike", unlocked: false, date: null },
                ].map((ach) => (
                  <Card key={ach.name} className={`transition-all ${ach.unlocked ? "" : "opacity-60"}`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-start gap-3">
                        <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${
                          ach.unlocked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                        }`}>
                          <Star className={`size-5 ${ach.unlocked ? "fill-primary" : ""}`} />
                        </div>
                        <div>
                          <CardTitle className="text-sm">{ach.name}</CardTitle>
                          <p className="text-xs text-muted-foreground mt-0.5">{ach.game}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-muted-foreground">{ach.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {ach.unlocked ? `Unlocked: ${ach.date}` : "Locked"}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Play History */}
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {[
                      { game: "Cyber Strike", action: "Ranked Match", result: "Victory", score: "+25 LP", time: "2 hours ago", win: true },
                      { game: "Fantasy Realms", action: "Boss Fight", result: "Completed", score: "+500 XP", time: "5 hours ago", win: true },
                      { game: "Slam Dunk Legends", action: "Quick Match", result: "Defeat", score: "-10 LP", time: "Yesterday", win: false },
                      { game: "Neon Racers", action: "Time Trial", result: "1st Place", score: "+100 XP", time: "Yesterday", win: true },
                      { game: "Kingdom Tactics", action: "Campaign", result: "Victory", score: "+300 XP", time: "2 days ago", win: true },
                    ].map((entry, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className={`flex size-9 items-center justify-center rounded-lg ${
                            entry.win ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                          }`}>
                            <Gamepad2 className="size-4" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{entry.game}</p>
                            <p className="text-xs text-muted-foreground">{entry.action}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-semibold ${entry.win ? "text-green-500" : "text-red-500"}`}>
                            {entry.result}
                          </p>
                          <p className="text-xs text-muted-foreground">{entry.score} {"\u2022"} {entry.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings" className="mt-6">
              <div className="max-w-2xl space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <User className="size-4" />
                      <CardTitle className="text-base">Profile Information</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Display Name</p>
                        <p className="text-muted-foreground">GameVersePlayer</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">player@gameverse.com</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Bio</p>
                        <p className="text-muted-foreground">Passionate gamer and community contributor.</p>
                      </div>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Bell className="size-4" />
                      <CardTitle className="text-base">Notifications</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-muted-foreground">Receive game updates and news</p>
                      </div>
                      <Badge variant="secondary">Enabled</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-muted-foreground">Tournament reminders and alerts</p>
                      </div>
                      <Badge variant="outline">Disabled</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Shield className="size-4" />
                      <CardTitle className="text-base">Privacy & Security</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Profile Visibility</p>
                        <p className="text-muted-foreground">Control who can see your profile</p>
                      </div>
                      <Badge variant="secondary">Public</Badge>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Badge variant="outline">Not Set</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

      <Footer />
    </div>
  )
}
