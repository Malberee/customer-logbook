import type { FC, ReactNode } from 'react'

import { cn } from '@shared/lib'

interface DashedButtonProps {
  children?: ReactNode
  className?: string
}

export const DashedButton: FC<DashedButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button
      className={cn(
        'flex w-full items-center justify-center rounded-md border border-dashed border-sky-500 bg-sky-500/20 p-4 font-medium text-sky-500 backdrop-blur-md transition-transform active:scale-[0.98]',
        className,
      )}
    >
      {children}
    </button>
  )
}
