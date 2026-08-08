import type { ReactNode } from "react"
import { DefaultCatchBoundary } from "@tanstack/react-router"
import {
  Link,
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router"
import appCss from "../styles.css?url"
import { Button } from "@/components/ui/button"

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  errorComponent: DefaultCatchBoundary,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <HeadContent />
      </head>
      <body>
        <div className="felx">
          <Button variant={"outline"}>Click me</Button>
        </div>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
