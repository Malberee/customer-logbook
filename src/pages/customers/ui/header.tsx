import { Search } from 'lucide-react'

import { ThemeToggle } from '@features/theme-toggle'

import { Button, Input } from '@shared/ui'

export const Header = () => {
  return (
    <header className="flex p-4">
      <div className="ml-auto flex max-w-[300px] flex-1">
        <Input className="rounded-e-none" placeholder="Search" />
        <Button className="rounded-s-none" size="icon">
          <Search />
        </Button>
      </div>
      <ThemeToggle />
    </header>
  )
}
