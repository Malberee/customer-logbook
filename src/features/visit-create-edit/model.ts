import omit from 'lodash.omit'
import { SubmitHandler } from 'react-hook-form'

import { customers } from '@entities/customer'

export type VisitForm = {
  date: Date
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
    if (visitId) {
      customers.updateVisit(customerId, { id: visitId, ...data })
    } else {
      customers.addVisit(customerId, data)
    }

    onClose()
  }

  const defaultValues = visitId
    ? omit(customers.getVisitById(customerId, visitId), 'id')
    : undefined

  return { defaultValues, handleSubmit }
}
