import { ArrowDownAz, CalendarArrowDown } from 'lucide-react'
import { observer } from 'mobx-react-lite'

import { Button } from '@shared/ui'

import { useToggleSortBy } from './model'

export const ToggleSortBy = observer(() => {
  const { sortBy, handleClick } = useToggleSortBy()

  const icons = {
    name: <ArrowDownAz />,
    date: <CalendarArrowDown />,
  }

  return (
    <Button onClick={handleClick} size="icon" variant="ghost">
      {icons[sortBy]}
    </Button>
  )
})
