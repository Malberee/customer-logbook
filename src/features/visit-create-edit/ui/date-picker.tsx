import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { type FC } from 'react'

import { cn } from '@shared/lib'
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@shared/ui'

interface DatePickerProps {
  onChange?: (date: Date) => void
  onBlur?: () => void
  selected?: Date
}

export const DatePicker: FC<DatePickerProps> = ({
  selected,
  onChange,
  onBlur,
}) => {
  return (
    <Popover>
      <PopoverTrigger className="block" asChild>
        <Button
          variant="outline"
          className={cn(
            'w-[280px] justify-start text-left font-normal flex',
            !selected && 'text-muted-foreground',
          )}
          type="button"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? format(selected, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent side="top">
        <Calendar
          mode="single"
          selected={selected}
          onDayBlur={onBlur}
          onDayClick={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
