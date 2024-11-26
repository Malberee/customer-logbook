import { useNavigate } from '@tanstack/react-router'
import { Edit, MoreVertical, Trash } from 'lucide-react'
import { useState } from 'react'

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

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [showDialog, setShowDialog] = useState(false)
  const navigate = useNavigate()

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
            Edit
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => setShowDialog(true)}
            className="cursor-pointer text-red-500 hover:bg-red-500/15 hover:text-red-500 focus:bg-red-500/15 focus:text-red-500"
          >
            <Trash />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DeleteAlert
        title="Are you sure?"
        description="This action cannot be undone. Doing so will permanently delete this
            customer."
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
