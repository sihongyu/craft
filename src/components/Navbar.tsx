import { Link, useLocation } from "@tanstack/react-router"
import { useState } from "react"
import {
  Search,
  Gamepad2,
  Menu,
  X,
  Trophy,
  User,
  Flame,
  Home,
  Newspaper,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/games", label: "Games", icon: Gamepad2 },
  { to: "/tournaments", label: "Tournaments", icon: Trophy },
  { to: "/leaderboard", label: "Leaderboard", icon: Flame },
  { to: "/news", label: "News", icon: Newspaper },
  { to: "/community", label: "Community", icon: MessageSquare },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/"
    return currentPath.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Gamepad2 className="size-5" />
          </div>
          <span className="hidden sm:inline-block">GameVerse</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="hidden lg:flex relative w-56">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              placeholder="Search games..."
              className="pl-8 h-9"
            />
          </div>

          {/* Trending Badge */}
          <div className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground">
            <Flame className="size-4 text-orange-500" />
            <span>42K Online</span>
          </div>

          <Link to="/profile">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="size-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon
            const active = isActive(link.to)
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            )
          })}
          <div className="relative mt-2">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search games..." className="pl-8 h-9" />
          </div>
        </div>
      )}
    </header>
  )
}
