import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import DBController from 'mobx-persist-store-idb-adapter'
import { nanoid } from 'nanoid'

export type Visit = {
  id: string
  date: Date
  number: number
  procedure?: string
  description?: string
  price?: number
  payment: 'cash' | 'card'
}

export type Customer = {
  id: string
  name: string
  tel: string
  visits: Visit[]
}

class Customers {
  customers: Customer[] = []
  searchFilter: string = ''
  sortBy: 'name' | 'date' = 'name'

  constructor() {
    const indexedDBStore = new DBController('customer-logbook', 'customers', 1)

    makeAutoObservable(this)
    makePersistable(this, {
      name: 'Customers',
      properties: ['customers'],
      storage: indexedDBStore,
    })
  }

  setSearchFilter(value: string) {
    this.searchFilter = value
  }

  setSortBy(value: 'name' | 'date') {
    this.sortBy = value
  }

  addCustomer({ name, tel, id }: Omit<Customer, 'visits'>) {
    this.customers.push({ name, tel, id, visits: [] })
  }

  get filteredCustomers() {
    if (!this.searchFilter) {
      return this.customers
    }

    return this.customers.filter((customer) =>
      customer.name.toLowerCase().startsWith(this.searchFilter.toLowerCase()),
    )
  }

  get lastVisitNumber() {
    const lastVisit = this.customers
      .flatMap((customer) => customer.visits.map((visit) => visit.number))
      .filter(Boolean)

    return lastVisit.length > 0 ? Math.max(...lastVisit) + 1 : 1
  }

  get allVisits() {
    return this.customers.map((customer) => customer.visits).flat()
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
