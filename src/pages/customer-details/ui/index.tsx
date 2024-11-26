import { observer } from 'mobx-react-lite'

import { CustomerProvider } from '../model'
import { Header } from './header'
import { VisitList } from './visit-list'

export const CustomerDetails = observer(() => {
  return (
    <CustomerProvider>
      <Header />

      <VisitList />
    </CustomerProvider>
  )
})
