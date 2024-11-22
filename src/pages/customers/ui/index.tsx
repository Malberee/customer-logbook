import { observer } from 'mobx-react-lite'

import { customers } from '@entities/customer'

import { Customer } from './customer'

export const Customers = observer(() => {
  const data = customers.customers

  return (
    <ul>
      {data.map((customer) => (
        <Customer key={customer.id} {...customer} />
      ))}
    </ul>
  )
})
