import { useParams } from '@tanstack/react-router'
import { Phone, Plus, User } from 'lucide-react'

import { customers } from '@entities/customer'

import { DashedButton } from '@shared/ui'

import { Visit } from './visit'

export const CustomerDetails = () => {
  const { id } = useParams({ strict: false })

  const { name, tel, visits } = customers.getCustomerById(id!)!

  return (
    <div>
      <div className="mb-4 border-b border-accent pb-4">
        <h1 className="mb-2 flex items-center gap-2 text-4xl">
          <User size={24} />
          {name}
        </h1>
        <a
          type="tel"
          href={`tel:${tel}`}
          className="flex items-center gap-2 text-2xl text-neutral-500 hover:underline"
        >
          <Phone size={24} />
          {tel}
        </a>
      </div>

      <DashedButton className="mb-4">
        <Plus className="mr-2" /> Add visit
      </DashedButton>
      
      <ul>
        {visits.map((visit) => (
          <Visit {...visit} />
        ))}
      </ul>
    </div>
  )
}
