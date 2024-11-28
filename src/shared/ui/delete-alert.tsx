import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './alert-dialog'
import { Button } from './button'

interface DeleteAlertProps {
  show: boolean
  title: string
  description: string
  onClose: () => void
  onAction: () => void
}

export const DeleteAlert: FC<DeleteAlertProps> = ({
  show,
  title,
  description,
  onClose,
  onAction,
}) => {
  const { t } = useTranslation()

  return (
    <AlertDialog open={show}>
      <AlertDialogContent onEscapeKeyDown={onClose}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>{t('Cancel')}</AlertDialogCancel>
          <AlertDialogAction asChild>
            <>
              <Button onClick={onAction} variant="destructive">
                {t('Delete')}
              </Button>
            </>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
