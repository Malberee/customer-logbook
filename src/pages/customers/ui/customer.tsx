import { Link } from '@tanstack/react-router'
import { type FC } from 'react'

import { type Customer as CustomerType } from '@entities/customer'

export const Customer: FC<CustomerType> = ({ name, tel, id }) => {
  return (
    <li>
      <Link
        to={id}
        className="-mx-4 flex items-center justify-between rounded-md p-4 hover:bg-accent"
      >
        <div>
          <p className="text-lg">{name}</p>
          <p className="text-neutral-500">{tel}</p>
        </div>
        <p>Last visit: today</p>
      </Link>
    </li>
  )
}
