import { createFileRoute } from '@tanstack/react-router'

import { Stats } from '@pages/stats'

export const Route = createFileRoute('/stats')({
  component: Stats,
})
