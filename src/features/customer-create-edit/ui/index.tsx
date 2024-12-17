import { useNavigate } from '@tanstack/react-router'
import { nanoid } from 'nanoid'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { customers } from '@entities/customer'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@shared/ui'

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
  const { t } = useTranslation()
  const navigate = useNavigate()

  const customer =
    (customerForEdit && customers.getCustomerById(customerForEdit)) || null

  const handleSubmit: SubmitHandler<CustomerForm> = (data) => {
    const tel = data.tel.trim()
    const name = data.name.trim()

    if (customer) {
      customers.updateCustomer({ name, tel, id: customer.id })
    } else {
      const id = nanoid()

      customers.addCustomer({ name, tel, id })
      navigate({ to: `/${id}` })
    }

    onClose?.()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="box-content max-w-[280px]"
      >
        <DialogHeader>
          <DialogTitle>{t('Customer')}</DialogTitle>
          <DialogDescription className="hidden">
            {t('Customer')}
          </DialogDescription>
        </DialogHeader>
        <Form
          onSubmit={handleSubmit}
          defaultValues={
            customer ? { name: customer.name, tel: customer.tel } : undefined
          }
        />
      </DialogContent>
    </Dialog>
  )
}
