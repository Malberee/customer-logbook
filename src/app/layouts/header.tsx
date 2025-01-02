import { Link, useLocation } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'

import { Sidebar } from '@widgets/sidebar'

import { SearchBar } from '@features/search'
import { useTheme } from '@features/theme-toggle'
import { ToggleSortBy } from '@features/toggle-sort-by'

import { basePath } from '@shared/config'
import { Button } from '@shared/ui'

export const Header = () => {
  const pathname = useLocation().pathname
  useTheme()

  return (
    <header className="sticky top-0 z-10 flex justify-between gap-4 bg-background p-4">
      {pathname === basePath || pathname === `${basePath}stats` ? (
        <Sidebar />
      ) : (
        <Link to="/">
          <Button variant="ghost" size="icon">
            <ChevronLeft />
          </Button>
        </Link>
      )}

      {pathname === basePath ? (
        <>
          <SearchBar />
          <ToggleSortBy />
        </>
      ) : null}
    </header>
  )
}
