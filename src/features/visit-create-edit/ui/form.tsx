import { Label } from '@radix-ui/react-label'
import { CreditCard, HandCoins } from 'lucide-react'
import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { customers } from '@entities/customer'

import {
  Button,
  Input,
  Tabs,
  TabsList,
  TabsTrigger,
  Textarea,
} from '@shared/ui'

import type { VisitForm } from '../model'
import { DatePicker } from './date-picker'

interface FormProps {
  defaultValues?: VisitForm
  onSubmit: (data: VisitForm) => void
}

export const Form: FC<FormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, control } = useForm<VisitForm>({
    defaultValues: defaultValues || {
      date: new Date(),
      number: customers.lastVisitNumber,
      payment: 'cash',
    },
  })

  const { t } = useTranslation()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Label>
        {t('Procedure')}
        <Input {...register('procedure')} />
      </Label>

      <Label>
        {t('Price')}
        <Input type="number" step=".01" {...register('price')} />
      </Label>

      <Label>
        {t('Payment')}
        <Controller
          control={control}
          name="payment"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <Tabs onValueChange={onChange} value={value}>
              <TabsList className="w-full">
                <TabsTrigger value="cash" className="flex-1">
                  <HandCoins className="mr-1" />
                  {t('Cash')}
                </TabsTrigger>
                <TabsTrigger value="card" className="flex-1">
                  <CreditCard className="mr-1" />
                  {t('Card')}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}
        />
      </Label>

      <Label className="inline">
        {t('Date')}
        <Controller
          control={control}
          name="date"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker onChange={onChange} onBlur={onBlur} selected={value} />
          )}
        />
      </Label>

      <Label>
        {t('Visit number')}
        <Input type="number" {...register('number')} />
      </Label>

      <Label>
        {t('Notes')}
        <Textarea className="min-h-24" {...register('description')} />
      </Label>

      <Button type="submit">{t('Submit')}</Button>
    </form>
  )
}
