import { type FC } from 'react'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@shared/ui'

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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="box-content max-w-[280px] max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>Visit</DialogTitle>
        </DialogHeader>
        <Form onSubmit={handleSubmit} defaultValues={defaultValues} />
      </DialogContent>
    </Dialog>
  )
}
