import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { CustomerCreateEdit } from '@features/customer-create-edit'

import { customers } from '@entities/customer'

import { DashedButton } from '@shared/ui'

import { Customer } from './customer'

export const Customers = observer(() => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const data = customers.customers.toSorted((a, b) =>
    a.name.localeCompare(b.name),
  )

  return (
    <>
      <ul className="flex-1">
        {data.map((customer) => (
          <Customer key={customer.id} {...customer} />
        ))}
      </ul>

      <div className="fixed bottom-0 left-0 w-full p-4">
        <DashedButton onClick={() => setModalIsOpen(true)}>
          Add customer
        </DashedButton>
      </div>

      <CustomerCreateEdit
        onClose={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
      />
    </>
  )
})
