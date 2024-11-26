import { makeAutoObservable } from 'mobx'
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
        {
          id: '1',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '2',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '3',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '4',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '5',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '6',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '7',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '8',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: '9',
          date: new Date(),
          procedure: 'Name',
          price: 123.6,
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
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
    // generate 100 times
    ...Array.from({ length: 100 }).map((_, i) => ({
      name: `Customer ${i}`,
      tel: '0675375756',
      id: `${i + 11}`,
      visits: [],
    })),
  ]
  searchFilter: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setSearchFilter(value: string) {
    this.searchFilter = value
  }

  addCustomer({ name, tel }: Pick<Customer, 'name' | 'tel'>) {
    this.customers.push({ name, tel, id: nanoid(), visits: [] })
  }

  get filteredCustomers() {
    if (!this.searchFilter) {
      return this.customers
    }

    return this.customers.filter((customer) =>
      customer.name.toLowerCase().startsWith(this.searchFilter.toLowerCase()),
    )
  }

  updateCustomer(customer: Partial<Customer>) {
    this.customers = this.customers.map((c) =>
      c.id === customer.id ? { ...c, ...customer } : c,
    )
  }

  deleteCustomer(customerId: string) {
    this.customers = this.customers.filter(
      (customer) => customer.id !== customerId,
    )
  }

  getCustomerById(id: string) {
    return this.customers.find((customer) => customer.id === id)
  }

  addVisit(customerId: string, visit: Omit<Visit, 'id'>) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === customerId,
    )

    this.customers[customerIndex].visits.push({ ...visit, id: nanoid() })
  }

  updateVisit(customerId: string, visit: Visit) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === customerId,
    )

    this.customers[customerIndex].visits = this.customers[
      customerIndex
    ].visits.map((v) => (v.id === visit.id ? visit : v))
  }

  deleteVisit(customerId: string, visitId: string) {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === customerId,
    )

    this.customers[customerIndex].visits = this.customers[
      customerIndex
    ].visits.filter((visit) => visit.id !== visitId)
  }

  getVisitById(customerId: string, visitId: string) {
    const customer = this.getCustomerById(customerId)

    return customer?.visits.find((visit) => visit.id === visitId)
  }
}

export const customers = new Customers()
