import { Link } from '@tanstack/react-router'
import { format } from 'date-fns'
import { type FC } from 'react'

import { type Customer as CustomerType } from '@entities/customer'

export const Customer: FC<CustomerType> = ({ name, tel, visits, id }) => {
  const lastVisitDate = visits.length
    ? visits.toSorted(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      )[0].date
    : null

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
        {lastVisitDate ? (
          <p>{format(lastVisitDate, 'dd.MM.yyyy')}</p>
        ) : null}
      </Link>
    </li>
  )
}
