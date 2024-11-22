import { observer } from 'mobx-react-lite'

import { customers } from '@entities/customer'

import { DashedButton } from '@shared/ui'

import { Customer } from './customer'

export const Customers = observer(() => {
  const data = customers.customers

  return (
    <>
      <ul className="flex-1">
        {data.map((customer) => (
          <Customer key={customer.id} {...customer} />
        ))}
      </ul>

      <div className="fixed bottom-0 left-0 w-full p-4">
        <DashedButton>Add customer</DashedButton>
      </div>
    </>
  )
})
