import { useNavigate } from '@tanstack/react-router'
import { type FC } from 'react'

import { customers } from '@entities/customer'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
} from '@shared/ui'

interface AlertProps {
  show: boolean
  customerId: string
  onClose: () => void
}

export const Alert: FC<AlertProps> = ({ show, customerId, onClose }) => {
  const navigate = useNavigate()

  return (
    <AlertDialog open={show}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. Doing so will permanently delete this
            customer.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <>
              <Button
                onClick={() => {
                  customers.deleteCustomer(customerId)
                  navigate({ to: '/' })
                }}
                variant="destructive"
              >
                Delete
              </Button>
            </>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
