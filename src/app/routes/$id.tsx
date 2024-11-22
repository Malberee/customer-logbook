import { createFileRoute } from '@tanstack/react-router'

import { CustomerDetails } from '@pages/customer-details'

export const Route = createFileRoute('/$id')({
  component: CustomerDetails,
})
