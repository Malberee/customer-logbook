import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@shared/ui'

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

  const { t } = useTranslation()

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="box-content max-h-screen max-w-[280px] overflow-auto"
      >
        <DialogHeader>
          <DialogTitle>{t('Visit')}</DialogTitle>
          <DialogDescription className="hidden">{t('Visit')}</DialogDescription>
        </DialogHeader>
        <Form onSubmit={handleSubmit} defaultValues={defaultValues} />
      </DialogContent>
    </Dialog>
  )
}
