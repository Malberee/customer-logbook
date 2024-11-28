import { useNavigate } from '@tanstack/react-router'
import { Edit, MoreVertical, Trash } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useCustomer } from '@pages/customer-details'

import { CustomerCreateEdit } from '@features/customer-create-edit'

import { customers } from '@entities/customer'

import {
  Button,
  DeleteAlert,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui'

export const Actions = () => {
  const { id } = useCustomer()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [showDialog, setShowDialog] = useState(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => setModalIsOpen(true)}
            className="cursor-pointer"
          >
            <Edit />
            {t('Edit')}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => setShowDialog(true)}
            className="cursor-pointer text-red-500 hover:bg-red-500/15 hover:text-red-500 focus:bg-red-500/15 focus:text-red-500"
          >
            <Trash />
            {t('Delete')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteAlert
        title={t('Are you sure?')}
        description={t('Delete customer alert')}
        show={showDialog}
        onClose={() => setShowDialog(false)}
        onAction={() => {
          customers.deleteCustomer(id)
          navigate({ to: '/' })
        }}
      />

      <CustomerCreateEdit
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        customerForEdit={id}
      />
    </>
  )
}
