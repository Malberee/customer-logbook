import { CircleX, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebounce } from 'use-debounce'

import { customers } from '@entities/customer'

import { Input } from '@shared/ui'

export const SearchBar = () => {
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounce(value, 300)

  const { t } = useTranslation()

  useEffect(() => {
    customers.setSearchFilter(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="relative ml-auto max-w-[300px] flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <Input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="pl-12 pr-10"
        placeholder={t('Search')}
      />
      {value ? (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2"
          onClick={() => setValue('')}
        >
          <CircleX className="size-4 text-muted-foreground transition-opacity hover:cursor-pointer hover:opacity-80" />
        </button>
      ) : null}
    </div>
  )
}
