import { createFileRoute } from "@tanstack/react-router"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { GameClock, Trophy, Target, Star, Play, Settings, LogOut, User, Gamepad2, Clock } from "lucide-react"

export const Route = createFileRoute("/profile")({ component: ProfilePage })

function ProfilePage() {
  const stats = [{ icon: Gamepad2, label: "Games Played", value: "842" }, { icon: Trophy, label: "Wins", value: "572" }, { icon: Target, label: "Win Rate", value: "68%" }, { icon: Star, label: "Achievements", value: "127" }]
  const gameLibrary = [{ title: "Cyber Rebellion 2077", time: "342h", genre: "Action RPG" }, { title: "Mystic Legends", time: "256h", genre: "Fantasy RPG" }, { title: "Apex Grid", time: "189h", genre: "4X Strategy" }, { title: "Velocity Racing", time: "124h", genre: "Racing" }]
  const achievements = [{ name: "Speed Demon", desc: "Complete a race in under 60 seconds", rarity: "rare" }, { name: "Dragon Slayer", desc: "Defeat the legendary dragon boss", rarity: "epic" }, { name: "Centurion", desc: "Reach level 100", rarity: "common" }, { name: "Explorer", desc: "Discover all map locations", rarity: "rare" }]

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardContent className="flex flex-col items-center gap-6 pt-8 sm:flex-row sm:items-start">
          <Avatar className="size-24"><AvatarFallback className="text-3xl font-bold">SH</AvatarFallback></Avatar>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold">ShadowHunter</h1>
            <p className="mt-1 text-muted-foreground">#1 Global Leaderboard</p>
            <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start"><Badge variant="secondary">Pro Gamer</Badge><Badge variant="secondary">Beta Tester</Badge><Badge variant="secondary">Content Creator</Badge></div>
          </div>
          <div className="flex gap-2"><Button variant="outline"><Settings className="mr-2 size-4" /> Settings</Button></div>
        </CardContent>
      </Card>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => (const Icon = stat.icon; <Card key={stat.label} className="text-center"><CardContent className="pt-6"><Icon className="mx-auto size-8 text-primary" /><div className="mt-2 text-2xl font-bold">{stat.value}</div><div className="text-sm text-muted-foreground">{stat.label}</div></CardContent></Card>))}</div>
      <Tabs defaultValue="library">
        <TabsList className="mb-6"><TabsTrigger value="library">Game Library</TabsTrigger><TabsTrigger value="achievements">Achievements</TabsTrigger><TabsTrigger value="history">History</TabsTrigger></TabsList>
        <TabsContent value="library"><div className="grid gap-4 sm:grid-cols-2">{gameLibrary.map((game) => (<Card key={game.title}><CardHeader><div className="flex items-start justify-between"><div><CardTitle className="text-base">{game.title}</CardTitle><CardDescription>{game.genre}</CardDescription></div><Badge variant="outline"><Clock className="mr-1 size-3" /> {game.time}</Badge></div></CardHeader></Card>))}</div></TabsContent>
        <TabsContent value="achievements"><div className="grid gap-4 sm:grid-cols-2">{achievements.map((a) => (<Card key={a.name} className="flex items-center gap-4 p-4"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted"><Trophy className="size-6 text-primary" /></div><div><h3 className="font-semibold">{a.name}</h3><p className="text-sm text-muted-foreground">{a.desc}</p></div><Badge variant={a.rarity === "epic" ? "default" : a.rarity === "rare" ? "secondary" : "outline"} className="ml-auto">{a.rarity}</Badge></Card>))}</div></TabsContent>
        <TabsContent value="history"><div className="py-20 text-center text-muted-foreground">Recent activity will appear here.</div></TabsContent>
      </Tabs>
    </div>
  )
}
