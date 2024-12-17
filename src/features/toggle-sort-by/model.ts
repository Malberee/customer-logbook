import { customers } from '@entities/customer'

export const useToggleSortBy = () => {
  const sortBy = customers.sortBy

  const handleClick = () => {
    if (sortBy === 'name') {
      customers.setSortBy('date')
    } else {
      customers.setSortBy('name')
    }
  }

  return { sortBy, handleClick }
}
