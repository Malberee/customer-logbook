import { useParams } from '@tanstack/react-router'
import { Edit, Phone, Plus, User } from 'lucide-react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import { CustomerCreateEdit } from '@features/customer-create-edit'

import { customers } from '@entities/customer'

import { Button, DashedButton } from '@shared/ui'

import { Visit } from './visit'

export const CustomerDetails = observer(() => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { id } = useParams({ strict: false })

  const { name, tel, visits } = customers.getCustomerById(id!)!

  return (
    <div>
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
      </div>

      <CustomerCreateEdit
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        customerForEdit={id}
      />

      <DashedButton className="mb-4">
        <Plus className="mr-2" /> Add visit
      </DashedButton>

      <ul>
        {visits.map((visit) => (
          <Visit key={visit.id} {...visit} />
        ))}
      </ul>
    </div>
  )
})
