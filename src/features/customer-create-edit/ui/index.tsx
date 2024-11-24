import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'

import { customers } from '@entities/customer'

import { Modal } from '@shared/ui'

import { type CustomerForm, Form } from './form'

interface CustomerCreateEditProps {
  customerForEdit?: string
  isOpen: boolean
  onClose: () => void
}

export const CustomerCreateEdit: FC<CustomerCreateEditProps> = ({
  customerForEdit,
  isOpen,
  onClose,
}) => {
  const customer =
    (customerForEdit && customers.getCustomerById(customerForEdit)) || null

  const handleSubmit: SubmitHandler<CustomerForm> = (data) => {
    if (customer) {
      customers.updateCustomer({ ...data, id: customer.id })
    } else {
      customers.addCustomer(data)
    }
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Form
          onSubmit={handleSubmit}
          defaultValues={
            customer ? { name: customer.name, tel: customer.tel } : undefined
          }
        />
      </Modal>
    </>
  )
}
