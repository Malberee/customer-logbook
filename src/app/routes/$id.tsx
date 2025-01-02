import { createFileRoute, notFound } from '@tanstack/react-router'

import { CustomerDetails } from '@pages/customer-details'

import { customers } from '@entities/customer'

export const Route = createFileRoute('/$id')({
  loader: ({ params: { id } }) => {
    const customer = customers.getCustomerById(id)

    if (!customer) {
      throw notFound()
    }

    return { id }
  },
  component: CustomerDetails,
})
