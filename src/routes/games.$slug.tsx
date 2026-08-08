import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import { allGames } from "@/lib/game-data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { GameCard } from "@/components/GameCard"
import { Star, Users, Monitor, Calendar, Heart, Share2, ShoppingCart, ArrowLeft } from "lucide-react"

export const Route = createFileRoute("/games/$slug")({ component: GameDetailPage })

function GameDetailPage() {
  const { slug } = Route.useParams()
  const game = allGames.find((g) => g.slug === slug)
  if (!game) throw notFound()

  const relatedGames = allGames.filter((g) => g.category === game.category && g.id !== game.id).slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/games" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> Back to Games
      </Link>
      <div className="mb-8 overflow-hidden rounded-xl">
        <img src={game.image} alt={game.title} className="aspect-[21/9] w-full object-cover" />
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">{game.title}</h1>
              <p className="mt-2 text-lg text-muted-foreground">{game.longDescription || game.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon"><Heart className="size-4" /></Button>
              <Button variant="outline" size="icon"><Share2 className="size-4" /></Button>
              <Button size="lg"><ShoppingCart className="mr-2 size-4" /> Get Game</Button>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Star className="size-4 fill-yellow-500 text-yellow-500" /> {game.rating > 0 ? game.rating + " / 5.0" : "Coming Soon"}</span>
            <span className="flex items-center gap-1"><Users className="size-4" /> {game.players} players</span>
            <span className="flex items-center gap-1"><Calendar className="size-4" /> {game.releaseDate}</span>
            <span className="flex items-center gap-1"><Monitor className="size-4" /> {game.platforms.join(", ")}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">{game.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
          <Separator className="my-6" />
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="requirements">System Requirements</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About {game.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{game.longDescription || game.description}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div><strong>Developer:</strong> <span className="text-muted-foreground">{game.developer}</span></div>
                  <div><strong>Publisher:</strong> <span className="text-muted-foreground">{game.publisher}</span></div>
                  <div><strong>Genre:</strong> <span className="text-muted-foreground">{game.genre}</span></div>
                  <div><strong>Platforms:</strong> <span className="text-muted-foreground">{game.platforms.join(", ")}</span></div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="requirements" className="mt-4">
              <p className="text-muted-foreground">System requirements coming soon.</p>
            </TabsContent>
            <TabsContent value="reviews" className="mt-4">
              <p className="text-muted-foreground">Reviews will be available after launch.</p>
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Game Info</CardTitle>
              <CardDescription>Details at a glance</CardDescription>
            </CardHeader>
            <div className="space-y-3 px-4 pb-4 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Rating</span><span className="font-medium">{game.rating > 0 ? game.rating + "/5" : "TBA"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Players</span><span className="font-medium">{game.players}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Genre</span><span className="font-medium">{game.genre}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Release</span><span className="font-medium">{game.releaseDate}</span></div>
            </div>
          </Card>
        </div>
      </div>
      {relatedGames.length > 0 && (
        <>
          <Separator className="my-12" />
          <h2 className="mb-6 text-2xl font-bold">Related Games</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{relatedGames.map((g) => <GameCard key={g.id} game={g} />)}</div>
        </>
      )}
    </div>
  )
}
