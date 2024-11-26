import { Label } from '@radix-ui/react-label'
import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Label>
        Procedure
        <Input {...register('procedure')} />
      </Label>

      <Label>
        Price
        <Input type="number" step=".01" {...register('price')} />
      </Label>

      <Label className="inline">
        Date
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
        Notes
        <Textarea className="min-h-24" {...register('description')} />
      </Label>

      <Button type="submit">Submit</Button>
    </form>
  )
}
