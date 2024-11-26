import { format } from 'date-fns'
import { type FC } from 'react'

import type { Visit as VisitType } from '@entities/customer'

import { AccordionContent, AccordionItem, AccordionTrigger } from '@shared/ui'

import { Actions } from './actions'

export interface VisitProps {
  visit: VisitType
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export const Visit: FC<VisitProps> = ({ visit, onEdit, onDelete }) => {
  const { date, procedure, description, price, id } = visit

  const numberFormatter = Intl.NumberFormat('ua-UK', {
    style: 'currency',
    currency: 'UAH',
  })

  return (
    <>
      <AccordionItem className="relative" value={id}>
        <AccordionTrigger className="px-2 hover:bg-accent hover:no-underline">
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-500">
            {format(date, 'dd.MM.yyyy')}
          </span>

          {price ? (
            <span className="ml-auto mr-2">
              {numberFormatter.format(price)}
            </span>
          ) : null}
        </AccordionTrigger>

        <AccordionContent className="px-4">
          <h4 className="mb-2 text-xl">{procedure}</h4>

          {description ? <p className="mb-4">{description}</p> : null}

          <Actions onEdit={() => onEdit(id)} onDelete={() => onDelete(id)} />
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
