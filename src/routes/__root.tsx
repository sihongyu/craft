import { HeadContent, Scripts, createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanStackDevtools } from "@tanstack/react-devtools"
import appCss from "../styles.css?url"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "GameVerse - Your Ultimate Gaming Platform" },
      { name: "description", content: "Discover and play the best games. Browse our collection of action, RPG, strategy, and more." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-6xl font-black text-muted-foreground/30">404</h1>
          <p className="text-xl mt-4">The page you are looking for does not exist.</p>
          <p className="text-muted-foreground mt-2">It might have been removed or the URL might be incorrect.</p>
          <a
            href="/"
            className="inline-flex items-center justify-center mt-6 rounded-md bg-primary text-primary-foreground h-10 px-6 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased flex flex-col">
        {children}
        <TanStackDevtools
          config={{ position: "bottom-right" }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}