import { useParams } from '@tanstack/react-router'
import {
  type FC,
  type PropsWithChildren,
  createContext,
  useContext,
} from 'react'

import { type Customer, customers } from '@entities/customer'

const CustomerContext = createContext<Customer | null>(null)

export const CustomerProvider: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams({ strict: false })

  const customer = customers.getCustomerById(id!) || null

  return customer ? (
    <CustomerContext.Provider value={customer}>
      {children}
    </CustomerContext.Provider>
  ) : null
}

export const useCustomer = () => useContext(CustomerContext)!
