import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from '../routeTree.gen'
import './index.css'

const router = createRouter({
  routeTree,
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
