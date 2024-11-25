import { Edit, Phone, User } from 'lucide-react'
import { type FC, useState } from 'react'

import { CustomerCreateEdit } from '@features/customer-create-edit'

import { type Customer } from '@entities/customer'

import { Button } from '@shared/ui'

export const Header: FC<{ customer: Customer }> = ({ customer }) => {
  const { name, tel, id } = customer

  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <div className="mb-4 border-b border-accent pb-4">
      <h1 className="mb-2 flex items-center gap-2 text-4xl">
        <User size={24} />
        {name}
      </h1>
      <div className="flex justify-between">
        <a
          type="tel"
          href={`tel:${tel}`}
          className="flex items-center gap-2 text-2xl text-neutral-500 hover:underline"
        >
          <Phone size={24} />
          {tel}
        </a>
        <Button
          onClick={() => setModalIsOpen(true)}
          variant="ghost"
          size="icon"
        >
          <Edit />
        </Button>
      </div>

      <CustomerCreateEdit
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        customerForEdit={id}
      />
    </div>
  )
}
