import { Outlet, createRootRoute } from "@tanstack/react-router"
import { Meta, Scripts } from "@tanstack/react-start"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import appCss from "@/styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GameVerse - Your Ultimate Gaming Destination" },
      { name: "description", content: "Discover, play, and compete in the best games. GameVerse brings you the latest gaming news, reviews, and a vibrant community." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Navbar />
        <main className="min-h-[calc(100vh-64px)]">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
