import { format } from 'date-fns'
import { enGB, uk } from 'date-fns/locale'
import { CalendarIcon } from 'lucide-react'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

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
  const {
    i18n: { language },
  } = useTranslation()

  const locale = language === 'uk' ? uk : enGB

  return (
    <Popover modal>
      <PopoverTrigger className="block" asChild>
        <Button
          variant="outline"
          className={cn(
            'flex w-[280px] justify-start text-left font-normal',
            !selected && 'text-muted-foreground',
          )}
          type="button"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selected ? (
            format(selected, 'PPP', { locale })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent side="top">
        <Calendar
          mode="single"
          selected={selected}
          locale={locale}
          onDayBlur={onBlur}
          onDayClick={onChange}
        />
      </PopoverContent>
    </Popover>
  )
}
