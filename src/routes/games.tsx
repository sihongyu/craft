import { createFileRoute, Link } from "@tanstack/react-router"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { GameCard } from "@/components/GameCard"
import { allGames, categories } from "@/lib/game-data"
import { useState } from "react"
import { Search, SlidersHorizontal, Grid3X3, List, X } from "lucide-react"

export const Route = createFileRoute("/games")({ component: GamesPage })

function GamesPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [layout, setLayout] = useState<"grid" | "list">("grid")

  const filteredGames = allGames.filter((game) => {
    const matchesSearch = game.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || game.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">All Games</h1>
        <p className="mt-1 text-muted-foreground">{allGames.length} games available</p>
      </div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search games..." className="pl-10" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className="flex items-center gap-2">
          <Button variant={layout === "grid" ? "secondary" : "ghost"} size="icon-sm" onClick={() => setLayout("grid")}><Grid3X3 className="size-4" /></Button>
          <Button variant={layout === "list" ? "secondary" : "ghost"} size="icon-sm" onClick={() => setLayout("list")}><List className="size-4" /></Button>
        </div>
      </div>
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant={!selectedCategory ? "default" : "outline"} className="cursor-pointer" onClick={() => setSelectedCategory(null)}>All</Badge>
        {categories.map((cat) => (
          <Badge key={cat.id} variant={selectedCategory === cat.id ? "default" : "outline"} className="cursor-pointer" onClick={() => setSelectedCategory(cat.id)}>
            {cat.name}
          </Badge>
        ))}
      </div>
      {filteredGames.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Search className="mb-4 size-12 text-muted-foreground/30" />
          <h3 className="text-lg font-semibold">No games found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          <Button variant="outline" className="mt-4" onClick={() => { setSearch(""); setSelectedCategory(null) }}>Clear Filters</Button>
        </div>
      ) : layout === "grid" ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredGames.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredGames.map((game) => (
            <Link key={game.id} to="/games/$slug" params={{ slug: game.slug }} className="group">
              <Card className="flex flex-row overflow-hidden transition-all hover:shadow-lg">
                <img src={game.image} alt={game.title} className="aspect-video w-48 object-cover" />
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <CardTitle className="text-lg">{game.title}</CardTitle>
                    <CardDescription className="mt-1">{game.description}</CardDescription>
                    <div className="mt-2 flex flex-wrap gap-1">{game.tags.map((tag) => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}</div>
                  </div>
                  <CardFooter className="mt-2 flex items-center gap-4 p-0 text-sm text-muted-foreground">
                    <span>{game.genre}</span>
                    <span>{game.platforms.join(", ")}</span>
                    <span className="font-semibold text-foreground">{game.rating > 0 ? game.rating + "/5.0" : "Coming Soon"}</span>
                  </CardFooter>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
