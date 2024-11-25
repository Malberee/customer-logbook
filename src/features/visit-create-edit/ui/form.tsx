import { Label } from '@radix-ui/react-label'
import { type FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
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
    defaultValues: defaultValues || { date: new Date() },
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visit</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <Label>
              Procedure
              <Input {...register('procedure')} />
            </Label>
          </div>

          <div>
            <Label>
              Price
              <Input type="number" step=".01" {...register('price')} />
            </Label>
          </div>

          <div>
            <Label>
              Date
              <Controller
                control={control}
                name="date"
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    onChange={onChange}
                    onBlur={onBlur}
                    selected={value}
                  />
                )}
              />
            </Label>
          </div>

          <div>
            <Label>
              Notes
              <Textarea {...register('description')} />
            </Label>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  )
}
