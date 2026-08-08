import { Link } from "@tanstack/react-router"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gamepad2 } from "lucide-react"

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  )
}

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
              <Button variant="ghost" size="icon" asChild><a href="#"><GithubIcon className="size-4" /></a></Button>
              <Button variant="ghost" size="icon" asChild><a href="#"><TwitterIcon className="size-4" /></a></Button>
              <Button variant="ghost" size="icon" asChild><a href="#"><YoutubeIcon className="size-4" /></a></Button>
              <Button variant="ghost" size="icon" asChild><a href="#"><TwitchIcon className="size-4" /></a></Button>
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
