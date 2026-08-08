import { Link } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Gamepad2, Search, Menu, X, Trophy, Newspaper, User, ChevronDown } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const navLinks = [
    { to: "/games", label: "Games" },
    { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { to: "/news", label: "News", icon: Newspaper },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <Gamepad2 className="size-6 text-primary" />
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">GameVerse</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const IconComp = link.icon
              return (
                <Link key={link.to} to={link.to} className="flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" activeProps={{ className: "bg-muted text-foreground" }}>
                  {IconComp && <IconComp className="size-4" />}
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          {searchOpen ? (
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search games..." className="w-48 pl-10 text-sm lg:w-64" autoFocus onBlur={() => setSearchOpen(false)} />
            </div>
          ) : (
            <Button variant="ghost" size="icon-sm" className="hidden md:inline-flex" onClick={() => setSearchOpen(true)}>
              <Search className="size-4" />
            </Button>
          )}
          <Link to="/profile">
            <Button variant="ghost" size="icon-sm">
              <User className="size-4" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon-sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-b bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
            <div className="relative mb-2">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search games..." className="w-full pl-10" />
            </div>
            {navLinks.map((link) => {
              const IconComp = link.icon
              return (
                <Link key={link.to} to={link.to} className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)} activeProps={{ className: "bg-muted text-foreground" }}>
                  {IconComp && <IconComp className="size-4" />}
                  {link.label}
                </Link>
              )
            })}
            <Separator className="my-1" />
            <Link to="/profile" className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>
              <User className="size-4" /> Profile
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
