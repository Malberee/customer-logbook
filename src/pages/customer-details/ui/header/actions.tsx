import { Edit, MoreVertical, Trash } from 'lucide-react'
import { type FC, useState } from 'react'

import { CustomerCreateEdit } from '@features/customer-create-edit'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@shared/ui'

import { Alert } from './alert'

interface ActionsProps {
  customerId: string
}

export const Actions: FC<ActionsProps> = ({ customerId }) => {
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

      <Alert
        customerId={customerId}
        show={showDialog}
        onClose={() => setShowDialog(false)}
      />

      <CustomerCreateEdit
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        customerForEdit={customerId}
      />
    </>
  )
}
