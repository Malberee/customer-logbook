import { useParams } from '@tanstack/react-router'
import { Phone, Plus, User } from 'lucide-react'

import { customers } from '@entities/customer'

import { Visit } from './visit'

export const CustomerDetails = () => {
  const { id } = useParams({ strict: false })

  const { name, tel, visits } = customers.getCustomerById(id!)!

  return (
    <div>
      <div className="mb-4 border-b border-accent pb-4">
        <h1 className="mb-2 flex items-center gap-2 text-4xl">
          <User size={32} />
          {name}
        </h1>
        <a
          type="tel"
          href={`tel:${tel}`}
          className="flex items-center gap-2 text-2xl text-neutral-500 hover:underline"
        >
          <Phone />
          {tel}
        </a>
      </div>

      <button className="mb-4 flex w-full items-center justify-center gap-2 rounded-md border border-dashed border-sky-500 bg-sky-500/20 p-4 text-sky-500 transition-opacity hover:opacity-80">
        <Plus />
        Add visit
      </button>
      <ul>
        {visits.map((visit) => (
          <Visit {...visit} />
        ))}
      </ul>
    </div>
  )
}
