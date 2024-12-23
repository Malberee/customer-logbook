import { Phone, User } from 'lucide-react'

import { useCustomer } from '@pages/customer-details'

import { Actions } from './actions'

export const Header = () => {
  const { name, tel } = useCustomer()

  return (
    <div className="mb-4 border-b border-accent pb-4">
      <div className="flex items-center justify-between">
        <h1 className="mb-2 flex items-center gap-2 text-4xl">
          <User size={24} />
          {name}
        </h1>
        <Actions />
      </div>
      {tel ? (
        <a
          type="tel"
          href={`tel:${tel}`}
          className="flex items-center gap-2 text-2xl text-neutral-500 hover:underline"
        >
          <Phone size={24} />
          {tel}
        </a>
      ) : null}
    </div>
  )
}
