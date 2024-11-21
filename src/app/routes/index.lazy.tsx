import { createLazyFileRoute } from '@tanstack/react-router'

import { Customers } from '@pages/customers'

export const Route = createLazyFileRoute('/')({
  component: Customers,
})
