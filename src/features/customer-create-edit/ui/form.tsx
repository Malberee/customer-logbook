import { Label } from '@radix-ui/react-label'
import type { FC } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button, Input } from '@shared/ui'

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

  const { t } = useTranslation()

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Label htmlFor="name">
        {t('Name')}
        <Input
          aria-invalid={!!errors.name}
          className={errors.name && 'mb-1 border-red-500'}
          id="name"
          {...register('name', { required: t('Name is required!') })}
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </Label>

      <Label htmlFor="tel">
        {t('Phone number')}
        <Input
          aria-invalid={!!errors.tel}
          className={errors.tel && 'mb-1 border-red-500'}
          type="tel"
          id="tel"
          {...register('tel', {
            validate: (value) =>
              !isNaN(Number(value)) || t("It's not a phone number!"),
          })}
        />
        {errors.tel && (
          <p className="text-sm text-red-500">{errors.tel.message}</p>
        )}
      </Label>

      <Button className="w-full">{t('Submit')}</Button>
    </form>
  )
}
