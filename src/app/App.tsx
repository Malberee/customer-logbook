import { ChevronRight } from 'lucide-react'

import { Button } from '@shared/ui'

import './index.css'

const App = () => {
  return (
    <main className="bg-background dark h-screen">
      <Button variant="outline" size="icon">
        <ChevronRight />
      </Button>
    </main>
  )
}

export default App
