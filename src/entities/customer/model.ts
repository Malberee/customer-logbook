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
  ]

  addCustomer(customer: Customer) {
    this.customers.push(customer)
  }

  getCustomerById(id: string) {
    return this.customers.find((customer) => customer.id === id)
  }
}

export const customers = new Customers()
