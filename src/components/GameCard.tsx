import { Link } from "@tanstack/react-router"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock } from "lucide-react"
import type { Game } from "@/lib/game-data"

export function GameCard({ game }: { game: Game }) {
  return (
    <Link to="/games/$slug" params={{ slug: game.slug }} className="group">
      <Card className="h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
        <div className="relative overflow-hidden">
          <img src={game.image} alt={game.title} className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="flex items-center gap-1 shadow-lg">
              <Star className="size-3 fill-yellow-500 text-yellow-500" /> {game.rating || "TBA"}
            </Badge>
          </div>
          {game.upcoming && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-purple-500 hover:bg-purple-500 shadow-lg">
                <Clock className="mr-1 size-3" /> Upcoming
              </Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <div>
            <CardTitle className="line-clamp-1 text-base">{game.title}</CardTitle>
            <CardDescription className="mt-1 line-clamp-2">{game.description}</CardDescription>
          </div>
        </CardHeader>
        <CardFooter className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {game.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Users className="size-3" />
            {game.players}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
