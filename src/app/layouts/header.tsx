import { Link, useRouterState } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

import { SearchBar } from '@features/search'
import { ThemeToggle } from '@features/theme-toggle'
import { LangToggle } from '@features/toggle-language'

import { Button } from '@shared/ui'

export const Header = () => {
  const pathname = useRouterState().location.pathname

  return (
    <header className="flex gap-4 p-4">
      {pathname !== '/' ? (
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ChevronLeft />
          </Button>
        </Link>
      ) : (
        <LangToggle />
      )}

      {pathname === '/' ? <SearchBar /> : null}

      <ThemeToggle />
    </header>
  )
}
