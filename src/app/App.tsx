import { RouterProvider, createRouter } from '@tanstack/react-router'

import { NotFound } from '@pages/not-found'

import { routeTree } from '../routeTree.gen'
import './i18n'
import './index.css'

const router = createRouter({
  routeTree,
  basepath: '/customer-logbook/',
  defaultNotFoundComponent: NotFound,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const App = () => {
  return (
    <main className="h-screen">
      <RouterProvider router={router} />
    </main>
  )
}

export default App
