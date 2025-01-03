import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CustomerCreateEdit } from '@features/customer-create-edit'

import { customers } from '@entities/customer'

import { DashedButton } from '@shared/ui'

import { Customer } from './customer'

export const Customers = observer(() => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { t } = useTranslation()

  const getData = () => {
    if (customers.sortBy === 'name') {
      return customers.filteredCustomers.toSorted((a, b) =>
        a.name.localeCompare(b.name),
      )
    }

    return customers.filteredCustomers.toSorted(
      (a, b) =>
        Math.max(...a.visits.map((visit) => new Date(visit.date).getTime())) -
        Math.max(...b.visits.map((visit) => new Date(visit.date).getTime())),
    )
  }

  return (
    <div className="flex h-full flex-col justify-between">
      <ul className="flex-1">
        {getData().map((customer) => (
          <Customer key={customer.id} {...customer} />
        ))}
      </ul>

      <div className="sticky bottom-0 left-0 w-full p-4">
        <DashedButton onClick={() => setModalIsOpen(true)}>
          {t('Add customer')}
        </DashedButton>
      </div>

      <CustomerCreateEdit
        onClose={() => setModalIsOpen(false)}
        isOpen={modalIsOpen}
      />
    </div>
  )
})
