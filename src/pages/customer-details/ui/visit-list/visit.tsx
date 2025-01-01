import { format } from 'date-fns'
import { CreditCard, HandCoins } from 'lucide-react'
import { type FC } from 'react'

import type { Visit as VisitType } from '@entities/customer'

import { formatCurrency } from '@shared/lib'
import { AccordionContent, AccordionItem, AccordionTrigger } from '@shared/ui'

import { Actions } from './actions'

export interface VisitProps {
  visit: VisitType
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export const Visit: FC<VisitProps> = ({ visit, onEdit, onDelete }) => {
  const { date, procedure, description, price, number, payment, id } = visit

  const paymentIcons = {
    cash: <HandCoins size={18} />,
    card: <CreditCard size={18} />,
  }

  return (
    <>
      <AccordionItem className="relative" value={id}>
        <AccordionTrigger className="px-2 hover:bg-accent hover:no-underline">
          <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-emerald-500">
            {format(date, 'dd.MM.yyyy')}
          </span>

          {price ? (
            <p className="ml-auto mr-2 flex flex-row items-center gap-1">
              {payment ? paymentIcons[payment] : null}
              {formatCurrency(price)}
            </p>
          ) : null}
        </AccordionTrigger>

        <AccordionContent className="px-4">
          <div className="mb-2 flex items-center justify-between">
            {procedure ? <h4 className="text-xl">{procedure}</h4> : null}

            {number ? (
              <p className="my-1 rounded-full bg-primary px-1 font-medium text-primary-foreground">
                {number}
              </p>
            ) : null}
          </div>

          {description ? <p className="mb-4">{description}</p> : null}

          <Actions onEdit={() => onEdit(id)} onDelete={() => onDelete(id)} />
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
