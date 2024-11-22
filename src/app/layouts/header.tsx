import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronLeft, Search } from 'lucide-react'

import { ThemeToggle } from '@features/theme-toggle'

import { Button, Input } from '@shared/ui'

export const Header = () => {
  const pathname = useRouterState().location.pathname

  return (
    <header className="flex p-4">
      {pathname !== '/' ? (
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ChevronLeft />
          </Button>
        </Link>
      ) : null}

      {pathname === '/' ? (
        <div className="ml-auto flex max-w-[300px] flex-1">
          <Input className="rounded-e-none" placeholder="Search" />
          <Button className="rounded-s-none" size="icon">
            <Search />
          </Button>
        </div>
      ) : null}

      <ThemeToggle />
    </header>
  )
}
