import dayjs from 'dayjs'
import type { FC } from 'react'

import type { Visit as VisitType } from '@entities/customer'

export const Visit: FC<VisitType> = ({ date, procedure, price }) => {
  return (
    <li>
      <a className="group relative flex cursor-pointer items-center gap-2 rounded-md px-2 py-4 transition-colors hover:bg-accent focus:bg-accent">
        <p>
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-500">
            {dayjs(date).format('DD.MM.YYYY')}
          </span>
        </p>
        <p>{procedure}</p>

        <div className="h-px flex-1 bg-accent transition-colors group-hover:bg-background" />

        <p>{price}</p>
      </a>
    </li>
  )
}
