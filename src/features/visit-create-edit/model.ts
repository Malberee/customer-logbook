import omit from 'lodash.omit'
import { SubmitHandler } from 'react-hook-form'

import { customers } from '@entities/customer'

export type VisitForm = {
  date: Date
  number: number
  procedure?: string
  price?: number
  description?: string
}

export const useForm = (
  onClose: () => void,
  customerId: string,
  visitId?: string,
) => {
  const handleSubmit: SubmitHandler<VisitForm> = (data) => {
    const values = {
      ...data,
      price: data.price ? Number(data.price) : undefined,
      number: Number(data.number),
    }

    if (visitId) {
      customers.updateVisit(customerId, {
        id: visitId,
        ...values,
      })
    } else {
      customers.addVisit(customerId, values)
    }

    onClose()
  }

  const defaultValues = visitId
    ? omit(customers.getVisitById(customerId, visitId), 'id')
    : undefined

  return { defaultValues, handleSubmit }
}
