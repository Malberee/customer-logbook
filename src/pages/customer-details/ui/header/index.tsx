import { Phone, User } from 'lucide-react'
import { type FC } from 'react'

import { type Customer } from '@entities/customer'

import { Actions } from './actions'

export const Header: FC<{ customer: Customer }> = ({ customer }) => {
  const { name, tel, id } = customer

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
        <Actions customerId={id} />
      </div>
    </div>
  )
}
