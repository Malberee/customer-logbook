import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import React, { Suspense } from 'react'

import { Header } from '@app/layouts'

import { LanguageProvider } from '@features/toggle-language'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        })),
      )

export const Route = createRootRoute({
  component: () => (
    <LanguageProvider>
      <Header />
      <div className="container">
        <Outlet />
      </div>

      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <ScrollRestoration />
    </LanguageProvider>
  ),
})
