import { Plus } from 'lucide-react'
import { type FC, useState } from 'react'

import { VisitCreateEdit } from '@features/visit-create-edit'

import { Customer } from '@entities/customer'

import { Accordion, Button } from '@shared/ui'

import { Visit } from './visit'

interface VisitListProps {
  customerId: string
  visits: Customer['visits']
}

export const VisitList: FC<VisitListProps> = ({ visits, customerId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [visitForEdit, setVisitForEdit] = useState<string | undefined>()

  const toggleModal = () => setModalIsOpen((prevState) => !prevState)

  const data = visits
    .toSorted((a, b) => {
      return a.date.getTime() - b.date.getTime()
    })
    .toReversed()

  return (
    <>
      <Button onClick={toggleModal} className="mb-4 w-full">
        <Plus />
        Add visit
      </Button>

      <Accordion type="single" collapsible>
        {data.map((visit) => (
          <Visit
            key={visit.id}
            visit={visit}
            onEdit={(id) => {
              setVisitForEdit(id)
              toggleModal()
            }}
          />
        ))}
      </Accordion>

      <VisitCreateEdit
        customerId={customerId}
        visitForEdit={visitForEdit}
        isOpen={modalIsOpen}
        onClose={() => {
          setVisitForEdit(undefined)
          toggleModal()
        }}
      />
    </>
  )
}
