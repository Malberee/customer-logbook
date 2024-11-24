import { nanoid } from 'nanoid'

export type Visit = {
  id: string
  date: Date
  procedure?: string
  description?: string
  price?: number
}

export type Customer = {
  id: string
  name: string
  tel: string
  visits: Visit[]
}

class Customers {
  customers: Customer[] = [
    {
      name: 'Elena',
      tel: '0675375756',
      id: '1',
      visits: [
        { id: '1', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '2', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '3', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '4', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '5', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '6', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '7', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '8', date: new Date(), procedure: 'Name', price: 123.6 },
        { id: '9', date: new Date(), procedure: 'Name', price: 123.6 },
      ],
    },
    { name: 'NeElena', tel: '0675375756', id: '2', visits: [] },
    { name: 'Vadim', tel: '0675375756', id: '3', visits: [] },
    { name: 'Kto-to', tel: '0675375756', id: '4', visits: [] },
    { name: 'Chirik', tel: '0675375756', id: '5', visits: [] },
    { name: 'NeChirik', tel: '0675375756', id: '6', visits: [] },
    { name: 'Vadim', tel: '0675375756', id: '7', visits: [] },
    { name: 'Kto-to', tel: '0675375756', id: '8', visits: [] },
    { name: 'Chirik', tel: '0675375756', id: '9', visits: [] },
    { name: 'NeChirik', tel: '0675375756', id: '10', visits: [] },
  ]

  addCustomer({ name, tel }: Pick<Customer, 'name' | 'tel'>) {
    this.customers.push({ name, tel, id: nanoid(), visits: [] })
  }

  updateCustomer(customer: Partial<Customer>) {
    this.customers = this.customers.map((c) =>
      c.id === customer.id ? { ...c, ...customer } : c,
    )
  }

  getCustomerById(id: string) {
    return this.customers.find((customer) => customer.id === id)
  }
}

export const customers = new Customers()
