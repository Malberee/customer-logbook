import { Edit, Trash } from 'lucide-react'
import type { FC } from 'react'

import { Button } from '@shared/ui'

interface ActionsProps {
  onEdit: () => void
  onDelete: () => void
}

export const Actions: FC<ActionsProps> = ({ onEdit, onDelete }) => {
  return (
    <>
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="icon" onClick={onEdit}>
          <Edit className="!rotate-0" />
        </Button>
        <Button
          className="bg-red-500/15 text-red-500 hover:bg-red-500/25"
          size="icon"
          onClick={onDelete}
        >
          <Trash />
        </Button>
      </div>
    </>
  )
}
