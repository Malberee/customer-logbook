import { Plus } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useCustomer } from '@pages/customer-details'

import { VisitCreateEdit } from '@features/visit-create-edit'

import { customers } from '@entities/customer'

import { Accordion, Button, DeleteAlert } from '@shared/ui'

import { Visit } from './visit'

export const VisitList = () => {
  const { visits, id } = useCustomer()

  const [currentVisit, setCurrentVisit] = useState('')
  const [modalType, setModalType] = useState<'dialog' | 'create-edit' | ''>('')

  const { t } = useTranslation()

  const data = visits
    .toSorted((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    .toReversed()

  const closeModal = () => {
    setCurrentVisit('')
    setModalType('')
  }

  return (
    <>
      <Button
        onClick={() => setModalType('create-edit')}
        className="mb-4 w-full"
      >
        <Plus />
        {t('Add visit')}
      </Button>

      <Accordion type="single" collapsible>
        {data.map((visit) => (
          <Visit
            key={visit.id}
            visit={visit}
            onEdit={(id) => {
              setCurrentVisit(id)
              setModalType('create-edit')
            }}
            onDelete={(id) => {
              setCurrentVisit(id)
              setModalType('dialog')
            }}
          />
        ))}
      </Accordion>

      <DeleteAlert
        show={modalType === 'dialog'}
        onClose={closeModal}
        onAction={() => {
          customers.deleteVisit(id, currentVisit)
          closeModal()
        }}
        title={t('Are you sure?')}
        description={t('Delete visit alert')}
      />

      <VisitCreateEdit
        customerId={id}
        visitForEdit={currentVisit}
        isOpen={modalType === 'create-edit'}
        onClose={closeModal}
      />
    </>
  )
}
