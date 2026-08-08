import { createFileRoute, Link } from "@tanstack/react-router"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { latestNews } from "@/lib/game-data"
import { Calendar, ArrowRight, Clock } from "lucide-react"

export const Route = createFileRoute("/news")({ component: NewsPage })

function NewsPage() {
  const featured = latestNews[0]
  const rest = latestNews.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Gaming News</h1>
        <p className="mt-2 text-muted-foreground">Stay updated with the latest from the gaming world</p>
      </div>
      {featured && (
        <Card className="mb-10 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <img src={featured.image} alt={featured.title} className="aspect-video h-full object-cover" />
            <div className="flex flex-col justify-between p-6">
              <div>
                <Badge className="mb-3">Featured</Badge>
                <CardTitle className="text-2xl">{featured.title}</CardTitle>
                <CardDescription className="mt-2 text-base">{featured.summary}</CardDescription>
              </div>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar className="size-4" /> {featured.date}</span>
                <span className="flex items-center gap-1"><Badge variant="secondary">{featured.category}</Badge></span>
              </div>
              <Button variant="outline" className="mt-4 w-fit">Read More <ArrowRight className="ml-2 size-4" /></Button>
            </div>
          </div>
        </Card>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{rest.map((n) => (
        <Card key={n.id} className="overflow-hidden transition-all hover:shadow-lg">
          <img src={n.image} alt={n.title} className="aspect-video w-full object-cover" />
          <CardHeader>
            <div className="flex items-center gap-2"><Badge variant="secondary">{n.category}</Badge><span className="text-xs text-muted-foreground">{n.date}</span></div>
            <CardTitle className="line-clamp-2 text-base">{n.title}</CardTitle>
            <CardDescription className="line-clamp-2">{n.summary}</CardDescription>
          </CardHeader>
          <CardFooter><Button variant="ghost" size="sm">Read More <ArrowRight className="ml-1 size-3" /></Button></CardFooter>
        </Card>
      ))}</div>
    </div>
  )
}
