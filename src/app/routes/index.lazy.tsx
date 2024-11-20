import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <p>Welcome Home!</p>
    </div>
  )
}
