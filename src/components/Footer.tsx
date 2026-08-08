import { Link } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gamepad2, Github, Twitter, Youtube, Twitch } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-bold mb-3">
              <Gamepad2 className="size-5 text-primary" />
              <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">GameVerse</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">The ultimate gaming platform. Discover, play, and connect with gamers worldwide.</p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild><a href="#"><Github className="size-4" /></a></Button>
              <Button variant="ghost" size="icon" asChild><a href="#"><Twitter className="size-4" /></a></Button>
              <Button variant="ghost" size="icon" asChild><a href="#"><Youtube className="size-4" /></a></Button>
              <Button variant="ghost" size="icon" asChild><a href="#"><Twitch className="size-4" /></a></Button>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/games" className="hover:text-foreground">All Games</Link>
              <Link to="/leaderboard" className="hover:text-foreground">Leaderboard</Link>
              <Link to="/news" className="hover:text-foreground">News</Link>
              <Link to="/profile" className="hover:text-foreground">My Profile</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Categories</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/games" search={{ category: "action" }} className="hover:text-foreground">Action</Link>
              <Link to="/games" search={{ category: "rpg" }} className="hover:text-foreground">RPG</Link>
              <Link to="/games" search={{ category: "strategy" }} className="hover:text-foreground">Strategy</Link>
              <Link to="/games" search={{ category: "racing" }} className="hover:text-foreground">Racing</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-3">Subscribe to our newsletter for the latest gaming news and deals.</p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" className="text-sm" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row">
          <p>&copy; 2025 GameVerse. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-foreground">Terms of Service</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
