import { Label } from '@radix-ui/react-label'
import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Input, Textarea } from '@shared/ui'

import type { VisitForm } from '../model'
import { DatePicker } from './date-picker'

interface FormProps {
  defaultValues?: VisitForm
  onSubmit: (data: VisitForm) => void
}

export const Form: FC<FormProps> = ({ onSubmit, defaultValues }) => {
  const { register, handleSubmit, control } = useForm<VisitForm>({
    defaultValues: defaultValues || { date: new Date() },
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
        {t('Notes')}
        <Textarea className="min-h-24" {...register('description')} />
      </Label>

      <Button type="submit">{t('Submit')}</Button>
    </form>
  )
}
