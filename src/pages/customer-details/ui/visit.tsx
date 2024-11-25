import { format } from 'date-fns'
import { Edit } from 'lucide-react'
import { type FC } from 'react'

import type { Visit as VisitType } from '@entities/customer'

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from '@shared/ui'

interface VisitProps {
  onEdit: (id: string) => void
  visit: VisitType
}

export const Visit: FC<VisitProps> = ({ visit, onEdit }) => {
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

        <AccordionContent>
          <div className="mb-2 flex items-center justify-between">
            <h4 className="text-xl">{procedure}</h4>
            <Button variant="ghost" size="icon" onClick={() => onEdit(id)}>
              <Edit className="!rotate-0" />
            </Button>
          </div>
          {description ? <p className="mb-4">{description}</p> : null}
        </AccordionContent>
      </AccordionItem>
    </>
  )
}
