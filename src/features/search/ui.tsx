import { Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { customers } from '@entities/customer'

import { Input } from '@shared/ui'

export const SearchBar = () => {
  const [value, setValue] = useState('')
  const [debouncedValue] = useDebounce(value, 300)

  useEffect(() => {
    customers.setSearchFilter(debouncedValue)
  }, [debouncedValue])

  return (
    <div className="relative ml-auto max-w-[300px] flex-1">
      <Input
        onChange={(e) => setValue(e.target.value)}
        className="pr-12"
        placeholder="Search"
      />
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  )
}
