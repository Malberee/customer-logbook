import type { ButtonHTMLAttributes, FC } from 'react'

import { cn } from '@shared/lib'

export const DashedButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        'flex w-full items-center justify-center rounded-md border border-dashed border-sky-500 bg-sky-500/20 p-4 font-medium text-sky-500 backdrop-blur-md transition-transform active:scale-[0.98]',
        className,
      )}
    >
      {children}
    </button>
  )
}
