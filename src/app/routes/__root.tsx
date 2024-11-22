import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

import { Header } from '@app/layouts'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
})
