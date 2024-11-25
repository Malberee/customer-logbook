import { type FC } from 'react'

import { Modal } from '@shared/ui'

import { useForm } from '../model'
import { Form } from './form'

interface VisitCreateEditProps {
  visitForEdit?: string
  customerId: string
  isOpen: boolean
  onClose: () => void
}

export const VisitCreateEdit: FC<VisitCreateEditProps> = ({
  visitForEdit,
  customerId,
  isOpen,
  onClose,
}) => {
  const { handleSubmit, defaultValues } = useForm(
    onClose,
    customerId,
    visitForEdit,
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit} defaultValues={defaultValues} />
    </Modal>
  )
}
