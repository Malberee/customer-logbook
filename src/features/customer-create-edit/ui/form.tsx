import { Label } from '@radix-ui/react-label'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from '@shared/ui'

export type CustomerForm = {
  name: string
  tel: string
}

interface FormProps {
  defaultValues?: CustomerForm
  onSubmit: (data: CustomerForm) => void
}

export const Form: FC<FormProps> = ({ defaultValues, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerForm>({ defaultValues })

  return (
    <Card>
      <CardHeader className="relative">
        <CardTitle>Add customer</CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              aria-invalid={!!errors.name}
              className={errors.name && 'mb-1 border-red-500'}
              id="name"
              {...register('name', { required: 'Name is required!' })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="tel">Phone number</Label>
            <Input
              aria-invalid={!!errors.tel}
              className={errors.tel && 'mb-1 border-red-500'}
              type="tel"
              id="tel"
              {...register('tel', {
                validate: (value) =>
                  !isNaN(Number(value)) || "It's not a phone number!",
              })}
            />
            {errors.tel && (
              <p className="text-sm text-red-500">{errors.tel.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Submit</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
