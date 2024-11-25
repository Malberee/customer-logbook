import { useParams } from '@tanstack/react-router'
import { observer } from 'mobx-react-lite'

import { customers } from '@entities/customer'

import { Header } from './header'
import { VisitList } from './visit-list'

export const CustomerDetails = observer(() => {
  const { id } = useParams({ strict: false })

  if (!id) {
    return null
  }

  const customer = customers.getCustomerById(id)

  return customer ? (
    <>
      <Header customer={customer} />

      <VisitList visits={customer.visits} customerId={id} />
    </>
  ) : null
})
