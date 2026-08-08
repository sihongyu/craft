import { createFileRoute } from "@tanstack/react-router"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { leaderboardData } from "@/lib/game-data"
import { useState } from "react"
import { Trophy, Medal, Search, Crown, Star } from "lucide-react"

export const Route = createFileRoute("/leaderboard")({ component: LeaderboardPage })

const getRankIcon = (rank: number) => {
  if (rank === 1) return <Crown className="size-5 text-yellow-500" />
  if (rank === 2) return <Medal className="size-5 text-gray-400" />
  if (rank === 3) return <Medal className="size-5 text-amber-600" />
  return <span className="text-sm font-semibold text-muted-foreground">{rank}</span>
}

function LeaderboardPage() {
  const [search, setSearch] = useState("")
  const filteredData = leaderboardData.filter((p) => p.player.toLowerCase().includes(search.toLowerCase()))
  const top3 = leaderboardData.slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="mt-2 text-muted-foreground">Top players competing for glory</p>
      </div>
      <div className="mb-10 grid gap-4 md:grid-cols-3">{top3.map((player) => (
        <Card key={player.rank} className="relative overflow-hidden text-center">
          {player.rank === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-lg bg-yellow-500 px-4 py-1 text-xs font-bold text-black">#1 CHAMPION</div>}
          <CardHeader className={player.rank === 1 ? "pt-10" : ""}>
            <Avatar className="mx-auto size-16"><AvatarFallback className="text-lg font-bold">{player.avatar}</AvatarFallback></Avatar>
            <div className="mt-2 flex items-center justify-center gap-1.5">{getRankIcon(player.rank)}</div>
            <CardTitle className="text-lg">{player.player}</CardTitle>
            <CardDescription className="text-2xl font-bold text-foreground">{player.score.toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-6 text-sm text-muted-foreground">
            <span><strong className="text-foreground">{player.games}</strong> Games</span>
            <span><strong className="text-foreground">{player.winRate}%</strong> Win Rate</span>
          </CardContent>
        </Card>
      ))}</div>
      <Tabs defaultValue="global">
        <div className="mb-4 flex items-center justify-between"><TabsList><TabsTrigger value="global">Global</TabsTrigger><TabsTrigger value="weekly">Weekly</TabsTrigger><TabsTrigger value="daily">Daily</TabsTrigger></TabsList>
          <div className="relative w-64"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input placeholder="Search players..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
        </div>
        <TabsContent value="global">
          <Card><Table><TableHeader><TableRow><TableHead className="w-16">Rank</TableHead><TableHead>Player</TableHead><TableHead className="text-right">Score</TableHead><TableHead className="text-right">Games</TableHead><TableHead className="text-right">Win Rate</TableHead></TableRow></TableHeader><TableBody>
            {filteredData.map((player) => (<TableRow key={player.rank}><TableCell>{getRankIcon(player.rank)}</TableCell><TableCell className="flex items-center gap-2"><Avatar className="size-8"><AvatarFallback className="text-xs">{player.avatar}</AvatarFallback></Avatar><span className="font-medium">{player.player}</span></TableCell><TableCell className="text-right font-semibold">{player.score.toLocaleString()}</TableCell><TableCell className="text-right">{player.games}</TableCell><TableCell className="text-right">{player.winRate}%</TableCell></TableRow>))}
          </TableBody></Table></Card>
        </TabsContent>
        <TabsContent value="weekly"><div className="py-20 text-center text-muted-foreground">Weekly leaderboard data loading...</div></TabsContent>
        <TabsContent value="daily"><div className="py-20 text-center text-muted-foreground">Daily leaderboard data loading...</div></TabsContent>
      </Tabs>
    </div>
  )
}
